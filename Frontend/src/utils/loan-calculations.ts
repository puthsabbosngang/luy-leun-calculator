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
}

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
  if (MONTHLY_RATE < 0 || MONTHLY_RATE >25)
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


  let total_interest = 0

  for (let period = 1; period <= LOAN_TERM; period++){
    total_interest += payment_data[`int_weighted${period}`]
  }

  const total_payment = round2(LOAN_AMOUNT + total_interest)

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
  }
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
