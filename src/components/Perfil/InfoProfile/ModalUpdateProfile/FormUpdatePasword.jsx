import { UpdatePassword } from "@/api/apiCall/UserRequests";
import ValidateUpdatePassword from "@/helpers/ValidateUpdatePassword";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

export const FormUpdatePasword = ({ user, setChangeView }) => {
  const [passwordUpdated, setPasswordUpdated] = useState({});
  const [errors, setErrors] = useState({
    confirmNewPassword: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordUpdate = (event) => {
    const { id, value } = event.target;

    setPasswordUpdated((passwordPrev) => ({
      ...passwordPrev,
      [id]: value,
    }));

    ValidateUpdatePassword(
      id,
      value,
      errors,
      setErrors,
      passwordUpdated.newPassword
    );
  };

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    delete passwordUpdated.confirmNewPassword;

    try {
      setIsLoading(true);

      if (Object.keys(errors).length === 0) {
        const data = await UpdatePassword(user.id, passwordUpdated);
        if (data.status === "success") {
          setPasswordUpdated({});
          alert("La contraseña se ha actualizado correctamente!");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeView = (event) => {
    event.preventDefault();

    setChangeView("UpdateProfile");
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="t text-xl font-semibold mt-2 mb-4">Cambiar contraseña</h2>
      <form
        className="flex flex-col items-center gap-1 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="oldPassword" className="pl-1 font-medium">
            Contraseña actual
          </label>
          <input
            id="oldPassword"
            type={togglePassword ? "text" : "password"}
            className="rounded-md px-2 py-1"
            onChange={handlePasswordUpdate}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="newPassword" className="pl-1 font-medium">
            Nueva contraseña
          </label>
          <input
            id="newPassword"
            type={togglePassword ? "text" : "password"}
            className="rounded-md px-2 py-1"
            onChange={handlePasswordUpdate}
          />
          {errors["newPassword"] && (
            <p className="text-red-500">{errors["newPassword"]}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="confirmNewPassword" className="pl-1 font-medium">
            Confirmar nueva contraseña
          </label>
          <input
            id="confirmNewPassword"
            type={togglePassword ? "text" : "password"}
            className="rounded-md px-2 py-1"
            onChange={handlePasswordUpdate}
          />
          {errors["confirmNewPassword"] && (
            <p className="text-red-500">{errors["confirmNewPassword"]}</p>
          )}
        </div>
        <div className="flex w-full gap-2 ">
          <input
            id="handleTogglePassword"
            type="checkbox"
            onChange={handleTogglePassword}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="handleTogglePassword" className="pl-1 font-medium">
            {togglePassword ? "Ocultar contraseñas" : "Mostrar contraseñas"}
          </label>
        </div>
        <div className="w-full flex justify-between mt-4">
          <button
            className="py-1 px-3 rounded-md bg-[#7e7e7e]"
            onClick={changeView}
          >
            <span className="font-semibold">Editar perfil</span>
          </button>
          <button
            className="py-1 px-3 rounded-md bg-[#60EA4A] disabled:bg-[#56af48] disabled:cursor-not-allowed"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            {isLoading ? (
              <BiLoaderAlt
                className="animate-spin mx-4"
                size={20}
                color="#0C6410"
              />
            ) : (
              <span className="font-semibold">Actualizar</span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};
