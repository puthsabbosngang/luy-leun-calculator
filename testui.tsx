// export default function LoanCalculator() {
//   const { t, language } = useTranslation()
//   const [principal, setPrincipal] = useState(500)
//   const [months, setMonths] = useState(3)
//   const [rate, setRate] = useState(5)
  
//   // Use a static date to avoid hydration mismatch
//   const [depositDate, setDepositDate] = useState<Date>()
//   const [repaymentData, setRepaymentData] = useState<{
//     schedule:ScheduleRow[],
//     totalInterest: number,
//     totalPayment: number
//   } | null>(null)
//   const [calculateOption, setCalculateOption] = useState("equal_payment")
//   const handleCalculate = useCallback(() => {
//     if (!depositDate) return;
//     const depositDateString = depositDate.toISOString().split('T')[0]
//     const result = repaymentSchedule(
//       principal, 
//       months, 
//       rate / 100, 
//       depositDateString, 
//       calculateOption
//     )
//     setRepaymentData(result)
//   }, [principal, months, rate, depositDate, calculateOption])

//   useEffect(() => {
//     setDepositDate(new Date())
//   }, [])

//   useEffect(() => {
//     if (depositDate) {
//       handleCalculate();
//     }
//   }, [principal, months, rate, depositDate, calculateOption, handleCalculate])
