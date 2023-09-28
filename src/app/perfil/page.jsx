"use client";
import { useEffect, useState } from "react";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import api from "../../api/api";
import Loading from "../loading";
import InfoProfile from "@/components/Perfil/InfoProfile";
import AboutMe from "@/components/Perfil/AboutMe";
import MyPosts from "@/components/Perfil/MyPosts";

export default function Perfil() {
  const router = useRouter();
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    setUser(UserContext);

    // async function getUser() {
    //   const response = await api.get(`/user/${user.id}`);
    //   setUserContext(response.data.user);
    // }
    // Cuanto se cierre la modal de actualizar perfil, se ejecuta la funcion anterior.

    async function userPublications() {
      const result = await api(`/user/${user.id}/?filter=publications`);
      const data = result.data.user.publications;
      return setPublications(data);
    }

    if (user) {
      userPublications();
    }
  }, [UserContext, user, router]);

  if (!user) {
    return <Loading />;
  }

  return (
    <article className="flex flex-col mt-[70px] items-center">
      <InfoProfile user={user} />
      <AboutMe description={user.description} />
      <MyPosts />
    </article>
  );
}
