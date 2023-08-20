import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";
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
        <Link href="/">Inicio</Link>
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
        <div
          className={`transition duration-300 ${
            switchMenu.asociacion ? "block" : "hidden"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link key="opcion1" href="/acciones">
                Acciones
              </Link>,
              <Link key="opcion2" href="/caza-trafico">
                Caza y tráfico de faunas
              </Link>,
              <Link key="opcion3" href="/actosmaltratoycrueldad">
                Crueldad y maltrato
              </Link>,
              <Link key="opcion4" href="/legislacion">
                Legislación
              </Link>,
            ]}
          />
        </div>
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
        <div
          className={`transition duration-300 ${
            switchMenu.comunidad ? "block" : "hidden"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link key="opcion1" href="/voluntarios">
                Voluntarios
              </Link>,
              <Link key="opcion2" href="/foro">
                Foro
              </Link>,
            ]}
          />
        </div>
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
        <div
          className={`transition duration-300 ${
            switchMenu.servicio ? "block" : "hidden"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link key="opcion1" href="/contactanos">
                Contacto
              </Link>,
              <Link key="opcion2" href="/*">
                Como Denunciar
              </Link>,
              <Link key="opcion3" href="/*">
                Atención Cliente
              </Link>,
              <Link key="opcion4" href="/*">
                Galeria Solidaria
              </Link>,
              <Link key="opcion5" href="/*">
                Cursos
              </Link>,
            ]}
          />
        </div>
      </li>
    </ul>
  );
}
