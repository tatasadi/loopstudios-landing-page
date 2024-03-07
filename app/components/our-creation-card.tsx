import { StaticImageData } from "next/image"
import Image from "next/image"
import { josefinSans } from "../fonts"
import { cn } from "../lib/utils"

const OurCreationCard = ({
  title,
  desktopImage,
  mobileImage,
  className = "",
}: {
  title: string
  desktopImage: StaticImageData
  mobileImage: StaticImageData
  className?: string
}) => {
  return (
    <div className="group relative cursor-pointer">
      <h3
        className={cn(
          "absolute bottom-5 left-5 z-10 max-w-[8rem] text-2xl font-light uppercase leading-6 text-white lg:bottom-8 lg:left-10 lg:max-w-[9rem] lg:text-[2rem] lg:leading-8",
          className,
          josefinSans.className,
        )}
      >
        {title}
      </h3>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)0%,rgba(0,0,0,0.60)100%)] group-hover:bg-white/75"></div>
      <Image
        src={desktopImage}
        alt={title}
        className="hidden h-[28.125rem] w-full object-cover md:block"
      />
      <Image src={mobileImage} alt={title} className="md:hidden" />
    </div>
  )
}

export default OurCreationCard
