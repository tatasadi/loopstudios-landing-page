"use client"
import iconClose from "@/public/icon-close.svg"
import iconHamburger from "@/public/icon-hamburger.svg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { josefinSans, alata } from "../fonts"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex w-full justify-end text-white">
      {isMenuOpen && (
        <div className="bg-black absolute inset-0 z-30 md:hidden"></div>
      )}
      <div className="relative z-50 md:hidden">
        {isMenuOpen ? (
          <Image
            src={iconClose}
            alt="menu"
            className="self-end cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Image
            src={iconHamburger}
            alt="menu"
            className="self-end cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      <nav
        className={cn(
          "absolute inset-0 left-auto z-40 w-full p-6 md:relative md:left-0 md:items-center md:bg-transparent md:py-[1.32rem] md:pr-10",
          isMenuOpen ? "fix" : "hidden md:block",
        )}
      >
        <ul className={cn("flex flex-col md:flex-row md:items-end md:justify-end md:gap-8 w-full h-full justify-center gap-6 uppercase md:normal-case text-2xl leading-[1.5625rem] font-light md:font-medium md:text-[0.9375rem] md:leading-[1.5625rem]", isMobile ? josefinSans.className : alata.className)}>
          <li>
            <a href="#" className="">
              About
            </a>
          </li>
          <li>
            <a href="#" className="">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="">
              Support
            </a>
          </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
