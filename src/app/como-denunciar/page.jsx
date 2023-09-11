import ComoDenunciarFirstSection from "@/components/ComoDenunciar/ComoDenunciarFirstSection";
import ComoDenunciarMainSection from "@/components/ComoDenunciar/ComoDenunciarMainSection";
import ComodenunciarSecondSection from "@/components/ComoDenunciar/ComoDenunciarSecondSection";
import ComoDenunciarThirdSection from "@/components/ComoDenunciar/ComoDenunciarThirdSection";
import Image from "next/image";
import font from "../../styles/fonts.module.css";
export default function page() {
  const bgimage1 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038986/como-denunciar-image1_lqhe2x.png";
  const bgimage2 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694038991/como-denunciar-image2_ckgaa6.png";
  const image3 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694039070/como-denunciar-image3_nq7yvl.png";
  const image4 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694039076/como-denunciar-image4_gtpbox.png";
  return (
    <div
      className={` ${font.baloo}  break-words font-semibold  flex flex-col items-center gap-14 w-full pt-[70px] pb-[5rem] sm:text-sm  md:text-base xl:text-xl 2xl:text-2xl `}
    >
      <section className="relative w-screen">
        <Image
          src={bgimage1}
          alt="bg-image-1"
          width={1822}
          height={460}
          className="w-full h-[16rem]"
          property={true}
        />
      </section>
      <main className="flex flex-col gap-8 w-11/12">
        <ComoDenunciarMainSection />
      </main>
      <section className="flex flex-col items-center w-11/12 gap-8 md:gap-0 md:flex-row md:justify-between  md:items-stretch  ">
        <ComoDenunciarFirstSection />
      </section>
      <section className="relative w-screen">
        <Image
          src={bgimage2}
          alt="bg-img"
          width={3078}
          height={538}
          className="w-full h-[14rem]"
        />
      </section>
      <section className="w-11/12 flex justify-between  flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between  md:items-stretch  ">
        <ComodenunciarSecondSection />
      </section>
      <section className="w-11/12 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <article className=" w-9/12 md:w-5/12">
          <Image
            src={image3}
            alt="Pajaros-caidos-imgs"
            width={1280}
            height={850}
          />
        </article>
        <article className="   w-9/12 md:w-5/12">
          <Image
            src={image4}
            className="m-auto md:m-0"
            alt="Pajaros-caidos-imgs"
            width={414}
            height={276}
          />
        </article>
      </section>
      <section className="w-11/12 flex flex-col gap-8 ">
        <ComoDenunciarThirdSection />
      </section>
    </div>
  );
}
