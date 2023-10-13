import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api/api";
import formatDate from "@/helpers/FormatDate";
function ModalPutCampañas({ toggleModal, modal }) {
  const [formInfo, setFormInfo] = useState({
    title: modal.infoModal.title,
    description: modal.infoModal.description,
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const deleteCampañas = async () => {
    try {
      const response = await api.delete(`/news/${modal.infoModal.id}`);

      if (response.status === 200) {
        alert("Se borro la campaña correctamente.");
      }

      toggleModal({});
    } catch (error) {
      console.error("Error al borrar la campaña:", error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setFormInfo({
      ...formInfo,
      image: file,
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const putCampañas = async () => {
    const deleteImages = [modal.infoModal.image[0].public_id];

    try {
      const formData = new FormData();
      formData.append("title", formInfo.title);
      formData.append("description", formInfo.description);
      formData.append("newImage", formInfo.image);

      const response = await api.put(
        `/news/${modal.infoModal.id}`,
        formData,
        deleteImages
      );

      if (response.status === 200) {
        alert("Se actualizo la campaña correctamente.");
      }

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
        className="md:w-[50%] w-[90%] h-[370px] bg-[#C2C2C2] rounded-lg"
      >
        <div className="flex justify-between p-6 mb-4 text-xl font-bold ">
          <h1>Edita tu campaña!</h1>
          <button className="text-[#D22929]" onClick={() => toggleModal({})}>
            X
          </button>
        </div>
        <div className="flex justify-around mb-6">
          <div className="w-[47%] h-[150px]">
            <section className="flex mb-[100px]">
              <article className="flex justify-between w-[100%] gap-2 relative">
                <div className="flex border-[#444] border-[3px] w-[50%] h-[200px] justify-center items-center rounded">
                  <input
                    onChange={handlePhotoChange}
                    type="file"
                    name="image"
                    id="selectimage"
                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    accept="image/*"
                  />
                  <label
                    htmlFor="selectimage"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {modal.infoModal.image && modal.infoModal.image[0] && (
                      <Image
                        src={
                          modal.infoModal.image[
                            modal.infoModal.image.length - 1
                          ].secure_url
                        }
                        width={200}
                        height={200}
                        alt="prueba"
                      />
                    )}
                  </label>
                </div>
                <div className="flex border-[#444] border-[3px] w-[50%] justify-center items-center rounded">
                  {imagePreview && (
                    <div>
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={200}
                        height={100}
                      />
                    </div>
                  )}
                </div>
              </article>
            </section>
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
        <div className="flex md:justify-end justify-center w-[97%] gap-3 ">
          <button
            className="bg-[#60EA4A] rounded flex justify-center items-center h-8 md:w-[20%] w-[30%] text-black "
            onClick={putCampañas}
          >
            Actualizar
          </button>
          <button
            className="bg-[#D22929] rounded flex justify-center items-center h-8 md:w-[25%] w-[40%] text-white "
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
