import Image from "next/image";
import React from "react";

export default function CardCursos({ titulo, image }) {
  return (
    <section className="w-full max-w-[450px] h-[450px] flex items-center text-center justify-between flex-col bg-[#C2C2C2] py-8 px-6 rounded-md">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="text-[#0C6410] text-xl font-semibold">{titulo}</span>
        <Image
          src={image}
          alt="imagen"
          height={600}
          width={600}
          className="object-cover w-full max-w-[350px] h-[300px] rounded-md"
        />
      </div>
    </section>
  );
}
