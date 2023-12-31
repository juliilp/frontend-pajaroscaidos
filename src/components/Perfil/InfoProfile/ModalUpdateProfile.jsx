import React, { useEffect, useState } from "react";
import FormUpdateProfile from "./ModalUpdateProfile/FormUpdateProfile";
import { FormUpdatePasword } from "./ModalUpdateProfile/FormUpdatePasword";

export default function ModalUpdateProfile({ user, toggleModal }) {
  const [changeView, setChangeView] = useState("UpdateProfile");

  const handleCloseModal = (event) => {
    if (event.target.id === "outside") {
      toggleModal();
    }
  };

  useEffect(() => {
    const body = document.getElementById("Body");
    body && (body.style.overflow = "hidden");

    return () => {
      body && (body.style.overflow = "auto");
    };
  });

  return (
    <article className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      <section
        onClick={handleCloseModal}
        id="outside"
        className="flex justify-center my-10"
      >
        <div className="bg-[#D9D9D9] flex flex-col items-end px-6 pb-4 pt-2 rounded-xl w-[85%] lg:w-[420px]">
          <button
            className="text-2xl text-red-600 font-bold"
            onClick={toggleModal}
          >
            X
          </button>
          {changeView == "UpdateProfile" && (
            <FormUpdateProfile user={user} setChangeView={setChangeView} />
          )}
          {changeView == "UpdatePassword" && (
            <FormUpdatePasword user={user} setChangeView={setChangeView} />
          )}
        </div>
      </section>
    </article>
  );
}
