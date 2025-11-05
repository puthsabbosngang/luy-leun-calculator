from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from catboost import CatBoostClassifier
import pandas as pd
import io

# ---------- Initialize App ----------
app = FastAPI(title="Credit Risk Scoring API")

# ---------- CORS (allow frontend) ----------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for local dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Load Model ----------
MODEL_PATH = "trained_model/catboost_model.cbm"

model = CatBoostClassifier()
model.load_model(MODEL_PATH, format="cbm")


# ---------- Define Input Schema ----------
class ApplicantData(BaseModel):
    person_age: int
    person_income: float
    person_home_ownership: str
    person_emp_length: int
    loan_intent: str
    loan_grade: str
    loan_amnt: float
    loan_int_rate: float
    loan_percent_income: float
    cb_person_default_on_file: str
    cb_person_cred_hist_length: int


# ---------- Routes ----------
@app.get("/")
def root():
    return {"message": "Credit Risk Scoring API is running 🚀"}


@app.post("/predict")
def predict(applicant: ApplicantData):
    try:
        df = pd.DataFrame([applicant.dict()])
        preds = model.predict(df)
        probs = model.predict_proba(df)

        result = {
            "Predicted_Risk": "High Risk" if preds[0] == 1 else "Low Risk",
            "Low_Risk_Probability": float(probs[0][0]),
            "High_Risk_Probability": float(probs[0][1]),
        }
        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/predict-csv")
async def predict_csv(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        df = pd.read_csv(io.BytesIO(contents))
        preds = model.predict(df)
        probs = model.predict_proba(df)

        df["Predicted_Risk"] = ["High Risk" if p == 1 else "Low Risk" for p in preds]
        df["Low_Risk_Probability"] = probs[:, 0]
        df["High_Risk_Probability"] = probs[:, 1]

        return df.to_dict(orient="records")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
