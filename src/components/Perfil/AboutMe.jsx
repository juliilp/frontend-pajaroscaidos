import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import ModalUpdateAboutMe from "./AboutMe/ModalUpdateAboutMe";

export default function AboutMe({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((modalPrev) => !modalPrev);
  };

  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <div className="flex justify-between w-full">
        <h3 className="text-2xl font-semibold">Sobre mi</h3>
        <BiEditAlt size={30} className="cursor-pointer" onClick={toggleModal} />
      </div>
      <p className="w-full">{user.description || "No hay descripcion"}</p>
      {modal && <ModalUpdateAboutMe user={user} toggleModal={toggleModal} />}
    </section>
  );
}
