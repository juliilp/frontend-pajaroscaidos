import React, { useState } from "react";
import { RiImageFill } from "react-icons/ri";
import Image from "next/image";
import api from "@/api/api";

function ModalPostCampaña({ toggleModal, handleDataUpdated }) {
  const [newCampaña, setNewCampaña] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (event) => {
    setNewCampaña({
      ...newCampaña,
      [event.target.name]: event.target.value,
    });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setNewCampaña({
      ...newCampaña,
      image: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", newCampaña.title);
      formData.append("description", newCampaña.description);
      formData.append("image", newCampaña.image);

      const response = await api.post("/news", formData);

      if (response.status === 200) {
        handleDataUpdated();
        alert("Creado con éxito");
      }

      toggleModal({});
    } catch (error) {
      console.error("Error al enviar la campaña:", error);
    }
  };

  let imagePreview = null;

  if (newCampaña.image && newCampaña.image instanceof Blob) {
    imagePreview = URL.createObjectURL(newCampaña.image);
  }

  return (
    <>
      <div className="w-[50%] h-[65%] bg-[#444] rounded-lg text-[#ffffff]">
        <div className="flex justify-between p-6 mb-4 text-xl font-bold ">
          <h1>Crea tu banner!</h1>
          <button className="text-[#D22929]" onClick={() => toggleModal({})}>
            X
          </button>
        </div>
        <div className="flex justify-center">
          <form className="flex flex-col justify-center mb-6 w-[90%] ">
            <label htmlFor="title">Titulo</label>
            <input
              onChange={handleChange}
              className="mb-4 px-4 bg-[#ccc] rounded h-[40px] text-black"
              type="text"
              name="title"
            />
            <label htmlFor="description">Descripción</label>
            <textarea
              onChange={handleChange}
              className="mb-[60px] px-4 bg-[#ccc] rounded h-[50px] text-black flex items-center"
              type="text"
              name="description"
            />

            <div className="flex h-[120px] justify-between">
              <div className="flex justify-between items-end w-full ">
                <div className="flex flex-col w-[100%]">
                  <section className="flex mb-[100px]">
                    <article className="flex mr-4">
                      <input
                        type="file"
                        name="image"
                        onChange={handlePhotoChange}
                        id="selectimage"
                        className="hidden"
                        accept="image/*"
                      />
                      <label
                        htmlFor="selectimage"
                        className="flex items-center gap-2"
                      >
                        <RiImageFill className="cursor-pointer text-2xl " />
                        <span className="cursor-pointer text-[#989898] ">
                          Imagen
                        </span>
                      </label>
                    </article>
                  </section>
                  <button
                    className="bg-[#60EA4A] rounded flex justify-center items-center h-8 w-[20%] text-black "
                    onClick={handleSubmit}
                  >
                    Crear
                  </button>
                </div>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalPostCampaña;
