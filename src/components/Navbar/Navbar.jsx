"use client";
import React, { useState, Suspense, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import Logo from "../../../public/images/navbar-logo.png";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Image from "next/image";
import Link from "next/link";
import { customContext } from "@/store/ContextProvider";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { userContext, logout } = customContext();
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

  const handleLogout = async (e) => {
    await logout();

    if (session) {
      await signOut({
        callbackUrl: "/", // Especifica la URL a la que deseas redirigir
      });
    }
  };

  return (
    <header className="bg-[#3D3D3D] h-[70px] w-full fixed top-0 left-0 z-[999999] ">
      <nav className="w-full h-full flex items-center  justify-between px-3">
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
            className="h-[62px] w-[80px] object-cover"
            priority={true}
          />
          <MenuDesktop />
        </div>

        {rendering && userContext && userContext.nick_name ? (
          <div className="flex items-center justify-center gap-3">
            <span className="text-white font-baloo font-semibold">
              {userContext.nick_name}
            </span>
            {userContext.avatar.avatar_url !== "-" ? (
              <Image
                src={
                  userContext.avatar.avatar_url
                    ? userContext.avatar.avatar_url
                    : userContext.avatar.secure_url
                }
                alt="Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <BiSolidUser size={35} color="white" />
            )}

            <button
              onClick={(e) => handleLogout(e)}
              className="text-white font-baloo font-semibold"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/login"
              className="text-white font-baloo font-semibold"
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
        {<MenuMobile />}
      </div>
    </header>
  );
}
