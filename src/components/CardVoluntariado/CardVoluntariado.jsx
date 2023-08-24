import Image from "next/image";
import React from "react";

export default function CardVoluntariado({
  titulo,
  imagen,
  parrafo,
  Livisible,
  li1,
  li2,
  li3,
  Parrafo2visible,
  parrafo2,
  className,
}) {
  return (
    <section
      className={`  flex flex-col items-center justify-center bg-[#C2C2C2] md:flex-row max-w-[976px] h-full  md:mx-8 py-8 px-4  md:gap-16`}
    >
      <Image
        src={imagen}
        alt="imagen"
        className=" max-w-[350px] h-[350px] object-cover hidden md:block mx-auto"
      />
      <div className="md:flex md:flex-col gap-12 md:gap-4">
        <h2 className="text-[#0C6410] text-xl text-center">{titulo}</h2>
        <Image
          src={imagen}
          alt="imagen"
          className=" max-w-[300px] h-[200px] object-cover md:hidden mx-auto my-6"
        />
        <p className="max-w-[530px] pl-6">{parrafo}</p>
        {Livisible && (
          <ul className="pl-8 list-disc md:pl-4  flex flex-col gap-4 ">
            {li1 && <li>{li1}</li>}
            {li2 && <li>{li2}</li>}
            {li3 && <li>{li3}</li>}
          </ul>
        )}
        {Parrafo2visible && <p>{parrafo2}</p>}
      </div>
    </section>
  );
}
