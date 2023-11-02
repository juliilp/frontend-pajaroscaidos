import Image from "next/image";
import React from "react";

export default function CardVoluntario({ imagen, titulo, onClick }) {
  return (
    <div className="hidden md:block ">
      <div
        className="w-44 h-44 border border-gray-300 p-4 transition-transform hover:scale-105 relative rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <Image
          src={imagen}
          alt="Imagen"
          width={500}
          height={500}
          className="w-full h-full object-cover absolute inset-0 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-70 opacity-0 transition-opacity hover:opacity-100 border rounded-lg ">
          <h3 className="text-2xl font-bold text-white">{titulo}</h3>
        </div>
      </div>
    </div>
  );
}
