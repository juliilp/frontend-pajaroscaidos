"use client";
import React, { useState, useEffect } from "react";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";
import { fetchPosts } from "@/api/apiCall/functions";
import Pagination from "@/components/Pagination/Pagination";
import Loading from "../loading";
import ListaPublicaciones from "@/components/Dashboard/Publicaciones/ListaPublicaciones";
import ModalPublicacion from "@/components/Dashboard/Publicaciones/Modal";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState("desc");
  const [posts, setPosts] = useState(undefined);
  const [modal, setModal] = useState({
    toggle: false,
    post: {},
  });

  const fetchPostsData = async () => {
    const resp = await fetchPosts(pageNumber, order);

    if (resp !== MESSAGE_TYPES.ERROR) {
      setPosts(resp.publications);
      console.log(resp.publications);
      setTotalPages(resp.totalPages);
      setIsLoading(false);
    }

    return setIsLoading(false);
  };

  useEffect(() => {
    fetchPostsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const toggleModal = (post) => {
    setModal({
      toggle: post !== undefined && !modal.toggle,
      post: post !== undefined ? post : modal.post,
    });
    console.log(modal);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="h-full w-full px-6 flex flex-col items-center justify-between gap-2 pt-[70px]">
      <h1 className="text-center pt-6 text-2xl font-bold">Publicaciones</h1>
      <div className="bg-[#4f4f4f] w-full flex flex-col py-3 rounded-xl text-white">
        <table className="w-full table-auto text-center">
          <thead>
            <tr>
              <th className="w-[10%]">
                <strong>Imagen</strong>
              </th>
              <th className="w-[40%]">
                <strong>Titulo</strong>
              </th>
              <th className="w-[20%]">
                <strong>Usuario</strong>
              </th>
              <th className="w-[15%]">
                <strong>Me gusta</strong>
              </th>
              <th className="w-[15%]">
                <strong>Comentarios</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <ListaPublicaciones posts={posts} toggleModal={toggleModal} />
          </tbody>
        </table>
      </div>
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        changePage={handlePageChange}
      />
      <ModalPublicacion modal={modal} />
    </section>
  );
}
