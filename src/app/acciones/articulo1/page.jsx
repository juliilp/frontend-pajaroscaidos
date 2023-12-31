"use client";
import MainSectionArticulo1 from "@/components/Acciones/Articulo1/MainSectionArticulo1";
import image1 from "@/../public/images/Acciones/ImagenDeCoco.jpg";
import imageBG from "@/../public/images/Acciones/Articulo3/Action_Tucan_BG.webp";
import Image from "next/image";

export default function Page() {
  const videoID = "jOGVnZJlURU";
  return (
    <div className="min-h-screen flex flex-col items-center mt-[70px] gap-8 pb-8">
      <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={imageBG} alt="bg-tucan" fill priority />
      </section>
      <h1 className="text-[#0C6410] text-2xl font-semibold">
        Historia de coco el mono
      </h1>
      <main className="flex w-full md:w-11/12 justify-center">
        <MainSectionArticulo1 image={image1} />
      </main>
    </div>
  );
}
