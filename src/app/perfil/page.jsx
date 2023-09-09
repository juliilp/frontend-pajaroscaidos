"use client";
import CardForo from "@/components/CardForo";
import { useEffect } from "react";
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

  useEffect(() => {
    console.log(userContext);
    if (!userContext) {
      router.push("/");
    }
  }, [userContext, router]);

  return (
    <div className=" text-[#4F4F4F] bg-[#D9D9D9] min-h-screen  flex flex-col gap-5 pt-20 items-center ">
      <section className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] p-3 flex flex-col gap-2 border-[#C4C4C4]">
        <h2 className="font-bold text-xl">
          <u>Sobre Mi</u>
        </h2>

        <article className="flex justify-between ">
          {/* <p className="w-10/12">Soy una persona apasionada y diversa en mis intereses. Me encanta dedicar mi tiempo libre a salvar aves heridas, brindándoles cuidado y protección. También soy programador, y la creatividad que me brinda la programación complementa mi amor por la naturaleza y me ayuda a encontrar soluciones innovadoras en ambos ámbitos.</p> */}
          <span className="w-10/12">
            {/* {userContext && userContext.description} */}
          </span>
          <BiEditAlt className="text-black text-2xl cursor-pointer" />
        </article>
      </section>

      <section className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] flex flex-col items-center gap-2 border-[#C4C4C4]">
        <div className="flex h-[3rem] text-[#756F70] justify-between items-center w-full sm:border-b sm:border-white ">
          <div className="  flex items-center  font-semibold">
            <h1>Mis publicaciones</h1>
          </div>

          <div className="flex gap-4 items-center">
            <CiClock2 size={30} />
            <span className="font-semibold">Recientes</span>
            <IoIosArrowDown size={25} />
          </div>
        </div>
      </section>
    </div>
  );
}

//Card foro
