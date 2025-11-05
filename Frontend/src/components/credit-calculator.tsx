"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Label } from "@/src/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Upload, FileText, Brain, AlertTriangle, CheckCircle, BarChart3, Download } from "lucide-react"
import { Alert, AlertDescription } from "@/src/components/ui/alert"
import { Badge } from "@/src/components/ui/badge"
import { Progress } from "@/src/components/ui/progress"
import { CreditRiskAPI, type CreditRiskInput, type PredictionResult, type BatchPredictionResult } from "@/src/services/creditRiskAPI"

const homeOwnershipOptions = ["RENT", "FRIEND", "OWNER", "PARRENT", "COMPANY", "SIBLING"]
const loanIntentOptions = ["START BUSINESS", "EXPAND BUSINESS", "GENERAL PAYMENT", "HOME REPAIR", "LOGISTIC", "TRAVEL", "PAYMENT", "HEALTH"]
const loanGradeOptions = ["A", "B", "C", "D", "E", "F"]
const employmentLengthOptions = [3, 6, 12, 24, 36]
const loanAmountOptions = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
const interestRateOptions = [0.01, 0.05, 0.1, 0.15, 0.2]

export default function CreditCalculator() {
  const [inputMethod, setInputMethod] = useState<"manual" | "csv">("manual")
  const [formData, setFormData] = useState<CreditRiskInput>({
    person_age: 20,
    person_income: 250,
    person_home_ownership: "RENT",
    person_emp_length: 12,
    loan_intent: "START BUSINESS",
    loan_grade: "A",
    loan_amnt: 100,
    loan_int_rate: 0.05,
    cb_person_default_on_file: "N",
    cb_person_cred_hist_length: 2
  })
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const [csvData, setCsvData] = useState<CreditRiskInput[]>([])
  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [batchPrediction, setBatchPrediction] = useState<BatchPredictionResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Calculate loan percent income when loan amount or income changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      loan_percent_income: prev.loan_amnt / prev.person_income
    }))
  }, [formData.loan_amnt, formData.person_income])

  const handleInputChange = (field: keyof CreditRiskInput, value: any) => {
    setFormData(prev => {
      // Handle numeric fields with proper validation
      if (['person_age', 'person_income', 'person_emp_length', 'loan_amnt', 'loan_int_rate', 'cb_person_cred_hist_length'].includes(field)) {
        const numValue = parseFloat(value)
        return {
          ...prev,
          [field]: isNaN(numValue) ? 0 : numValue
        }
      }
      
      // Handle string fields
      return {
        ...prev,
        [field]: value || ""
      }
    })
  }

  const handleCsvUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setCsvFile(file)
      // Parse CSV file
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        const lines = text.split('\n')
        const headers = lines[0].split(',').map(h => h.trim())
        const data = lines.slice(1).filter(line => line.trim()).map(line => {
          const values = line.split(',').map(v => v.trim())
          const row: any = {}
          headers.forEach((header, index) => {
            const value = values[index]
            // Convert numeric fields
            if (['person_age', 'person_income', 'person_emp_length', 'loan_amnt', 'loan_int_rate', 'cb_person_cred_hist_length'].includes(header)) {
              row[header] = parseFloat(value) || 0
            } else {
              row[header] = value
            }
          })
          return row as CreditRiskInput
        })
        setCsvData(data)
      }
      reader.readAsText(file)
    }
  }

  const predictCreditRisk = async () => {
    setLoading(true)
    setError(null)
    setPrediction(null)
    setBatchPrediction(null)

    try {
      if (inputMethod === "manual") {
        const result = await CreditRiskAPI.predictSingle(formData)
        setPrediction(result)
      } else {
        const result = await CreditRiskAPI.predictBatch({ data: csvData })
        setBatchPrediction(result)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while predicting credit risk')
    } finally {
      setLoading(false)
    }
  }

  const getRiskColor = (risk: string) => {
    return risk === "High Risk" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
  }

  const getRiskBadgeVariant = (risk: string) => {
    return risk === "High Risk" ? "destructive" : "default"
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            DLT Credit Risk Scoring
          </h1>
          <p className="text-lg text-muted-foreground">
            Use this app to predict the credit risk of applicants using a trained <strong>CatBoost</strong> model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar for large screens, but stacked cards for medium and small */}
          <div className="lg:col-span-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Model Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Model Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select defaultValue="catboost">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="catboost">CatBoost</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Input Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Input Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={inputMethod} onValueChange={(value) => setInputMethod(value as "manual" | "csv")}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="manual" id="manual" />
                      <Label htmlFor="manual">Manual Input</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="csv" id="csv" />
                      <Label htmlFor="csv">Upload CSV</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {inputMethod === "manual" ? (
              /* Manual Input Form */
              <Card>
                <CardHeader>
                  <CardTitle>Enter Applicant Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Age */}
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        min={18}
                        max={60}
                        value={formData.person_age || ''}
                        onChange={(e) => handleInputChange('person_age', e.target.value)}
                      />
                    </div>

                    {/* Income */}
                    <div className="space-y-2">
                      <Label htmlFor="income">Annual Income ($)</Label>
                      <Input
                        id="income"
                        type="number"
                        min={50}
                        value={formData.person_income || ''}
                        onChange={(e) => handleInputChange('person_income', e.target.value)}
                      />
                    </div>

                    {/* Home Ownership */}
                    <div className="space-y-2">
                      <Label htmlFor="home-ownership">Home Ownership</Label>
                      <Select
                        value={formData.person_home_ownership}
                        onValueChange={(value) => handleInputChange('person_home_ownership', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {homeOwnershipOptions.map(option => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Employment Length */}
                    <div className="space-y-2">
                      <Label htmlFor="employment">Employment Length (Months)</Label>
                      <Select
                        value={formData.person_emp_length.toString()}
                        onValueChange={(value) => handleInputChange('person_emp_length', parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {employmentLengthOptions.map(option => (
                            <SelectItem key={option} value={option.toString()}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Loan Intent */}
                    <div className="space-y-2">
                      <Label htmlFor="loan-intent">Loan Intent</Label>
                      <Select
                        value={formData.loan_intent}
                        onValueChange={(value) => handleInputChange('loan_intent', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {loanIntentOptions.map(option => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Loan Grade */}
                    <div className="space-y-2">
                      <Label htmlFor="loan-grade">Loan Grade</Label>
                      <Select
                        value={formData.loan_grade}
                        onValueChange={(value) => handleInputChange('loan_grade', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {loanGradeOptions.map(option => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Loan Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="loan-amount">Loan Amount ($)</Label>
                      <Select
                        value={formData.loan_amnt.toString()}
                        onValueChange={(value) => handleInputChange('loan_amnt', parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {loanAmountOptions.map(option => (
                            <SelectItem key={option} value={option.toString()}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <Label htmlFor="interest-rate">Loan Interest (%)</Label>
                      <Select
                        value={formData.loan_int_rate.toString()}
                        onValueChange={(value) => handleInputChange('loan_int_rate', parseFloat(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {interestRateOptions.map(option => (
                            <SelectItem key={option} value={option.toString()}>{(option * 100).toFixed(0)}%</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Default History */}
                    <div className="space-y-2">
                      <Label htmlFor="default">Default History</Label>
                      <Select
                        value={formData.cb_person_default_on_file}
                        onValueChange={(value) => handleInputChange('cb_person_default_on_file', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Y">Yes</SelectItem>
                          <SelectItem value="N">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Credit History Length */}
                    <div className="space-y-2">
                      <Label htmlFor="credit-history">Credit History Length (years)</Label>
                      <Input
                        id="credit-history"
                        type="number"
                        min={1}
                        max={10}
                        value={formData.cb_person_cred_hist_length || ''}
                        onChange={(e) => handleInputChange('cb_person_cred_hist_length', e.target.value)}
                      />
                    </div>

                    {/* Calculated Loan Percent Income */}
                    <div className="space-y-2">
                      <Label>Loan % of Income</Label>
                      <div className="p-2 bg-muted rounded-md">
                        {formData.person_income > 0 
                          ? ((formData.loan_amnt / formData.person_income) * 100).toFixed(1) + '%'
                          : 'N/A'}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* CSV Upload */
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload CSV File
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <Label htmlFor="csv-upload" className="cursor-pointer">
                      <span className="text-lg font-medium">Choose CSV file</span>
                      <br />
                      <span className="text-sm text-muted-foreground">or drag and drop</span>
                    </Label>
                    <Input
                      id="csv-upload"
                      type="file"
                      accept=".csv"
                      onChange={handleCsvUpload}
                      className="hidden"
                    />
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(CreditRiskAPI.getSampleCsvUrl(), '_blank')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Sample CSV
                      </Button>
                    </div>
                  </div>
                  
                  {csvFile && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="font-medium">File: {csvFile.name}</p>
                      <p className="text-sm text-muted-foreground">Records: {csvData.length}</p>
                    </div>
                  )}

                  {csvData.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Age</TableHead>
                              <TableHead>Income</TableHead>
                              <TableHead>Home Ownership</TableHead>
                              <TableHead>Loan Amount</TableHead>
                              <TableHead>Interest Rate</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {csvData.slice(0, 5).map((row, index) => (
                              <TableRow key={index}>
                                <TableCell>{row.person_age}</TableCell>
                                <TableCell>${row.person_income}</TableCell>
                                <TableCell>{row.person_home_ownership}</TableCell>
                                <TableCell>${row.loan_amnt}</TableCell>
                                <TableCell>{(row.loan_int_rate * 100).toFixed(1)}%</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                        {csvData.length > 5 && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Showing 5 of {csvData.length} records
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Input Data Display */}
            {inputMethod === "manual" && (
              <Card>
                <CardHeader>
                  <CardTitle>Input Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Field</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Age</TableCell>
                        <TableCell>{formData.person_age}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Income</TableCell>
                        <TableCell>${formData.person_income}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Home Ownership</TableCell>
                        <TableCell>{formData.person_home_ownership}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Employment Length</TableCell>
                        <TableCell>{formData.person_emp_length} months</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Loan Intent</TableCell>
                        <TableCell>{formData.loan_intent}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Loan Grade</TableCell>
                        <TableCell>{formData.loan_grade}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Loan Amount</TableCell>
                        <TableCell>${formData.loan_amnt}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Interest Rate</TableCell>
                        <TableCell>{(formData.loan_int_rate * 100).toFixed(1)}%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Loan % of Income</TableCell>
                        <TableCell>{((formData.loan_amnt / formData.person_income) * 100).toFixed(1)}%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Default History</TableCell>
                        <TableCell>{formData.cb_person_default_on_file === "Y" ? "Yes" : "No"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Credit History Length</TableCell>
                        <TableCell>{formData.cb_person_cred_hist_length} years</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {/* Predict Button */}
            <div className="flex justify-center">
              <Button 
                onClick={predictCreditRisk} 
                disabled={loading || (inputMethod === "csv" && csvData.length === 0)}
                size="lg"
                className="w-full max-w-md"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Predicting...
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5 mr-2" />
                    🔮 Predict Credit Risk
                  </>
                )}
              </Button>
            </div>

            {/* Error Display */}
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Single Prediction Results */}
            {prediction && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Prediction Complete ✅
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold">
                      🧠 Prediction Result:{" "}
                      <span className={getRiskColor(prediction.predicted_risk)}>
                        {prediction.predicted_risk}
                      </span>
                    </div>
                    <div className="text-lg">
                      High Risk Probability: <strong>{(prediction.high_risk_probability * 100).toFixed(1)}%</strong>
                    </div>
                    <div className="w-full max-w-md mx-auto">
                      <Progress 
                        value={prediction.high_risk_probability * 100} 
                        className="h-4"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Batch Prediction Results */}
            {batchPrediction && (
              <div className="space-y-6">
                {/* Results Table */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      📋 Prediction Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Age</TableHead>
                          <TableHead>Income</TableHead>
                          <TableHead>Loan Amount</TableHead>
                          <TableHead>Predicted Risk</TableHead>
                          <TableHead>High Risk %</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {batchPrediction.results.map((result, index) => (
                          <TableRow key={index}>
                            <TableCell>{result.input_data.person_age}</TableCell>
                            <TableCell>${result.input_data.person_income}</TableCell>
                            <TableCell>${result.input_data.loan_amnt}</TableCell>
                            <TableCell>
                              <Badge variant={getRiskBadgeVariant(result.predicted_risk)}>
                                {result.predicted_risk}
                              </Badge>
                            </TableCell>
                            <TableCell>{(result.high_risk_probability * 100).toFixed(1)}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Summary Report */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      📊 Summary Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-bold">{batchPrediction.summary.total}</div>
                        <div className="text-sm text-muted-foreground">Total Applicants</div>
                      </div>
                      <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{batchPrediction.summary.high_risk}</div>
                        <div className="text-sm text-red-600">🟥 High Risk</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{batchPrediction.summary.low_risk}</div>
                        <div className="text-sm text-green-600">🟩 Low Risk</div>
                      </div>
                    </div>

                    {/* Risk Distribution Chart */}
                    <div className="w-full max-w-md mx-auto">
                      <div className="text-center mb-4 font-medium">Credit Risk Distribution</div>
                      <div className="flex h-8 rounded-full overflow-hidden">
                        <div 
                          className="bg-green-500 flex items-center justify-center text-white text-sm font-medium"
                          style={{ width: `${(batchPrediction.summary.low_risk / batchPrediction.summary.total) * 100}%` }}
                        >
                          {batchPrediction.summary.low_risk > 0 && "Low Risk"}
                        </div>
                        <div 
                          className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
                          style={{ width: `${(batchPrediction.summary.high_risk / batchPrediction.summary.total) * 100}%` }}
                        >
                          {batchPrediction.summary.high_risk > 0 && "High Risk"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            Developed with ❤️ using Next.js, TypeScript, and <strong>CatBoost</strong>
          </p>
        </div>
      </div>
    </div>
  )
}