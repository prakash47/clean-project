import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Capital Age - Your Trusted Loan Partner in India",
    template: "%s | Capital Age",
  },
  description: "Get instant approval for personal loans, home loans, business loans, and more. Compare rates from 50+ banks and NBFCs. Apply online today with Capital Age.",
  keywords: [
    "loans india",
    "personal loan",
    "home loan",
    "business loan",
    "working capital",
    "cgtmse loan",
    "mortgage loan",
    "loan against property",
    "commercial purchase loan",
    "best loan rates india",
    "instant loan approval",
  ],
  authors: [{ name: "Capital Age" }],
  creator: "Capital Age",
  publisher: "Capital Age",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://capitalage.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Capital Age - Your Trusted Loan Partner in India",
    description: "Get instant approval for all types of loans. Compare rates from 50+ banks and NBFCs. Quick processing, minimal documentation.",
    siteName: "Capital Age",
    images: [
      {
        url: "/Calogo.png",
        width: 1200,
        height: 630,
        alt: "Capital Age Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Age - Your Trusted Loan Partner in India",
    description: "Get instant approval for all types of loans. Compare rates from 50+ banks and NBFCs.",
    images: ["/Calogo.png"],
    creator: "@capitalage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  category: "finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Calogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Calogo.png" />
        <meta name="theme-color" content="#17A2B8" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Capital Age",
              description: "Leading loan provider in India offering personal loans, home loans, business loans, and more",
              url: "https://capitalage.in",
              logo: "https://capitalage.in/Calogo.png",
              image: "https://capitalage.in/Calogo.png",
              telephone: "+91-98765-43210",
              email: "info@capitalage.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              priceRange: "₹₹",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/capitalage",
                "https://twitter.com/capitalage",
                "https://www.linkedin.com/company/capitalage",
                "https://www.instagram.com/capitalage",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
