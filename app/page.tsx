import Link from "next/link"
import Image from "next/image"
import { josefinSans } from "./fonts"
import { cn } from "./lib/utils"

export default function Home() {
  return (
    <main className="w-full max-w-[90rem] z-10 p-6 lg:px-[10.31rem]">
      <h1 className={cn("text-white border-2 border-white p-6 uppercase text-[2.5rem] font-light leading-[1.2.375rem] max-w-[40.625rem] lg:p-10 lg:text-[4.5rem] lg:leading-[4.375rem]", josefinSans.className)}>Immersive experiences that deliver</h1>
    </main>
  )
}
