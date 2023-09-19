import Image from "next/image";
import React from "react";

function Banners({ imagen, fecha, titulo }) {
  return (
    <section className="bg-[#ccc] w-[20%] flex flex-col rounded-md">
      <div className=" flex justify-center p-2">
        <Image
          src={imagen}
          width={150}
          alt="prueba"
          className=" w-[90%] h-[120px]"
        />
      </div>
      <div className="p-2 flex flex-col items-center text-[#727272] text-sm">
        <span>{fecha}</span>
        <div className="flex flex-col font-bold text-xl text-black">
          <span>{titulo}</span>
        </div>
      </div>
    </section>
  );
}

export default Banners;
