import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";

export default function MenuDesktop() {
  const [openMenu, setOpenMenu] = useState(null);

  const handlerMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <ul className="flex gap-8 text-white bg-[#3D3D3D] lg:gap-16">
      <li className="cursor-pointer justify-center items-center flex text-white hover:text-gray-300 focus:outline-none">
        <Link href="/" prefetch={false} onClick={closeMenu}>
          Inicio
        </Link>
      </li>
      <li
        className="flex gap-1 justify-center items-center cursor-pointer flex-col relative"
        data-menu="asociacion"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => handlerMenu("asociacion")}
        >
          Asociación
          <IoIosArrowUp
            size={25}
            className={`${
              openMenu === "asociacion" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`absolute top-14 -left-5 transition-all duration-300 -z-20 ${
            openMenu === "asociacion"
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-12 opacity-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/acciones"
                prefetch={false}
                onClick={closeMenu}
              >
                Acciones
              </Link>,
              <Link
                key="opcion2"
                href="/caza-trafico"
                prefetch={false}
                onClick={closeMenu}
              >
                Caza y tráfico de faunas
              </Link>,
              <Link
                key="opcion3"
                href="/actosmaltratoycrueldad"
                prefetch={false}
                onClick={closeMenu}
              >
                Crueldad y maltrato
              </Link>,
              <Link
                key="opcion4"
                href="/legislacion"
                prefetch={false}
                onClick={closeMenu}
              >
                Legislación
              </Link>,
            ]}
            tamaño="md:w-[100%] lg:w-[115%]  md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
          />
        </div>
      </li>
      <li
        className="flex gap-1 items-center cursor-pointer relative"
        data-menu="comunidad"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => handlerMenu("comunidad")}
        >
          Comunidad
          <IoIosArrowUp
            size={25}
            className={`${
              openMenu === "comunidad" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`absolute top-14 -left-5 transition-all duration-300 -z-20 ${
            openMenu === "comunidad"
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-12 opacity-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/voluntarios"
                prefetch={false}
                onClick={closeMenu}
              >
                Voluntarios
              </Link>,
              <Link
                key="opcion2"
                href="/foro"
                prefetch={false}
                onClick={closeMenu}
              >
                Foro
              </Link>,
            ]}
            tamaño="lg:w-[180%] md:w-[150%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
          />
        </div>
      </li>
      <li
        className="flex gap-1 items-center cursor-pointer relative "
        data-menu="servicios"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => handlerMenu("servicio")}
        >
          Servicios
          <IoIosArrowUp
            size={25}
            className={`${
              openMenu === "servicio" ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`absolute top-14 -left-8 transition-all duration-300 -z-20 ${
            openMenu === "servicio"
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-12 opacity-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/contactanos"
                prefetch={false}
                onClick={closeMenu}
              >
                Contactanos
              </Link>,
              <Link
                key="opcion2"
                href="/como-denunciar"
                prefetch={false}
                onClick={closeMenu}
              >
                Como Denunciar
              </Link>,
              <Link
                key="opcion3"
                href="/atencion-al-cliente"
                prefetch={false}
                onClick={closeMenu}
              >
                Atención Cliente
              </Link>,
              <Link
                key="opcion4"
                href="/galeria-solidaria"
                prefetch={false}
                onClick={closeMenu}
              >
                Galeria Solidaria
              </Link>,
              <Link
                key="opcion5"
                href="/cursos"
                prefetch={false}
                onClick={closeMenu}
              >
                Cursos
              </Link>,
            ]}
            tamaño="md:w-[130%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
          />
        </div>
      </li>
    </ul>
  );
}
