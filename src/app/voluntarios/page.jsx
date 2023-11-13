"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/api/api";
import banner from "../../../public/images/Voluntarios/voluntarios1.webp";
import CardVoluntario from "@/components/CardVoluntario/CardVoluntario";
import CardVoluntarioLoading from "@/components/CardVoluntario/CardVoluntarioLoading";
import Modal from "@/components/CardVoluntario/Modal";

export default function Voluntarios() {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("Sin descripción");

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await api("user/voluntary");
      setUsers(data.users.users);
    }
    fetchUsers();
  }, []);

  function generateLoadingCards(count) {
    const loadingCards = [];
    for (let i = 0; i < count; i++) {
      loadingCards.push(<CardVoluntarioLoading key={i} />);
    }
    return loadingCards;
  }

  const openModal = (text) => {
    setModalText(text ? text : "Sin descripción");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="min-h-screen w-full flex flex-col mt-[70px] pb-[5rem] items-center gap-12">
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>

      <article className="flex flex-col md:grid grid-cols-2 gap-12 lg:grid-cols-3 lg:gap-20 xl:grid-cols-4">
        {users && users.length > 0
          ? users.map(({ description, first_name, avatar }, key) => {
              return (
                <CardVoluntario
                  key={key}
                  titulo={first_name}
                  imagen={avatar.secure_url}
                  onClick={() => openModal(description)}
                />
              );
            })
          : generateLoadingCards(8)}
      </article>
      {modalOpen && (
        <Modal isOpen={modalOpen} closeModal={closeModal} text={modalText} />
      )}
    </section>
  );
}
