import { UpdateUser } from "@/api/apiCall/UserRequests";
import parseBackendDate from "@/helpers/FormatBackDate";
import validateUpdateUser from "@/helpers/ValidateUpdateUser";
import { CustomContext } from "@/store/ContextProvider";
import { useState } from "react";
import UpdateAvatar from "./FormUpdateProfile/UpdateAvatar";
import { BiLoaderAlt } from "react-icons/bi";

const fieldLabels = {
  nick_name: "Nickname",
  first_name: "Nombre",
  last_name: "Apellido",
  country: "Pais",
  province: "Estado/Provincia",
  birth_date: "Fecha de nacimiento",
  phone_number: "Telefono",
};

export default function FormUpdateProfile({ user, setChangeView }) {
  const { setJWTContext } = CustomContext();
  const [userUpdated, setUserUpdated] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleUserUpdated = (event) => {
    const { id, value } = event.target;

    setUserUpdated((userPrev) => ({
      ...userPrev,
      [id]: value,
    }));

    validateUpdateUser(id, value, errors, setErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      if (Object.keys(errors).length === 0) {
        if (userUpdated.birth_date) {
          setUserUpdated((userPrev) => ({
            ...userPrev,
            birth_date: parseBackendDate(userUpdated.birth_date),
          }));
        }

        const data = await UpdateUser(userUpdated, user.id);
        if (data.status === "success") {
          setJWTContext(data.user);
          setUserUpdated({});
          alert("El usuario se ha actualizado correctamente!");
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

    setChangeView("UpdatePassword");
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      {user.avatar && user.avatar.secure_url && <UpdateAvatar user={user} />}

      <h2 className="text-xl font-semibold mt-2">Editar perfil</h2>
      <form
        className="flex flex-col items-center gap-1 w-full"
        onSubmit={handleSubmit}
      >
        {Object.keys(fieldLabels).map((fieldName) => (
          <div key={fieldName} className="flex flex-col w-full">
            <label htmlFor={fieldName} className="pl-1 font-medium">
              {fieldLabels[fieldName]}
            </label>
            <input
              id={fieldName}
              type={fieldName === "birth_date" ? "date" : "text"}
              defaultValue={user[fieldName]}
              className="rounded-md px-2 py-1"
              onChange={handleUserUpdated}
            />
            {errors[fieldName] && (
              <p className="text-red-500">{errors[fieldName]}</p>
            )}
          </div>
        ))}
        <div
          className={`w-full flex mt-4 ${
            user.registerWithAuth0 ? "justify-end" : "justify-between"
          }`}
        >
          {!user.registerWithAuth0 && (
            <button
              className="py-1 px-3 rounded-md bg-[#7e7e7e]"
              onClick={changeView}
            >
              <span className="font-semibold">Cambiar contraseña</span>
            </button>
          )}
          <button
            className="py-1 px-3 rounded-md bg-[#60EA4A] disabled:bg-[#ff5e5e] disabled:cursor-not-allowed"
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              Object.keys(userUpdated).length === 0
            }
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
}
