import React, { useState } from "react";
import UserProfileHeader from "./InfoProfile/UserProfileHeader";
import UserInfo from "./InfoProfile/UserInfo";

export default function InfoProfile({ user }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((modalPrev) => !modalPrev);
  };

  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <UserProfileHeader avatar={user.avatar} />
      <UserInfo user={user} toggleModal={toggleModal} />
      {modal && (
        <div className="bg-[#0000008a] fixed w-screen h-screen top-0 left-0 z-50">
          <section className="h-full flex justify-center items-center">
            <div className="bg-slate-500 flex flex-col justify-center items-end">
              <span className="cursor-pointer" onClick={toggleModal}>
                X
              </span>
              <h1>Modal</h1>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
