"use client";
import Image from "next/image";
import ComoDenunciarFirstSection from "@/components/ComoDenunciar/ComoDenunciarFirstSection";
import ComoDenunciarMainSection from "@/components/ComoDenunciar/ComoDenunciarMainSection";
import ComodenunciarSecondSection from "@/components/ComoDenunciar/ComoDenunciarSecondSection";
import ComoDenunciarThirdSection from "@/components/ComoDenunciar/ComoDenunciarThirdSection";
import banner from "@/../public/images/ComoDenunciar/como-denunciar-image1.webp";
import bgimage2 from "@/../public/images/ComoDenunciar/como-denunciar-image2.webp";
import image3 from "@/../public/images/ComoDenunciar/como-denunciar-image3.webp";
import image4 from "@/../public/images/ComoDenunciar/como-denunciar-image4.webp";

export default function Page() {
  return (
    <div
      className={`break-words  flex flex-col items-center gap-14 w-full pt-[70px] pb-[5rem] sm:text-sm md:text-base xl:text-xl 2xl:text-2xl`}
    >
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>

      <main className="flex flex-col gap-8 w-11/12">
        <ComoDenunciarMainSection />
      </main>
      <section className="flex flex-col items-center w-11/12 pl-[20px] gap-40 md:flex-row md:justify-between  md:items-stretch">
        <ComoDenunciarFirstSection />
      </section>
      <div className="w-full  px-[10%]">
        <section className="w-full hidden  md:block relative h-[15rem]">
          <Image src={bgimage2} alt="bg-img" fill />
        </section>
      </div>
      <section className="w-11/12 flex justify-between  flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between  md:items-stretch">
        <ComodenunciarSecondSection />
      </section>
      <section className="w-11/12 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <article className=" w-9/12 md:w-5/12">
          <Image src={image3} alt="Pajaros-caidos-imgs" />
        </article>
        <article className="w-9/12 md:w-5/12">
          <Image src={image4} className="m-auto md:m-0" alt="Pajaros-caidos-imgs" />
        </article>
      </section>
      <section className="w-11/12 flex flex-col gap-8">
        <ComoDenunciarThirdSection />
      </section>
    </div>
  );
}
