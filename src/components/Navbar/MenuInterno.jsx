import React from "react";

export default function MenuInterno({
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  opcion5,
  tamaño,
}) {
  return (
    <ul
      className={`flex flex-col gap-2 w-full bg-[#3D3D3D] md:text-center ${tamaño}`}
    >
      <li className="justify-self-start py-2 ">{opcion1}</li>
      <li className="justify-self-start py-2 bg-[#3D3D3D] ">{opcion2}</li>
      {opcion3 && <li className="justify-self-start py-2  ">{opcion3}</li>}
      {opcion4 && <li className="justify-self-start py-2  ">{opcion4}</li>}
      {opcion5 && <li className="justify-self-start py-2  ">{opcion5}</li>}
    </ul>
  );
}
