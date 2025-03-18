import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import SearchCommand from "../components/search-command"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bamidele Ajibola - Full Stack Developer",
  description: "I help founders turn ideas into seamless digital experiences",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <SearchCommand />
        </ThemeProvider>
      </body>
    </html>
  )
}

