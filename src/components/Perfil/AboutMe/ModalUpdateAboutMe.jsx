"use client";
import { UpdateUser } from "@/api/apiCall/UserRequests";
import { CustomContext } from "@/store/ContextProvider";
import React, { useState, useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";

export default function ModalUpdateAboutMe({ user, toggleModal }) {
  const [description, setDescription] = useState({
    aboutMe: "",
    work: "",
    dev: "",
    contact: [],
  });

  useEffect(() => {
    if (user.description) {
      setDescription({
        aboutMe: user.description.aboutMe,
        work: user.description.work,
        dev: user.description.dev,
        contact: user.description.contact || [],
      });
    }
  }, [user.description]);

  const { setJWTContext } = CustomContext();

  const handleCloseModal = (event) => {
    if (event.target.id === "outside") {
      toggleModal();
    }
  };

  const handleDescription = (event) => {
    const { id, value } = event.target;
    if (id === "aboutMe") {
      setDescription({ ...description, aboutMe: value });
    } else if (id === "work") {
      setDescription({ ...description, work: value });
    } else if (id === "dev") {
      setDescription({ ...description, dev: value });
    } else if (id === "contact") {
      setDescription({ ...description, contact: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await UpdateUser({ description }, user.id);

    if (data.status === "success") {
      setJWTContext(data.user);
      alert("La descripción se ha actualizado correctamente.");
    }
  };

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...description.contact];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };
    setDescription({
      ...description,
      contact: updatedContacts,
    });
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    setDescription({
      ...description,
      contact: [
        ...description.contact,
        {
          name: "",
          url: "",
        },
      ],
    });
  };

  const handleRemoveContact = (e, index) => {
    e.preventDefault();
    const updatedContacts = [...description.contact];
    updatedContacts.splice(index, 1);
    setDescription({
      ...description,
      contact: updatedContacts,
    });
  };

  return (
    <article className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      <section
        onClick={handleCloseModal}
        id="outside"
        className="flex min-h-full items-center justify-center"
      >
        <div className="bg-[#D9D9D9] flex flex-col items-end px-6 pb-4 pt-3 rounded-xl w-[85%] md:w-[480px]">
          <button className="text-2xl text-red-600 font-bold" onClick={toggleModal}>
            X
          </button>
          <section className="flex flex-col items-center w-full gap-4">
            <div className="flex gap-3">
              <BiSolidEditAlt size={20} />
              <h2 className="text-xl font-bold">Editar descripción</h2>
            </div>
            <form className="flex flex-col items-center w-full gap-2">
              <label>Sobre vos</label>
              <textarea
                value={description.aboutMe}
                id="aboutMe"
                onChange={handleDescription}
                className="w-full rounded-md px-3 py-2 h-40"
              ></textarea>
              <label>Tu labor en la ONG</label>
              <textarea
                value={description.work}
                id="work"
                onChange={handleDescription}
                className="w-full rounded-md px-3 py-2 h-40"
              ></textarea>
              {user.isDeveloper ? (
                <>
                  <label>Tu desarrollo en la pagina</label>
                  <textarea
                    value={description.dev}
                    id="dev"
                    onChange={handleDescription}
                    className="w-full rounded-md px-3 py-2 h-40"
                  ></textarea>
                  <label> Tus contactos</label>
                  {description.contact.map((contact, index) => (
                    <div key={index} className="flex flex-col gap-2 md:flex-row md:items-center">
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => handleContactChange(index, "name", e.target.value)}
                        placeholder="Nombre del contacto"
                        className="rounded-md px-3 py-2"
                      />
                      <input
                        type="text"
                        value={contact.url}
                        onChange={(e) => handleContactChange(index, "url", e.target.value)}
                        placeholder="URL del contacto"
                        className="rounded-md px-3 py-2"
                      />
                      <button
                        className="bg-red-500 text-white px-1 py-1 rounded-md"
                        onClick={(e) => handleRemoveContact(e, index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <button
                    className="bg-gray-500 text-white px-1 py-1 rounded-md"
                    onClick={(e) => handleAddContact(e)}
                  >
                    Agregar contacto
                  </button>
                </>
              ) : null}
              <button onClick={handleSubmit} className="py-1 px-3 rounded-md bg-[#60EA4A] mt-2">
                <span className="font-semibold">Actualizar</span>
              </button>
            </form>
          </section>
        </div>
      </section>
    </article>
  );
}
