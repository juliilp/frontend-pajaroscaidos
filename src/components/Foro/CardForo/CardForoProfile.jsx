import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { convertirFecha } from "@/utils/auxfunctions";
import Image from "next/image";
import Link from "next/link";

export default function CardForoProfile({
  titulo,
  tiempo,
  usuario,
  like,
  message,
  image,
  id,
  reactions,
}) {
  const [likesNumber, setLikesNumber] = useState(like);
  const fecha = convertirFecha(tiempo);

  return (
    <section className="flex w-full h-[150px] items-center justify-start shadow-primary sm:shadow-none ">
      {image?.secure_url && (
        <Image
          src={image.imageUrl || image.secure_url}
          alt="post"
          width={300}
          height={300}
          className="h-full max-w-[160px]"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <article className="w-4/6 h-[100px] flex flex-col px-3 gap-1 justify-center font-inter ">
        <Link href={`/foro/${id}`} prefetch={false}>
          <h2 className="font-bold  text-sm sm:text-2xl">{titulo}</h2>
        </Link>
        <span className="text-sm">
          <b className="text-[#2594EF]">Foro</b> - {fecha}
          <b className="text-[#2594EF]"> {usuario}</b>
        </span>
        <div className="flex gap-6 self-start pr-6">
          <div className="flex gap-2 ">
            <IoMdHeartEmpty color={"#000000"} size={25} />
            <span className={`font-semibold text-lg `}>Reacciones {likesNumber}</span>
          </div>

          <div className="flex gap-2">
            <RiMessage2Line color="#0C6410" size={25} />
            <span className="text-[#0C6410] font-semibold text-lg self-end ">{message}</span>
          </div>
        </div>
      </article>
    </section>
  );
}
