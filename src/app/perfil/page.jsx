"use client";
import { useEffect, useState } from "react";
import { CustomContext } from "@/store/ContextProvider";
import Loading from "../loading";
import InfoProfile from "@/components/Perfil/InfoProfile";
import AboutMe from "@/components/Perfil/AboutMe";
import MyPosts from "@/components/Perfil/MyPosts";
import InfoProfileLoader from "@/components/Perfil/Loaders/InfoProfileLoader";
import AboutMeLoader from "@/components/Perfil/Loaders/AboutMeLoader";

export default function Perfil() {
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(UserContext);
  }, [UserContext, user]);

  return (
    <article className="flex flex-col mt-[70px] items-center pb-6">
      {user ? (
        <>
          <InfoProfile user={user} />
          <AboutMe user={user} />
          <MyPosts user={user} />
        </>
      ) : (
        <>
          <InfoProfileLoader />
          <AboutMeLoader />
          <AboutMeLoader />
        </>
      )}
    </article>
  );
}
