"use client"
import MainCazatrafico from "@/components/Caza-trafico/MainCaza-trafico";
import Section2Caza_Trafico from "@/components/Caza-trafico/Section2Caza-trafico";
import Image from "next/image";
import image1 from '../../../public/images/caza_trafico 1.png'
import image2 from '../../../public/images/caza_trafico 2.png'
import image3 from '../../../public/images/caza_trafico 3.png'
import image4 from '../../../public/images/caza_trafico 4.png'

export default function page() {
    return (
        <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">

            <section className="w-full  h-fit md:h-[14rem] relative bg-black ">
                <article >
                    <Image src={image1}
                    sizes="(max-width:768px)2rem, 100%"
                        alt="background"
                        fill
                     className="hidden md:block"
                    />
                   <Image src={image1}
                        alt="background"
                        className="w-full h-[10rem]  md:hidden"
                    />
                </article>

                {/* <article className="absolute text-white h-[3rem] bottom-0 text-center w-full">
                    <h1 className=" uppercase text-4xl   font-black">Caza y trafico de fauna - mascotismo</h1>
                </article> */}

            </section>

            <main className="w-full flex flex-col items-center gap-12 ">
                <MainCazatrafico images={[image2,image3,image4]} />
            </main>

            <section className="flex items-center justify-around bg-lightgray w-10/12 py-20 px-6">
                <Section2Caza_Trafico />
            </section>
        </div>
    )
}