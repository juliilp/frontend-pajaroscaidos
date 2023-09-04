import Image from "next/image";
import React from "react";
import Link from "next/link";

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
          height={500}
          width={500}
          className="object-cover w-full max-w-[350px] h-[300px] rounded-md"
        />
        <p className="w-full max-w-[350px]">{parrafo}</p>
      </div>
      <Link
        href={enlace}
        prefetch={false}
        className="text-center text-white bg-[#128117] py-2 px-4 rounded"
      >
        {nombreEnlace}
      </Link>
    </section>
  );
}
