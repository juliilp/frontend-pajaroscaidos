"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import Logo from "../../../public/images/navbar-logo.png";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
import Link from "next/link";
import { CustomContext } from "@/store/ContextProvider";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { UserContext, logout } = CustomContext();
  const { data: session } = useSession();
  const [switchMenu, setSwitchMenu] = useState(false);
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRendering(true);
    }
  }, []);
  const handlerSwitchMenu = () => {
    setSwitchMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setSwitchMenu(false);
  };

  const handleLogout = async () => {
    await logout();

    if (session) {
      await signOut({
        callbackUrl: "/",
      });
    }
  };

  return (
    <header className="bg-[#3D3D3D] h-[70px] w-full fixed top-0 left-0 z-[999999] ">
      <nav className="w-full h-full flex items-center justify-between px-3">
        <GiHamburgerMenu
          size={35}
          color="white"
          className="md:hidden"
          onClick={handlerSwitchMenu}
        />
        <div className="hidden md:flex gap-12 lg:gap-24">
          <Image
            src={Logo}
            alt="logo"
            width={62}
            height={80}
            className="h-[62px] w-[80px] object-cover"
            priority={true}
          />
          <MenuDesktop />
        </div>

        {rendering && UserContext && UserContext.first_name ? (
          <div className="flex items-center justify-center gap-3">
            <Link href={"/perfil"}>
              <span className="text-white font-semibold">
                {UserContext.first_name}
              </span>
            </Link>
            {UserContext.avatar.avatar_url !== "-" ? (
              <Link href={"/perfil"}>
                <Image
                  src={
                    UserContext.avatar.avatar_url
                      ? UserContext.avatar.avatar_url
                      : UserContext.avatar.secure_url
                  }
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            ) : (
              <Link href={"/perfil"}>
                <BiSolidUser size={35} color="white" />
              </Link>
            )}

            <button
              onClick={(e) => handleLogout(e)}
              className="text-white font-semibold"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/login"
              className="text-white font-semibold"
              prefetch={false}
            >
              Iniciar sesión
            </Link>
            <BiSolidUser size={35} color="white" />
          </div>
        )}
      </nav>
      <div
        className={`transition-all duration-300 ${
          switchMenu
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        {<MenuMobile closeMenu={closeMenu} />}
      </div>
    </header>
  );
}
