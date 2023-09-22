import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api/api";
import formatDate from "@/helpers/FormatDate";

function Modal({ toggleModal, handleInputValue, modal }) {
  const [formInfo, setFormInfo] = useState({
    date: formatDate(modal.infoModal.createdAt),
    title: modal.infoModal.title,
    description: modal.infoModal.description,
  });

  const deleteCampañas = async () => {
    try {
      const response = await api.delete(`/news/${modal.infoModal.id}`);
    } catch (error) {
      console.error("Error al borrar la campañas:", error);
    }
  };

  const postCampañas = async () => {
    try {
      const response = await api.delete(`/news/${modal.infoModal.id}`);
    } catch (error) {
      console.error("Error al borrar la campañas:", error);
    }
  };

  const putCampañas = async () => {
    try {
      const response = await api.put(`/news/${modal.infoModal.id}`);
    } catch (error) {
      console.error("Error al borrar la campañas:", error);
    }
  };

  // useEffect(() => {
  //   if (modal.infoModal.createdAt) {
  //     const formattedDate = formatDate(modal.infoModal.createdAt);
  //     setSelectedDate(formattedDate);
  //   }
  // }, [modal.infoModal.createdAt]);

  return (
    <>
      <div
        key={modal.infoModal.id}
        className="w-[50%] h-[50%] bg-[#C2C2C2] rounded-lg"
      >
        <div className="flex justify-end p-4 text-xl text-[#D22929] font-bold ">
          <button onClick={() => toggleModal({})}>X</button>
        </div>
        <div className="flex justify-around mb-6">
          <div className="w-[40%] h-[150px]">
            {modal.infoModal.image && modal.infoModal.image[0] && (
              <Image
                src={modal.infoModal.image[0].secure_url}
                width={300}
                height={300}
                alt="prueba"
                className="h-[200px] rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col bg-[#444] w-[40%] h-[200px] p-3 rounded gap-3">
            <input
              className="flex h-[40px] bg-white rounded pl-2 font-bold text-lg"
              onChange={handleInputValue}
              value={formInfo.title}
            />

            <input
              className="flex bg-white rounded pl-2 h-7 text-sm"
              type="date"
              onChange={(e) => setSelectedDate(e.target.value)}
              value={formInfo.date}
            />
            <textarea
              className="flex bg-white rounded pl-2"
              rows={5}
              onChange={handleInputValue}
              value={formInfo.description}
            />
          </div>
        </div>
        <div className="flex justify-end w-[95%] gap-3">
          <button
            className="bg-[#60EA4A] rounded flex justify-center items-center h-8 w-[20%] text-black "
            onClick={putCampañas}
          >
            Actualizar
          </button>
          <button
            className="bg-[#D22929] rounded flex justify-center items-center h-8 w-[20%] text-white "
            onClick={deleteCampañas}
          >
            Borrar campaña
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
