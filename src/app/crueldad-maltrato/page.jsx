"use client";
import TituloCrueldadMaltrato from "../../components/CrueldadMaltrato/TituloCrueldadMaltrato";
import TarjetaCrueldadMaltrato from "../../components/CrueldadMaltrato/Tarjetas";
import Image from "next/image";

export default function page() {
  const image1 =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694040856/crueldad-maltrato_mxtisn.png";
  return (
    <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full h-[14rem] md:h-[14rem] relative">
        <article className="relative w-screen">
          <Image
            src={image1}
            alt="background"
            width={2880}
            height={870}
            className="w-full h-[16rem] "
          />
        </article>
      </section>

      <section>
        <TituloCrueldadMaltrato />
      </section>
      <section>
        <TarjetaCrueldadMaltrato />
      </section>
    </div>
  );
}
