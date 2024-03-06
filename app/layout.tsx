import type { Metadata } from "next"
import "./globals.css"
import Attribution from "./components/attribution"
import Header from "./components/header"
import { alata } from "./fonts"

export const metadata: Metadata = {
  title: "Loopstudios Landing Page",
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
        className={`${alata.className} relative flex min-h-screen flex-col items-center bg-white text-black`}
      >
        <div className="absolute inset-0 bottom-auto z-0 mx-auto h-[40.625rem] w-full max-w-[90rem] bg-[url('/mobile/image-hero.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('/desktop/image-hero.jpg')]"></div>
        <Header />
        {children}
        <Attribution />
      </body>
    </html>
  )
}
