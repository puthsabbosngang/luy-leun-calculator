import { Header } from "@/src/components/header"
import CreditCalculator from "@/src/components/credit-calculator"

export default function CreditCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <CreditCalculator />
      </div>
    </div>
  )
}