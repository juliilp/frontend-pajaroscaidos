"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/api/api";
import image1 from "../../../public/images/Voluntarios/voluntarios1.webp";
import CardVoluntario from "@/components/CardVoluntario/CardVoluntario";
import CardVoluntarioLoading from "@/components/CardVoluntario/CardVoluntarioLoading";

export default function Voluntarios() {
  const [users, setUsers] = useState();
  useEffect(() => {
    async function users() {
      const { data } = await api("user/voluntary");
      setUsers(data.users.users);
    }
    users();
  }, []);

  function generateLoadingCards(count) {
    const loadingCards = [];
    for (let i = 0; i < count; i++) {
      loadingCards.push(<CardVoluntarioLoading key={i} />);
    }
    return loadingCards;
  }
  return (
    <section className=" min-h-screen w-full flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
      <section className="w-full h-28 md:h-[14rem] relative">
        <Image
          src={image1}
          alt="banner"
          fill
          priority={true}
          className="w-full h-28 md:h-[14rem] "
        />
      </section>

      <article className="flex flex-col md:grid grid-cols-2 gap-12 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4">
        {users && users.length > 0
          ? users.map(({ description, first_name, avatar }, key) => {
              return (
                <CardVoluntario
                  key={key}
                  texto={description}
                  titulo={first_name}
                  imagen={avatar.secure_url}
                />
              );
            })
          : generateLoadingCards(8)}
      </article>
    </section>
  );
}
