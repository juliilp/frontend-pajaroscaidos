import Image from "next/image";
import React from "react";

const Modal = ({ isOpen, closeModal, text, imagen }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full ${
        isOpen ? "block" : "hidden"
      } bg-[rgba(0, 0, 0, 0.5) z-50`}
    >
      <article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md md:grid md:grid-cols-3">
        <Image
          src={imagen}
          alt="Imagen"
          width={300}
          height={300}
          className="col-span-1"
        />
        <article className="col-span-2 border flex justify-center items-center p-6">
          <p className="text-center">{text}</p>
        </article>
        <button
          onClick={closeModal}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar
        </button>
      </article>
    </section>
  );
};

export default Modal;
