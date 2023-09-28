"use client";
import { useEffect, useState } from "react";
import { CustomContext } from "@/store/ContextProvider";
import Loading from "../loading";
import InfoProfile from "@/components/Perfil/InfoProfile";
import AboutMe from "@/components/Perfil/AboutMe";
import MyPosts from "@/components/Perfil/MyPosts";

export default function Perfil() {
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(UserContext);
    /* async function getUser() {
       const response = await api.get(`/user/${user.id}`);
       setUserContext(response.data.user);
    }
    Cuanto se cierre la modal de actualizar perfil, se ejecuta la funcion anterior.
    TRABAJANDO EN ESTO NO BORRAR! */
  }, [UserContext, user]);

  if (!user) {
    return <Loading />;
  }

  return (
    <article className="flex flex-col mt-[70px] items-center">
      <InfoProfile user={user} />
      <AboutMe description={user.description} />
      <MyPosts user={user} />
    </article>
  );
}
