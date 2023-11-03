import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";

export default function MenuDesktop() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
  };

  const closeMenu = () => {
    setOpenMenu(null);
  };

  return (
    <ul className="flex gap-8 text-white bg-[#3D3D3D] lg:gap-16">
      <li className="cursor-pointer justify-center items-center flex text-white hover:text-gray-300 focus:outline-none">
        <Link href="/" onClick={closeMenu}>
          Inicio
        </Link>
      </li>
      <li
        className="flex gap-1 justify-center items-center cursor-pointer flex-col relative"
        data-menu="asociacion"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => toggleMenu("asociacion")}
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
          className={`absolute top-14 -left-6 transition-all duration-300 -z-20 ${
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
                onClick={closeMenu}
                prefetch={false}
              >
                Acciones
              </Link>,
              <Link
                key="opcion2"
                href="/caza-trafico"
                onClick={closeMenu}
                prefetch={false}
              >
                Caza y tráfico de faunas
              </Link>,
              <Link
                key="opcion3"
                href="/crueldad-maltrato"
                onClick={closeMenu}
                prefetch={false}
              >
                Crueldad y maltrato
              </Link>,
              <Link
                key="opcion4"
                href="/legislacion"
                onClick={closeMenu}
                prefetch={false}
              >
                Legislación
              </Link>,
            ]}
            tamaño="md:w-[100%] lg:w-[115%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px] px-2"
          />
        </div>
      </li>
      <li
        className="flex gap-1 items-center cursor-pointer relative"
        data-menu="comunidad"
      >
        <span
          className="flex items-center gap-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => toggleMenu("comunidad")}
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
                onClick={closeMenu}
                prefetch={false}
              >
                Voluntarios
              </Link>,
              <Link
                key="opcion2"
                href="/foro"
                onClick={closeMenu}
                prefetch={false}
              >
                Foro
              </Link>,
              <Link
                key="opcion3"
                href="/responsabilidadSocialEmpresarial"
                onClick={closeMenu}
                prefetch={false}
              >
                RSE
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
          onClick={() => toggleMenu("servicio")}
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
                onClick={closeMenu}
                prefetch={false}
              >
                Contactanos
              </Link>,
              <Link
                key="opcion2"
                href="/como-denunciar"
                onClick={closeMenu}
                prefetch={false}
              >
                Como Denunciar
              </Link>,
              <Link
                key="opcion4"
                href="/tienda-solidaria"
                onClick={closeMenu}
                prefetch={false}
              >
                Tienda Solidaria
              </Link>,
              <Link
                key="opcion5"
                href="/cursos"
                onClick={closeMenu}
                prefetch={false}
              >
                Cursos
              </Link>,
              <Link
                key="opcion6"
                href="/dietas"
                onClick={closeMenu}
                prefetch={false}
              >
                Dietas
              </Link>,
            ]}
            tamaño="md:w-[130%] md:py-4 md:rounded-br-[10px] md:rounded-bl-[10px]"
          />
        </div>
      </li>
    </ul>
  );
}
