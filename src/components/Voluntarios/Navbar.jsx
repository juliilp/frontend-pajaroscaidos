import Image from "next/image";
import React from "react";
import logo from "../../images/logo_pajaros_caidos.png";

//Navbar provisional
export const Navbar = () => {
  return (
    <div className="bg-gray-700">
      <ul
        className="flex justify-around items-center text-white font-sans
"
      >
        <Image src={logo} alt="pajaros caidos" height={"70"} width={"50"} />
        <li>Inicio</li>
        <li>Quienes Somos</li>
        <li>Concientización</li>
        <li>Información</li>
        <li>¿Como sumarte?</li>
        <li>Galeria Solidaria</li>
        <li>Foro</li>
        <li>Iniciar sesión</li>
      </ul>
    </div>
  );
};
