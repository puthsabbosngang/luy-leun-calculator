// export interface RepaymentEntry {
//   month: number
//   monthlyPayment: string
//   interest: string
//   principalPayment: string
//   remainingBalance: string
//   dueDate: string
// }

// export interface RepaymentResult {
//   totalInterest: number
//   totalPayment: number
//   schedule: RepaymentEntry[]
// }

// export interface CalculateEntry{
//   month : number,
//   principlePayment: string,
//   interestPayment: string
// }

// export interface CalculateResult{
//     result: CalculateEntry[]
// }

// export function calculateRepayment(
//   principal: number,
//   term: number,
//   monthlyRatePercent: number,
//   depositDate: string,
//   calculateOption: string
// ): RepaymentResult {
//   return generateRepaymentSchedule(principal, term, monthlyRatePercent, depositDate, calculateOption)
// }

// // export function generateRepaymentSchedule(
// //   principal: number,
// //   months: number,
// //   monthlyRatePercent: number,
// //   depositDate: string,
// // ): RepaymentResult {
// //   const schedule: RepaymentEntry[] = []
// //   let remainingPrincipal = principal
// //   const monthlyRate = monthlyRatePercent / 100
// //   const startDate = new Date(depositDate)
// //   const monthlyPayment = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1) * 100) / 100

// //   // Calculate total service fee (one-time charge) and divide equally across months

// //   let totalInterest = 0

// //   for (let month = 1; month <= months; month++) {
// //     const interest = Math.round(remainingPrincipal * monthlyRate * 100) / 100
// //     // Use the monthly service fee (total service fee divided by months)
// //     let principalPayment = Math.round((monthlyPayment - interest) * 100) / 100
// //     const dueDate = new Date(startDate.getTime() + (30 * month - 1) * 24 * 60 * 60 * 1000)

// //     if (month === months) {
// //       principalPayment = Math.round(remainingPrincipal * 100) / 100
// //     }

// //     const finalMonthlyPayment = month === months ? Math.round((principalPayment + interest) * 100) / 100 : monthlyPayment

// //     schedule.push({
// //       month,
// //       monthlyPayment: `$${finalMonthlyPayment.toFixed(2)}`,
// //       principalPayment: `$${principalPayment.toFixed(2)}`,
// //       interest: `$${interest.toFixed(2)}`,
// //       remainingBalance: `$${(Math.round((remainingPrincipal - principalPayment) * 100) / 100).toFixed(2)}`,
// //       dueDate: dueDate.toISOString().split('T')[0]
// //     })

// //     remainingPrincipal -= principalPayment
// //     totalInterest += interest
// //   }

// //   return {
// //     totalInterest: Math.round(totalInterest * 100) / 100,
// //     totalPayment: Math.round((principal + totalInterest ) * 100) / 100,
// //     schedule
// //   }
// // }

// export function generateRepaymentSchedule(
//   principal: number,
//   months: number,
//   monthlyRatePercent: number,
//   depositDate: string,
//   calculateOption: string
// ): RepaymentResult {

//     if (principal<= 0){

//     }

//     schedule.push({
//       month,
//       monthlyPayment: `$${finalMonthlyPayment.toFixed(2)}`,
//       principalPayment: `$${principalPayment.toFixed(2)}`,
//       interest: `$${interest.toFixed(2)}`,
//       remainingBalance: `$${(
//         Math.round((remainingPrincipal - principalPayment) * 100) / 100
//       ).toFixed(2)}`,
//       dueDate: dueDate.toISOString().split("T")[0],
//     });

//     totalInterest += interest;
//   }

//   return {
//     totalInterest: Math.round(totalInterest * 100) / 100,
//     totalPayment: Math.round((principal + totalInterest) * 100) / 100,
//     schedule,
//   };
// }

// export function amortization(
//   principal: number,
//   term: number,
//   monthlyRate: number
// ): CalculateResult{

//   const result: CalculateEntry[] = []
//   let remainingPrincipal = principal
//   const monthlyPayment = Math.round(((principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)) *100) / 100

//   for (let month =1; month<=term; month++) {
//     const interestPayment =  Math.round(remainingPrincipal * monthlyRate * 100) / 100
//     let principalPayment = Math.round((monthlyPayment - interestPayment) * 100) / 100;

//     if (month === term){
//       principalPayment = Math.round(remainingPrincipal * 100) / 100;
//     }
//     result.push({
//       month,
//       principlePayment:`$${principalPayment.toFixed(2)}`,
//       interestPayment: `$${interestPayment.toFixed(2)}`
//     })

