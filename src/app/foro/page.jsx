"use client";
import CardForo from "@/components/Foro/CardForo/CardForo";
import React, { useState, useEffect } from "react";
import ImagenForo from "@/../public/images/Foro/imagen-foro.webp";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFileText } from "react-icons/ai";
import NuestraComunidad from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";
import Image from "next/image";
import ModalnewPost from "@/components/Foro/Modal";
import Pagination from "@/components/Pagination/Pagination";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";
import { getAllPosts } from "@/api/apiCall/PostRequests";
import NuestraComunidadMobile from "@/components/NuestraComunidadMobile/NuestraComunidadMobile";

export default function Foros() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const { logout } = CustomContext();

  const [order, setOrder] = useState("desc");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  const setvisibilitymodal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getAllPosts(pageNumber, order);

      if (response === MESSAGE_TYPES.ERROR) {
        await logout();
        router.push("/login");
      } else {
        setPosts(response.publications);
        setTotalPages(response.totalPages);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [pageNumber, order, logout, router, refresh]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  if (posts == undefined || loading) {
    return <Loading />;
  }

  return (
    <article className="relative flex w-full flex-col gap-4 justify-center items-center xl:flex-row xl:items-start lg:gap-12 bg-[#e9e8e8] mt-[70px]">
      {modal && (
        <ModalnewPost
          setvisible={setvisibilitymodal}
          setLoading={setLoading}
          setRefresh={setRefresh}
        />
      )}

      <section className="sm:bg-[#D9D9D9] rounded-lg w-full max-w-[800px] flex justify-center flex-col my-2 sm:my-8">
        <div className="flex sm:mt-3 text-[#756F70] justify-between w-full py-5 px-6">
          <button
            onClick={setvisibilitymodal}
            className="bg-[#005DAB] py-3 px-3 sm:px-6 max-w text-white rounded-lg flex gap-2 font-semibold"
          >
            <AiOutlineFileText color="white" size={20} />
            Crear foro
          </button>
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <CiClock2 size={30} className="hidden sm:block" />
            <span className="font-semibold hidden sm:block">Ordenar por:</span>
            <select
              className="sm:bg-gray-100 rounded p-1 border-none outline-none"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="desc">Recientes</option>
              <option value="asc">Más antiguas</option>
            </select>
          </div>
        </div>

        <article className="flex flex-col gap-6 sm:px-6">
          {posts.map((e, key) => {
            return (
              <CardForo
                key={key}
                created={e.createdAt}
                userNickPost={e.user.nick_name}
                commentsQuantity={e.commentsQuantity}
                comments={e.comments}
                image={e.image[0]}
                id={e.id}
                reactions={e.reactions}
                userAvatar={e.user.avatar.imageUrl}
                description={e.description}
                isAdmin={e.user.isAdmin}
                isVoluntary={e.user.isVoluntary}
              />
            );
          })}
        </article>

        <div className="flex justify-center w-full">
          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
        </div>
      </section>
      <section className="flex-col gap-4 max-w-[400px] hidden xl:flex my-8">
        <Image
          src={ImagenForo}
          alt="imagen_campañas"
          width={400}
          height={158}
          className="w-full"
        />
        <NuestraComunidad />
      </section>
      <div className="flex w-full items-center justify-center xl:hidden">
        <NuestraComunidadMobile />
      </div>
    </article>
  );
}
