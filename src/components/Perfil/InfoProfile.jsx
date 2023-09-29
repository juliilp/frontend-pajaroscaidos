import React, { useState } from "react";
import UserProfileHeader from "./InfoProfile/UserProfileHeader";
import UserInfo from "./InfoProfile/UserInfo";
import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";

export default function InfoProfile({ user }) {
  const [modal, setModal] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const toggleModal = () => {
    setModal((modalPrev) => !modalPrev);
  };

  const handleToggleIcon = () => {
    setToggleIcon((togglePrev) => !togglePrev);
  };

  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <UserProfileHeader avatar={user.avatar} />
      <UserInfo user={user} toggleModal={toggleModal} />
      {modal && (
        <article className="bg-[#0000008a] fixed w-screen h-screen top-0 left-0 z-[9999999]">
          <section className="h-full flex justify-center items-center">
            <div className="bg-[#D9D9D9] flex flex-col items-end px-6 pb-4 pt-2 rounded-xl lg:w-[420px] max-h-[85%] overflow-y-auto">
              <button
                className="text-2xl text-red-600 font-bold"
                onClick={toggleModal}
              >
                X
              </button>
              <section className="flex flex-col justify-center items-center w-full">
                {user.avatar && user.avatar.secure_url && (
                  <div className="relative cursor-pointer">
                    <Image
                      src={user.avatar.secure_url}
                      alt="Profile Image"
                      width={80}
                      height={80}
                      className="h-[80px] w-[80px] rounded-full"
                      onMouseEnter={handleToggleIcon}
                    />
                    {toggleIcon && (
                      <div
                        className="bg-[#00000079] h-[80px] w-[80px] absolute z-10 top-0 rounded-full"
                        onMouseLeave={handleToggleIcon}
                      >
                        <div className="flex justify-center items-center w-full h-full">
                          <BiEditAlt
                            size={30}
                            className="cursor-pointer"
                            color="white"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <h2>Editar perfil</h2>
                <form className="flex flex-col items-center gap-1 w-full">
                  <div className="flex flex-col w-full">
                    <label htmlFor="nickname" className="pl-1 font-medium">
                      Nickname
                    </label>
                    <input
                      id="nickname"
                      type="text"
                      defaultValue={user.nick_name}
                      className="rounded-md px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="name" className="pl-1 font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      defaultValue={user.first_name}
                      className="rounded-md px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="lastName" className="pl-1 font-medium">
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      defaultValue={user.last_name}
                      className="rounded-md px-2 py-1"
                    />
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
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="birthDate" className="pl-1 font-medium">
                      Fecha de nacimiento
                    </label>
                    <input
                      id="birthDate"
                      type="date"
                      defaultValue={user.birth_date}
                      className="rounded-md px-2 py-1"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label htmlFor="phone" className="pl-1 font-medium">
                      Telefono
                    </label>
                    <input
                      id="phone"
                      type="text"
                      defaultValue={user.phone_number}
                      className="rounded-md px-2 py-1"
                    />
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="py-1 px-3 rounded-md bg-[#60EA4A] mt-2">
                      <span className="">Actualizar</span>
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </section>
        </article>
      )}
    </section>
  );
}
