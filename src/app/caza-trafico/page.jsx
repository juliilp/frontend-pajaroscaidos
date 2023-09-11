"use client";
import MainCazatrafico from "@/components/Caza-trafico/MainCaza-trafico";
import Section2Caza_Trafico from "@/components/Caza-trafico/Section2Caza-trafico";
import Image from "next/image";

export default function page() {
  const image1 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038477/caza_trafico_1_mqmfnm.png";
  const image2 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038713/caza_trafico_2_lnjior.png";
  const image3 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038723/caza_trafico_3_t6bjif.png";
  const image4 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038734/caza_trafico_4_t8d84d.png";
  return (
    <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="relative w-screen">
        <Image
          src={image1}
          alt="banner"
          width={1803}
          height={475}
          priority={true}
          className="w-full h-[16rem]"
        />
      </section>

      <main className="w-full flex flex-col items-center gap-12 ">
        <MainCazatrafico images={[image2, image3, image4]} />
      </main>

      <section
        className="flex flex-col w-full gap-12  items-center justify-around  bg-lightgray  py-20  md:px-6
            md:flex-row md:gap-0 md:w-10/12"
      >
        <Section2Caza_Trafico />
      </section>
    </div>
  );
}
