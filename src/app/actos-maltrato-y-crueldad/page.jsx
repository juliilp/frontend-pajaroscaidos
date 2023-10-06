import React from "react";
import Image from "next/image";
import Banner from "@/../public/images/Actos de Maltrato y crueldad/ActosdeMaltratoycrueldad.png";
import Section1 from "@/components/actos-maltrato-y-crueldad/Section1";
import Section2 from "@/components/actos-maltrato-y-crueldad/Section2";
import Section3 from "@/components/actos-maltrato-y-crueldad/Section3";
import Section4 from "@/components/actos-maltrato-y-crueldad/Section4";
import Section5 from "@/components/actos-maltrato-y-crueldad/Section5";
import Section6 from "@/components/actos-maltrato-y-crueldad/Section6";
export default function Page() {
  return (
    <article className="mt-[70px]">
      <header className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={Banner} alt="banner-tucan" fill priority />
      </header>
      <section className="font-semibold text-center">
        <h2 className="text-[#0C6410] md:text-2xl pt-8 pb-4">
          ACTOS DE CRUELDAD Y MALTRATO
        </h2>
        <p>
          Existen diversas formas de crueldad y maltrato que sería imposible
          identificarlas a todas, sin embargo, algunas de ellas pueden consistir
          en:
        </p>
      </section>
      <div className="px-6 md:px-24">
        <hr className="w-full my-6 mx-auto h-[5px] bg-[#C2C2C2] rounded" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </article>
  );
}
