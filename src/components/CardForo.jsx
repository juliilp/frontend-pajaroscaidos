import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
export default function CardForo({ titulo, tiempo, user, like, message }) {
  return (
    <div className=" flex w-[95%] h-[150px]  items-center justify-center shadow-cardForo sm:shadow-none sm:border-b sm:border-white ">
      {/* Supuesta imagen */}
      <div className=" flex-[2] h-full w-2/6 p-3 justify-center items-center flex ">
        <div className="bg-slate-600 w-[100%] max-w-[80px] h-[70px] sm:max-w-[120px] sm:h-[100px] lg:max-w-[150px] lg:h-[120px] rounded-2xl" />
      </div>

      <div className="w-4/6 h-[100px] flex flex-col px-3 gap-1 justify-center font-inter ">
        <h2 className="font-bold  text-lg sm:text-2xl">{titulo}</h2>
        <span>
          <b className="text-[#2594EF] cursor-pointer ">Foro</b> - {tiempo} por
          <b className="text-[#2594EF] cursor-pointer "> {user}</b>
        </span>
        <div className="flex gap-6 self-end sm:self-start pr-6">
          <div className="flex gap-2 ">
            <IoMdHeartEmpty
              color="#E11447"
              size={25}
              className="cursor-pointer"
            />
            <span className="text-[#AA153A] font-semibold text-lg ">
              {like}
            </span>
          </div>
          <div className="flex  gap-2">
            <RiMessage2Line
              color="#0C6410"
              size={25}
              className="cursor-pointer"
            />
            <span className="text-[#0C6410] font-semibold text-lg self-end ">
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
