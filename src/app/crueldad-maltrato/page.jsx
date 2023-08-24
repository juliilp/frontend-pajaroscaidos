"use client";
import TituloCrueldadMaltrato from "../../components/CrueldadMaltrato/TituloCrueldadMaltrato";
import TarjetaCrueldadMaltrato from "../../components/CrueldadMaltrato/Tarjetas";
import Image from "next/image";
import image1 from "../../../public/images/crueldad-maltrato.png";

export default function page() {
  return (
    <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full h-[14rem] md:h-[14rem] relative">
        <article className="max-w-screen-xl mx-auto">
          <Image
            src={image1}
            alt="background"
            fill
            className="hidden md:block object-cover w-full h-full"
          />
          <Image
            src={image1}
            alt="background"
            className="w-full h-[14rem] md:hidden object-cover absolute"
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
