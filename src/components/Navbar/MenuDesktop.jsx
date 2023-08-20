import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";

export default function MenuDesktop() {
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
    <ul className="flex gap-8 text-white bg-[#3D3D3D] lg:gap-16 ">
      <li className=" cursor-pointer justify-center items-center flex text-white hover:text-gray-300 focus:outline-none ">
        <Link href="/">Inicio</Link>
      </li>
      <li
        className="flex gap-1 justify-center items-center cursor-pointer flex-col relative "
        data-menu="asociacion"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={(e) => handlerMenu(e, "asociacion")}
        >
          Asociación
          <IoIosArrowUp
            size={25}
            className={`${
              switchMenu.asociacion ? "rotate-180" : " rotate-0 "
            } duration-200`}
          />
        </span>
        <div
          className={`absolute top-14 -left-5 transition-all duration-300 -z-20 ${
            switchMenu.asociacion
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
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
          onClick={(e) => handlerMenu(e, "comunidad")}
        >
          Comunidad
          <IoIosArrowUp
            size={25}
            className={`${
              switchMenu.comunidad ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
        </span>
        <div
          className={`absolute top-14 -left-5 transition-all duration-300 -z-20 ${
            switchMenu.comunidad
              ? "translate-y-0 opacity-100"
              : "-translate-y-12 opacity-0"
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
          onClick={(e) => handlerMenu(e, "servicio")}
        >
          Servicios
          <IoIosArrowUp
            size={25}
            className={`${
              switchMenu.servicio ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
          <div
            className={`absolute top-14 -left-8 transition-all duration-300 -z-20 ${
              switchMenu.servicio
                ? "translate-y-0 opacity-100"
                : "-translate-y-12 opacity-0"
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
              tamaño="md:w-[130%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
            />
          </div>
        </span>
      </li>
    </ul>
  );
}