//     remainingPrincipal -= principalPayment
//   }

//   return{
//     result
//   }
// }

// export type ScheduleRow = {
//   period: number;
//   monthlyPrincipal: number;
//   monthlyInterest: number;
//   monthlyPayment: number;
//   monthlyOSB: number;
//   monthlydueDate: string;
// };

// function round2(n: number) {
//   return Math.round(n * 100) / 100;
// }

// function addDays(date: Date, days: number): Date {
//   const result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }

// export function repaymentSchedule(
//   LOAN_AMOUNT: number,
//   MONTHLY_RATE: number,
//   LOAN_TERM: number,
//   depositDate: string,
//   option: string
// ): ScheduleRow[] {
//   if (LOAN_TERM <= 0) throw new Error("Term must be greater than zero.");
//   if (MONTHLY_RATE < 0 || MONTHLY_RATE > 1)
//     throw new Error("Monthly rate must be between 0 and 1.");
//   if (LOAN_AMOUNT < 0) throw new Error("Loan amount cannot be negative.");

//   const principals = LOAN_AMOUNT;
//   const interests = LOAN_AMOUNT * MONTHLY_RATE * LOAN_TERM;
//   const weights = (LOAN_TERM * (LOAN_TERM + 1)) / 2;

//   let payment_data: Record<string, number> = {};

//   if (option === "front_load") {
//     const ints = weightedBy(interests, weights, LOAN_TERM, false);
//     const prins = weightedBy(principals,weights, LOAN_TERM, false);
//     for (let i = 1; i <= LOAN_TERM; i++) {
//       payment_data[`int_weighted${i}`] = ints[`w${i}`];
//       payment_data[`print_weighted${i}`] = prins[`w${i}`];
//     }
//   } else if (option === "back_load") {
//     const ints = weightedBy(interests, weights, LOAN_TERM, true);
//     const prins = weightedBy(principals, weights, LOAN_TERM, true);
//     for (let i = 1; i <= LOAN_TERM; i++) {
//       payment_data[`int_weighted${i}`] = ints[`w${i}`];
//       payment_data[`print_weighted${i}`] = prins[`w${i}`];
//     }
//   } else if (option === "interest_front_load") {
//     const ints = weightedBy(interests, weights, LOAN_TERM, false);
//     const prins = weightedBy(principals, weights, LOAN_TERM, true);
//     for (let i = 1; i <= LOAN_TERM; i++) {
//       payment_data[`int_weighted${i}`] = ints[`w${i}`];
//       payment_data[`print_weighted${i}`] = prins[`w${i}`];
//     }
//   } else if (option === "principal_front_load") {
//     const ints = weightedBy(interests, weights, LOAN_TERM, true);
//     const prins = weightedBy(principals, weights, LOAN_TERM, false);
//     for (let i = 1; i <= LOAN_TERM; i++) {
//       payment_data[`int_weighted${i}`] = ints[`w${i}`];
//       payment_data[`print_weighted${i}`] = prins[`w${i}`];
//     }
//   } else if (option === "amortization") {
//     payment_data = amortization(LOAN_AMOUNT, MONTHLY_RATE, LOAN_TERM);
//   } else {
//     throw new Error("Invalid option");
//   }

//   const payments: Record<string, number> = {};
//   for (let period = 1; period <= LOAN_TERM; period++) {
//     const int_w = payment_data[`Monthlyweighted${period}`] ?? 0;
//     const pr_w = payment_data[`print_weighted${period}`] ?? 0;
//     payments[`monthlyPayment${period}`] = round2(int_w + pr_w);
//   }

//   const osbs: Record<string, number> = {};
//   for (let period = 1; period <= LOAN_TERM; period++) {
//     let remaining = 0;
//     for (let p = period + 1; p <= LOAN_TERM; p++) {
//       remaining += payment_data[`print_weighted${p}`] ?? 0;
//     }
//     osbs[`osb${period}`] = round2(remaining);
//   }

//   const baseDate = new Date(depositDate);
//   let dueDate = addDays(baseDate, 30);

//   const schedule: ScheduleRow[] = [];
//   for (let period = 1; period <= LOAN_TERM; period++) {
//     schedule.push({
//       period,
//       monthlyPayment: payment_data[`print_weighted${period}`] ?? 0,
//       monthlyInterest: payment_data[`int_weighted${period}`] ?? 0,
//       monthlyPayment: payments[`MonthlyPayment${period}`] ?? 0,
//       monthlyOSB: osbs[`osb${period}`] ?? 0,
//       monthlydueDate: dueDate.toISOString().split("T")[0],
//     });

