"use client";
import Image from "next/image";
import image1 from "../../../public/images/voluntarios1.png";
import image2 from "../../../public/images/Emma.png";

export default function Voluntarios() {
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

      <div class="hidden md:block">
        <div className="w-64 h-64 border border-gray-300 p-4 transition-transform hover:scale-105 relative rounded-lg  ">
          <Image
            src={image2}
            alt="Imagen"
            className="w-full h-full object-cover absolute inset-0 rounded-lg "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-70 opacity-0 transition-opacity hover:opacity-100 border rounded-lg ">
            <h3 className="text-2xl font-bold text-white">Título</h3>
            <p className="text-white">Texto</p>
          </div>
        </div>
      </div>

      <div class="md:hidden">
        <div class="flex p-4 border rounded-lg shadow-md">
          <div class="w-1/3 pr-4">
            <Image src={image2} alt="Imagen" class="w-full h-auto rounded-lg" />
          </div>
          <div class="w-2/3">
            <h2 class="text-2xl font-bold mb-2">Título de la Tarjeta</h2>
            <p class="text-gray-700">
              Este es el contenido de la tarjeta. Puede ser cualquier texto que
              desees mostrar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
