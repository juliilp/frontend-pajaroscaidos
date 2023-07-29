import CardForo from "@/components/CardForo";
import React from "react";
import ImagenForo from "../../../public/images/imagen-foro.png";
import { CiClock2 } from "react-icons/ci";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { AiOutlineFileText } from "react-icons/ai";
import NuestraComunidad from "@/components/NuestraComunidad/NuestraComunidad";
import Image from "next/image";
export default function Foros() {
  return (
    <section className="flex w-full flex-col gap-4 justify-center items-center lg:flex-row lg:items-start lg:gap-12 bg-[#e9e8e8] ">
      <div className="bg-[#D9D9D9] rounded-lg w-full max-w-[800px] flex justify-center items-center flex-col my-24">
        <div className="flex gap-6 mt-6 text-[#756F70] justify-around w-full sm:border-b sm:border-white py-4">
          <button className="bg-[#005DAB] py-3 px-3 sm:px-6 max-w text-white  rounded-[20px] flex items-center gap-2 font-semibold">
            <AiOutlineFileText color="white" size={20} />
            Crear foro
          </button>
          <div className="flex gap-4 items-center">
            <CiClock2 size={30} />
            <span className="font-semibold">Recientes</span>
            <IoIosArrowDown size={25} />
          </div>
        </div>
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <div className="flex items-center gap-6 my-8">
          <IoIosArrowBack size={30} className="cursor-pointer" />
          <div className="flex items-center gap-3">
            <span className="text-[#1D4AE9]">1</span>
            <span>de</span>
            <span className="text-[#1D4AE9]">150</span>
          </div>
          <IoIosArrowForward size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="mt-24 flex justify-center items-center flex-col gap-6">
        <Image
          src={ImagenForo}
          alt="imagen"
          className="hidden lg:block"
          width="400px"
        />
        <NuestraComunidad />
      </div>
    </section>
  );
}
