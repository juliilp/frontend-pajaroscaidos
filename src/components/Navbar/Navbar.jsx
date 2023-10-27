"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import Logo from "@/../public/images/Navbar/navbar-logo.webp";
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
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(UserContext);
    setRendering(true);
  }, [UserContext, user]);

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
          className="lg:hidden"
          onClick={handlerSwitchMenu}
        />
        <div className="hidden lg:flex gap-12 lg:gap-24">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="w-[80px] h-auto"
            priority={true}
          />
          <MenuDesktop />
        </div>
        {rendering && (
          <div className="flex items-center justify-center gap-3">
            {user ? (
              <>
                <Link href={"/perfil"} prefetch={false} onClick={closeMenu}>
                  <span className="text-white font-semibold w-[100px] truncate">
                    {user.nick_name.length > 12
                      ? user.nick_name.slice(0, 9) + "..."
                      : user.nick_name}
                  </span>
                </Link>
                {user.avatar.avatar_url !== "-" ? (
                  <Link href={"/perfil"} prefetch={false} onClick={closeMenu}>
                    <Image
                      src={
                        user.avatar.avatar_url
                          ? user.avatar.avatar_url
                          : user.avatar.secure_url
                      }
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                ) : (
                  <Link href={"/perfil"} prefetch={false} onClick={closeMenu}>
                    <BiSolidUser size={35} color="white" />
                  </Link>
                )}
                <button
                  onClick={(e) => handleLogout(e)}
                  className="text-white font-semibold"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white font-semibold"
                  prefetch={false}
                  onClick={closeMenu}
                >
                  Iniciar sesión
                </Link>
                <BiSolidUser size={35} color="white" />
              </>
            )}
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
        <MenuMobile closeMenu={closeMenu} admin={user?.isAdmin} />
      </div>
    </header>
  );
}
