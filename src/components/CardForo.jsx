import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { CustomContext } from "@/store/ContextProvider";
import { convertirFecha } from "@/utils/auxfunctions";
import api from "../api/api";
import Image from "next/image";
import Link from "next/link";

export default function CardForo({
  titulo,
  tiempo,
  usuario,
  like,
  message,
  image,
  id,
  reactions,
}) {
  const { UserContext } = CustomContext();

  const userReaction = reactions?.find((e) => e.userId === UserContext?.id);
  const [reaction, setReaction] = useState(!!userReaction);
  const [likesNumber, setLikesNumber] = useState(like);
  const fecha = convertirFecha(tiempo);
  const [newLike, setNewLike] = useState(userReaction);
  const [sending, setSending] = useState(false);

  const handleLike = async () => {
    try {
      if (sending) {
        return;
      }

      setSending(true);

      const response = await api.post(`/reaction/create/${id}`, {
        idUser: UserContext.id,
        reaction: "like",
      });

      if (response.status === 200) {
        setNewLike(response.data.newReaction.id);
        setReaction(true);
        setLikesNumber(likesNumber + 1);
      }
    } catch (error) {
      console.error("error al dar el me gusta::", error);
    } finally {
      setSending(false);
    }
  };

  const handleUnLike = async () => {
    if (sending) {
      return;
    }

    setSending(true);

    try {
      const response = await api.delete(
        `/reaction/delete/${
          userReaction !== undefined ? userReaction.id : newLike
        }`
      );

      if (response.status === 200) {
        setReaction(false);
        setLikesNumber(likesNumber - 1);
      }
    } catch (error) {
      console.error("error al sacar el me gusta::", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="flex w-full h-[150px] items-center justify-start shadow-primary sm:shadow-none ">
      {image?.secure_url && (
        <Image
          src={image.imageUrl}
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
          <b className="text-[#2594EF] cursor-pointer ">Foro</b> - {fecha}
          <b className="text-[#2594EF] cursor-pointer "> {usuario}</b>
        </span>
        <div className="flex gap-6 self-start pr-6">
          <div className="flex gap-2 ">
            <IoMdHeartEmpty
              color={reaction ? "#E11447" : "#000000"}
              size={25}
              className={`cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={sending ? null : reaction ? handleUnLike : handleLike}
            />
            <span
              className={`font-semibold text-lg ${
                reaction ? "text-[#AA153A]" : ""
              }`}
            >
              {likesNumber}
            </span>
          </div>

          <div className="flex  gap-2">
            <RiMessage2Line
              color="#0C6410"
              size={25}
              className="cursor-pointer"
            />
            <span className="text-[#0C6410] font-semibold text-lg self-end ">
              {message}
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}
