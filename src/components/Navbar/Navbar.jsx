"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
export default function Navbar() {
  const [switchMenu, setSwitchMenu] = useState(false);
  const handlerSwitchMenu = () => {
    setSwitchMenu((prev) => !prev);
  };
  return (
    <header className="bg-[#3D3D3D] h-[7vh] w-full fixed top-0 left-0 z-[999999] ">
      <nav className="w-full h-full flex items-center  justify-between px-3">
        <GiHamburgerMenu
          size={35}
          color="white"
          className="md:hidden"
          onClick={handlerSwitchMenu}
        />
        <div className="hidden md:flex gap-12">
          <span className="text-white">imagen</span>
          <MenuDesktop />
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-white font-baloo font-semibold">
            Iniciar sesión
          </span>
          <BiSolidUser size={35} color="white" />
        </div>
      </nav>
      {switchMenu && <MenuMobile />}
    </header>
  );
}
