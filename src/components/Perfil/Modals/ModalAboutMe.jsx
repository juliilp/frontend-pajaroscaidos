"use client";
import React, { useState } from "react";
import api from "@/api/api";
import Cookies from "js-cookie";
export default function ModalAboutMe({
  handlerClose,
  id,
  viejaDescripcion,
  user,
}) {
  const [description, setDescription] = useState("");

  const handlerDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlerButtonDescription = (e) => {
    e.preventDefault();
    async function editPost() {
      try {
        const response = await api.put(`user/update/${id}`, { description });
        console.log(response);
        if (response.status == 200) {
          const user = response.data;
          Cookies.set("newUserId", JSON.stringify({ id: user.newUser.id }), {
            expires: 7,
          });
        }
      } catch (error) {
        console.error("Error al actualizar la descripción:", error);
      }
    }
    editPost();
  };

  return (
    <section className="fixed inset-0 flex justify-center items-center z-10">
      <div className="fixed inset-0 bg-black opacity-50" />
      <article className=" w-[95%] max-w-[750px] h-[450px] bg-white z-20 relative p-4">
        <button
          onClick={handlerClose}
          className="absolute top-2 right-2 text-blac k"
        >
          X
        </button>
        {/* contenido del modal */}
        <div className="flex flex-col">
          {viejaDescripcion === null ? (
            <span className="mb-10">No tenes descripcion</span>
          ) : (
            <span className="mb-10">
              Antigua Descripcion: {viejaDescripcion}{" "}
            </span>
          )}
          <span>Mi nueva Descripcion:</span>
          <textarea
            type="text"
            className="outline-none resize-none border h-[200px] text-base "
            onChange={handlerDescription}
          />
        </div>
        <button onClick={handlerButtonDescription}>Completar Formulario</button>
      </article>
    </section>
  );
}

// user/update/:id
