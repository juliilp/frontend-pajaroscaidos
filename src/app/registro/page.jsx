"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import RegistroImagen from "../../assets/registro-login.png";
import Image from "next/image";
import api from "@/api/api";
import { validateCreateUser } from "@/utils/auxfunctions";
import Cookies from "js-cookie";
import RegistroExitoso from "@/components/RegistroExitoso/RegistroExitoso";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [emailUsed, setEmailUsed] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registroOk, setRegistroOk] = useState(false);

  const [switchPassword, setSwitchPassword] = useState(false);
  const handlerSwitchPassword = () => {
    setSwitchPassword((prev) => !prev);
  };

  useEffect(() => {}, [registroOk]);

  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    first_name: "",
    last_name: "",
  });

  const handlerRegistro = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateCreateUser(formRegister);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (isRegistering) {
      return;
    }

    setIsRegistering(true);

    try {
      const { passwordConfirm, ...userData } = formRegister;
      const response = await api.post(`/user/create`, userData, {
        withCredentials: true,
      });

      if (response.status == 200) {
        const user = response.data;
        // console.log('newUser', user.newUser)

        Cookies.set("newUserId", JSON.stringify({ id: user.newUser.id }), {
          expires: 7,
        });

        return setRegistroOk(true);
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error.code === "EMAIL_USED") {
          setEmailUsed(true);
        }
      }
    } finally {
      setIsRegistering(false);
    }

    setFormRegister({
      email: "",
      password: "",
      passwordConfirm: "",
      first_name: "",
      last_name: "",
    });
  };

  if (registroOk) return <RegistroExitoso />;

  return (
    <section className="w-full h-screen flex justify-center items-center gap-12 px-12 mt-8 font-baloo">
      <Image
        src={RegistroImagen}
        alt="imagen"
        className="hidden md:block justify-self-end"
      />

      <form
        className="w-full max-w-[550px] md:max-w-[400px] lg:max-w-[550px] flex flex-col bg-white rounded-xl md:justify-self-start"
        onSubmit={handlerSubmit}
      >
        <h2 className="w-full text-center mt-6 lg:mt-10 font-bold text-xl md:text-2xl lg:text-3xl">
          Registrate
        </h2>

        <div className="flex flex-col mx-4">
          <span>Nombre</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="first_name"
            onChange={handlerRegistro}
            value={formRegister.first_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: errors.first_name ? "visible" : "hidden" }}
          >
            {errors.first_name}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Apellido</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="last_name"
            onChange={handlerRegistro}
            value={formRegister.last_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: errors.last_name ? "visible" : "hidden" }}
          >
            {errors.last_name}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Email</span>
          <input
            type="email"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="email"
            onChange={handlerRegistro}
            value={formRegister.email}
          />

          <span
            className="text-red-500"
            style={{
              visibility: errors.email || emailUsed ? "visible" : "hidden",
            }}
          >
            {errors.email ||
              (emailUsed &&
                "Existe un usuario registrado con el e-mail ingresado")}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Contraseña</span>
          <div className="relative">
            <input
              type={switchPassword ? "text" : "password"}
              className="bg-[#EEEEEE] outline-none py-3 pl-1 w-full"
              name="password"
              onChange={handlerRegistro}
              value={formRegister.password}
            />
            <div className="absolute top-[18%] right-2 cursor-pointer">
              {switchPassword ? (
                <AiOutlineEye size={30} onClick={handlerSwitchPassword} />
              ) : (
                <AiOutlineEyeInvisible
                  size={30}
                  onClick={handlerSwitchPassword}
                />
              )}
            </div>
            <span
              className="text-red-500"
              style={{ visibility: errors.password ? "visible" : "hidden" }}
            >
              {errors.password}
            </span>
          </div>
        </div>

        <div className="flex flex-col mx-4 mb-4">
          <span>Confirmar Contraseña</span>
          <div className="relative">
            <input
              type={switchPassword ? "text" : "password"}
              className="bg-[#EEEEEE] outline-none py-3 pl-1 w-full"
              name="passwordConfirm"
              onChange={handlerRegistro}
              value={formRegister.passwordConfirm}
            />
            <div className="absolute top-[18%] right-2 cursor-pointer">
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
          <span
            className="text-red-500"
            style={{
              visibility: errors.passwordConfirm ? "visible" : "hidden",
            }}
          >
            {errors.passwordConfirm}
          </span>
        </div>

        {/*<div className="flex flex-col mx-4">

          <span>Tipo de voluntario</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="voluntario"
            onChange={handlerRegistro}
            value={formRegister.voluntario}
          />

        </div>*/}

        <button
          className="bg-[#128117] text-white px-16 py-3 w-max mx-auto mb-4 rounded hover:bg-[#00812b] duration-200"
          disabled={isRegistering}
        >
          {isRegistering ? "Registrando..." : "Registrate"}
        </button>
      </form>
    </section>
  );
}
