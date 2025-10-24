import { Header } from "@/src/components/header"

export default function CreditCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 p-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Credit Calculator
            </h1>
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
              ឥណទានបុគ្គល - Personal Credit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Welcome to the Credit Calculator! This feature is coming soon.
            </p>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-3">
                Coming Soon
              </h3>
              <p className="text-purple-600 dark:text-purple-400">
                We&apos;re working on bringing you the best credit calculation tools. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}