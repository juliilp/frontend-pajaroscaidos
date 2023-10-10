import Link from "next/link";
import React from "react";

export default function CardTiroAlPichon({
  titulo,
  parrafo,
  visibleBoton,
  listaVisible,
}) {
  return (
    <section className="w-full max-w-[450px] lg:h-[460px] bg-[#C2C2C2] p-8 flex flex-col gap-5 rounded-lg">
      <h2 className="text-[#0C6410] text-center font-semibold md:text-xl rounded-md ">
        {titulo}
      </h2>
      <p>{parrafo}</p>
      {listaVisible && (
        <ul>
          <li>
            Provincia de Buenos Aires:{" "}
            <span className="underline">Ley Nº 11.406</span>
          </li>
          <li>
            Ciudad de Buenos Aires: <span>Ley Nº 11.577/1940</span>
          </li>
          <li>
            Córdoba: <span className="underline">Ley Nº 8625</span>
          </li>
          <li>
            Santa Fe: <span className="underline">Ley Nº 12.556</span>
          </li>
          <li>
            Formosa: <span className="underline">Ley Nº 1076</span>
          </li>
          <li>
            San Juan: <span className="underline">Ley 6141</span>
          </li>
          <li>
            Rosario: <span className="underline">Ordenanza Nº 7445/2002</span>
          </li>
          <li>
            General Pico:
            <span className="underline">Ordenanza Nº 93/2002</span>
          </li>
        </ul>
      )}
      {visibleBoton && (
        <div className="w-full flex justify-center items-center cursor-pointer">
          <Link
            href="/acciones/articulo3"
            className="bg-[#128117] text-white py-2 px-6 justify-self-center w-max rounded-lg"
            prefetch={false}
          >
            Saber más
          </Link>
        </div>
      )}
    </section>
  );
}
