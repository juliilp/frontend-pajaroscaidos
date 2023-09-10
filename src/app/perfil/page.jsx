"use client";
import CardForo from "@/components/CardForo";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { CiClock2, CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Perfil() {
  const router = useRouter();
  const { userContext } = CustomContext();
  const [user, setUser] = useState();
  console.log(userContext);
  useEffect(() => {
    setUser(userContext);
    // console.log(user.first_name);
  }, [userContext, user]);
  return (
    <section className="pt-[100px] flex flex-col gap-8 justify-center items-center font-semibold text-letterPerfil text-xl pb-[100px] ">
      <article className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] p-6 flex flex-col shadow-primary relative">
        <CiSettings
          size={45}
          className="absolute bottom-4 right-4 font-black text-black "
        />
        <div className="bg-slate-500 w-full h-[100px] my-8 flex items-center">
          {/* <div className="rounded-full bg-white w-[75px] h-[75px] ml-6 " /> */}

          {user?.avatar.secure_url && (
            <Image
              src={user?.avatar.secure_url}
              alt="image"
              width={75}
              height={75}
              className="object-cover  ml-6 rounded-full"
            />
          )}
        </div>
        <article className="flex flex-col gap-2">
          <span>
            <u>Nombre: </u>
            {user?.first_name} {user?.last_name}
          </span>

          <u>Edad:</u>
          <u>Pais:</u>
          <u>Estado/Provincia:</u>
        </article>
        <h2>Contacto</h2>
        <article className="flex flex-col gap-2">
          <span>
            <u>Mail</u>: {user?.email}
          </span>
          <span>Telefono:</span>
        </article>
      </article>

      <article className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] shadow-primary p-8 relative">
        <BiEditAlt size={45} className="absolute bottom-4 right-4" />
        <h2 className="underline">Sobre Mi</h2>
        <p className="font-normal w-[95%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          tempora temporibus illum incidunt enim culpa harum aut, consectetur
          quas possimus quia voluptates optio quam dolor, debitis voluptatum
          dolores id. A.
        </p>
      </article>

      <article className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] flex flex-col items-center gap-2 border-[#C4C4C4] shadow-primary">
        <div className="flex h-[3rem] text-[#756F70] justify-between items-center w-full sm:border-b sm:border-white ">
          <div className="  flex items-center  font-semibold p-6">
            <h2 className="text-2xl font-medium ">Mis publicaciones</h2>
          </div>

          <div className="flex gap-4 items-center">
            <CiClock2 size={30} />
            <span className="font-semibold">Recientes</span>
            <IoIosArrowDown size={25} />
          </div>
        </div>

        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
      </article>
    </section>
  );
}
//edad
// user?.country
// user?.province
// user?.phone_number
//Card foro
