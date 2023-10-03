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
  }, [UserContext, user]);

  if (!user) {
    return <Loading />;
  }

  return (
    <article className="flex flex-col mt-[70px] items-center pb-6">
      <InfoProfile user={user} />
      <AboutMe user={user} />
      <MyPosts user={user} />
    </article>
  );
}
