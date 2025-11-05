import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { TranslationProvider } from "@/src/contexts/translation-context";

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Loan Calculator - គណនាប្រាក់កម្ចី",
  description: "Fast and accurate loan repayment calculator for Cambodia",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/luyleun-icon.svg" type="image/svg+xml" />
        {/* rounded icon */}
        
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${kantumruy.variable} antialiased`}
        style={{ fontFamily: "'Kantumruy Pro', var(--font-kantumruy), sans-serif" }}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
