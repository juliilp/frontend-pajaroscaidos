import Image from "next/image";
import React from "react";

export default function CardComoColaborar({
  titulo,
  image,
  parrafo,
  nombreBoton,
}) {
  return (
    <section className="w-full  max-w-[450px] h-[750px] flex justify-center items-center flex-col gap-12 bg-[#C2C2C2] py-[15px]">
      <span className="text-[#0C6410] text-xl">{titulo}</span>
      <Image
        src={image}
        alt="imagen"
        className="object-cover w-[90%] max-w-[350px] h-[300px] bg-slate-500 "
      />
      <p className="w-[90%] max-w-[350px] max-h-[120px] overflow-hidden overflow-y-auto ">
        {parrafo}
      </p>

      {nombreBoton ? (
        <button
          className={`${
            nombreBoton && "bg-[#128117]"
          } w-[180px] h-[48px] text-center text-white`}
        >
          {nombreBoton}
        </button>
      ) : (
        <div className="w-[180px] h-[48px]" />
      )}
    </section>
  );
}
