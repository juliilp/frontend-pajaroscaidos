"use client";
import React from "react";
import { BiSolidEditAlt } from "react-icons/bi";
export default function ModalUpdateAboutMe({ user, toggleModal }) {
  const handleCloseModal = (event) => {
    if (event.target.id === "outside") {
      toggleModal();
    }
  };

  return (
    <article className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      <section
        onClick={handleCloseModal}
        id="outside"
        className="flex min-h-full items-center justify-center"
      >
        <div className="bg-[#D9D9D9] flex flex-col items-end px-6 pb-4 pt-3 rounded-xl lg:w-[420px]">
          <button
            className="text-2xl text-red-600 font-bold"
            onClick={toggleModal}
          >
            X
          </button>
          <section className="flex flex-col items-center w-full gap-4">
            <div className="flex gap-3">
              <BiSolidEditAlt size={20} />
              <h2 className="text-xl font-bold">Editar descripcion</h2>
            </div>
            <form className="flex flex-col items-center w-full gap-2">
              <textarea
                defaultValue={user.description}
                id="description"
                cols="40"
                rows="6"
                className="rounded-md px-3 py-2"
              ></textarea>
              <button className="py-1 px-3 rounded-md bg-[#60EA4A] mt-2">
                <span className="font-semibold">Actualizar</span>
              </button>
            </form>
          </section>
        </div>
      </section>
    </article>
  );
}