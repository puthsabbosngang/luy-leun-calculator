"use client"

import Image from "next/image"
import { Header } from "@/src/components/header"
import { useTranslation } from "@/src/contexts/translation-context" 
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card"
import { Smartphone } from "lucide-react"

export default function Home() {
  const { t, language } = useTranslation()

  return (
    <div className="min-h-screen bg-background overflow-y-auto scrollbar-hide">
      <Header />
      <div className="pt-30 min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 mt-0">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {t('page.wellcome')}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {t('page.tagline')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('page.description')}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-6  mt-10">
              {t('page.downloadApp')}
            </h2>

            {/* App Download */}
            <div className="grid grid-cols-1 sm:grid-cols-2  mb-10 max-w-md mx-auto gap-4 mb-10">
              {/* Play Store */}
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" 
                alt={language === 'km' ? 'ទាញយក Android' : 'Download for Android'}
                width={150}
                height={40}
                className="w-auto h-12 mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://play.google.com/store/search?q=luy+leun&c=apps', '_blank')}
              />
              
              {/* App Store */}
              <Image 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt={language === 'km' ? 'ទាញយក iOS' : 'Download for iOS'}
                width={150}
                height={40}
                className="w-auto h-12 mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://apps.apple.com/us/app/luyleun/id1570756469', 'luy leun')}
              />
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
                      ? 'គណនាពិន្ទុឥណទាន និងជម្រើសឥណទានរបស់អ្នក'
                      : 'Calculate your credit scores and credit options'}
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