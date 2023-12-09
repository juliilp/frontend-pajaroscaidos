"use client";
import Image from "next/image";
import image1 from "@/../public/images/Nosotros/about_us 1.webp";
import AboutSection2 from "@/components/Nosotros/AboutSection2";
import AboutSection3 from "@/components/Nosotros/AboutSection3";
import AboutSection4 from "@/components/Nosotros/AboutSection4";
import MainAboutSection from "@/components/Nosotros/MainAboutSection";
import ComisionDirectiva from "@/components/Nosotros/ComisionDirectiva";

export default function page() {
  return (
    <div className=" min-h-screen flex flex-col items-center gap-6 lg:text-lg xl:text-xl pt-[70px] 2xl:text-2xl">
      <section className="w-full md:px-[10%]">
        <Image src={image1} alt="Image1" width={2000} height={600} priority />
      </section>

      <main className="flex items-center flex-col w-11/12 text-center gap-6">
        <MainAboutSection />
      </main>

      <section className="flex flex-col items-center w-11/12 gap-6">
        <AboutSection2 />
      </section>

      <section className="flex flex-col items-center w-full gap-12 p-2 min-[450px]:w-11/12 min-[450px]:p-0 lg:w-10/12 xl:w-10/12">
        <AboutSection3 />
      </section>
      <section
        className=" bg-lightgray flex flex-col  gap-2 w-full  sm:w-11/12 md:w-9/12 xl:w-8/12 
       lg:w-8/12 p-2 items-center mb-4"
      >
        <ComisionDirectiva />
      </section>
      {/* <section className="w-10/12 grid grid-flow-row grid-cols-2 gap-4 p-5 md:grid-cols-3">
        <AboutSection4 />
      </section> */}
    </div>
  );
}
