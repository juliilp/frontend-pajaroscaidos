import Image from "next/image";
import React from "react";
import TextoMobile from "./TextoMobile";

export default function PostComunidadMobile({ publications }) {
  return (
    <section className="flex flex-col gap-6  w-full mt-4 ">
      {publications.length > 0 ? (
        publications.map(({ title, image, user, description }, index) => (
          <article key={index} className="flex gap-6 h-[80px] ">
            <div className="flex gap-4 items-center justify-center">
              <span>{index + 1}</span>
              <Image
                src={image[0].secure_url}
                alt="imagen"
                width={100}
                height={100}
                className="h-[80px] object-cover"
              />
            </div>
            <div className="flex flex-col sm:justify-between justify-around">
              <TextoMobile
                texto={description}
                longitud={30}
                className="block sm:hidden"
              />
              <TextoMobile
                texto={description}
                longitud={45}
                className=" hidden sm:block "
              />

              {/* Icono y nombre de usuario */}
              <div className="flex items-center gap-2 justify-self-center">
                <Image
                  src={user.avatar.secure_url}
                  alt="icon"
                  width={30}
                  height={30}
                  className="object-cover "
                />
                <span className="text-sm md:text-base">{user.nick_name}</span>
              </div>
            </div>
          </article>
        ))
      ) : (
        <section className="h-[66px]">
          <h1>No hay publicaciones</h1>
        </section>
      )}
    </section>
  );
}
