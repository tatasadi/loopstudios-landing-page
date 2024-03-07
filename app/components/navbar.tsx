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
        <div className="absolute inset-0 z-30 bg-black md:hidden"></div>
      )}
      <div className="relative z-50 md:hidden">
        {isMenuOpen ? (
          <Image
            src={iconClose}
            alt="menu"
            className="cursor-pointer self-end"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Image
            src={iconHamburger}
            alt="menu"
            className="cursor-pointer self-end"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      <nav
        className={cn(
          "absolute inset-0 left-auto z-40 w-full p-6 md:relative md:left-0 md:items-center md:bg-transparent md:p-0",
          isMenuOpen ? "fix" : "hidden md:block",
        )}
      >
        <ul
          className={cn(
            "flex h-full w-full flex-col justify-center gap-6 text-2xl font-light uppercase leading-[1.5625rem] md:flex-row md:items-end md:justify-end md:gap-8 md:text-[0.9375rem] md:font-medium md:normal-case md:leading-[1.5625rem]",
            isMobile ? josefinSans.className : alata.className,
          )}
        >
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
