import React from "react";
import { BiSolidUser } from "react-icons/bi";
import Image from "next/image";
import ImagenPericos from "@/../public/images/Nuestra comunidad/grupo-periquitos-contentos.jpg";

export default function PostComunidad({ publications }) {
  // publications = null
  return (
    <>
      {/* Background bg-[#CDCDCD] */}

      {publications && publications[0] ? (
        publications?.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-1 bg-[#CDCDCD] py-6 max-w-[300px] mx-auto"
          >
            <div className="flex gap-2 items-center text-xl pl-5 pb-2 w-full">
              {post.user.avatar.avatar_url !== "-" ? (
                <Image
                  src={
                    post.user.avatar.avatar_url
                      ? post.user.avatar.avatar_url
                      : post.user.avatar.secure_url
                  }
                  alt="Avatar"
                  width={50}
                  height={50}
                  layout="fixed"
                  className="rounded-full"
                />
              ) : (
                <BiSolidUser size={35} color="white" />
              )}

              <span className="text-[#707070] font-baloo font-semibold">
                {post.user.nick_name}
              </span>
            </div>
            <div className="h-[2px] w-[100%] bg-[#D9D9D9] shadow-login rounded-2xl  " />
            <p className="text-[#707070] font-baloo  font-semibold text-xl pl-5 pt-5">
              {post.description}
            </p>

            <Image
              src={post.image[0].secure_url}
              alt={post.user.nick_name}
              width={200}
              height={200}
              className="w-full h-full object-contain flex-shrink-0"
            />
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-8 bg-[#CDCDCD] py-6 max-w-[300px] border-2  items-center border-none">
          <p className="text-[#707070] font-baloo font-semibold text-xl ">
            No hay publicaciones
          </p>

          <Image src={ImagenPericos} width={300} height={200} alt={"no post"} />
        </div>
      )}
    </>
  );
}
