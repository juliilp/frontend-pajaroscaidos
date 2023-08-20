import React from "react";

export default function MenuInterno({ opciones, tamaño }) {
  return (
    <ul
      className={`flex flex-col gap-2 w-full md:bg-[#3D3D3D] md:text-center ${tamaño}`}
    >
      {opciones.map((opcion, index) => (
        <li className="justify-self-start py-2" key={index}>
          {opcion}
        </li>
      ))}
    </ul>
  );
}
