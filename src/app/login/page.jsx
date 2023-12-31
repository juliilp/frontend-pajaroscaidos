"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import LoginImagen from "@/assets/registro-login.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CustomContext } from "@/store/ContextProvider";
import { validateLogin } from "@/utils/auxfunctions";
import { useSession, signIn } from "next-auth/react";
import Loading from "../loading";
import { loginNextAuth, loginUser } from "@/api/apiCall/functions";
import api from "@/api/api";
import { MESSAGE_TYPES } from "@/api/dictionary/dictionary";

export default function Login() {
  const { data: session, status: sessionStatus } = useSession();

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { setJWTContext } = CustomContext();
  const [switchPassword, setSwitchPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userNotFound, setUserNotFound] = useState(false);
  const [userGoogle, setUserGoogle] = useState(false);
  const [invalidPass, setInvalidPass] = useState(false);
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session && session.user) {
      const data = {
        email: session.user.email,
        avatar: session.user.image,
        nick_name: session.user.name,
      };
      const authenticateUser = async () => {
        const user = await loginNextAuth(data);

        if (user === MESSAGE_TYPES.USER_BANNED) {
          return router.push("/ban");
        } else if (user) {
          setJWTContext(user);
          router.push("/foro");
        } else {
          router.push("/login");
        }
      };

      authenticateUser();
    } else {
      setLoading(false);
    }
  }, [session, router, setJWTContext]);

  const inputHandler = (e) => {
    setInputLogin({
      ...inputLogin,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(inputLogin.email, inputLogin.password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }

    const user = await loginUser(inputLogin);

    if (user === MESSAGE_TYPES.VALIDATE_EMAIL) {
      return router.push("/emailcode");
    } else if (user === MESSAGE_TYPES.USER_NOT_FOUND) {
      setUserNotFound(true);
    } else if (user === MESSAGE_TYPES.USER_GOOGLE) {
      setUserGoogle(true);
    } else if (user === MESSAGE_TYPES.INVALID_PASSWORD) {
      setInvalidPass(true);
    } else if (user === MESSAGE_TYPES.USER_BANNED) {
      return router.push("/ban");
    } else if (user === MESSAGE_TYPES.INVALID_BODY) {
      return;
    } else {
      setJWTContext(user);
      router.push("/foro");
    }

    setInputLogin({
      email: "",
      password: "",
    });
  };

  async function loginWithGoogle(e) {
    e.preventDefault();
    signIn("google");
    setLoading(true);
    const nombreCompleto = session.user.name;
    const primerNombre = nombreCompleto.split(" ")[0];
    await api.post("/user/login-auth0", {
      email: session.user.email,
      avatar: {
        secure_url: session.user.avatar,
      },
      first_name: primerNombre,
      nick_name: primerNombre,
    });
  }

  return sessionStatus === "loading" || sessionStatus === "authenticated" || loading ? (
    <Loading />
  ) : (
    <section className="w-full h-[650px] flex mt-[70px] justify-center items-center md:grid md:grid-cols-2 px-4 md:px-8 md:gap-12 lg:gap-24 py-5">
      <Image src={LoginImagen} className="hidden md:block justify-self-end" alt="imagen" />

      <form
        className="w-full max-w-[500px] pt-4 pb-6 rounded-xl bg-white "
        onSubmit={submitHandler}
      >
        <h2 className="font-bold text-2xl text-center mt-4 mb-6">Inicia Sesión</h2>

        <div className="flex flex-col px-4 gap-1 mb-4 ">
          <span className="text-[#525252]">Email o nombre de usuario</span>

          <input
            type="text"
            className="py-3 outline-none pl-2 bg-[#EEEEEE] "
            onChange={inputHandler}
            name="email"
            value={inputLogin.email}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          {userNotFound && <span className="text-red-500">Usuario no registrado</span>}
          {userGoogle && (
            <span className="text-red-500">Con ese email debe iniciar sesión con Google</span>
          )}
        </div>
        <div className="flex flex-col px-4 gap-1 mb-4 ">
          <span className="text-[#525252]">Contraseña</span>
          <div className="flex relative ">
            <input
              type={switchPassword ? "text" : "password"}
              className="py-3  w-full outline-none  pl-2 bg-[#EEEEEE] "
              onChange={inputHandler}
              name="password"
              value={inputLogin.password}
            />

            <div
              className="absolute right-2 top-[18%] cursor-pointer"
              onClick={() => setSwitchPassword((prev) => !prev)}
            >
              {switchPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
            </div>
          </div>
          {invalidPass && <span className="text-red-500">Contraseña invalida</span>}
          {errors.password && <span className="text-red-500">{errors.password}</span>}
          <Link href="/login/forget-password">
            <span className="text-[#68A4FF] underline">Olvidé la contraseña</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center my-10">
          <button
            type={"submit"}
            className="bg-[#43851D] text-white h-[60px] w-[180px] text-lg rounded"
          >
            Inicia Sesión
          </button>
          <div className="flex w-full items-center justify-between px-4">
            <div className="h-[10px] w-[30%] bg-[#c2c2c2] shadow-login rounded-2xl  " />
            <span className="text-[#525252]">O registrate con</span>
            <div className="h-[10px] w-[30%] bg-[#c2c2c2]  shadow-login rounded-2xl " />
          </div>

          <button
            onClick={(e) => loginWithGoogle(e)}
            className="bg-[#BCBCBC] h-[60px] w-[180px] flex justify-center items-center rounded"
          >
            <AiOutlineGoogle size={50} />
          </button>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-[#525252]">¿No tienes cuenta en Pájaros Caídos?</span>

          <Link href="/registro">
            <span className="text-[#68A4FF] underline">Registrate</span>
          </Link>
        </div>
      </form>
    </section>
  );
}
