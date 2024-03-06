import logo from "@/public/logo.svg"
import Image from "next/image"
import Navbar from "./navbar"

const Header = () => {
  return (
    <header className="flex w-full max-w-[90rem] items-center justify-between px-6 py-10 lg:px-[10.31rem] lg:py-[4.25rem]">
      <Image src={logo} alt="logo" className="z-50 block h-8 w-[12rem]" />
      <Navbar />
    </header>
  )
}

export default Header
