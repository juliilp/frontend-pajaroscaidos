import React from "react";
import { BiSolidUser } from "react-icons/bi";
import Image from "next/image";
import ImagenPericos from "@/../public/images/Nuestra comunidad/grupo-periquitos-contentos.jpg";

export default function PostComunidad({ publications }) {
  return (
    <>
      {publications && publications[0] ? (
        publications?.map((post) => (
          <div key={post.id} className="flex flex-col gap-1 bg-[#CDCDCD] py-6 m-[10px] w-[380px] ">
            <div className="flex gap-2 items-center text-xl pl-5 pb-2 w-full">
              {post.user.avatar.avatar_url !== "-" ? (
                <Image
                  src={post.user.avatar.imageUrl}
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full w-[50px] h-[50px]"
                  priority
                  // layout
                />
              ) : (
                <BiSolidUser size={35} color="white" />
              )}

              <span className="text-[#707070] font-semibold">{post.user.nick_name}</span>
            </div>
            <div className="h-[2px] w-[100%] bg-[#D9D9D9] shadow-login rounded-2xl  " />
            <p className="text-[#707070] font-semibold text-xl pl-5 pt-5 line-clamp-3">
              {post.description}
            </p>

            <Image
              src={post.image[0].imageUrl}
              alt="post"
              width={200}
              height={200}
              className="w-full h-[200px] p-6 object-contain flex-shrink-0"
              // layout
            />
          </div>
        ))
      ) : (
        <div className="flex flex-col gap-8 bg-[#CDCDCD] py-6 w-[400px] border-2  items-center border-none">
          <p className="text-[#707070] font-semibold text-xl ">No hay publicaciones</p>

          <Image src={ImagenPericos} width={300} height={200} alt="no post" />
        </div>
      )}
    </>
  );
}
