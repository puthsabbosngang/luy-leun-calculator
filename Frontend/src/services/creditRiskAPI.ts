// src/services/creditRiskAPI.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

/* ---------- Types ---------- */
export interface ApplicantData {
  person_age: number;
  person_income: number;
  person_home_ownership: string;
  person_emp_length: number;
  loan_intent: string;
  loan_grade: string;
  loan_amnt: number;
  loan_int_rate: number;
  loan_percent_income: number;
  cb_person_default_on_file: string;
  cb_person_cred_hist_length: number;
}

export interface CreditRiskResult {
  Predicted_Risk: string;
  Low_Risk_Probability: number;
  High_Risk_Probability: number;
}

/* ---------- Generic fetch wrapper ---------- */
async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server Error (${res.status}): ${text}`);
    }
    return (await res.json()) as T;
  } catch (err: any) {
    console.error("API Error:", err);
    throw new Error("Unable to connect to the server. Please try again later.");
  }
}

/* ---------- Predict single applicant ---------- */
export async function predictCreditRisk(
  data: ApplicantData
): Promise<CreditRiskResult> {
  return apiFetch<CreditRiskResult>(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

/* ---------- Predict multiple applicants (CSV upload) ---------- */
export async function predictCreditRiskCsv(
  file: File
): Promise<CreditRiskResult[]> {
  const formData = new FormData();
  formData.append("file", file);

  return apiFetch<CreditRiskResult[]>(`${API_URL}/predict-csv`, {
    method: "POST",
    body: formData,
  });
}