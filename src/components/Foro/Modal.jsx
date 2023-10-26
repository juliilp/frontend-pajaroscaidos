import { newpostvalidations } from "@/utils/auxfunctions";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { RiImageFill } from "react-icons/ri";
import { CustomContext } from "@/store/ContextProvider";
import Image from "next/image";
import Alerts from "../Alerts/Alerts";
import { createNewPost } from "@/api/apiCall/PostRequests";

export default function ModalnewPost({ setvisible, setLoading, setRefresh }) {
  const { UserContext } = CustomContext();
  const [seeAlert, setSeeAlert] = useState(false);
  const [visibleErrors, setVisibleError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  let imagePreview = null;

  const closeAlert = () => {
    setSeeAlert(false);
  };

  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    default: "campos vacíos",
  });

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });

    setErrors(
      newpostvalidations({
        ...newPost,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setNewPost({
      ...newPost,
      image: file,
    });
  };

  useEffect(() => {
    const body = document.getElementById("Body");
    body && (body.style.overflow = "hidden");

    return () => {
      body && (body.style.overflow = "auto");
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ("default" in errors) {
      setVisibleError(true);
      return alert(errors.default);
    }
    if (Object.entries(errors).length) {
      setVisibleError(true);
      return alert("Revisa los errores");
    }
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    if (!Object.entries(errors).length) {
      setVisibleError(false);

      const postData = {
        title: newPost.title,
        description: newPost.description,
        image: newPost.image,
      };

      try {
        const response = await createNewPost(UserContext.id, postData);

        if (response) {
          setSeeAlert(true);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (newPost.image && newPost.image instanceof Blob) {
    imagePreview = URL.createObjectURL(newPost.image);
  }
  const closeEffect = () => {
    setvisible();
    setLoading(true);
    setTimeout(() => {
      setRefresh(Math.random());
    }, 5000);
  };

  return (
    <main className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      {seeAlert && (
        <Alerts
          title={"Éxito!"}
          textdetails={"El post fue subido correctamente"}
          closemodal={closeAlert}
          callback={closeEffect}
        />
      )}
      <div className="flex justify-center my-6">
        <div className="flex flex-col items-end font-semibold rounded-xl pb-4 pt-3 px-6 my-6 max-w-[95%] bg-[#D9D9D9] lg:w-[640px]">
          <button
            className="text-2xl text-red-600 font-bold"
            onClick={setvisible}
          >
            X
          </button>
          <form
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <section className=" w-full flex justify-start items-center">
              <h1 className=" text-2xl ml-2">Crea tu post!</h1>
            </section>
            <section className="w-full">
              <input
                onChange={handleChange}
                value={newPost.title}
                className="p-3 w-full rounded-md"
                type="text"
                name="title"
                placeholder="Agrega un titulo (obligatorio)"
              />
            </section>
            <section className="w-full">
              <textarea
                onChange={handleChange}
                value={newPost.description}
                className="w-full p-3 rounded-md"
                name="description"
                id=""
                cols="30"
                rows="6"
                placeholder="Aquí tú posteo (obligatorio)"
              />
            </section>
            <section className="flex w-full items-center justify-center gap-8 mb-4">
              <div>
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
                  <span className="cursor-pointer text-[#989898] ">Imagen</span>
                </label>
              </div>
            </section>
            {imagePreview && (
              <div className="w-full text-center">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={400}
                  height={400}
                  className="w-auto sm:max-w-[300px] mx-auto"
                />
              </div>
            )}
            <section className="w-full bg-[#43851dc9] p-4 rounded-md mt-4">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full h-full text-center font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Publicando..." : "Publica tu post"}
              </button>
            </section>
          </form>
        </div>
      </div>
    </main>
  );
}
