"use client";
import React, { useState, useEffect } from "react";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";
import Pagination from "@/components/Pagination/Pagination";
import Loading from "../loading";
import { getAllPosts } from "@/api/apiCall/PostRequests";
import TableDesktopPosts from "@/components/Dashboard/Publicaciones/Desktop/TableDesktop";
import TableMobilePosts from "@/components/Dashboard/Publicaciones/Mobile/TableMobile";
import ModalPostDesktop from "@/components/Dashboard/Publicaciones/Desktop/ModalPostDesktop";
import ModalPostMobile from "@/components/Dashboard/Publicaciones/Mobile/ModalPostMobile";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState(undefined);
  const [order, setOrder] = useState("desc");
  const [modal, setModal] = useState({
    toggle: false,
    post: {},
  });

  const fetchPostsData = async () => {
    const resp = await getAllPosts(pageNumber, order);

    if (resp !== MESSAGE_TYPES.ERROR) {
      setPosts(resp.publications);
      setTotalPages(resp.totalPages);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPostsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, order]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const toggleModal = (post) => {
    setModal((prevModal) => ({
      ...prevModal,
      toggle: !prevModal.toggle,
      post: post,
    }));
  };

  const handleDataUpdate = async () => {
    await fetchPostsData();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="h-full w-full px-4 sm:px-6 flex flex-col items-center justify-between gap-2 pt-[70px]">
      <h1 className="text-center pt-6 text-2xl font-bold">Publicaciones</h1>
      <div className="bg-[#4f4f4f] w-full flex flex-col py-3 rounded-xl text-white">
        <TableDesktopPosts
          posts={posts}
          toggleModal={toggleModal}
          fetchPostsData={fetchPostsData}
        />
        <TableMobilePosts
          posts={posts}
          toggleModal={toggleModal}
          fetchPostsData={fetchPostsData}
        />
      </div>
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        changePage={handlePageChange}
      />
      {modal.toggle && (
        <>
          <ModalPostDesktop
            modal={modal}
            toggleModal={toggleModal}
            onDataUpdate={handleDataUpdate}
          />
          <ModalPostMobile
            modal={modal}
            toggleModal={toggleModal}
            onDataUpdate={handleDataUpdate}
          />
        </>
      )}
    </section>
  );
}