//     dueDate = addDays(dueDate, 30)
//   }
//   return schedule;
// }

// export function amortization(
//   LOAN_AMOUNT: number,
//   MONTHLY_RATE: number,
//   LOAN_TERM: number
// ) {
//   let fixed_payment: number;
//   if (MONTHLY_RATE === 0) {
//     fixed_payment = LOAN_AMOUNT / LOAN_TERM;
//   } else {
//     const numerator = MONTHLY_RATE * Math.pow(1 + MONTHLY_RATE, LOAN_TERM);
//     const denominator = Math.pow(1 + MONTHLY_RATE, LOAN_TERM) - 1;
//     fixed_payment = LOAN_AMOUNT * (numerator / denominator);
//   }

//   const weighted_interests: Record<string, number> = {};
//   const weighted_principals: Record<string, number> = {};
//   let beginning_balance = LOAN_AMOUNT;

//   for (let period = 1; period <= LOAN_TERM; period++) {
//     const interest_payment = beginning_balance * MONTHLY_RATE;
//     let principal_payment = fixed_payment - interest_payment;
//     let ending_balance = beginning_balance - principal_payment;
//     if (ending_balance < 0) {
//       ending_balance = 0;
//       principal_payment = beginning_balance;
//     }
//     weighted_interests[`int_weighted${period}`] = round2(interest_payment);
//     weighted_principals[`print_weighted${period}`] = round2(principal_payment);
//     beginning_balance = ending_balance;
//   }
//   return { ...weighted_interests, ...weighted_principals };
// }

// function weightedBy(
//   total: number,
//   total_weight: number,
//   LOAN_TERM: number,
//   ascending: boolean
// ) {
//   const m: Record<string, number> = {};
//   for (let period = 1; period <= LOAN_TERM; period++) {
//     const weight = ascending ? period : LOAN_TERM - period + 1;
//     m[`w${period}`] = round2((total * weight) / total_weight);
//   }
//   return m;
// }

export type ScheduleRow = {
  period: number;
  monthlyPrincipal: number;
  monthlyInterest: number;
  monthlyPayment: number;
  monthlyOSB: number;
  monthlydueDate: string;
};

