import React from "react";

export default function ModalPerfil({ handlerClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-10">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="w-[600px] h-[300px] bg-white z-20 relative">
        <button
          onClick={handlerClose}
          className="absolute top-2 right-2 text-blac k"
        >
          X
        </button>
        {/* Agrega aquí el contenido del modal */}
        <p>Contenido del modal</p>
      </div>
    </div>
  );
}
