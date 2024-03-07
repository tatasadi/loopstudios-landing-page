import Logo from "@/public/logo.svg"
import Image from "next/image"
import iconFacebook from "@/public/icon-facebook.svg"
import iconTwitter from "@/public/icon-twitter.svg"
import iconPinterest from "@/public/icon-pinterest.svg"
import iconInstagram from "@/public/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-black px-[3.25rem] py-14 text-[0.9375rem] leading-[1.5625rem] text-white md:flex-row md:items-center md:justify-between md:pb-8 md:pt-[2.75rem] lg:pl-[10.31rem] lg:pr-[9.25rem]">
      <div className="flex flex-col items-center justify-center gap-8 md:items-start lg:gap-6">
        <Image src={Logo} alt="Loopstudios" className="h-6 w-[9rem]" />
        <div>
          <ul className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8">
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
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 md:mt-0 md:items-end">
        <div className="flex items-center gap-4">
          <Image src={iconFacebook} alt="Facebook" className="social-icon" />
          <Image src={iconTwitter} alt="Twitter" className="social-icon" />
          <Image src={iconPinterest} alt="Pinterest" className="social-icon" />
          <Image src={iconInstagram} alt="Instagram" className="social-icon" />
        </div>
        <p className="opacity-50">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
