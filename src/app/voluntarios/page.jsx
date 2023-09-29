"use client";
import Image from "next/image";
import image1 from "../../../public/images/voluntarios1.png";
import CardVoluntario from "@/components/CardVoluntario/CardVoluntario";
import api from "@/api/api";
import { useEffect, useState } from "react";
export default function Voluntarios() {
  const [users, setUsers] = useState();
  useEffect(() => {
    async function users() {
      const { data } = await api("user/all?userStatus=isVoluntary");
      setUsers(data.users.users);
    }
    users();
  }, []);
  return (
    <section className=" min-h-screen flex flex-col mt-[70px] pb-[5rem] items-center gap-12 ">
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
        {users &&
          users.length > 1 &&
          users.map(({ description, first_name, avatar }, key) => {
            return (
              <CardVoluntario
                key={key}
                texto={description}
                titulo={first_name}
                imagen={avatar.secure_url}
              />
            );
          })}
      </article>
    </section>
  );
}
