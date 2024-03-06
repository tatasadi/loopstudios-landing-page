"use client"
import iconClose from "@/public/icon-close.svg"
import iconHamburger from "@/public/icon-hamburger.svg"
import Image from "next/image"
import { useState } from "react"
import { cn } from "../lib/utils"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

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
            className="self-end"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <Image
            src={iconHamburger}
            alt="menu"
            className="self-end"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
      <nav
        className={cn(
          "absolute inset-0 left-auto z-40 w-[15rem] p-6 pt-[4.88rem] md:relative md:left-0 md:w-full md:items-center md:bg-transparent md:py-[1.32rem] md:pr-10",
          isMenuOpen ? "block" : "hidden md:block",
        )}
      >
        <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
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
