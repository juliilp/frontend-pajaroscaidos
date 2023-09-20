import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banners({ imagen, titulo, boton }) {
  return (
    <section className="bg-[#ccc] w-[25%] flex flex-col rounded-md">
      <Image
        src={imagen}
        width={150}
        alt="prueba"
        className=" w-full h-[100px] rounded-md"
      />
      <div className="p-2">
        <span>{titulo}</span>
        <div className="flex justify-end">
          <Link
            href="#"
            className="bg-[#D22929] rounded flex justify-center items-center h-8 w-20 text-white"
          >
            <button>{boton}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banners;