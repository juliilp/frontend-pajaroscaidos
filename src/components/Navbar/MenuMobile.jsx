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
        <Link href="/" className="focus:underline">
          Inicio
        </Link>
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
          className={`transition-all duration-300 w-full pl-8 ${
            switchMenu.asociacion ? "opacity-100 h-[12rem]" : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link key="opcion1" href="/acciones" className="focus:underline">
                Acciones
              </Link>,
              <Link
                key="opcion2"
                href="/caza-trafico"
                className="focus:underline"
              >
                Caza y tráfico de faunas
              </Link>,
              <Link
                key="opcion3"
                href="/actosmaltratoycrueldad"
                className="focus:underline"
              >
                Crueldad y maltrato
              </Link>,
              <Link
                key="opcion4"
                href="/legislacion"
                className="focus:underline"
              >
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
          className={`transition-all duration-300 w-full pl-8 ${
            switchMenu.comunidad ? "opacity-100 h-[6rem]" : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/voluntarios"
                className="focus:underline"
              >
                Voluntarios
              </Link>,
              <Link key="opcion2" href="/foro" className="focus:underline">
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
          className={`transition-all duration-300 w-full pl-8 ${
            switchMenu.servicio ? "opacity-100 h-[15rem]" : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/contactanos"
                className="focus:underline"
              >
                Contacto
              </Link>,
              <Link key="opcion2" href="/*" className="focus:underline">
                Como Denunciar
              </Link>,
              <Link key="opcion3" href="/*" className="focus:underline">
                Atención Cliente
              </Link>,
              <Link key="opcion4" href="/*" className="focus:underline">
                Galeria Solidaria
              </Link>,
              <Link key="opcion5" href="/*" className="focus:underline">
                Cursos
              </Link>,
            ]}
          />
        </div>
      </li>
    </ul>
  );
}
