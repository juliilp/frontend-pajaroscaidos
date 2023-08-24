import React from "react";

export default function PostComunidad() {
  return (
    <>
      {/* Background bg-[#CDCDCD] */}
      <div className="flex flex-col gap-8 bg-[#BDBDBD] py-6">
        <div className="flex gap-2 items-center text-xl pl-5">
          <span>Img</span>
          <span className="text-[#707070] font-baloo   font-semibold">
            Juan Morales
          </span>
        </div>
        <p className="text-[#707070] font-baloo  font-semibold text-xl pl-5">
          Logramos liberar 25 aves que se encontran en cautiverio. Gracias
          compañeros
        </p>
        <div className="flex w-full justify-center items-center ">
          <div className="w-full max-w-[300px] border-2 h-[200px] bg-slate-500">
            Img
          </div>
        </div>
      </div>
    </>
  );
}
