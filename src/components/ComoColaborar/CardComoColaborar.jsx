import Image from "next/image";
import React from "react";

export default function CardComoColaborar({
  titulo,
  image,
  parrafo,
  nombreEnlace,
  enlace,
}) {
  return (
    <section className="w-full max-w-[450px] h-[750px] flex items-center justify-between flex-col ga bg-[#C2C2C2] py-8 px-6 rounded-md">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-[#0C6410] text-xl font-semibold">{titulo}</span>
        <Image
          src={image}
          alt="imagen"
          className="object-cover w-full h-full rounded-md "
        />
        <p className="w-full max-w-[350px]">{parrafo}</p>
      </div>
      <a
        target="_blank"
        href={enlace}
        className="text-center text-white bg-[#128117] py-2 px-4 rounded hover:bg-[#00812b] duration-200"
      >
        {nombreEnlace}
      </a>
    </section>
  );
}
