import Image from "next/image";
import ComoDenunciarFirstSection from "@/components/ComoDenunciar/ComoDenunciarFirstSection";
import ComoDenunciarMainSection from "@/components/ComoDenunciar/ComoDenunciarMainSection";
import ComodenunciarSecondSection from "@/components/ComoDenunciar/ComoDenunciarSecondSection";
import ComoDenunciarThirdSection from "@/components/ComoDenunciar/ComoDenunciarThirdSection";
import bgimage1 from "../../../public/images/como-denunciar-image1.png";
import bgimage2 from "../../../public/images/como-denunciar-image2.png";
import image3 from "../../../public/images/como-denunciar-image3.png";
import image4 from "../../../public/images/como-denunciar-image4.png";

export default function page() {
  return (
    <div
      className={`break-words  flex flex-col items-center gap-14 w-full pt-[70px] pb-[5rem] sm:text-sm md:text-base xl:text-xl 2xl:text-2xl`}
    >
      <section className="w-full relative h-[7rem] min-[300px]:h-[9rem] min-[450px]:h-[10rem]  min-[550px]:h-[12rem] md:h-[15rem]">
        <Image src={bgimage1} alt="bg-image-1" fill />
      </section>
      <main className="flex flex-col gap-8 w-11/12">
        <ComoDenunciarMainSection />
      </main>
      <section className="flex flex-col items-center w-11/12 gap-8 md:gap-0 md:flex-row md:justify-between md:items-stretch">
        <ComoDenunciarFirstSection />
      </section>
      <section className="w-full hidden  md:block relative h-[15rem]">
        <Image src={bgimage2} alt="bg-img" fill />
      </section>
      <section className="w-11/12 flex justify-between  flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between  md:items-stretch">
        <ComodenunciarSecondSection />
      </section>
      <section className="w-11/12 flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
        <article className=" w-9/12 md:w-5/12">
          <Image src={image3} alt="Pajaros-caidos-imgs" />
        </article>
        <article className="w-9/12 md:w-5/12">
          <Image
            src={image4}
            className="m-auto md:m-0"
            alt="Pajaros-caidos-imgs"
          />
        </article>
      </section>
      <section className="w-11/12 flex flex-col gap-8">
        <ComoDenunciarThirdSection />
      </section>
    </div>
  );
}
