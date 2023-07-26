import React from "react";

export default function Campañas({ fecha, texto }) {
  return (
    <section className="flex flex-col h-full items-center">
      <div className="flex flex-col w-[100%] max-w-[300px] h-max font-roboto ">
        {/* Imagen */}
        <div className="bg-slate-500 w-[100%]  h-[250px] max-w-[300px] m-auto " />
        <span className="text-[#727272] mt-4">{fecha}</span>
        <h1 className="font-bold text-2xl my-4 ">Campañas</h1>
        <p>{texto}</p>
      </div>
    </section>
  );
}
