import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";

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
  console.log(switchMenu);
  return (
    <ul className="flex gap-8 text-white bg-[#3D3D3D] lg:gap-16 ">
      <li className=" cursor-pointer justify-center items-center flex ">
        Inicio
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
              opcion1="Acciones"
              opcion2="Caza y tráfico de faunas"
              opcion3="Crueldad y maltrato"
              opcion4="Legislación"
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
              opcion1="Voluntarios"
              opcion2="Foro"
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
                  tamaño="md:w-[130%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
                  opcion1="Contacto"
                  opcion2="Como Denunciar"
                  opcion3="Atención Cliente"
                  opcion4="Galeria Solidaria"
                  opcion5="Cursos"
                />
              )}
            </div>
          )}
        </span>
      </li>
    </ul>
  );
}
