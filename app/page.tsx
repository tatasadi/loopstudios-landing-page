import Link from "next/link"
import Image from "next/image"
import { josefinSans } from "./fonts"
import { cn } from "./lib/utils"
import imageInteractiveMobile from "@/public/mobile/image-interactive.jpg"
import imageInteractiveDesktop from "@/public/desktop/image-interactive.jpg"
import OurCreationCard from "./components/our-creation-card"
import imageDeepEarthMobile from "@/public/mobile/image-deep-earth.jpg"
import imageDeepEarthDesktop from "@/public/desktop/image-deep-earth.jpg"
import imageNightArcadeMobile from "@/public/mobile/image-night-arcade.jpg"
import imageNightArcadeDesktop from "@/public/desktop/image-night-arcade.jpg"
import imageSoccerTeamMobile from "@/public/mobile/image-soccer-team.jpg"
import imageSoccerTeamDesktop from "@/public/desktop/image-soccer-team.jpg"
import imageGridMobile from "@/public/mobile/image-grid.jpg"
import imageGridDesktop from "@/public/desktop/image-grid.jpg"
import imageFromAboveMobile from "@/public/mobile/image-from-above.jpg"
import imageFromAboveDesktop from "@/public/desktop/image-from-above.jpg"
import imagePocketBorealisMobile from "@/public/mobile/image-pocket-borealis.jpg"
import imagePocketBorealisDesktop from "@/public/desktop/image-pocket-borealis.jpg"
import imageCuriosityMobile from "@/public/mobile/image-curiosity.jpg"
import imageCuriosityDesktop from "@/public/desktop/image-curiosity.jpg"
import imageFisheyeMobile from "@/public/mobile/image-fisheye.jpg"
import imageFisheyeDesktop from "@/public/desktop/image-fisheye.jpg"

export default function Home() {
  return (
    <main className="z-10 w-full max-w-[90rem] p-6 lg:pl-[10.31rem] lg:pr-[8.9rem]">
      <h1
        className={cn(
          "mt-[6.19rem] max-w-[40.625rem] border-2 border-white p-6 text-[2.5rem] font-light uppercase leading-[1.2.375rem] text-white lg:mt-10 lg:p-10 lg:pb-[1.8rem] lg:text-[4.5rem] lg:leading-[4.375rem]",
          josefinSans.className,
        )}
      >
        Immersive experiences that deliver
      </h1>
      <section className="mt-[20.19rem] md:relative md:mt-[19.12rem]">
        <Image
          src={imageInteractiveMobile}
          alt="Interactive mobile"
          className="mx-auto md:hidden"
        />
        <Image
          src={imageInteractiveDesktop}
          alt="Interactive desktop"
          className="hidden md:block"
        />
        <div className="mt-12 flex flex-col items-center gap-4 px-6 text-center md:absolute md:bottom-0 md:right-0 md:max-w-[34.1rem] md:items-start md:gap-[1.56rem] md:bg-white md:pl-24 md:pr-0 md:pt-24 md:text-left">
          <h2
            className={cn(
              josefinSans.className,
              "text-[2rem] font-light uppercase leading-8 md:text-[3rem] md:leading-[3rem]",
            )}
          >
            The leader in interactive VR
          </h2>
          <p className="text-[0.9375rem] leading-[1.5625rem] opacity-[0.4994]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
      <section className="mt-24 grid grid-cols-1 gap-6 pb-24 md:grid-cols-4 md:pb-[10.2rem] lg:mt-[11.5rem]">
        <h2
          className={cn(
            "pb-6 text-center text-[2rem] font-light uppercase leading-8 md:col-span-3 md:place-self-start md:pb-[3.5rem] md:text-[3rem] md:leading-[3rem]",
            josefinSans.className,
          )}
        >
          Our Creations
        </h2>
        <OurCreationCard
          title="Deep Earth"
          desktopImage={imageDeepEarthDesktop}
          mobileImage={imageDeepEarthMobile}
        />
        <OurCreationCard
          title="Night Arcade"
          desktopImage={imageNightArcadeDesktop}
          mobileImage={imageNightArcadeMobile}
        />
        <OurCreationCard
          title="Soccer Team VR"
          desktopImage={imageSoccerTeamDesktop}
          mobileImage={imageSoccerTeamMobile}
        />
        <OurCreationCard
          title="The Grid"
          desktopImage={imageGridDesktop}
          mobileImage={imageGridMobile}
        />
        <OurCreationCard
          title="From up Above VR"
          desktopImage={imageFromAboveDesktop}
          mobileImage={imageFromAboveMobile}
          className="lg:max-w-[10.25rem]"
        />
        <OurCreationCard
          title="Pocket Borealis"
          desktopImage={imagePocketBorealisDesktop}
          mobileImage={imagePocketBorealisMobile}
        />
        <OurCreationCard
          title="The Curiosity"
          desktopImage={imageCuriosityDesktop}
          mobileImage={imageCuriosityMobile}
        />
        <OurCreationCard
          title="Make it Fisheye"
          desktopImage={imageFisheyeDesktop}
          mobileImage={imageFisheyeMobile}
        />
        <a
          href="#"
          className="mt-2 cursor-pointer place-self-center border border-black px-10 py-3 text-sm uppercase leading-[0.875rem] tracking-[0.3125rem] hover:bg-black hover:text-white md:col-start-4 md:row-start-1 md:mb-[3.75rem] md:mt-0 md:place-self-end lg:px-[2.5rem]"
        >
          See all
        </a>
      </section>
    </main>
  )
}
