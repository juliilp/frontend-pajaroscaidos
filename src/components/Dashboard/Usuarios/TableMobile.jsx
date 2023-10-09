import { useState } from "react";
import Modal from "./Mobile/Modal";
import UserList from "./Mobile/UserList";

export default function TableMobile({ users, handleDataUpdate }) {
  const [modal, setModal] = useState({ toggle: false, userId: "" });

  const toggleModal = (id) => {
    const user = users.find((user) => user.id === id);
    setModal({ toggle: !modal.toggle, userId: user ? user.id : "" });
  };

  return (
    <>
      {modal.toggle && (
        <Modal
          toggleModal={toggleModal}
          userId={modal.userId}
          onDataUpdate={handleDataUpdate}
        />
      )}
      <table className="w-full table-auto text-center border-separate border-spacing-y-2 sm:hidden">
        <thead>
          <tr>
            <th>
              <strong>Avatar</strong>
            </th>
            <th>
              <strong>Nickname</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <UserList users={users} toggleModal={toggleModal} />
        </tbody>
      </table>
    </>
  );
}
