import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ajibola Bamidele | Software Engineer",
  description: "Product and result-oriented software engineer specializing in web development, mobile applications, and AI solutions.",
  keywords: "software engineer, web developer, mobile developer, AI, Ajibola Bamidele, AlphaWGA",
  openGraph: {
    title: "Ajibola Bamidele | Software Engineer",
    description: "Product and result-oriented software engineer specializing in web development, mobile applications, and AI solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <div className="flex-grow pt-16">
            {children}
          </div>
          <BackToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
