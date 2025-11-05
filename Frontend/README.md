# Loan Repayment Schedule Calculator# Loan Calculator - គណនាប្រាក់កម្ចី



A modern loan repayment calculator built with Next.js 15, TypeScript, and Tailwind CSS, featuring bilingual support (English/Khmer) and penalty calculation system.A modern, responsive loan repayment calculator built with Next.js and designed specifically for Cambodian users.



## 🌟 Features## Features



- **Modern Technology Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS- **Multi-language Support**: Khmer and English interface

- **Bilingual Support**: English and Khmer (Cambodia) language support- **Responsive Design**: Works perfectly on mobile and desktop

- **Professional UI**: Shadcn UI components with dark/light theme support- **Real-time Calculations**: Instant loan schedule updates

- **Penalty Calculation**: Automatic penalty calculation based on payment dates with grace periods- **Professional UI**: Built with Shadcn UI components

- **Custom Fonts**: Kantumruy Pro font for authentic Khmer typography- **Kantumruy Pro Font**: Beautiful Khmer typography

- **Responsive Design**: Mobile-friendly layout with responsive grids- **Error Handling**: Comprehensive error boundaries and validation

- **Clean Architecture**: Well-organized file structure with separated concerns- **Fast Performance**: Optimized with Next.js 15 and Turbopack



## 📁 Project Structure## Loan Options



```- **Loan Amount**: $50 - $500 (predefined amounts)

repayment-schedule/- **Term**: 1-4 months

├── app/                           # Next.js App Router- **Interest Rate**: 1% - 5% monthly (0.5% increments)

│   ├── globals.css               # Global styles

│   ├── layout.tsx                # Root layout with providers## Technology Stack

│   └── page.tsx                  # Home page

├── src/                          # Source code- **Framework**: Next.js 15 with App Router

│   ├── components/               # React components- **UI Library**: Shadcn UI + Radix UI

│   │   ├── ui/                  # Shadcn UI components- **Styling**: Tailwind CSS

│   │   │   ├── button.tsx- **Typography**: Kantumruy Pro (Google Fonts)

│   │   │   ├── card.tsx- **Icons**: Lucide React

│   │   │   ├── input.tsx- **Language**: TypeScript

│   │   │   ├── slider.tsx

│   │   │   └── table.tsx## Getting Started

│   │   ├── header.tsx           # Navigation header

│   │   ├── loan-calculator.tsx  # Main calculator component### Prerequisites

│   │   └── theme-provider.tsx   # Theme context provider

│   ├── contexts/                # React contexts- Node.js 18+ 

│   │   └── translation-context.tsx  # Bilingual support- npm or yarn

│   ├── lib/                     # Utility libraries

│   │   └── utils.ts             # Shadcn utility functions### Installation

│   └── utils/                   # Business logic utilities

│       └── loan-calculations.ts # Loan calculation functions1. Clone the repository:

├── public/                      # Static assets```bash

├── components.json              # Shadcn UI configurationgit clone <repository-url>

├── tailwind.config.ts          # Tailwind CSS configurationcd repayment-schedule

├── tsconfig.json               # TypeScript configuration```

└── package.json               # Dependencies and scripts

```2. Install dependencies:

```bash

## 🚀 Getting Startednpm install

```

### Prerequisites

3. Run the development server:

- Node.js 18+ ```bash

- npm or yarnnpm run dev

```

### Installation

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

1. Clone the repository:

```bash## Available Scripts

git clone <repository-url>

cd repayment-schedule- `npm run dev` - Start development server with Turbopack

```- `npm run build` - Build for production

- `npm run start` - Start production server

2. Install dependencies:- `npm run lint` - Run ESLint

```bash- `npm run preview` - Build and preview locally

npm install- `npm run type-check` - Run TypeScript type checking

```

## Deployment

3. Run the development server:

```bash### Vercel (Recommended)

npm run dev

