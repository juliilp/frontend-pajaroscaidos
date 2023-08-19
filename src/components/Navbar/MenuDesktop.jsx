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
      <li className=" cursor-pointer justify-center items-center flex ">
        <Link href="/">Inicio</Link>
      </li>
      <li
        className="flex gap-1 justify-center items-center cursor-pointer flex-col relative "
        data-menu="asociacion"
      >
        <span
          className="flex items-center gap-2"
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
        {switchMenu.asociacion && (
          <div className="absolute top-14 -left-5">
            <MenuInterno
              opciones={[
                <Link key="opcion1" href="/accion">
                  Acciones
                </Link>,
                <Link key="opcion2" href="/caza">
                  Caza y tráfico de faunas
                </Link>,
                <Link key="opcion3" href="/crueldad">
                  Crueldad y maltrato
                </Link>,
                <Link key="opcion4" href="/legislacion">
                  Legislación
                </Link>,
              ]}
              tamaño="md:w-[100%] lg:w-[115%]  md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
            />
          </div>
        )}
      </li>
      <li
        className="flex gap-1 items-center cursor-pointer relative"
        data-menu="comunidad"
      >
        <span
          className="flex items-center gap-2"
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
        {switchMenu.comunidad && (
          <div className="absolute top-14  -left-5 ">
            <MenuInterno
              opciones={[
                <Link key="opcion1" href="/accion">
                  Voluntarios
                </Link>,
                <Link key="opcion2" href="/caza">
                  Foro
                </Link>,
              ]}
              tamaño="lg:w-[180%] md:w-[150%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
            />
          </div>
        )}
      </li>
      <li
        className="flex gap-1 items-center cursor-pointer relative "
        data-menu="servicios"
      >
        <span
          className="flex items-center gap-2"
          onClick={(e) => handlerMenu(e, "servicio")}
        >
          Servicios
          <IoIosArrowUp
            size={25}
            className={`${
              switchMenu.servicio ? "rotate-180" : " rotate-0"
            } duration-200`}
          />
          {switchMenu.servicio && (
            <div className="absolute top-14 -left-8 ">
              {switchMenu.servicio && (
                <MenuInterno
                  opciones={[
                    <Link key="opcion1" href="/accion">
                      Contacto
                    </Link>,
                    <Link key="opcion2" href="/caza">
                      Como Denunciar
                    </Link>,
                    <Link key="opcion3" href="/caza">
                      Atención Cliente
                    </Link>,
                    <Link key="opcion4" href="/caza">
                      Galeria Solidaria
                    </Link>,
                    <Link key="opcion5" href="/caza">
                      Cursos
                    </Link>,
                  ]}
                  tamaño="md:w-[130%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
                />
              )}
            </div>
          )}
        </span>
      </li>
    </ul>
  );
}
