import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardAcciones({
  titulo,
  texto,
  image,
  className,
  distanciaImagen,
  distanciaDiv,
  redireccion,
}) {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-12 md:gap-0 md:grid md:grid-cols-2">
      <h2 className="text-[#0C6410] font-semibold md:hidden ">{titulo}</h2>
      <Image
        className={`w-[95%] px-[2.5%] max-w-[450px] md:w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] h-[300px] lg:h-[350px] object-cover md:justify-self-center ${distanciaImagen}`}
        alt="imagen"
        src={image}
      />
      <div
        className={`${className} flex flex-col gap-12 md:justify-self-center ${distanciaDiv} `}
      >
        <h2 className="text-[#0C6410] font-semibold hidden md:block text-center">
          {titulo}
        </h2>
        <p className="font-semibold max-w-[550px] px-4 ">{texto}</p>
        <div className="w-full justify-center items-center flex">
          <Link
            className="bg-[#128117] py-5 px-16 md:py-3 md:px-12 text-white justify-self-center w-max rounded"
            href={redireccion}
          >
            saber más
          </Link>
        </div>
      </div>
    </section>
  );
}
