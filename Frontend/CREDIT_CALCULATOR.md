# Credit Risk Calculator

A comprehensive credit risk assessment tool built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components, integrated with a FastAPI backend using CatBoost machine learning model.

## Features

### 🎯 **Core Functionality**
- **Single Prediction**: Manual input form for individual credit risk assessment
- **Batch Prediction**: CSV file upload for bulk credit risk analysis
- **Real-time Validation**: Input validation with proper error handling
- **Interactive UI**: Modern, responsive interface with dark/light mode support

### 📊 **Input Fields**
- **Personal Information**:
  - Age (18-60 years)
  - Annual Income
  - Home Ownership Status
  - Employment Length
  - Credit History Length

- **Loan Information**:
  - Loan Intent/Purpose
  - Loan Grade (A-F)
  - Loan Amount
  - Interest Rate
  - Calculated Loan-to-Income Ratio

- **Risk Factors**:
  - Default History
  - Credit History Length

### 🔮 **Prediction Results**

#### Single Prediction
- Risk classification (High/Low Risk)
- Risk probability percentage
- Visual progress indicator
- Detailed result display

#### Batch Prediction
- Results table with risk classifications
- Summary statistics
- Risk distribution visualization
- Export capabilities

### 🛠 **Technical Stack**
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Backend Integration**: FastAPI REST API
- **Machine Learning**: CatBoost classifier
- **Styling**: Responsive design with dark/light mode

### 🚀 **API Integration**
- RESTful API communication
- Error handling and validation
- Environment-based configuration
- Sample CSV download

### 📱 **Responsive Design**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interfaces
- Accessibility compliant

## Usage

1. **Access the Credit Calculator**:
   - Navigate to `/credit-calculator` in your application
   - Choose between manual input or CSV upload

2. **Manual Input**:
   - Fill in all required fields
   - Review the input data table
   - Click "Predict Credit Risk"
   - View detailed results

3. **CSV Upload**:
   - Download the sample CSV template
   - Prepare your data according to the format
   - Upload the CSV file
   - Review the data preview
   - Run batch prediction
   - Analyze summary report

## Environment Configuration

Create a `.env.local` file in the Frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NODE_ENV=development
```

## Backend Requirements

Ensure your FastAPI backend is running with the following endpoints:
- `POST /predict` - Single prediction
- `POST /predict/batch` - Batch prediction
- `GET /sample-csv` - Sample CSV download
- `GET /health` - Health check
- `GET /models` - Available models

## Components Used

### shadcn/ui Components
- `Card` - Content containers
- `Button` - Interactive elements
- `Input` - Form inputs
- `Table` - Data display
- `Select` - Dropdown selections
- `Label` - Form labels
- `RadioGroup` - Option selection
- `Alert` - Error/success messages
- `Badge` - Status indicators
- `Progress` - Visual progress bars

### Custom Components
- `CreditCalculator` - Main calculator component
- `CreditRiskAPI` - API service layer
- `Header` - Navigation with theme/language toggle

## File Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── credit-calculator.tsx    # Main calculator component
│   │   ├── header.tsx              # Navigation header
│   │   └── ui/                     # shadcn/ui components
│   ├── services/
│   │   └── creditRiskAPI.ts        # API service layer
│   └── app/
│       └── credit-calculator/
│           └── page.tsx            # Credit calculator page
├── .env.local                      # Environment variables
└── package.json                    # Dependencies
```

This implementation provides a complete, production-ready credit risk assessment tool that matches the functionality of the original Streamlit application while leveraging modern web technologies and best practices.