import React, { useState } from "react";
import { RiImageFill } from "react-icons/ri";
import Image from "next/image";
import api from "@/api/api";

function ModalPostBanners({ toggleModal, handleDataUpdated }) {
  const [newBanner, setNewBanner] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (event) => {
    setNewBanner({
      ...newBanner,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const postData = {
        title: newBanner.title,
        description: newBanner.description,
        image: newBanner.image,
      };

      console.log("data: ", postData);
      const response = await api.post("/news/banner", postData);
      console.log(response);

      if (response.status === 200) {
        handleDataUpdated();
        alert("Creado con éxito");
      }

      toggleModal({});
    } catch (error) {
      console.error("Error al enviar el banner:", error);
    }
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setNewBanner({
      ...newBanner,
      image: file,
    });
  };

  console.log(handlePhotoChange);

  let imagePreview = null;

  if (newBanner.image && newBanner.image instanceof Blob) {
    imagePreview = URL.createObjectURL(newBanner.image);
  }

  return (
    <>
      <div className="w-[50%] h-[60%] bg-[#444] rounded-lg text-[#ffffff]">
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
              className="mb-28 px-4 bg-[#ccc] rounded h-[40px] text-black"
              type="text"
              name="title"
            />

            <div className="flex h-[120px] justify-between">
              <div className="flex justify-between items-end w-full ">
                <div className="flex flex-col w-[100%]">
                  <section className="flex mb-[150px]">
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

export default ModalPostBanners;
