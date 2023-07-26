import React from "react";

export default function Campañas({ fecha, texto }) {
  return (
    <section className="w-full flex flex-col justify-center items-center border">
      <div className="flex flex-col w-[100%] max-w-[365px] font-roboto ">
        {/* Imagen */}
        <div className="bg-slate-500 w-[100%]  h-[250px] max-w-[400px] m-auto " />
        <span className="text-[#727272] mt-4">{fecha}</span>
        <h1 className="font-bold text-xl my-4 ">Campañas</h1>
        <p>{texto}</p>
      </div>
    </section>
  );
}
