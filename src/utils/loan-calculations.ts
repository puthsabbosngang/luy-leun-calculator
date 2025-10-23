export interface RepaymentEntry {
  month: number
  monthlyPayment: string
  interest: string
  serviceFee: string
  principalPayment: string
  remainingBalance: string
  dueDate: string
  paidDate: string
  penalty: string
  dayLate: number
}

export interface RepaymentResult {
  totalInterest: number
  totalServiceFee: number
  totalPenalty: number
  totalPayment: number
  schedule: RepaymentEntry[]
}

export function calculateRepayment(
  principal: number, 
  days: number, 
  monthlyRatePercent: number, 
  serviceFeePercent: number,
  depositDate: string, 
  paidDates: string[]
): RepaymentResult {
  const months = days <= 30 ? 1 : Math.floor(days / 30)
  return generateRepaymentSchedule(days, principal, months, monthlyRatePercent, serviceFeePercent, depositDate, paidDates)
}

export function generateRepaymentSchedule(
  days: number, 
  principal: number, 
  months: number, 
  monthlyRatePercent: number, 
  serviceFeePercent: number,
  depositDate: string, 
  paidDates: string[]
): RepaymentResult {
  const schedule: RepaymentEntry[] = []
  let remainingPrincipal = principal
  const monthlyRate = monthlyRatePercent / 100
  const serviceFeeRate = serviceFeePercent / 100
  const startDate = new Date(depositDate)
  const monthlyPayment = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) * 100) / 100
  
  // Calculate total service fee (one-time charge) and divide equally across months
  const totalServiceFeeAmount = Math.round(principal * serviceFeeRate * 100) / 100
  const monthlyServiceFee = Math.round((totalServiceFeeAmount / months) * 100) / 100
  
  let totalInterest = 0
  let totalServiceFee = totalServiceFeeAmount
  let totalPenalty = 0

  for (let month = 1; month <= months; month++) {
    const interest = Math.round(remainingPrincipal * monthlyRate * 100) / 100
    // Use the monthly service fee (total service fee divided by months)
    const serviceFee = monthlyServiceFee
    let principalPayment = Math.round((monthlyPayment - interest) * 100) / 100
    const dueDate = new Date(startDate.getTime() + (30 * month - 1) * 24 * 60 * 60 * 1000)

    if (month === months) {
      principalPayment = Math.round(remainingPrincipal * 100) / 100
    }

    const finalMonthlyPayment = month === months ? Math.round((principalPayment + interest + serviceFee) * 100) / 100 : monthlyPayment + serviceFee

    // Calculate penalty based on paid date vs due date
    const currentPaidDate = paidDates[month - 1] || paidDates[0] // Use month-specific date or fallback to first date
    const paidDateObj = new Date(currentPaidDate)
    const dueDateObj = new Date(dueDate)
    const daysDifference = Math.ceil((paidDateObj.getTime() - dueDateObj.getTime()) / (1000 * 60 * 60 * 24))
    
    let penaltyAmount = 0
    if (daysDifference > 0) {
      // Calculate penalty from day 1 of being late: 1% of principal amount * days late
      const actualPenalty = Math.round((principalPayment * 0.01 * daysDifference) * 100) / 100
      // But only show penalty if more than 3 days late
      penaltyAmount = daysDifference > 3 ? actualPenalty : 0
    }

    // Calculate total payment including penalty
    const totalPaymentWithPenalty = Math.round((finalMonthlyPayment + penaltyAmount) * 100) / 100

    schedule.push({
      month,
      monthlyPayment: `$${totalPaymentWithPenalty.toFixed(2)}`,
      principalPayment: `$${principalPayment.toFixed(2)}`,
      interest: `$${interest.toFixed(2)}`,
      serviceFee: `$${serviceFee.toFixed(2)}`,
      remainingBalance: `$${(Math.round((remainingPrincipal - principalPayment) * 100) / 100).toFixed(2)}`,
      dueDate: dueDate.toISOString().split('T')[0],
      paidDate: currentPaidDate,
      penalty: `$${penaltyAmount.toFixed(2)}`,
      dayLate: daysDifference > 0 ? daysDifference : 0
    })

    remainingPrincipal -= principalPayment
    totalInterest += interest
    // Don't add to totalServiceFee since it's already set to the total amount
    totalPenalty += penaltyAmount
  }

  return {
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalServiceFee: Math.round(totalServiceFee * 100) / 100,
    totalPenalty: Math.round(totalPenalty * 100) / 100,
    totalPayment: Math.round((principal + totalInterest + totalServiceFee + totalPenalty) * 100) / 100,
    schedule
  }
}