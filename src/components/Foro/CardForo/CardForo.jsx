import React, { useState } from "react";

import { convertirFecha } from "@/utils/auxfunctions";
import { GoVerified } from "react-icons/go"; // voluntary icon
import { MdVerifiedUser } from "react-icons/md"; // admin icon

import Image from "next/image";
import Link from "next/link";
import IconsReactions from "./IconsReactions";
import IconsReactionsMobile from "./IconsReactionsMobile";

export default function CardForo({
  created,
  userNickPost,
  commentsQuantity,
  comments,
  image,
  id,
  reactions,
  userAvatar,
  description,
  isAdmin,
  isVoluntary,
}) {
  const fecha = convertirFecha(created);

  return (
    <section className="w-full shadow-primary sm:shadow-none bg-white rounded-md p-4">
      <div className="flex items-center w-full justify-between pl-2 pr-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <p className="text-[#2594EF] text-xl font-bold">{userNickPost}</p>
            {isAdmin || isVoluntary ? (
              <div
                title={isAdmin ? "Administrador" : "Voluntario"}
                className="ml-1 text-[#2594EF] text-xl font-bold"
              >
                {isAdmin ? <MdVerifiedUser /> : isVoluntary ? <GoVerified /> : null}
              </div>
            ) : null}
          </div>
        </div>

        <Image // TODO Hacer click en el avatar o nombre y que te lleve a la card de voluntary (si es voluntario)
          src={userAvatar}
          alt="avatar"
          width={90}
          height={90}
          className="h-auto border border-gray-400 rounded-full w-[80px] h-[80px]"
        />
        <p className="text-gray-500">{fecha}</p>
      </div>

      <div className="flex flex-col pr-2">
        <div className="text-[#707070] font-semibold text-xl pl-2 mt-4 mb-5 overflow-hidden line-clamp-3">
          <p>{description} </p>
        </div>
        <div className="ml-2 mb-5">
          {description.length > 200 && (
            <Link
              className="pl-3 cursor:pointer hover:underline hover:text-[#188f08fc]"
              href={`/foro/${id}`}
            >
              Mostrar más
            </Link>
          )}
        </div>
      </div>

      <div className="relative lg:flex lg:flex-row lg:items-start lg:justify-between">
        <Link className="cursor:pointer" href={`/foro/${id}`}>
          <Image
            src={image.imageUrl || image.secure_url}
            alt={userNickPost}
            width={600}
            height={600}
            className="max-w-full h-auto lg:max-w-[750px] rounded-md object-cover mx-auto lg:mr-5"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </Link>

        <div className="mt-5 hidden lg:flex lg:items-start lg:justify-end">
          <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-end border border-gray-400 p-2 rounded-md">
            <IconsReactions id={id} commentsQuantity={commentsQuantity} reactions={reactions} />
          </div>
        </div>

        <div className="mt-5 lg:hidden flex justify-center w-full overflow-x-auto">
          <div className="flex flex-row items-center border border-gray-400 p-2 rounded-md max-w-full lg:max-w-[750px]">
            <IconsReactionsMobile
              id={id}
              commentsQuantity={commentsQuantity}
              reactions={reactions}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        {comments.slice(0, 2).map((e, i) => (
          <div key={i} className="border-b border-gray-300 mt-4">
            <div className="flex space-x-2">
              <Image //TODO Hacer click en el avatar y que te lleve a la card de voluntary (si es voluntario)
                src={e.user.avatar.secure_url}
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full w-[50px] h-[50px]"
              />
              <p title={e.user.isAdmin ? "Administrador" : "Voluntario"} className="font-bold">
                {e.user.nick_name}
                {e.user.isAdmin ? <MdVerifiedUser /> : e.user.isVoluntary ? <GoVerified /> : null}
              </p>

              <p className="text-gray-500">{convertirFecha(e.createdAt)}</p>
            </div>
            <div className="mt-3 pl-2">
              <p className="ml-5 line-clamp-2">{e.comment}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center w-full mt-5">
          {commentsQuantity === 0 ? null : (
            <Link
              className="cursor:pointer hover:underline hover:text-[#188f08fc]"
              href={`/foro/${id}`}
            >
              ver más comentarios
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
