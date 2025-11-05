"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Slider } from "@/src/components/ui/slider"
import { DatePicker } from "@/src/components/ui/date-picker"
import { useTranslation } from "@/src/contexts/translation-context"
import { Header } from "@/src/components/header"
import { calculateRepayment, type RepaymentResult } from "@/src/utils/loan-calculations"

export default function LoanCalculator() {
  const { t, language } = useTranslation()
  const [principal, setPrincipal] = useState(100)
  const [months, setMonths] = useState(1)
  const [rate, setRate] = useState(5.0)
  const [serviceFee, setServiceFee] = useState(1.0)
  
  // Use a static date to avoid hydration mismatch
  const [depositDate, setDepositDate] = useState<Date>(new Date(2025, 10, 5)) // Nov 5, 2025
  const [paidDates, setPaidDates] = useState<Date[]>([new Date(2025, 10, 5)]) // Start with one static date
  const [repaymentData, setRepaymentData] = useState<RepaymentResult | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set current date only on client side to avoid hydration mismatch
    const currentDate = depositDate
    setDepositDate(currentDate)
    setPaidDates([currentDate])
    setMounted(true)
  }, [])

  const updatePaidDate = (monthIndex: number, date: Date | undefined) => {
    if (!date) return
    const updatedDates = [...paidDates]
    updatedDates[monthIndex] = date
    setPaidDates(updatedDates)
  }

  const handleCalculate = () => {
    const days = months * 30
    // Ensure we have enough paid dates for each month
    const updatedPaidDates = [...paidDates]
    const currentDate = depositDate // Use depositDate instead of depositDate
    
    // Add missing dates if we don't have enough
    while (updatedPaidDates.length < months) {
      updatedPaidDates.push(currentDate)
    }
    
    // Update state with correct number of dates
    setPaidDates(updatedPaidDates.slice(0, months))
    
    // Convert dates to strings for calculation function
    const depositDateString = depositDate.toISOString().split('T')[0]
    const paidDatesStrings = updatedPaidDates.slice(0, months).map(date => date.toISOString().split('T')[0])
    
    const result = calculateRepayment(principal, days, rate, serviceFee, depositDateString, paidDatesStrings)
    setRepaymentData(result)
  }

  return (
    <div className="min-h-screen bg-background scrollbar-hide overflow-y-auto">
      <Header />
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4 scrollbar-hide">
        <div className="max-w-6xl mx-auto scrollbar-hide mt-30">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">{t('card.loanInfo')}</h1>
          
          {/* Top Row - Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Left Card - Loan Information */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{t('form.loanSettings')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Loan Amount Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    {t('form.loanAmount')}: <span className="font-bold text-blue-600">{language === 'km' ? `${principal} ${t('form.curency')}` : `$${principal}`}</span>
                  </label>
                  <Slider
                    value={[principal]}
                    onValueChange={(value) => setPrincipal(value[0])}
                    max={1000}
                    min={50}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>{language === 'km' ? `500 ${t('form.curency')}` : `$500`}</span>
                    <span>{language === 'km' ? `1000 ${t('form.curency')}` : `$1000`}</span>
                  </div>
                </div>

                {/* Loan Term Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    {t('form.loanTerm')}: <span className="font-bold text-blue-600">{months} {t('form.months')}</span>
                  </label>
                  <Slider
                    value={[months]}
                    onValueChange={(value) => setMonths(value[0])}
                    max={4}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>1 {months === 1 ? t('range.month') : t('range.months')}</span>
                    <span>4 {t('range.months')}</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    {t('form.interestRate')}: <span className="font-bold text-green-600">{rate}{t('form.percent')}</span>
                  </label>
                  <Slider
                    value={[rate]}
                    onValueChange={(value) => setRate(value[0])}
                    max={1.5}
                    min={0.1}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>0.1{t('form.percent')}</span>
                    <span>1.5{t('form.percent')}</span>
                  </div>
                </div>

                {/* Service Fee Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    Service Fee: <span className="font-bold text-purple-600">{serviceFee}{t('form.percent')}</span>
                  </label>
                  <Slider
                    value={[serviceFee]}
                    onValueChange={(value) => setServiceFee(value[0])}
                    max={25}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>0.5 {t('form.percent')}</span>
                    <span>25{t('form.percent')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right Card - Date Settings */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">{t('form.dateSettings')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Deposit Date Input */}
                <div className="flex items-center space-x-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-fit ">
                    {t('form.depositDate')}:
                  </label>
                  <DatePicker
                    date={depositDate}
                    onDateChange={(date) => date && setDepositDate(date)}
                    placeholder={t('form.depositDate')}
                    className="flex-0 justify-center"
                  />
                </div>

                {/* Paid Date Inputs - One for each month */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                    {t('form.paidDate')} {months > 1 ? `(${months} ${t('form.months')})` : ''}
                  </label>
                  <div className={`${months <= 2 ? 'grid grid-cols-2 gap-x-8 gap-y-3' : 'grid grid-cols-2 gap-x-8 gap-y-3'}`}>
                    {months === 1 && (
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                          {t('form.paidMonth')} 1:
                        </span>
                        <DatePicker
                          date={paidDates[0] || depositDate}
                          onDateChange={(date) => updatePaidDate(0, date)}
                          placeholder={`${t('form.paidMonth')} 1`}
                          className="flex-1"
                        />
                      </div>
                    )}
                    
                    {months === 2 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 1:
                          </span>
                          <DatePicker
                            date={paidDates[0] || depositDate}
                            onDateChange={(date) => updatePaidDate(0, date)}
                            placeholder={`${t('form.paidMonth')} 1`}
                            className="flex-1"
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 3:
                          </span>
                          <DatePicker
                            date={paidDates[2] || depositDate}
                            onDateChange={(date) => updatePaidDate(2, date)}
                            placeholder={`${t('form.paidMonth')} 3`}
                            className="flex-1"
                          />
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 2:
                          </span>
                          <DatePicker
                            date={paidDates[1] || depositDate}
                            onDateChange={(date) => updatePaidDate(1, date)}
                            placeholder={`${t('form.paidMonth')} 2`}
                            className="flex-1"
                          />
                        </div>
                      </>
                    )}
                    
                    {months === 3 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 1:
                          </span>
                          <DatePicker
                            date={paidDates[0] || depositDate}
                            onDateChange={(date) => updatePaidDate(0, date)}
                            placeholder={`${t('form.paidMonth')} 1`}
                            className="flex-1"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 3:
                          </span>
                          <DatePicker
                            date={paidDates[2] || depositDate}
                            onDateChange={(date) => updatePaidDate(2, date)}
                            placeholder={`${t('form.paidMonth')} 3`}
                            className="flex-1"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 2:
                          </span>
                          <DatePicker
                            date={paidDates[1] || depositDate}
                            onDateChange={(date) => updatePaidDate(1, date)}
                            placeholder={`${t('form.paidMonth')} 2`}
                            className="flex-1"
                          />
                        </div>
                      </>
                    )}
                    
                    {months === 4 && (
                      <>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 1:
                          </span>
                          <DatePicker
                            date={paidDates[0] || depositDate}
                            onDateChange={(date) => updatePaidDate(0, date)}
                            placeholder={`${t('form.paidMonth')} 1`}
                            className="flex-1"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 3:
                          </span>
                          <DatePicker
                            date={paidDates[2] || depositDate}
                            onDateChange={(date) => updatePaidDate(2, date)}
                            placeholder={`${t('form.paidMonth')} 3`}
                            className="flex-1"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 2:
                          </span>
                          <DatePicker
                            date={paidDates[1] || depositDate}
                            onDateChange={(date) => updatePaidDate(1, date)}
                            placeholder={`${t('form.paidMonth')} 2`}
                            className="flex-1"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                            {t('form.paidMonth')} 4:
                          </span>
                          <DatePicker
                            date={paidDates[3] || depositDate}
                            onDateChange={(date) => updatePaidDate(3, date)}
                            placeholder={`${t('form.paidMonth')} 4`}
                            className="flex-1"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-8">
                  <Button onClick={handleCalculate} className="w-full">
                    {t('button.calculate')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Repayment Schedule Section */}
          {repaymentData && (
            <div>
              <h1 className="text-3xl font-bold text-center mb-6 mt-12 text-gray-800 dark:text-white">{t('card.schedule')}</h1>
              <Card className="mb-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200 dark:border-gray-700">
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.month')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.payment')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.principal')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.interest')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.serviceFee')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.penalty')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.dayLate')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.balance')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.dueDate')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.paidDate')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {repaymentData.schedule.map((entry) => (
                          <TableRow key={entry.month} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.month}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlyPayment}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.principalPayment}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.interest}</TableCell>
                            <TableCell className="text-center text-purple-600 dark:text-purple-400 font-semibold">{entry.serviceFee}</TableCell>
                            <TableCell className="text-center text-red-600 dark:text-red-400 font-semibold">{entry.penalty}</TableCell>
                            <TableCell className="text-center text-red-600 dark:text-red-400 font-semibold">{entry.dayLate}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.remainingBalance}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.dueDate}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.paidDate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-2 mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">{t('summary.totalPayment')}: </span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">${repaymentData.totalPayment.toFixed(2)}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          (<span>{t('form.loanAmount')}: ${principal.toFixed(2)} + {t('summary.totalInterest')}: ${repaymentData.totalInterest.toFixed(2)} + {t('table.serviceFee')}: ${repaymentData.totalServiceFee.toFixed(2)} + {t('summary.totalPenalty')}: ${repaymentData.totalPenalty.toFixed(2)} </span>)
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
