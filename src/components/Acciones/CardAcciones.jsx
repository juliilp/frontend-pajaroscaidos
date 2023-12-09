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
  textoPersonalizado,
}) {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 md:gap-0 md:grid md:grid-cols-2">
      <h2 className="text-[#0C6410] font-semibold md:hidden text-2xl">
        {titulo}
      </h2>
      <Image
        className={`w-[95%] px-[2.5%] max-w-[450px] md:w-full md:max-w-[350px] lg:max-w-[450px] xl:max-w-[550px] h-[300px] lg:h-[350px] object-cover md:justify-self-center ${distanciaImagen}`}
        alt="imagen"
        src={image}
      />
      <p className="max-w-[550px] px-4 md:hidden">{texto}</p>
      <Link
        className=" flex justify-center min-w-[8rem] items-center text-center text-white bg-[#128117] px-4 h-[40px] w-[40%] md:w-[25%] rounded hover:bg-[#13b113] duration-200 md:hidden"
        href={redireccion}
        prefetch={false}
      >
        Saber más
      </Link>
      <article
        className={`${className} flex flex-col gap-8 md:justify-self-center ${distanciaDiv} hidden md:block `}
      >
        <h2 className="text-[#0C6410] font-semibold  text-center text-2xl">
          {titulo}
        </h2>
        <p className={`max-w-[500px]  px-4 `}>{texto}</p>
        <div className="w-full justify-center items-center flex">
          <Link
            className=" flex justify-center min-w-[8rem] items-center text-center text-white bg-[#128117] px-4 h-[40px] w-[40%] md:w-[25%] rounded hover:bg-[#13b113] duration-200"
            href={redireccion}
            prefetch={false}
          >
            Saber más
          </Link>
        </div>
      </article>
    </section>
  );
}
