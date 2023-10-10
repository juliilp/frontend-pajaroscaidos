import React from "react";
import Image from "next/image";
import formatDate from "@/helpers/FormatDate";

function ViewMobile({ campañas, setNewsPerPage }) {
  setNewsPerPage = 1;
  return (
    <>
      {campañas.map((campaña) => (
        <section
          className="bg-[#ccc] w-full h-[250px] flex flex-col rounded-md cursor-pointer text-center sm:hidden"
          onClick={() => toggleModalPut(campaña)}
          key={campaña.id}
        >
          <div className=" flex justify-center p-2">
            <Image
              src={campaña.image[campaña.image.length - 1].secure_url}
              width={150}
              height={200}
              alt="prueba"
              className=" w-[90%] h-[120px]"
            />
          </div>
          <div className="p-2 flex flex-col items-center text-[#727272] text-sm">
            <span>{formatDate(campaña.updatedAt)}</span>
            <div className="flex flex-col font-bold text-xl text-black">
              <span>{campaña.title}</span>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ViewMobile;
