import Image from "next/image";
import React from "react";
import LoadingImagen from "@/../public/images/Voluntarios/ImagenLoading.png";
import Spinner from "./Loading";
export default function CardVoluntarioLoading() {
  return (
    <section>
      <article className=" hidden md:block  w-44 mx-12 h-44 border border-gray-300 p-4 transition-transform relative rounded-lg">
        <Image
          src={LoadingImagen}
          alt="Imagen"
          width={500}
          height={500}
          className="w-full h-full object-cover absolute inset-0 rounded-lg "
        />
        <Spinner />
      </article>

      <article className="flex p-4 border rounded-lg shadow-md md:hidden">
        <article className="w-1/3 pr-4 relative">
          <Image
            src={LoadingImagen}
            alt="Imagen"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
          <Spinner />
        </article>
        <article className="w-2/3">
          <div className="h-[24px] w-[104px] animate-pulse bg-neutral-400 rounded-full mb-2" />
          <div className="w-[64px] animate-pulse h-[15px] bg-neutral-400 rounded-full" />
        </article>
      </article>
    </section>
  );
}
