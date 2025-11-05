"use client"

import React, { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"

import { Input } from "@/src/components/ui/input"

import { Progress } from "@/src/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/src/components/ui/tabs"
import { Upload, BarChart3 } from "lucide-react"
import {
  predictCreditRisk,
  predictCreditRiskCsv,
  type ApplicantData,
  type CreditRiskResult,
} from "@/src/services/creditRiskAPI"

type CreditRiskInput = ApplicantData
type PredictionResult = CreditRiskResult

interface BatchPredictionResult {
  results: {
    input_data: ApplicantData
    predicted_risk: string
    high_risk_probability: number
    low_risk_probability: number
  }[]
  summary: {
    total: number
    high_risk: number
    low_risk: number
  }
}

export default function CreditCalculator() {
  const [inputMethod, setInputMethod] = useState<"manual" | "csv">("manual")
  const [formData, setFormData] = useState<CreditRiskInput>({
    age: "",
    gender: "",
    income: "",
    loan_amount: "",
    employment_status: "",
    credit_score: "",
    loan_purpose: "",
    loan_term: "",
  })
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [batchPrediction, setBatchPrediction] = useState<BatchPredictionResult | null>(null)
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCsvFile(e.target.files[0])
    }
  }

  const handlePredict = async () => {
    try {
      setLoading(true)
      setError("")
      setPrediction(null)
      setBatchPrediction(null)

      if (inputMethod === "manual") {
        const result = await predictCreditRisk(formData)
        setPrediction(result)
      } else if (csvFile) {
        const results = await predictCreditRiskCsv(csvFile)

        const summary = {
          total: results.length,
          high_risk: results.filter((r) => r.Predicted_Risk === "High Risk").length,
          low_risk: results.filter((r) => r.Predicted_Risk === "Low Risk").length,
        }

        const formattedResults = results.map((r) => ({
          input_data: formData,
          predicted_risk: r.Predicted_Risk,
          high_risk_probability: r.High_Risk_Probability,
          low_risk_probability: r.Low_Risk_Probability,
        }))

        setBatchPrediction({ results: formattedResults, summary })
      } else {
        setError("Please upload a CSV file before predicting.")
      }
    } catch (err) {
      console.error("Prediction error:", err)
      setError("An error occurred while predicting. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const getRiskColor = (risk: string) => {
    if (risk === "High Risk") return "text-red-600 font-semibold"
    if (risk === "Low Risk") return "text-green-600 font-semibold"
    return "text-gray-600"
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Credit Risk Prediction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="manual"
            onValueChange={(v) => setInputMethod(v as "manual" | "csv")}
            className="space-y-4"
          >
            <TabsList>
              <TabsTrigger value="manual">Manual Input</TabsTrigger>
              <TabsTrigger value="csv">CSV Upload</TabsTrigger>
            </TabsList>

            <TabsContent value="manual" className="grid grid-cols-2 gap-4">
              {Object.keys(formData).map((key) => (
                <Input
                  key={key}
                  name={key}
                  placeholder={key.replace(/_/g, " ").toUpperCase()}
                  value={formData[key as keyof CreditRiskInput]}
                  onChange={handleInputChange}
                  className="col-span-1"
                />
              ))}
            </TabsContent>

            <TabsContent value="csv" className="flex flex-col items-center gap-3 border p-4 rounded-lg">
              <Upload className="w-10 h-10 text-primary" />
              <Input type="file" accept=".csv" onChange={handleFileChange} />
              <p className="text-sm text-gray-500">Upload a CSV file with applicant data</p>
            </TabsContent>
          </Tabs>

          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}

          <div className="mt-6 flex justify-center">
            <Button onClick={handlePredict} disabled={loading}>
              {loading ? "Predicting..." : "Predict Risk"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* ✅ Single Prediction Result */}
      {prediction && (
        <Card className="border-l-4 border-primary shadow-md">
          <CardHeader>
            <CardTitle>Prediction Result</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg">
              Predicted Risk:{" "}
              <span className={getRiskColor(prediction.Predicted_Risk)}>
                {prediction.Predicted_Risk}
              </span>
            </p>
            <div className="space-y-1">
              <p>
                High Risk Probability:{" "}
                <strong>{(prediction.High_Risk_Probability * 100).toFixed(2)}%</strong>
              </p>
              <Progress value={prediction.High_Risk_Probability * 100} />
            </div>
            <div className="space-y-1">
              <p>
                Low Risk Probability:{" "}
                <strong>{(prediction.Low_Risk_Probability * 100).toFixed(2)}%</strong>
              </p>
              <Progress value={prediction.Low_Risk_Probability * 100} />
            </div>
          </CardContent>
        </Card>
      )}

      {/* ✅ Batch Prediction Result */}
      {batchPrediction && (
        <Card className="shadow-md border-l-4 border-blue-500">
          <CardHeader>
            <CardTitle>Batch Prediction Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <p>Total Applicants: <strong>{batchPrediction.summary.total}</strong></p>
              <p className="text-green-600">
                Low Risk: <strong>{batchPrediction.summary.low_risk}</strong>
              </p>
              <p className="text-red-600">
                High Risk: <strong>{batchPrediction.summary.high_risk}</strong>
              </p>
            </div>

            <div className="border-t pt-3 space-y-2">
              {batchPrediction.results.map((r, idx) => (
                <div key={idx} className="p-3 border rounded-lg flex justify-between items-center">
                  <span>Applicant #{idx + 1}</span>
                  <span className={getRiskColor(r.predicted_risk)}>
                    {r.predicted_risk}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
