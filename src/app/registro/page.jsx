"use client";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import RegistroImagen from "@/assets/registro-login.webp";
import Image from "next/image";
import api from "@/api/api";
import Cookies from "js-cookie";
import RegistroExitoso from "@/components/RegistroExitoso/RegistroExitoso";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Page() {
  const [emailUsed, setEmailUsed] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registroOk, setRegistroOk] = useState(false);

  const [switchPassword, setSwitchPassword] = useState(false);
  const [switchPasswordConfirm, setSwitchPasswordConfirm] = useState(false);
  const handlerSwitchPassword = () => {
    setSwitchPassword((prev) => !prev);
  };

  const handlerSwitchPasswordConfirm = () => {
    setSwitchPasswordConfirm((prev) => !prev);
  };

  useEffect(() => {}, [registroOk]);

  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  //   first_name: "",
  //   last_name: "",
  //   country: "",
  //   province: "",
  //   phone_number: "",
  // });

  // const handlerRegistro = (e) => {
  //   setFormRegister({
  //     ...formRegister,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handlerSubmit = async (values) => {
    if (isRegistering) {
      return;
    }

    setIsRegistering(true);

    try {
      const { passwordConfirm, ...userData } = values;
      const response = await api.post(`/user/create`, userData, {
        withCredentials: true,
      });

      if (response.status == 200) {
        const user = response.data;
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
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      first_name: "",
      last_name: "",
      country: "",
      province: "",
      phone_number: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Debe ser un email valido.").required("Debe ingresar un email."),
      password: Yup.string()
        .min(8, "La contraseña tiene que tender un mínimo de 8 caracteres")
        .required("Debe ingresar una contraseña."),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas ingresadas no coinciden.")
        .required("Debe confirmar la contraseña."),
      first_name: Yup.string()
        .min(2, "Ingrese un nombre valido.")
        .required("Debe ingresar su nombre"),
      last_name: Yup.string()
        .min(2, "Ingrese un apellido valido.")
        .required("Debe ingresar su apellido."),
      country: Yup.string().min(4, "País invalido").required("Debe ingresar el país donde vive."),
      province: Yup.string()
        .min(4, "Debe ingresar una ciudad valida.")
        .required("Debe ingresar la ciudad donde vive."),
      phone_number: Yup.string()
        .matches(/^\d{7,}$/, "Debe ingresar un número de teléfono válido con al menos 7 dígitos")
        .required("Debe ingresar un número de teléfono."),
    }),

    onSubmit: handlerSubmit,
  });

  if (registroOk) return <RegistroExitoso />;

  return (
    <section className="w-full flex  justify-center md:gap-12 px-4 md:px-12 mt-[70px] py-5">
      <div className="flex items-center justify-center">
        <Image
          src={RegistroImagen}
          alt="imagen"
          width={567}
          height={440}
          className="hidden md:block h-auto"
        />
      </div>

      <form
        className="w-full md:max-w-[400px] lg:max-w-[550px] flex flex-col bg-white rounded-xl md:justify-self-start"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="w-full text-center mt-6 lg:mt-10 font-bold text-xl md:text-2xl lg:text-3xl">
          Regístrate
        </h2>

        <div className="flex flex-col mx-4">
          <span>Nombre</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: formik.errors.first_name ? "visible" : "hidden" }}
          >
            {formik.errors.first_name}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Apellido</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="last_name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: formik.errors.last_name ? "visible" : "hidden" }}
          >
            {formik.errors.last_name}
          </span>
        </div>
        <div className="flex flex-col mx-4">
          <span>País</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          <span
            className="text-red-500"
            style={{ visibility: formik.errors.country ? "visible" : "hidden" }}
          >
            {formik.errors.country}
          </span>
        </div>
        <div className="flex flex-col mx-4">
          <span>Estado/Provincia</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
          />
          <span
            className="text-red-500"
            style={{ visibility: formik.errors.province ? "visible" : "hidden" }}
          >
            {formik.errors.province}
          </span>
        </div>
        <div className="flex flex-col mx-4">
          <span>Teléfono</span>
          <input
            type="text"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="phone_number"
            onChange={formik.handleChange}
            value={formik.values.phone_number}
          />
          <span
            className="text-red-500"
            style={{ visibility: formik.errors.phone_number ? "visible" : "hidden" }}
          >
            {formik.errors.phone_number}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Email</span>
          <input
            type="email"
            className="bg-[#EEEEEE] outline-none py-3 pl-1"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <span
            className="text-red-500"
            style={{
              visibility: formik.errors.email || emailUsed ? "visible" : "hidden",
            }}
          >
            {formik.errors.email ||
              (emailUsed && "Existe un usuario registrado con el e-mail ingresado")}
          </span>
        </div>

        <div className="flex flex-col mx-4">
          <span>Contraseña</span>
          <div className="relative">
            <input
              type={switchPassword ? "text" : "password"}
              className="bg-[#EEEEEE] outline-none py-3 pl-1 w-full"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="absolute top-[18%] right-2 cursor-pointer">
              {switchPassword ? (
                <AiOutlineEye size={30} onClick={handlerSwitchPassword} />
              ) : (
                <AiOutlineEyeInvisible size={30} onClick={handlerSwitchPassword} />
              )}
            </div>
            <span
              className="text-red-500"
              style={{ visibility: formik.errors.password ? "visible" : "hidden" }}
            >
              {formik.errors.password}
            </span>
          </div>
        </div>

        <div className="flex flex-col mx-4 mb-4">
          <span>Confirmar Contraseña</span>
          <div className="relative">
            <input
              type={switchPasswordConfirm ? "text" : "password"}
              className="bg-[#EEEEEE] outline-none py-3 pl-1 w-full"
              name="passwordConfirm"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
            <div className="absolute top-[18%] right-2 cursor-pointer">
              {switchPasswordConfirm ? (
                <AiOutlineEye size={30} onClick={handlerSwitchPasswordConfirm} />
              ) : (
                <AiOutlineEyeInvisible size={30} onClick={handlerSwitchPasswordConfirm} />
              )}
            </div>
          </div>
          <span
            className="text-red-500"
            style={{
              visibility: formik.errors.passwordConfirm ? "visible" : "hidden",
            }}
          >
            {formik.errors.passwordConfirm}
          </span>
        </div>

        <button
          className="bg-[#128117] text-white px-16 py-3 w-max mx-auto mb-4 rounded hover:bg-[#00812b] duration-200"
          disabled={isRegistering}
        >
          {isRegistering ? "Registrando..." : "Regístrate"}
        </button>
      </form>
    </section>
  );
}