```1. Push your code to GitHub

2. Connect your repository to Vercel

4. Open [http://localhost:3000](http://localhost:3000) in your browser.3. Deploy with default settings



## 📊 Features Overview### Other Platforms



### Loan ConfigurationThe app can be deployed to any platform that supports Next.js:

- **Loan Amount**: Select from predefined amounts ($50-$500)- Netlify

- **Loan Term**: 1-4 months using intuitive slider- Railway

- **Interest Rate**: 1-5% monthly rate with slider control- DigitalOcean App Platform

- **Deposit Date**: When the loan was issued- AWS Amplify

- **Payment Dates**: Individual payment dates for each month

## Project Structure

### Payment Layout

- **1-2 Months**: Vertical single-column layout```

- **3-4 Months**: 2-column grid with specific positioning:├── app/

  - 3 months: Month 1, 3 (top row), Month 2 (bottom left)│   ├── globals.css

  - 4 months: Months 1,3 (left col), Months 2,4 (right col)│   ├── layout.tsx

│   └── page.tsx

### Penalty System├── components/

- **Grace Period**: 3 days after due date│   ├── ui/           # Shadcn UI components

- **Penalty Rate**: 1% of principal per day late│   ├── header.tsx

- **Auto Calculation**: Penalties calculated from day 1, displayed after 3 days│   ├── loan-calculator.tsx

│   └── theme-provider.tsx

### Bilingual Support├── contexts/

- **English**: Professional loan terminology│   └── translation-context.tsx

- **Khmer**: Authentic translations with proper financial terms├── public/

- **Toggle**: Easy language switching in header│   └── icon.svg

└── package.json

## 🎨 UI/UX Features```



### Theme Support## Features in Detail

- Light and dark mode toggle

- Consistent color schemes### Loan Calculation

- Smooth transitions- Accurate monthly payment calculations using standard loan formulas

- Proper interest and principal breakdown

### Typography- Exact remaining balance tracking

- **English**: System fonts optimized for readability- End-of-month due date calculations

- **Khmer**: Kantumruy Pro font for authentic appearance

- **Responsive**: Appropriate sizing across devices### User Experience

- Auto-calculation on input changes

### Layout- Loading states and error handling

- **Cards**: Organized sections for loan settings and dates- Responsive grid layout

- **Responsive Grid**: Adapts to screen sizes- Accessible form controls

- **Professional Table**: Clear display of payment schedule- Professional confirmation screen

- **Summary Panel**: Highlighted totals with color coding

### Internationalization

## 🔧 Technical Details- Khmer language support throughout

- Cultural-appropriate number formatting

### Architecture- Right-to-left text support where needed

- **Component Separation**: UI components separated from business logic

- **Type Safety**: Full TypeScript implementation## Contributing

- **Clean Code**: ESLint configuration with strict rules

- **Performance**: Optimized bundle size and loading1. Fork the repository

2. Create a feature branch

### Calculation Logic3. Make your changes

- **Precise Math**: Rounded calculations for currency precision4. Run tests and linting

- **Date Handling**: Proper date calculations for due dates5. Submit a pull request

- **Edge Cases**: Handles final month principal adjustments

- **Validation**: Input validation and error handling## License



## 📱 Responsive DesignThis project is licensed under the MIT License.



The application is fully responsive with:## Support

- **Mobile**: Stacked layout for small screens

- **Tablet**: Optimized card layoutsFor support or questions, please contact [your-email@domain.com].

- **Desktop**: Full grid layout with optimal spacing

---

## 🌐 Deployment

Built with ❤️ for the Cambodian community

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🛠️ Development

### Code Structure
- Components use TypeScript with proper typing
- Business logic separated into utility functions
- Clean import/export patterns
- Consistent naming conventions

### Adding New Features
1. Create components in `src/components/`
2. Add utilities in `src/utils/`
3. Update translations in `src/contexts/translation-context.tsx`
4. Test with `npm run build`

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build
5. Submit a pull request

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS