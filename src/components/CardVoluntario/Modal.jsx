import React from "react";

const Modal = ({ isOpen, closeModal, text }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${
        isOpen ? "block" : "hidden"
      } bg-[rgba(0, 0, 0, 0.5) z-50`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md">
        <p>{text}</p>
        <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
