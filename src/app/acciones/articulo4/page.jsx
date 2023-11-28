import Image from "next/image";
import bgimage from "@/../public/images/Feria Villa Dominico/villa-dominico-BG.webp";
import ArraySection from "@/components/Acciones/Articulo4/ArraySection";

export default function page() {
  return (
    <section className=" font-semibold min-h-screen flex flex-col items-center pt-[70px] pb-12">
      <article className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={bgimage} alt="bg-tucan" fill priority />
      </article>
      {ArraySection.map(({ componente }, key) => {
        return (
          <article
            key={key}
            className="flex flex-col items-center w-11/12 gap-6 mt-6"
          >
            {componente}
          </article>
        );
      })}
    </section>
  );
}
