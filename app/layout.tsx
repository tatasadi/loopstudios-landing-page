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
        className={`${alata.className} bg-white text-black flex min-h-screen flex-col items-center relative`}
      >
        <div className="z-0 w-full h-[40.625rem] bg-[url('/mobile/image-hero.jpg')] absolute inset-0 bottom-auto bg-no-repeat bg-cover md:bg-[url('/desktop/image-hero.jpg')] max-w-[90rem] mx-auto bg-center"></div>
        <Header />
        {children}
        <Attribution />
      </body>
    </html>
  )
}
