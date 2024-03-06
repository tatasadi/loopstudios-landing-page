import type { Metadata } from "next"
import "./globals.css"
import Attribution from "./components/attribution"
import Header from "./components/header"
import { alata } from "./fonts"

export const metadata: Metadata = {
  title: "Intro Section with Dropdown Navigation",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${alata.className} bg-white text-black flex min-h-screen flex-col items-center`}
      >
        <Header />
        {children}
        <Attribution />
      </body>
    </html>
  )
}
