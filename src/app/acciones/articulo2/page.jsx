import MainSectionArticulo2 from "@/components/Acciones/Articulo2/MainSectionArticulo2";
import Section2Articulo2 from "@/components/Acciones/Articulo2/Section2Articulo2";
import Section3Articulo2 from "@/components/Acciones/Articulo2/Section3Articulo2";
import Section4Articulo2 from "@/components/Acciones/Articulo2/Section4Articulo2";
import Image from "next/image";
import font from "../../../styles/fonts.module.css";
export default function page() {
  const image1 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694034705/villa-dominico-1_zawprs.png";
  const image2 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694034733/villa-dominico-2_e6vfnt.png";
  const image3 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694035325/villa-dominico-3_lqdc0i.png";
  const image4 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694035501/villa-dominico-4_bhtr6u.png";
  const image5 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694035664/villa-dominico-5_myo4bq.png";
  return (
    <div
      className={`${font.baloo} font-semibold min-h-screen flex flex-col items-center pt-[70px] gap-12 pb-12`}
    >
      <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1694034592/villa-dominico-BG_f4jgws.png"
          alt="bg-tucan"
          fill
          className=""
        />
      </section>
      <main className="flex flex-col items-center w-11/12 gap-12">
        <MainSectionArticulo2 image1={image1} image2={image2} />
      </main>
      <section className="flex flex-col w-11/12 items-center gap-12">
        <Section2Articulo2 image={image3} />
      </section>
      <section className="flex flex-col w-11/12 items-center gap-12">
        <Section3Articulo2 image={image4} />
      </section>
      <section className="flex flex-col w-11/12 items-center gap-12">
        <Section4Articulo2 image={image5} />
      </section>
    </div>
  );
}
