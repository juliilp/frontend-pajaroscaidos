"use client";
import Image from "next/image";
import AboutSection2 from "@/components/Nosotros/AboutSection2";
import AboutSection3 from "@/components/Nosotros/AboutSection3";
import AboutSection4 from "@/components/Nosotros/AboutSection4";
import MainAboutSection from "@/components/Nosotros/MainAboutSection";
import font from "../../styles/fonts.module.css";
export default function page() {
  const image1 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694205614/about_us_1_ydtuk7.png";
  return (
    <div
      className={`${font.baloo} font-semibold  min-h-screen  flex flex-col items-center gap-12 
        lg:text-lg
        xl:text-xl   xl:pt-[1rem]
        2xl:text-2xl 2xl:pt-[2rem]
        `}
    >
      <section className="relative w-screen">
        <Image
          src={image1}
          objectFit="cover"
          width={2256}
          height={666}
          className="w-full h-[22rem] "
        />
      </section>

      <main className="flex items-center flex-col w-full animate-jump-in animate-once animate-duration-[2500ms] text-center gap-12">
        <MainAboutSection />
      </main>

      <section className=" flex flex-col items-center  w-11/12  gap-12">
        <AboutSection2 />
      </section>

      <section
        className=" flex flex-col  items-center w-full gap-12 p-2
             min-[450px]:w-11/12  min-[450px]:p-0
             lg:w-10/12  xl:w-10/12
            "
      >
        <AboutSection3 />
      </section>
      <section className=" w-10/12 grid grid-flow-row grid-cols-2   gap-4 p-5 md:grid-cols-3">
        <AboutSection4 />
      </section>
    </div>
  );
}
