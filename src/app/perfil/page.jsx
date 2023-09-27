"use client";
import CardForo from "@/components/CardForo";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { PiGearBold } from "react-icons/pi";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import api from "../../api/api";
import ModalPerfilDescription from "@/components/ModalPerfil/ModalPerfilDescription";
import Banner from "@/../public/images/Perfil/BannerPerfil.webp";
import CalculateAge from "@/helpers/CalculateAge";
import Loading from "../loading";

export default function Perfil() {
  const router = useRouter();
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    if (!UserContext) return router.push("/login");
    setUser(UserContext);

    if (user) userPublications();

    async function userPublications() {
      const result = await api(`/user/${user.id}/?filter=publications`);
      const data = result.data.user.publications;
      return setPublications(data);
    }
  }, [UserContext, user, router]);

  if (!user) {
    return <Loading />;
  }

  return (
    <article className="flex flex-col mt-[70px] items-center">
      <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
        <header className="flex relative h-28 w-full items-center">
          <Image
            src={Banner}
            alt="banner"
            fill
            priority
            className="rounded-lg"
          />
          {user && user.avatar.secure_url && (
            <Image
              src={user.avatar.secure_url}
              alt=""
              width={80}
              height={80}
              className="relative h-[80px] w-[80px] ml-6 rounded-full"
            />
          )}
        </header>
        <div className="flex flex-col items-start w-full pl-4 py-1 gap-3 font-semibold text-xl">
          <div className="">
            {user.first_name || user.last_name ? (
              <h4>
                Nombre:{" "}
                <span className="font-normal text-lg">{user.first_name}</span>{" "}
                <span className="font-normal text-lg">{user.last_name}</span>
              </h4>
            ) : (
              <h4>
                Nombre: <span className="font-normal text-lg">-</span>
              </h4>
            )}
            <h4>
              Edad:{" "}
              <span className="font-normal text-lg">
                {CalculateAge(user.birth_date)}
              </span>
            </h4>
            <h4>
              Pais:{" "}
              <span className="font-normal text-lg">{user.city || "-"}</span>
            </h4>
            <h4>
              Estado / Provincia:{" "}
              <span className="font-normal text-lg">
                {user.province || "-"}
              </span>
            </h4>
          </div>
          <div className="flex justify-between w-full items-end">
            <div>
              <h4>
                E-mail:{" "}
                <span className="font-normal text-lg">{user.email}</span>
              </h4>
              <h4>
                Telefono:{" "}
                <span className="font-normal text-lg">
                  {user.phone_number || "-"}
                </span>
              </h4>
            </div>
            <PiGearBold size={30} className="cursor-pointer" />
          </div>
        </div>
      </section>
      <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
        <div className="flex justify-between w-full">
          <h3 className="text-xl font-semibold">Sobre mi</h3>
          <BiEditAlt size={30} className="cursor-pointer" />
        </div>
        <p className="w-full">{user.description || "No hay descripcion"}</p>
      </section>
      <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
        <h3 className="text-left w-full text-xl font-semibold">
          Mis publicaciones
        </h3>
      </section>
    </article>
  );
}
