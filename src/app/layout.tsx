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
  title: "Bamidele Ajibola - Full Stack & Mobile Developer",
  description: "I help founders turn ideas into seamless digital experiences across web and mobile platforms",
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
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

