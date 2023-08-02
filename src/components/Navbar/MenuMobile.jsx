import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
export default function MenuMobile() {
  const [switchMenu, setSwitchMenu] = useState({
    asociacion: false,
    comunidad: false,
    servicio: false,
  });
  const handlerMenu = (e, menu) => {
    setSwitchMenu({
      ...switchMenu,
      [menu]: !switchMenu[menu],
    });
  };
  return (
    <ul className="flex md:hidden flex-col absolute w-full bg-[#2e2e2e] gap-1 text-white ">
      <li className="bg-[#3D3D3D] px-4 border-t-[4px] border-[#2e2e2e] h-[55px] flex items-center ">
        Inicio
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col"
        data-menu="asociacion"
      >
        <span
          className="flex items-center justify-between  w-full "
          onClick={(e) => handlerMenu(e, "asociacion")}
        >
          Nuestra Asociación
          <IoIosArrowDown
            size={55}
            className={`${
              switchMenu.asociacion ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        {switchMenu.asociacion && (
          <MenuInterno
            opcion1="Acciones"
            opcion2="Caza y tráfico de faunas"
            opcion3="Crueldad y maltrato"
            opcion4="Legislación"
          />
        )}
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col "
        data-menu="comunidad"
      >
        <span
          className="flex items-center justify-between w-full"
          onClick={(e) => handlerMenu(e, "comunidad")}
        >
          Nuestra Comunidad
          <IoIosArrowDown
            size={55}
            className={`${
              switchMenu.comunidad ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        {switchMenu.comunidad && (
          <MenuInterno opcion1="Voluntarios" opcion2="Foro" />
        )}
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col "
        data-menu="servicio"
      >
        <span
          onClick={(e) => handlerMenu(e, "servicio")}
          className="flex items-center justify-between w-full"
        >
          Nuestro Servicio
          <IoIosArrowDown
            size={55}
            className={`${
              switchMenu.servicio ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        {switchMenu.servicio && (
          <MenuInterno
            opcion1="Contacto"
            opcion2="Como Denunciar"
            opcion3="Atención Cliente"
            opcion4="Galeria Solidaria"
            opcion5="Cursos"
          />
        )}
      </li>
    </ul>
  );
}
