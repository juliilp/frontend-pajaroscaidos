import { UpdateUserStatus, getUserById } from "@/api/apiCall/UserRequests";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiCheckbox, BiCheckboxChecked, BiLoaderAlt } from "react-icons/bi";

export default function Modal({ toggleModal, userId, onDataUpdate }) {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const data = await getUserById(userId);
    setUser(data.user);
  };

  useEffect(() => {
    const body = document.getElementById("Body");
    body && (body.style.overflow = "hidden");

    fetchUser();

    return () => {
      body && (body.style.overflow = "auto");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleCloseModal = (event) => {
    if (event.target.id === "outside") {
      toggleModal("");
    }
  };

  const handleStatus = (option) => {
    changeStatus(option, !user[option]);
  };

  const changeStatus = async (option, newStatus) => {
    const body = { [option]: newStatus };
    const status = await UpdateUserStatus(user.id, body);
    if (status === 200) {
      onDataUpdate();
      fetchUser();
    }
  };

  return (
    <article className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto">
      <section
        onClick={handleCloseModal}
        id="outside"
        className="flex justify-center items-center h-full"
      >
        <div className="bg-[#D9D9D9] flex flex-col px-6 pb-6 pt-2 rounded-xl w-[90%] text-black">
          <button
            className="text-2xl text-red-600 font-bold w-full text-right"
            onClick={() => toggleModal("")}
          >
            X
          </button>
          {user ? (
            <section className="flex flex-col gap-3">
              <div className="w-full flex items-end gap-3 font-semibold text-lg">
                <Image
                  src={
                    user.avatar.avatar_url
                      ? user.avatar.avatar_url
                      : user.avatar.secure_url
                  }
                  alt={user.id}
                  width={100}
                  height={100}
                  className="h-[40px] w-[40px] rounded-lg"
                />
                <h2>{user.nick_name}</h2>
              </div>
              <h3 className="text-lg w-full">
                <span className="font-medium">Email: </span>
                {user.email}
              </h3>
              <div
                className="flex gap-4 justify-between items-center w-full"
                onClick={() => handleStatus("isVoluntary")}
              >
                <span className="font-medium">Voluntario</span>
                {user.isVoluntary ? (
                  <BiCheckboxChecked size={35} />
                ) : (
                  <BiCheckbox size={35} />
                )}
              </div>
              <div
                className="flex gap-4 justify-between items-center w-full"
                onClick={() => handleStatus("isAdmin")}
              >
                <span className="font-medium">Admin</span>
                {user.isAdmin ? (
                  <BiCheckboxChecked size={35} />
                ) : (
                  <BiCheckbox size={35} />
                )}
              </div>
              <div
                className="flex gap-4 justify-between items-center w-full"
                onClick={() => handleStatus("isBanned")}
              >
                <span className="font-medium">Baneado</span>
                {user.isBanned ? (
                  <BiCheckboxChecked size={35} />
                ) : (
                  <BiCheckbox size={35} />
                )}
              </div>
            </section>
          ) : (
            <div className="w-full py-3 flex justify-center">
              <BiLoaderAlt className="animate-spin" size={35} />
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
