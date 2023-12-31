"use client";
import React, { useState, useEffect } from "react";
import LoginImagen from "@/assets/registro-login.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { checkEmail, newCode } from "@/api/apiCall/functions";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";
import Cookies from "js-cookie";

export default function EmailCode() {
  const router = useRouter();
  const regex = /^[0-9]+$/;

  const [id, setId] = useState(null);

  const [errors, setErrors] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [input, setInput] = useState({
    code: "",
  });

  useEffect(() => {
    if (!id) {
      const userIdFromCookie = Cookies.get("newUserId");
      if (userIdFromCookie) {
        const decodedUser = decodeURIComponent(userIdFromCookie);
        const userParser = JSON.parse(decodedUser);
        setId(userParser.id);
      }
    }
  }, [id]);

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.code || !regex.test(input.code)) {
      setErrors(true);
      return;
    }

    const response = await checkEmail(id, input);

    if (response === MESSAGE_TYPES.INVALID_CODE) {
      setInvalidCode(true);
      setInput({
        code: "",
      });
    } else {
      router.push("/login");
    }
  };

  const sendNewCode = async (e) => {
    e.preventDefault();

    const response = await newCode(id);

    if (response) {
      return alert(`Se envió un nuevo código al correo `);
    }
    return alert("ERROR AL ENVIAR EL CÓDIGO");
  };

  return (
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2 md:px-8 md:gap-12 lg:gap-24 mt-8">
      <Image
        src={LoginImagen}
        className="hidden md:block justify-self-end"
        alt="imagen"
      />
      <form
        className="w-full max-w-[500px] bg-[#FFFFFF] pb-16 rounded-xl"
        onSubmit={submitHandler}
      >
        <h2 className="font-bold text-2xl text-center mt-2 mb-12">
          Validar e-mail
        </h2>
        <div className="flex flex-col px-4 gap-2">
          <span className="text-[#525252]">
            Ingrese el código para validar su correo electrónico
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] py-3 outline-none pl-2"
            onChange={inputHandler}
            name="code"
            value={input.code}
          />
          {errors && (
            <span className="text-red-500">Código debe ser numérico.</span>
          )}
          {invalidCode && (
            <span className="text-red-500">
              El código ingresado es invalido
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl"
          >
            Enviar código
          </button>
        </div>
        <div className="flex w-full items-center justify-between px-4">
          <div className="h-[10px] w-[100%] bg-[#c2c2c2] shadow-login rounded-2xl  " />
        </div>
        <div className="flex flex-col  justify-center items-center my-10">
          <button
            onClick={(e) => sendNewCode(e)}
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl"
          >
            Solicitar un nuevo código
          </button>
        </div>
      </form>
    </section>
  );
}
