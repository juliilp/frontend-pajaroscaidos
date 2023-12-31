"use client";
import MainCazatrafico from "@/components/Caza-trafico/MainCaza-trafico";
import Section2Caza_Trafico from "@/components/Caza-trafico/Section2Caza-trafico";
import Image from "next/image";
import image1 from "../../../public/images/Caza y trafico/caza_trafico 1.webp";
import image2 from "../../../public/images/Caza y trafico/caza_trafico 2.webp";
import image3 from "../../../public/images/Caza y trafico/caza_trafico 3.webp";
import image4 from "../../../public/images/Caza y trafico/caza_trafico 4.webp";

export default function page() {
  return (
    <div className=" font-baloo min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full md:px-[10%]">
        <Image
          src={image1}
          alt="banner"
          width={2000}
          height={600}
          priority
        />
      </section>

      <main className="w-full flex flex-col items-center gap-12   ">
        <MainCazatrafico images={[image2, image3, image4]} />
      </main>

      <section className="bg-lightgray flex flex-col w-full gap-12 items-center justify-around py-8 md:px-6 md:flex-row md:gap-0 md:w-10/12">
        <Section2Caza_Trafico />
      </section>
    </div>
  );
}
