"use client"

import { createContext, ReactNode, useContext, useState } from 'react'

type Language = 'km' | 'en'

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  km: {

    //page
    "page.wellcome": "ស្វាគមន៍មកកាន់​​​ សេវាឥណទានឌីជីថល​​លុយលឿន!",
    "page.tagline": "លុយលឿន - កន្លែងដែលធ្វើឱ្យឥណទានរបស់អ្នកកាន់តែប្រសើរឡើង",
    "page.description": "លុយលឿនគឺជាវេទិកាឥណទានឌីជីថលដែលផ្តល់ជូននូវជម្រើសហិរញ្ញវត្ថុដែលលោកអ្នកអាចចូលដំណើរការបានយ៉ាងងាយស្រួល",
    "page.downloadApp": "ទាញយកឥឡូវនេះ!",

    // Form Labels
    'form.loanAmount': 'ទំហំសាច់ប្រាក់កម្ចី',
    'form.curency': 'ដុល្លារ',
    'form.loanTerm': 'រយៈពេលកម្ចី',
    'form.interestRate': 'ការប្រាក់ប្រចាំខែ',
    'form.depositDate': 'ថ្ងៃទទួលប្រាក់កម្ចី',
    'form.paidDate': 'ថ្ងៃបង់ប្រាក់',
    'form.months': 'ខែ',
    'form.paidMonth': 'ខែទី',
    'form.percent': '%',
    
    // Card Titles
    'card.loanInfo': 'ព័ត៌មានកម្ចី',
    'card.schedule': 'កាលវិភាគការបង់ប្រាក់',
    'form.loanSettings': 'ការកំណត់កម្ចី',
    'form.dateSettings': 'ការកំណត់កាលបរិច្ឆេទ',
    
    // Table Headers
    'table.month': 'ខែ',
    'table.payment': 'ប្រាក់ត្រូវបង់',
    'table.interest': 'កាប្រាក់',
    'table.serviceFee': 'ប្រាក់សេវា',
    'table.principal': 'ប្រាក់ដើម',
    'table.balance': 'ប្រាក់ដើមនៅជំពាក់',
    'table.dueDate': 'ថ្ងៃកំណត់ត្រូវបង់ប្រាក់',
    'table.paidDate': 'ថ្ងៃបង់ប្រាក់ជាក់ស្ដែង',
    'table.penalty': 'ប្រាក់ពិន័យ',
    'table.dayLate': 'ចំនួនថ្ងៃយឺត',
    
    // Buttons
    'button.calculate': 'គណនាកាលវិភាគ',
    
    // Summary
    'summary.totalInterest': 'សរុបការប្រាក់',
    'summary.totalPenalty': 'សរុបប្រាក់ពិន័យ',
    'summary.totalPayment': 'សរុបប្រាក់ត្រូវបង់',
    
    // Range Labels
    'range.month': 'ខែ',
    'range.months': 'ខែ',
  },
  en: {
    //page
    "page.wellcome": "Welcome to Luy Leun Digital Loan Service!",
    "page.tagline": "Luy Leun - Where Your credit growth",
    "page.description": "Luy Leun is a digital loan platform dedicated to providing you with accessible and user-friendly financial options",
    "page.downloadApp": "Download Now!",
    
    // Form Labels
    'form.loanAmount': 'Loan Amount',
    'form.curency': '$',
    'form.loanTerm': 'Loan Term',
    'form.interestRate': 'Monthly Interest Rate',
    'form.depositDate': 'Deposit Date',
    'form.paidDate': 'Paid Date',
    'form.months': 'months',
    'form.paidMonth': 'Month',
    'form.percent': '%',
    
    // Card Titles
    'card.loanInfo': 'Loan Information',
    'card.schedule': 'Repayment Schedule',
    'form.loanSettings': 'Loan Settings',
    'form.dateSettings': 'Date Settings',
    
    // Table Headers
    'table.month': 'Month',
    'table.payment': 'Payment Amt',
    'table.interest': 'Interest Amt',
    'table.serviceFee': 'Service Fee',
    'table.principal': 'Principal Amt',
    'table.balance': 'OSB',
    'table.dueDate': 'Due Date',
    'table.paidDate': 'Repayment Date',
    'table.penalty': 'Penalty Amt',
    'table.dayLate': 'Days Late',
    
    // Buttons
    'button.calculate': 'Calculate Schedule',
    
    // Summary
    'summary.totalInterest': 'Total Interest',
    'summary.totalPenalty': 'Total Penalty',
    'summary.totalPayment': 'Total Payment',
    
    // Range Labels
    'range.month': 'month',
    'range.months': 'months',
  }
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('km')

  const t = (key: string): string => {
    const currentTranslations = translations[language] as Record<string, string>
    return currentTranslations[key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}