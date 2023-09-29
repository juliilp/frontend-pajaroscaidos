import React, { useState } from "react";
import UserProfileHeader from "./InfoProfile/UserProfileHeader";
import UserInfo from "./InfoProfile/UserInfo";
import ModalUpdateProfile from "./InfoProfile/ModalUpdateProfile";

export default function InfoProfile({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((modalPrev) => !modalPrev);
  };

  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <UserProfileHeader avatar={user.avatar} />
      <UserInfo user={user} toggleModal={toggleModal} />
      <ModalUpdateProfile modal={modal} user={user} toggleModal={toggleModal} />
    </section>
  );
}
