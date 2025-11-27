"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Slider } from "@/src/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { DatePicker } from "@/src/components/ui/date-picker"
import { useTranslation } from "@/src/contexts/translation-context"
import { Header } from "@/src/components/header"
import { repaymentSchedule, type ScheduleRow } from "../utils/loan-calculations"  

export default function LoanCalculator() {
  const { t, language } = useTranslation()
  const [principal, setPrincipal] = useState(500)
  const [months, setMonths] = useState(3)
  const [rate, setRate] = useState(5)
  
  // Use a static date to avoid hydration mismatch
  const [depositDate, setDepositDate] = useState<Date | undefined>(new Date())
  const [repaymentData, setRepaymentData] = useState<{
    schedule: ScheduleRow[],
    totalInterest: number,
    totalPayment: number
  } | null>(null)

  const [calculateOption, setCalculateOption] = useState('equal_payment')
  const handleCalculate = () => {
    if (!depositDate){
      setDepositDate(new Date())
      return
    }
    // Convert dates to strings for calculation function
    const depositDateString = depositDate.toISOString().split('T')[0]
    const result = repaymentSchedule(principal, rate/100 , months, depositDateString, calculateOption)
    setRepaymentData(result)
  }

  return (
    <div className="min-h-screen bg-background scrollbar-hide overflow-y-auto">
      <Header />
      <div className="min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4 scrollbar-hide">
        <div className="max-w-6xl mx-auto scrollbar-hide mt-30">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">{t('card.loanInfo')}</h1>
          
          {/* Top Row - Two Cards Side by Side */}
          <div className="grid lg:grid-cols-1 gap-6 mb-6 ms-auto me-auto">
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
                    max={10000}
                    min={100}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>{language === 'km' ? `100 ${t('form.curency')}` : `100`}</span>
                    <span>{language === 'km' ? `10000 ${t('form.curency')}` : `$10000`}</span>
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
                    max={24}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>1 {months === 1 ? t('range.month') : t('range.months')}</span>
                    <span>24 {t('range.months')}</span>
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


                    max={25}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>1{t('form.percent')}</span>
                    <span>25{t('form.percent')}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  {/* Deposit Date Input */}
                  <div className="flex flex-col ">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('form.depositDate')}:
                    </label>
                    <DatePicker
                      date={depositDate}
                      onDateChange={setDepositDate}
                      placeholder={t('form.depositDate')}
                      className="w-135"
                      disabled = {(date) => {
                        if (!date) return false;
                        const today = new Date();
                        today.setHours(0,0,0,0);
                        const dateTocompare = new Date(date);
                        dateTocompare.setHours(0,0,0,0);
                        return dateTocompare < today;
                      }}
                    />
                  </div>

                  {/* Calculation Method Select */}
                  <div className="flex flex-col flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('form.calculationMethod')}:
                    </label>
                    <Select value={calculateOption} onValueChange={(value) => setCalculateOption(value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t('form.calculationMethod')} />
                      </SelectTrigger>
                      <SelectContent>{/* Changed value from 'amortization' to 'equal_payment' */}
                        <SelectItem value="equal_payment">{t('form.equalPayment')}</SelectItem> 
                        {/* Changed value from 'front_load' to 'high_payment_early' */}
                        <SelectItem value="high_payment_early">{t('form.highPaymentEarly')}</SelectItem> 
                        {/* Changed value from 'back_load' to 'low_payment_early' */}
                        <SelectItem value="low_payment_early">{t('form.lowPaymentEarly')}</SelectItem> 
                        {/* Changed value from 'interest_front_load' to 'high_interest_early' */}
                        <SelectItem value="high_interest_early">{t('form.highInterestEarly')}</SelectItem> 
                        {/* Changed value from 'principal_front_load' to 'high_principal_early' */}
                        <SelectItem value="high_principal_early">{t('form.highPrincipalEarly')}</SelectItem>
                      </SelectContent>
                    </Select>
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
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.balance')}</TableHead>
                          <TableHead className="text-center text-gray-700 dark:text-gray-300">{t('table.dueDate')}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {repaymentData.schedule.map((entry) => (
                          <TableRow key={entry.period} className="border-gray-200 dark:border-gray-700">
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.period}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlyPayment}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlyPrincipal}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlyInterest}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlyOSB}</TableCell>
                            <TableCell className="text-center text-gray-900 dark:text-gray-100">{entry.monthlydueDate}</TableCell>
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
                          (<span>{t('form.loanAmount')}: ${principal.toFixed(2)} + {t('summary.totalInterest')}: ${repaymentData.totalInterest.toFixed(2)} </span>)
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


