import { UpdateUser } from "@/api/apiCall/UserFunctions";
import parseBackendDate from "@/helpers/FormatBackDate";
import { CustomContext } from "@/store/ContextProvider";
import Image from "next/image";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export default function FormUpdateProfile({ user }) {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [userUpdated, setUserUpdated] = useState({});
  const [errors, setErrors] = useState({});
  const { setUserContext } = CustomContext();

  const handleToggleIcon = () => {
    setToggleIcon((togglePrev) => !togglePrev);
  };

  const handleUserUpdated = (event) => {
    const { id, value } = event.target;

    setUserUpdated((userPrev) => ({
      ...userPrev,
      [id]: id === "phone_number" ? Number(value) : value,
    }));
    validateField(id, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case "nick_name":
        if (value.length > 24) {
          newErrors.nick_name =
            "El nickname no puede tener más de 24 caracteres";
        } else {
          delete newErrors.nick_name;
        }
        break;
      case "first_name":
        if (value.length > 24) {
          newErrors.first_name =
            "El nombre no puede tener más de 24 caracteres";
        } else {
          delete newErrors.first_name;
        }
        break;
      case "last_name":
        if (value.length > 24) {
          newErrors.last_name =
            "El apellido no puede tener más de 24 caracteres";
        } else {
          delete newErrors.last_name;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
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
        <div className="flex flex-col w-full">
          <label htmlFor="nick_name" className="pl-1 font-medium">
            Nickname
          </label>
          <input
            id="nick_name"
            type="text"
            defaultValue={user.nick_name}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
          {errors.nick_name && (
            <p className="text-red-500">{errors.nick_name}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="first_name" className="pl-1 font-medium">
            Nombre
          </label>
          <input
            id="first_name"
            type="text"
            defaultValue={user.first_name}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
          {errors.first_name && (
            <p className="text-red-500">{errors.first_name}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="last_name" className="pl-1 font-medium">
            Apellido
          </label>
          <input
            id="last_name"
            type="text"
            defaultValue={user.last_name}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
          {errors.last_name && (
            <p className="text-red-500">{errors.last_name}</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="country" className="pl-1 font-medium">
            Pais
          </label>
          <input
            id="country"
            type="text"
            defaultValue={user.country}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="city" className="pl-1 font-medium">
            Ciudad
          </label>
          <input
            id="city"
            type="text"
            defaultValue={user.city}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="birth_date" className="pl-1 font-medium">
            Fecha de nacimiento
          </label>
          <input
            id="birth_date"
            type="date"
            defaultValue={user.birth_date}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phone_number" className="pl-1 font-medium">
            Telefono
          </label>
          <input
            id="phone_number"
            type="number"
            defaultValue={user.phone_number}
            className="rounded-md px-2 py-1"
            onChange={handleUserUpdated}
          />
        </div>
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
