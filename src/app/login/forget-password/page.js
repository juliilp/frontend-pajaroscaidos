"use client";
import React, { useState } from "react";
import Image from "next/image";
import api from "@/api/api";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/auxfunctions";

export default function EmailCode() {
  const LoginImagen =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694200637/registro-login_tfxjms.png";
  const router = useRouter();

  const [errors, setErrors] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [input, setInput] = useState({
    email: "",
  });

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateEmail(input.email);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await api.post(`user/generate-password`, input, {
        withCredentials: true,
      });

      if (response.status == 200) {
        alert("Se envió la contraseña a su correo");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error al enviar la pass:", error);
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error.code === "USER_NOT_FOUND") {
          setInvalidUser(true);
        }
      }
    }

    setInput({
      email: "",
    });

    // console.log(input)
  };

  return (
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2">
      <Image
        src={LoginImagen}
        className="hidden md:block justify-self-end"
        alt="imagen"
      />
      <form
        className="w-[550px]  bg-[#FFFFFF] pb-16 rounded-xl font-baloo "
        onSubmit={submitHandler}
      >
        <h2 className="font-bold  text-2xl text-center mt-2 mb-12">
          Recupera tu cuenta
        </h2>
        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">
            Ingrese su correo electrónico para recibir su nueva contraseña
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] py-3 outline-none pl-2 "
            onChange={inputHandler}
            name="email"
            value={input.email}
          />
          {errors && <span className="text-red-500">{errors.email}</span>}
          {invalidUser && (
            <span className="text-red-500">
              No hay un usuario registrado con ese email
            </span>
          )}
        </div>

        <div className="flex flex-col  justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl "
          >
            Solicitar nueva contraseña
          </button>
        </div>
      </form>
    </section>
  );
}
