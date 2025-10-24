"use client"

import { Header } from "@/src/components/header"
import { useTranslation } from "@/src/contexts/translation-context" 
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card"
import { Smartphone, Download } from "lucide-react"

export default function Home() {
  const { t, language } = useTranslation()

  return (
    <div className="min-h-screen bg-background overflow-y-auto scrollbar-hide">
      <Header />
      <div className="pt-30 min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {t('page.wellcome')}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {t('page.tagline')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('page.description')}
            </p>
            
            {/* App Download Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
              {/* Play Store Card */}
              <Card 
                className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl" 
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <CardContent className="p-6 text-center text-white">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {language === 'km' ? 'ទាញយក Android' : 'Download for Android'}
                    </h3>
                    <p className="text-sm opacity-90">
                      {language === 'km' ? 'ពី Google Play Store' : 'Get it on Google Play'}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {language === 'km' ? 'ទាញយកឥឡូវ' : 'Download Now'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* App Store Card */}
              <Card 
                className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl" 
                onClick={() => window.open('https://apps.apple.com', '_blank')}
              >
                <CardContent className="p-6 text-center text-white">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {language === 'km' ? 'ទាញយក iOS' : 'Download for iOS'}
                    </h3>
                    <p className="text-sm opacity-90">
                      {language === 'km' ? 'ពី Apple App Store' : 'Download on the App Store'}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Download className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {language === 'km' ? 'ទាញយកឥឡូវ' : 'Download Now'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Calculator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card 
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700" 
                onClick={() => window.location.href = '/loan-calculator'}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center space-x-2">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                      <Smartphone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>
                      {language === 'km' ? 'ការគណនាកម្ចី' : 'Loan Calculator'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'km'
                      ? 'គណនាការបង់ប្រាក់ប្រចាំខែ ការប្រាក់ និងថ្លៃសេវា សម្រាប់កម្ចីរបស់អ្នក'
                      : 'Calculate monthly payments, interest, and service fees for your loans'}
                  </p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700" 
                onClick={() => window.location.href = '/credit-calculator'}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center space-x-2">
                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
                      <Smartphone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span>
                      {language === 'km' ? 'ការគណនាឥណទាន' : 'Credit Calculator'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'km'
                      ? 'កំណត់ជម្រើសឥណទាន និងកាលវិភាគការបង់ប្រាក់របស់អ្នក'
                      : 'Determine your credit options and payment schedules'}
                  </p>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}