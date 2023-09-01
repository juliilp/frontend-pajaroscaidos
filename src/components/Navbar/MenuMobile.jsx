import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";
export default function MenuMobile() {
  const [openMenu, setOpenMenu] = useState(null);

  const handlerMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
  };
  return (
    <ul className="flex md:hidden flex-col absolute w-full bg-[#2e2e2e] gap-1 text-white ">
      <li className="bg-[#3D3D3D] px-4 border-t-[4px] border-[#2e2e2e] h-[55px] flex items-center ">
        <Link href="/" className="focus:underline" prefetch={false}>
          Inicio
        </Link>
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col"
        data-menu="asociacion"
      >
        <span
          className="flex items-center justify-between  w-full "
          onClick={() => handlerMenu("asociacion")}
        >
          Nuestra Asociación
          <IoIosArrowDown
            size={55}
            className={`${
              openMenu === "asociacion" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`transition-all duration-300 w-full pl-8 ${
            openMenu === "asociacion"
              ? "opacity-100 h-[12rem]"
              : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/acciones"
                className="focus:underline"
                prefetch={false}
              >
                Acciones
              </Link>,
              <Link
                key="opcion2"
                href="/caza-trafico"
                className="focus:underline"
                prefetch={false}
              >
                Caza y tráfico de faunas
              </Link>,
              <Link
                key="opcion3"
                href="/actosmaltratoycrueldad"
                className="focus:underline"
                prefetch={false}
              >
                Crueldad y maltrato
              </Link>,
              <Link
                key="opcion4"
                href="/legislacion"
                className="focus:underline"
                prefetch={false}
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
          onClick={() => handlerMenu("comunidad")}
        >
          Nuestra Comunidad
          <IoIosArrowDown
            size={55}
            className={`${
              openMenu === "comunidad" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`transition-all duration-300 w-full pl-8 ${
            openMenu === "comunidad" ? "opacity-100 h-[6rem]" : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/voluntarios"
                className="focus:underline"
                prefetch={false}
              >
                Voluntarios
              </Link>,
              <Link
                key="opcion2"
                href="/foro"
                className="focus:underline"
                prefetch={false}
              >
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
          onClick={() => handlerMenu("servicio")}
          className="flex items-center justify-between w-full"
        >
          Nuestro Servicio
          <IoIosArrowDown
            size={55}
            className={`${
              openMenu === "servicio" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`transition-all duration-300 w-full pl-8 ${
            openMenu === "servicio" ? "opacity-100 h-[15rem]" : "opacity-0 h-0"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/contactanos"
                className="focus:underline"
                prefetch={false}
              >
                Contacto
              </Link>,
              <Link
                key="opcion2"
                href="/como-denunciar"
                className="focus:underline"
                prefetch={false}
              >
                Como Denunciar
              </Link>,
              <Link
                key="opcion3"
                href="/*"
                className="focus:underline"
                prefetch={false}
              >
                Atención Cliente
              </Link>,
              <Link
                key="opcion4"
                href="/shopping"
                className="focus:underline"
                prefetch={false}
              >
                Galeria Solidaria
              </Link>,
              <Link
                key="opcion5"
                href="/*"
                className="focus:underline"
                prefetch={false}
              >
                Cursos
              </Link>,
            ]}
          />
        </div>
      </li>
    </ul>
  );
}
