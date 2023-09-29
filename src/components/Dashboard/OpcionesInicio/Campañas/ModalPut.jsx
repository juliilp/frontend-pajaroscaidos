import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api/api";
import formatDate from "@/helpers/FormatDate";
function ModalPutCampañas({ toggleModal, modal }) {
  const [formInfo, setFormInfo] = useState({
    title: modal.infoModal.title,
    description: modal.infoModal.description,
  });

  const deleteCampañas = async () => {
    try {
      const response = await api.delete(`/news/${modal.infoModal.id}`);

      toggleModal({});
    } catch (error) {
      console.error("Error al borrar la campaña:", error);
    }
  };

  const putCampañas = async () => {
    try {
      const response = await api.put(`/news/${modal.infoModal.id}`, formInfo);

      toggleModal({});
    } catch (error) {
      console.error("Error al actualizar la campaña:", error);
    }
  };

  useEffect(() => {
    if (modal.infoModal) {
      const formattedDate = formatDate(modal.infoModal.createdAt);
      setFormInfo({
        date: formattedDate,
        title: modal.infoModal.title,
        description: modal.infoModal.description,
      });
    }
  }, [modal.infoModal]);

  return (
    <>
      <div
        key={modal.infoModal.id}
        className="w-[50%] h-[55%] bg-[#C2C2C2] rounded-lg"
      >
        <div className="flex justify-between p-6 mb-4 text-xl font-bold ">
          <h1>Edita tu campaña!</h1>
          <button className="text-[#D22929]" onClick={() => toggleModal({})}>
            X
          </button>
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
              onChange={(e) =>
                setFormInfo({ ...formInfo, title: e.target.value })
              }
              value={formInfo.title || ""}
            />

            <textarea
              className="flex bg-white rounded pl-2"
              rows={5}
              onChange={(e) =>
                setFormInfo({ ...formInfo, description: e.target.value })
              }
              value={formInfo.description}
            />
          </div>
        </div>
        <div className="flex justify-end w-[95%] gap-3 ">
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

export default ModalPutCampañas;
