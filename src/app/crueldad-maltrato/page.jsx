"use client";
import TituloCrueldadMaltrato from "../../components/CrueldadMaltrato/TituloCrueldadMaltrato";
import TarjetaCrueldadMaltrato from "../../components/CrueldadMaltrato/Tarjetas";
import Image from "next/image";
import image1 from "../../../public/images/crueldad-maltrato.png";

export default function page() {
  return (
    <div className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full  h-fit md:h-[14rem] relative bg-black ">
        <article>
          <Image
            src={image1}
            alt="background"
            fill
            className="hidden md:block"
          />
          <Image
            src={image1}
            alt="background"
            className="w-full h-[10rem]  md:hidden"
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
