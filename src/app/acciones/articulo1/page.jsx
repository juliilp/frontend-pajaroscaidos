"use client";
import MainSectionArticulo1 from "@/components/Acciones/Articulo1/MainSectionArticulo1";
import Image from "next/image";
import YoutubePlay from "@/components/YoutubePlay/YoutubePLay";
export default function page() {
  const videoID = "jOGVnZJlURU";
  return (
    <div className="min-h-screen flex flex-col items-center mt-[70px] gap-12 pb-4">
      <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1693944905/Action_Tucan_BG_cwhsna.png"
          alt="bg-tucan"
          fill
          className=""
        />
      </section>
      <h1>GEGE VOLVIO A LA SELVA</h1>
      <main className="flex w-full md:w-11/12  justify-center">
        <MainSectionArticulo1 />
      </main>
      <section className=" w-9/12 h-[20rem] md:w-10/12 md:h-[25rem] xl:w-11/12 xl:h-[30rem] 2xl:w-full 2xl:h-[35rem] justify-center items-center">
        <YoutubePlay videoID={videoID} />
      </section>
    </div>
  );
}
