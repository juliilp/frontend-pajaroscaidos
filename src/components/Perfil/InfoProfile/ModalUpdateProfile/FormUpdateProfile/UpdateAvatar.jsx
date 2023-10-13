import { UpdateUser } from "@/api/apiCall/UserRequests";
import { CustomContext } from "@/store/ContextProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export default function UpdateAvatar({ user }) {
  const { setUserContext } = CustomContext();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const handleNewAvatar = (event) => {
    const file = event.target.files[0];
    setNewAvatar(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async () => {
    if (newAvatar) {
      const formData = new FormData();
      formData.append("avatar", newAvatar);

      const data = await UpdateUser(formData, user.id);
      if (data.status === "success") {
        setUserContext(data.userUpdated);
        setNewAvatar(null);
        setImagePreview(null);
        alert("La imagen se ha actualizado correctamente!");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className="relative cursor-pointer flex flex-col items-center gap-1">
      {imagePreview ? (
        <Image
          src={imagePreview}
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
      {imagePreview && (
        <button
          onClick={handleSubmit}
          className="py-1 px-3 rounded-md bg-[#60EA4A]"
        >
          <span className="font-semibold">Subir imagen</span>
        </button>
      )}
    </div>
  );
}
