"use client";
import CardForo from "@/components/CardForo";
import React, { useState, useEffect } from "react";
import ImagenForo from "../../../public/images/imagen-foro.png";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFileText } from "react-icons/ai";
import NuestraComunidad from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";
import Image from "next/image";
import ModalnewPost from "@/components/Foro/Modal";
import Pagination from "@/components/Pagination/Pagination";
import { CustomContext } from "@/store/ContextProvider";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { fetchPosts } from "@/api/apiCall/functions";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";

export default function Foros() {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const setvisibilitymodal = () => {
    setModal(!modal);
  };

  const { logout } = CustomContext();

  const [order, setOrder] = useState("desc");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    const fetchPosts2 = async () => {
      const response = await fetchPosts(pageNumber, order);

      if (response === MESSAGE_TYPES.ERROR) {
        await logout();
        router.push("/login");
      } else {
        setPosts(response.publications);
        setTotalPages(response.totalPages);
      }
    };

    fetchPosts2();
  }, [pageNumber, order, logout, router]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  if (posts == undefined) {
    return <Loading />;
  }

  return (
    <section className="font-baloo relative flex w-full flex-col gap-4 justify-center items-center lg:flex-row lg:items-start lg:gap-12 bg-[#e9e8e8] ">
      {modal && <ModalnewPost setvisible={setvisibilitymodal} />}

      <div className="bg-[#D9D9D9] rounded-lg w-full max-w-[800px] flex justify-center flex-col my-24">
        <div className="flex gap-6 mt-6 text-[#756F70] justify-around w-full sm:border-b sm:border-white py-4">
          <button
            onClick={setvisibilitymodal}
            className="bg-[#005DAB] py-3 px-3 sm:px-6 max-w text-white  rounded-[20px] flex items-center gap-2 font-semibold"
          >
            <AiOutlineFileText color="white" size={20} />
            Crear foro
          </button>
          <div className="flex gap-4 items-center">
            <CiClock2 size={30} />
            <span className="font-semibold">Ordenar por:</span>
            <select
              className="bg-gray-100 rounded p-1 border-none"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="desc">Recientes</option>
              <option value="asc">Más antiguas</option>
            </select>
          </div>
        </div>

        {posts.map((e, key) => {
          return (
            <CardForo
              key={key}
              titulo={e.title}
              tiempo={e.createdAt}
              usuario={e.user.nick_name}
              like={e.reactions.length}
              message={e.comments.length}
              image={e.image[0]}
              id={e.id}
              reactions={e.reactions}
            />
          );
        })}

        <div className="flex justify-center w-full">
          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
        </div>
      </div>
      <div className="mt-24 flex justify-center items-center flex-col gap-6">
        <Image
          src={ImagenForo}
          alt="imagen"
          className="hidden lg:block"
          width="400px"
        />
        <NuestraComunidad />
      </div>
    </section>
  );
}