export type ScheduleResult = {
  schedule: ScheduleRow[];
  totalPayment: number;
  totalInterest: number;
};

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function repaymentSchedule(
  LOAN_AMOUNT: number,
  MONTHLY_RATE: number,
  LOAN_TERM: number,
  depositDate: string,
  option: string
): ScheduleResult {
  if (LOAN_TERM <= 0) throw new Error("Term must be greater than zero.");
  if (MONTHLY_RATE < 0 || MONTHLY_RATE > 25)
    throw new Error("Monthly rate must be between 0 and 1.");
  if (LOAN_AMOUNT < 0) throw new Error("Loan amount cannot be negative.");

  const principals = LOAN_AMOUNT;
  const interests = LOAN_AMOUNT * MONTHLY_RATE * LOAN_TERM;
  const weights = (LOAN_TERM * (LOAN_TERM + 1)) / 2;

  let payment_data: Record<string, number> = {};

  // ---------------------------
  // Weighting Options
  // ---------------------------
  if (option === "high_payment_early") {
    const ints = weightedBy(interests, weights, LOAN_TERM, false);
    const prins = weightedBy(principals, weights, LOAN_TERM, false);
    for (let i = 1; i <= LOAN_TERM; i++) {
      payment_data[`int_weighted${i}`] = ints[`w${i}`];
      payment_data[`print_weighted${i}`] = prins[`w${i}`];
    }
  } else if (option === "low_payment_early") {
    const ints = weightedBy(interests, weights, LOAN_TERM, true);
    const prins = weightedBy(principals, weights, LOAN_TERM, true);
    for (let i = 1; i <= LOAN_TERM; i++) {
      payment_data[`int_weighted${i}`] = ints[`w${i}`];
      payment_data[`print_weighted${i}`] = prins[`w${i}`];
    }
  } else if (option === "high_interest_early") {
    const ints = weightedBy(interests, weights, LOAN_TERM, false);
    const prins = weightedBy(principals, weights, LOAN_TERM, true);
    for (let i = 1; i <= LOAN_TERM; i++) {
      payment_data[`int_weighted${i}`] = ints[`w${i}`];
      payment_data[`print_weighted${i}`] = prins[`w${i}`];
    }
  } else if (option === "high_principal_early") {
    const ints = weightedBy(interests, weights, LOAN_TERM, true);
    const prins = weightedBy(principals, weights, LOAN_TERM, false);
    for (let i = 1; i <= LOAN_TERM; i++) {
      payment_data[`int_weighted${i}`] = ints[`w${i}`];
      payment_data[`print_weighted${i}`] = prins[`w${i}`];
    }
  } else if (option === "equal_payment") {
    payment_data = amortization(LOAN_AMOUNT, MONTHLY_RATE, LOAN_TERM);
  } else {
    throw new Error("Invalid option");
  }

  // ---------------------------
  // Monthly Payment = principal + interest
  // ---------------------------
  const payments: Record<string, number> = {};
  for (let period = 1; period <= LOAN_TERM; period++) {
    const int_w = payment_data[`int_weighted${period}`] ?? 0;
    const pr_w = payment_data[`print_weighted${period}`] ?? 0;
    payments[`monthlyPayment${period}`] = round2(int_w + pr_w);
  }

  // ---------------------------
  // OSB Calculation
  // ---------------------------
  const osbs: Record<string, number> = {};
  for (let period = 1; period <= LOAN_TERM; period++) {
    let remaining = 0;
    for (let p = period + 1; p <= LOAN_TERM; p++) {
      remaining += payment_data[`print_weighted${p}`] ?? 0;
    }
    osbs[`osb${period}`] = round2(remaining);
  }

  let total_interest = 0;

  for (let period = 1; period <= LOAN_TERM; period++) {
    total_interest += payment_data[`int_weighted${period}`];
  }

  const total_payment = round2(LOAN_AMOUNT + total_interest);

  // ---------------------------
  // Due Date Calculation
  // ---------------------------
  const baseDate = new Date(depositDate);
  let dueDate = addDays(baseDate, 30);

  const schedule: ScheduleRow[] = [];

  for (let period = 1; period <= LOAN_TERM; period++) {
    schedule.push({
      period,
      monthlyPrincipal: payment_data[`print_weighted${period}`] ?? 0,
      monthlyInterest: payment_data[`int_weighted${period}`] ?? 0,
      monthlyPayment: payments[`monthlyPayment${period}`] ?? 0,
      monthlyOSB: osbs[`osb${period}`] ?? 0,
      monthlydueDate: dueDate.toISOString().split("T")[0],
    });

    dueDate = addDays(dueDate, 30);
  }

  return {
    schedule,
    totalInterest: round2(total_interest),
    totalPayment: total_payment,
  };
}

// ---------------------------
// Amortization Calculator
// ---------------------------
export function amortization(
  LOAN_AMOUNT: number,
  MONTHLY_RATE: number,
  LOAN_TERM: number
) {
  let fixed_payment: number;

  if (MONTHLY_RATE === 0) {
    fixed_payment = LOAN_AMOUNT / LOAN_TERM;
  } else {
    const numerator = MONTHLY_RATE * Math.pow(1 + MONTHLY_RATE, LOAN_TERM);
    const denominator = Math.pow(1 + MONTHLY_RATE, LOAN_TERM) - 1;
    fixed_payment = LOAN_AMOUNT * (numerator / denominator);
  }

  const weighted_interests: Record<string, number> = {};
  const weighted_principals: Record<string, number> = {};
  let beginning_balance = LOAN_AMOUNT;

  for (let period = 1; period <= LOAN_TERM; period++) {
    const interest_payment = beginning_balance * MONTHLY_RATE;
    let principal_payment = fixed_payment - interest_payment;

    let ending_balance = beginning_balance - principal_payment;
    if (ending_balance < 0) {
      ending_balance = 0;
      principal_payment = beginning_balance;
    }

    weighted_interests[`int_weighted${period}`] = round2(interest_payment);
    weighted_principals[`print_weighted${period}`] = round2(principal_payment);

    beginning_balance = ending_balance;
  }

  return { ...weighted_interests, ...weighted_principals };
}

// ---------------------------
// Weighted Function
// ---------------------------
function weightedBy(
  total: number,
  total_weight: number,
  LOAN_TERM: number,
  ascending: boolean
) {
  const m: Record<string, number> = {};

  for (let period = 1; period <= LOAN_TERM; period++) {
    const weight = ascending ? period : LOAN_TERM - period + 1;
    m[`w${period}`] = round2((total * weight) / total_weight);
  }
  return m;
}
