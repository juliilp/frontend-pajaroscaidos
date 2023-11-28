"use client";
import MainSectionArticulo3 from "@/components/Acciones/Articulo3/MainSectionArticulo3";
import image1 from "@/../public/images/Acciones/Articulo1/Action_Tucan.webp";
import imageBG from "@/../public/images/Acciones/Articulo1/Action_Tucan_BG.webp";
import Image from "next/image";
import YoutubePlay from "@/components/YoutubePlay/YoutubePLay";

export default function Page() {
  const videoID = "jOGVnZJlURU";
  return (
    <div className="min-h-screen flex flex-col items-center mt-[70px] gap-8 pb-8">
      <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={imageBG} alt="bg-tucan" fill priority />
      </section>
      <h1 className="text-[#0C6410] text-2xl font-semibold">
        GEGE VOLVIO A LA SELVA
      </h1>
      <main className="flex w-full md:w-11/12 justify-center">
        <MainSectionArticulo3 image={image1} />
      </main>
      <section className=" w-9/12 h-[20rem] md:w-10/12 md:h-[25rem] xl:w-11/12 xl:h-[30rem] 2xl:w-full 2xl:h-[35rem] justify-center items-center">
        <YoutubePlay videoID={videoID} />
      </section>
    </div>
  );
}
