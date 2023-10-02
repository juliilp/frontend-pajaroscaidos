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
        <div className="w-1/3 pr-4">
          <Image
            src={LoadingImagen}
            alt="Imagen"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl font-bold mb-2">Soy titulo</h2>
          <p className="text-gray-700">Soy texto</p>
        </div>
      </article>
    </section>
  );
}
