import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MenuInterno from "./MenuInterno";
import Link from "next/link";

export default function MenuMobile({ closeMenu, admin }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
  };

  const handleCloseMenu = () => {
    closeMenu();
    setOpenMenu(null);
  };

  return (
    <ul className="flex lg:hidden flex-col absolute w-full bg-[#2e2e2e] gap-1 text-white ">
      <li className="bg-[#3D3D3D] px-4 border-t-[4px] border-[#2e2e2e] h-[55px] flex items-center ">
        <Link href="/" className="focus:underline" onClick={handleCloseMenu}>
          Inicio
        </Link>
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col"
        data-menu="asociacion"
      >
        <span
          className="flex items-center justify-between  w-full "
          onClick={() => toggleMenu("asociacion")}
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
              ? "opacity-100 h-[15rem] pointer-events-auto"
              : "opacity-0 h-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/nosotros"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Nosotros
              </Link>,
              <Link
                key="opcion2"
                href="/acciones"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Acciones
              </Link>,
              <Link
                key="opcion3"
                href="/caza-trafico"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Caza y tráfico de faunas
              </Link>,
              <Link
                key="opcion4"
                href="/crueldad-maltrato"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Crueldad y maltrato
              </Link>,
              <Link
                key="opcion5"
                href="/legislacion"
                className="focus:underline"
                onClick={handleCloseMenu}
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
          onClick={() => toggleMenu("comunidad")}
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
            openMenu === "comunidad"
              ? "opacity-100 h-[9rem] pointer-events-auto"
              : "opacity-0 h-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/voluntarios"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Voluntarios
              </Link>,
              <Link
                key="opcion2"
                href="/foro"
                className="focus:underline"
                onClick={handleCloseMenu}
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
          />
        </div>
      </li>
      <li
        className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col "
        data-menu="servicio"
      >
        <span
          onClick={() => toggleMenu("servicio")}
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
            openMenu === "servicio"
              ? "opacity-100 h-[15rem] pointer-events-auto"
              : "opacity-0 h-0 pointer-events-none"
          }`}
        >
          <MenuInterno
            opciones={[
              <Link
                key="opcion1"
                href="/contactanos"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Contacto
              </Link>,
              <Link
                key="opcion2"
                href="/como-denunciar"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Como Denunciar
              </Link>,
              <Link
                key="opcion3"
                href="/tienda-solidaria"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Tienda Solidaria
              </Link>,
              <Link
                key="opcion4"
                href="/cursos"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Cursos
              </Link>,
              <Link
                key="opcion5"
                href="/dietas"
                className="focus:underline"
                onClick={handleCloseMenu}
                prefetch={false}
              >
                Dietas
              </Link>,
            ]}
          />
        </div>
      </li>
      {admin && (
        <li
          className="flex items-center justify-between px-4 bg-[#3D3D3D] flex-col "
          data-menu="dashboard"
        >
          <span
            className="flex items-center justify-between w-full"
            onClick={() => toggleMenu("dashboard")}
          >
            Panel administrador
            <IoIosArrowDown
              size={55}
              className={`${
                openMenu === "dashboard" ? "rotate-180" : " rotate-0"
              } duration-200`}
            />
          </span>
          <div
            className={`transition-all duration-300 w-full pl-8 ${
              openMenu === "dashboard"
                ? "opacity-100 h-[12rem] pointer-events-auto"
                : "opacity-0 h-0 pointer-events-none"
            }`}
          >
            <MenuInterno
              opciones={[
                <Link
                  key="opcion1"
                  href="/dashboard"
                  className="focus:underline"
                  onClick={handleCloseMenu}
                >
                  Opciones de inicio
                </Link>,
                <Link
                  key="opcion2"
                  href="/dashboard/galeria-solidaria"
                  className="focus:underline"
                  onClick={handleCloseMenu}
                >
                  Galeria solidaria
                </Link>,
                <Link
                  key="opcion2"
                  href="/dashboard/publicaciones"
                  className="focus:underline"
                  onClick={handleCloseMenu}
                >
                  Publicaciones
                </Link>,
                <Link
                  key="opcion2"
                  href="/dashboard/usuarios"
                  className="focus:underline"
                  onClick={handleCloseMenu}
                >
                  Usuarios
                </Link>,
              ]}
            />
          </div>
        </li>
      )}
    </ul>
  );
}
