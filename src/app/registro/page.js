"use client";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import RegistroImagen from "../../assets/registro-login.png";
import Image from "next/image";
export default function page() {
  const [switchPassword, setSwitchPassword] = useState(false);
  const handlerSwitchPassword = () => {
    setSwitchPassword((prev) => !prev);
  };
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    nombre: "",
    voluntario: "",
  });
  const handlerRegistro = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(formRegister);
    setFormRegister({
      email: "",
      password: "",
      nombre: "",
      voluntario: "",
    });
  };
  return (
    <section className="w-full h-screen flex justify-center items-center gap-12 px-12">
      <Image
        src={RegistroImagen}
        alt="imagen"
        className="hidden md:block justify-self-end"
      />
      <form
        className="w-full max-w-[550px] md:max-w-[400px] lg:max-w-[550px] flex flex-col bg-white rounded-xl gap-6 md:gap-8 lg:gap-10 justify-self-start"
        onSubmit={handlerSubmit}
      >
        <h2 className="w-full text-center mt-6 md:mt-8 lg:mt-10 font-bold text-xl md:text-2xl lg:text-3xl">
          Registrate
        </h2>
        <div className="flex flex-col gap-1 mx-4">
          <span>Email</span>
          <input
            type="email"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="email"
            onChange={handlerRegistro}
            value={formRegister.email}
          />
        </div>
        <div className="flex flex-col gap-1 mx-4">
          <span>Contraseña</span>
          <div className="relative">
            <input
              type={switchPassword ? "text" : "password"}
              className="bg-[#EEEEEE] outline-none py-3 pl-1 w-full"
              name="password"
              onChange={handlerRegistro}
              value={formRegister.password}
            />
            <div className="absolute top-[18%] right-0">
              {switchPassword ? (
                <AiOutlineEye size={30} onClick={handlerSwitchPassword} />
              ) : (
                <AiOutlineEyeInvisible
                  size={30}
                  onClick={handlerSwitchPassword}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 mx-4">
          <span>Nombre</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="nombre"
            onChange={handlerRegistro}
            value={formRegister.nombre}
          />
        </div>
        <div className="flex flex-col gap-1 mx-4">
          <span>Tipo de voluntario</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="voluntario"
            onChange={handlerRegistro}
            value={formRegister.voluntario}
          />
        </div>
        <button className="bg-[#128117] text-white px-16 py-5 w-max mx-auto mb-4">
          Registrate
        </button>
      </form>
    </section>
  );
}
