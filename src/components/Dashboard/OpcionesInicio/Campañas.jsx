import Image from "next/image";
import React from "react";
import formatDate from "@/helpers/FormatDate";

function Campañas({ toggleModal, campañas }) {
  return (
    <>
      {campañas.map((campaña) => (
        <section
          className="bg-[#ccc] w-[30%] h-[250px] flex flex-col rounded-md cursor-pointer text-center"
          onClick={() => toggleModal(campaña)}
          key={campaña.id}
        >
          <div className=" flex justify-center p-2">
            <Image
              src={campaña.image[0].secure_url}
              width={150}
              height={200}
              alt="prueba"
              className=" w-[90%] h-[120px]"
            />
          </div>
          <div className="p-2 flex flex-col items-center text-[#727272] text-sm">
            <span>{formatDate(campaña.createdAt)}</span>
            <div className="flex flex-col font-bold text-xl text-black">
              <span>{campaña.title}</span>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Campañas;
