import { UpdateUser } from "@/api/apiCall/UserRequests";
import validateUpdateUser from "@/helpers/ValidateUpdateUser";
import { CustomContext } from "@/store/ContextProvider";
import { useState, useEffect } from "react";
import { BiEditAlt, BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import parseBackendDate from "@/helpers/FormatBackDate";

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
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null);

  const [avatarData, setAvatarData] = useState({
    image: user.avatar.secure_url,
    preview: null,
  });

  const handleNewAvatar = (event) => {
    const file = event.target.files[0];
    const bytes = file.size;
    const mb = Math.round(bytes / 1024)
    if (mb > 4400) {
      alert("La imagen no puede pesar mas de 1MB")
      return
    }
    setNewAvatar(file);
  };

  useEffect(() => {
    if (newAvatar) {
      setAvatarData({
        image: newAvatar,
        preview: URL.createObjectURL(newAvatar),
      });
    }
  }, [newAvatar]);

  const [updatedUserData, setUpdatedUserData] = useState({});
  const handleUserUpdated = (event) => {
    const { id, value } = event.target;

    setUpdatedUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    validateUpdateUser(id, value, errors, setErrors);
  };

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      if (Object.keys(errors).length === 0) {
        if (updatedUserData.birth_date) {
          setUpdatedUserData((userPrev) => ({
            ...userPrev,
            birth_date: parseBackendDate(updatedUserData.birth_date),
          }));
        }
        const formData = new FormData();

        Object.entries(updatedUserData).forEach(([key, value]) => {
          formData.append(key, value);
        });

        if (avatarData.preview) {
          formData.append("avatar", avatarData.image);
        }

        const data = await UpdateUser(formData, user.id);
        if (data.status === "success") {
          setJWTContext(data.user);
          setUpdatedUserData({});
          setAvatarData({
            // image: data.user.avatar.secure_url,
            preview: null,
          });
          setErrors({});
          alert("El usuario se ha actualizado correctamente!");
        }
      }
    } catch (error) {
      console.log("error al actualizar perfil: ", error);
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
      <div className="relative cursor-pointer flex flex-col items-center gap-1">
        {avatarData.preview ? (
          <Image
            src={avatarData.preview}
            alt="Profile Image"
            width={100}
            height={100}
            className="h-[100px] w-[100px] rounded-full"
            onMouseEnter={handleToggleIcon}
          />
        ) : (
          <Image
            src={user.avatar.secure_url}
            alt="Profile Image"
            width={100}
            height={100}
            className="h-[100px] w-[100px] rounded-full"
            onMouseEnter={handleToggleIcon}
          />
        )}
        {toggleIcon && (
          <div
            className="bg-[#00000079] h-[100px] w-[100px] absolute z-10 top-0 rounded-full"
            onMouseLeave={handleToggleIcon}
          >
            <label htmlFor="avatarInput" className="cursor-pointer">
              <BiEditAlt
                size={30}
                color="white"
                className="cursor-pointer block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </label>
            <input
              type="file"
              id="avatarInput"
              name="image"
              onChange={handleNewAvatar}
              className="hidden"
              accept="image/*"
            />
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mt-2">Editar perfil</h2>
      <form className="flex flex-col items-center gap-1 w-full">
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
            {errors[fieldName] && <p className="text-red-500">{errors[fieldName]}</p>}
          </div>
        ))}
        <div
          className={`w-full flex mt-4 ${user.registerWithAuth0 ? "justify-end" : "justify-between"
            }`}
        >
          {!user.registerWithAuth0 && (
            <button className="py-1 px-3 rounded-md bg-[#7e7e7e]" onClick={changeView}>
              <span className="font-semibold">Cambiar contraseña</span>
            </button>
          )}

          <button
            onClick={handleSubmit}
            className="py-1 px-3 rounded-md bg-[#60EA4A] disabled:bg-[#ff5e5e] disabled:cursor-not-allowed"
            type="submit"
            disabled={
              Object.keys(errors).length > 0 ||
              (Object.keys(updatedUserData).length === 0 && !avatarData.preview)
            }
          >
            {isLoading ? (
              <BiLoaderAlt className="animate-spin mx-4" size={20} color="#0C6410" />
            ) : (
              <span className="font-semibold">Actualizar</span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
