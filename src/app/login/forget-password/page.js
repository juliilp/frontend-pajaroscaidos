"use client";
import React, { useState } from "react";
import LoginImagen from "../../../assets/registro-login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/auxfunctions";
import { newPassword } from "@/api/apiCall/functions";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";

export default function EmailCode() {
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

    const response = await newPassword(input);

    if (response === MESSAGE_TYPES.USER_NOT_FOUND) {
      setInvalidUser(true);
    } else {
      alert("Se envió la contraseña a su correo");
      router.push("/login");
    }

    setInput({
      email: "",
    });
  };

  return (
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2">
      <Image
        src={LoginImagen}
        className="hidden md:block justify-self-end"
        alt="imagen"
      />
      <form
        className="w-[550px]  bg-[#FFFFFF] pb-16 rounded-xl"
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

        <div className="flex flex-col justify-center items-center mt-10">
          <button
            type="submit"
            className="bg-[#008000] h-[65px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded"
          >
            Solicitar nueva contraseña
          </button>
        </div>
      </form>
    </section>
  );
}
