import { UpdateUser } from "@/api/apiCall/UserFunctions";
import parseBackendDate from "@/helpers/FormatBackDate";
import validateUpdateUser from "@/helpers/ValidateUpdateUser";
import { CustomContext } from "@/store/ContextProvider";
import Image from "next/image";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

const fieldLabels = {
  nick_name: "Nickname",
  first_name: "Nombre",
  last_name: "Apellido",
  country: "Pais",
  city: "Ciudad",
  birth_date: "Fecha de nacimiento",
  phone_number: "Telefono",
};

export default function FormUpdateProfile({ user }) {
  const { setUserContext } = CustomContext();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [userUpdated, setUserUpdated] = useState({});
  const [errors, setErrors] = useState({});

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleUserUpdated = (event) => {
    const { id, value } = event.target;
    const updatedValue = id === "phone_number" ? Number(value) : value;

    setUserUpdated((userPrev) => ({
      ...userPrev,
      [id]: updatedValue,
    }));
    validateUpdateUser(id, updatedValue, errors, setErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      if (userUpdated.birth_date) {
        setUserUpdated((userPrev) => ({
          ...userPrev,
          birth_date: parseBackendDate(userUpdated.birth_date),
        }));
      }

      const data = await UpdateUser(userUpdated, user.id);
      if (data.status === "success") {
        setUserContext(data.userUpdated);
        setUserUpdated({});
        alert("El usuario se ha actualizado correctamente!");
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      {user.avatar && user.avatar.secure_url && (
        <div className="relative cursor-pointer">
          <Image
            src={user.avatar.secure_url}
            alt="Profile Image"
            width={100}
            height={100}
            className="h-[100px] w-[100px] rounded-full"
            onMouseEnter={handleToggleIcon}
          />
          {toggleIcon && (
            <div
              className="bg-[#00000079] h-[100px] w-[100px] absolute z-10 top-0 rounded-full"
              onMouseLeave={handleToggleIcon}
            >
              <div className="flex justify-center items-center w-full h-full">
                <BiEditAlt size={30} className="cursor-pointer" color="white" />
              </div>
            </div>
          )}
        </div>
      )}

      <h2>Editar perfil</h2>
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
              type={
                fieldName === "birth_date"
                  ? "date"
                  : fieldName === "phone_number"
                  ? "number"
                  : "text"
              }
              defaultValue={user[fieldName]}
              className="rounded-md px-2 py-1"
              onChange={handleUserUpdated}
            />
            {errors[fieldName] && (
              <p className="text-red-500">{errors[fieldName]}</p>
            )}
          </div>
        ))}
        <div className="w-full flex justify-end">
          <button
            className="py-1 px-3 rounded-md bg-[#60EA4A] mt-2 disabled:bg-[#56af48] disabled:cursor-not-allowed"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            <span className="">Actualizar</span>
          </button>
        </div>
      </form>
    </section>
  );
}
