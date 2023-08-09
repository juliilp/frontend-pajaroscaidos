"use client"
import Image from "next/image";
import image1 from '../../../public/images/about_us 1.png'

import AboutSection2 from "@/components/Nosotros/AboutSection2";
import AboutSection3 from "@/components/Nosotros/AboutSection3";
import AboutSection4 from "@/components/Nosotros/AboutSection4";
import MainAboutSection from "@/components/Nosotros/MainAboutSection";
import font from '../../styles/fonts.module.css'
export default function page() {

    return (
        <div className={`${font.baloo} font-semibold  min-h-screen  flex flex-col items-center gap-12 
        lg:text-lg
        xl:text-xl   xl:pt-[1rem]
        2xl:text-2xl 2xl:pt-[2rem]
        `}>

            <section className="h-[18rem] 2xl:h-[23rem]  bg-black relative w-full">
                <Image src={image1} objectFit="cover" layout="fill" />
            </section>

            <main className="flex items-center flex-col w-full animate-jump-in animate-once animate-duration-[2500ms] text-center gap-12">
                <MainAboutSection />
            </main>

            <section className=" flex flex-col items-center  w-11/12  gap-12">
                <AboutSection2 />
            </section>

            <section className=" flex flex-col  items-center w-full gap-12 p-2
             min-[450px]:w-11/12  min-[450px]:p-0
             lg:w-10/12  xl:w-10/12
            ">
                <AboutSection3 />
            </section>
            <section className=" w-10/12 grid grid-flow-row grid-cols-2   gap-4 p-5 md:grid-cols-3">
                <AboutSection4 />
            </section>


        </div>
    )
}
