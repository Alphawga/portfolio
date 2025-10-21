import type React from "react"
import "./globals.css"
import { Source_Sans_3, Lora } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import SearchCommand from "../components/search-command"


// Initialize Source Sans Pro for the body
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"], 
  display: 'swap',
  variable: '--font-source-sans' // CSS variable for body font
})

// Initialize Lora for headings
const lora = Lora({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-lora' // CSS variable for heading font
})

export const metadata = {
  title: "Ajibola Bamidele - Software Developer | Custom Software & E-commerce Solutions",
  description: "Software Developer specializing in custom software solutions, e-commerce platforms (40-day delivery), and AI automation. 8+ years experience, 50+ projects delivered.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Apply both font variables to the body */}
      <body className={`${sourceSans.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <SearchCommand />
        </ThemeProvider>
      </body>
    </html>
  )
}

