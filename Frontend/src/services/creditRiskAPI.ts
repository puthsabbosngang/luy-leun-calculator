// API service for credit risk predictions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export interface CreditRiskInput {
  person_age: number
  person_income: number
  person_home_ownership: string
  person_emp_length: number
  loan_intent: string
  loan_grade: string
  loan_amnt: number
  loan_int_rate: number
  loan_percent_income?: number
  cb_person_default_on_file: string
  cb_person_cred_hist_length: number
}

export interface PredictionResult {
  predicted_risk: string
  low_risk_probability: number
  high_risk_probability: number
  input_data: CreditRiskInput
}

export interface BatchPredictionRequest {
  data: CreditRiskInput[]
}

export interface BatchPredictionResult {
  results: PredictionResult[]
  summary: {
    total: number
    high_risk: number
    low_risk: number
  }
}

export class CreditRiskAPI {
  static async predictSingle(input: CreditRiskInput): Promise<PredictionResult> {
    const response = await fetch(`${API_BASE_URL}/predict/single`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json()
  }

  static async predictBatch(request: BatchPredictionRequest): Promise<BatchPredictionResult> {
    const response = await fetch(`${API_BASE_URL}/predict/batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json()
  }

  static async getModels(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/models`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json()
  }

  static async healthCheck(): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`)
    }

    return response.json()
  }

  static getSampleCsvUrl(): string {
    return `${API_BASE_URL}/sample-csv`
  }
}