"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/api/api";
import banner from "../../../public/images/Voluntarios/voluntarios1.webp";
import CardVoluntario from "@/components/CardVoluntario/CardVoluntario";
import CardVoluntarioLoading from "@/components/CardVoluntario/CardVoluntarioLoading";
import Modal from "@/components/CardVoluntario/Modal";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";

export default function Voluntarios() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("Sin descripción");
  const [modalImagen, setModalImagen] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await api(
        `user/voluntary?verbose=simple&userStatus=isVoluntary&userPerPage=${8}&pageNumber=${pageNumber}`
      );
      setUsers(data.users.users);
      setTotalPages(data.users.totalPages);
    }
    fetchUsers();
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  function generateLoadingCards(count) {
    const loadingCards = [];
    for (let i = 0; i < count; i++) {
      loadingCards.push(<CardVoluntarioLoading key={i} />);
    }
    return loadingCards;
  }

  const openModal = (text, imagen) => {
    if (text === null) {
      text = "Sin descripción";
    }
    const texto = text.aboutMe;
    setModalText(texto ? texto : "Sin descripción");
    setModalOpen(true);
    setModalImagen(imagen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="min-h-screen w-full flex flex-col mt-[70px] pb-[5rem] items-center gap-12">
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>
      <Link
        href="/quieroservoluntario"
        className="text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white bg-green p-2 md:p-3 hover:text-gray-100 hover:bg-[#13b113] duration-200"
      >
        Quiero ser voluntario
      </Link>
      <article className="flex flex-col md:grid grid-cols-2 gap-12 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4">
        {users && users.length > 0
          ? users.map(({ description, first_name, avatar }, key) => {
              return (
                <CardVoluntario
                  key={key}
                  titulo={first_name}
                  imagen={avatar.secure_url}
                  onClick={() => openModal(description, avatar.secure_url)}
                />
              );
            })
          : generateLoadingCards(8)}
      </article>
      <div className="flex justify-center w-full">
        <Pagination pageNumber={pageNumber} totalPages={totalPages} changePage={handlePageChange} />
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen} closeModal={closeModal} text={modalText} imagen={modalImagen} />
      )}
    </section>
  );
}
