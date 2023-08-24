"use client";
import CardForo from "@/components/CardForo";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { CiClock2, CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { customContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter();
  const { user } = customContext();

  console.log(user);
  // const { id } = router.query;

  //const [user, setUser] = useState({})///esto podria ser inicialmente, pero se podria usar un estado global user, que supongo seria guardado despúes que el usuario haga login,para evitar un llamado a la api cada vez que se inicie este componente

  // useEffect(() => {
  //     const getActualUser = async (id) => {
  //         try {
  //             const getUser = await axios.get(`https://pajaros-caidos-backend.onrender.com/user/${id}`)//el id supongo deberia venir de un estado global o por params
  //             return getUser.data
  //         } catch (error) {
  //             throw new Error(error)
  //         }
  //     }

  //     if(id){
  //         getActualUser(id)
  //             .then((actualUser) => {
  //                 setUser(actualUser)
  //             })
  //             .catch((error) => {
  //                 throw new Error(error)
  //             })
  //     }
  // },)

  const shadow = { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" };
  return (
    <div className=" text-[#4F4F4F] bg-[#D9D9D9] min-h-screen  flex flex-col gap-5 pt-20 justify-center items-center">
      <main
        className="relative gap-2 p-5 pl-7 pr-7 w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] rounded-sm border font-semibold  flex flex-col border-[#C4C4C4] h-auto min-h-[10rem]"
        style={shadow}
      >
        <section className="w-full bg-red-100  h-[6rem]">
          <figure className="h-full rounded-full bg-blue-500 w-[6rem] text-center">
            {" "}
            {/* por aqui iria la foto de perfil*/}
            {(user && user.avatar === "-") || null ? (
              <BiSolidUser size={95} color="white" />
            ) : (
              <img
                src={user && user.avatar}
                alt="Avatar"
                className="h-full rounded-full bg-blue-500 w-[6rem] text-center"
              />
            )}
          </figure>
        </section>

        <section className="flex flex-col gap-1">
          {user && user.first_name ? (
            <article className="flex gap-1">
              <span>
                <u>Nombre:</u>
              </span>
              <span>{user && user.first_name}</span>
            </article>
          ) : (
            <></>
          )}

          {user && user.first_name ? (
            <article className="flex gap-1">
              <span>
                <u>Apellido:</u>
              </span>
              <span>{user && user.last_name}</span>
            </article>
          ) : (
            <></>
          )}

          {user && user.birth_date ? (
            <article className="flex gap-1">
              <span>
                <u>Edad:</u>
              </span>
              <span>{user && user.birth_date}</span>
            </article>
          ) : (
            <></>
          )}

          {user && user.country !== "-" ? (
            <article className="flex gap-1">
              <span>
                <u>Pais:</u>
              </span>
              <span>{user && user.country}</span>
            </article>
          ) : (
            <></>
          )}

          {user && user.city !== "-" ? (
            <article className="flex gap-1">
              <span>
                <u>Estado provincia:</u>
              </span>
              <span>{user && user.city}</span>
            </article>
          ) : (
            <></>
          )}
        </section>

        <section className="flex flex-col gap-2 ">
          <h6 className=" border-b-2 border-white w-9/12">Contacto</h6>
          <article className="flex gap-1">
            <span>
              <u>Mail:</u>
            </span>
            <span>{user && user.email}</span>
          </article>

          {user && user.phone_number !== 0 ? (
            <article className="flex gap-1">
              <span>
                {" "}
                <u>Telefono:</u>
              </span>
              <span>{user && user.phone_number}</span>
            </article>
          ) : (
            <></>
          )}
        </section>

        <Link href="/perfil/update">
            <CiSettings className="absolute right-0 bottom-0 text-4xl font-black text-black cursor-pointer" />
        </Link>
      </main>

      <section
        className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] p-3 flex flex-col gap-2 border-[#C4C4C4]"
        style={shadow}
      >
        <h2 className="font-bold text-xl">
          <u>Sobre Mi</u>
        </h2>

        <article className="flex justify-between ">
          {/* <p className="w-10/12">Soy una persona apasionada y diversa en mis intereses. Me encanta dedicar mi tiempo libre a salvar aves heridas, brindándoles cuidado y protección. También soy programador, y la creatividad que me brinda la programación complementa mi amor por la naturaleza y me ayuda a encontrar soluciones innovadoras en ambos ámbitos.</p> */}
          <span className="w-10/12">{user && user.description}</span>
          <BiEditAlt className="text-black text-2xl cursor-pointer" />
        </article>
      </section>

      <section
        className="w-11/12 sm:w-10/12 md:w-9/12 xl:w-8/12 2xl:max-w-[45rem] flex flex-col items-center gap-2 border-[#C4C4C4]"
        style={shadow}
      >
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

        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
        <CardForo
          titulo="TINA, no puede volar!"
          tiempo="40 min"
          user="Kevin"
          like={5}
          message={3}
        />
      </section>
    </div>
  );
}
