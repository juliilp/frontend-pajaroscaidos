import api from "@/api/api";
import "@/styles/DropdownMenu.css";
import React from "react";

export default function DropdownMenu({ user, onDataUpdate }) {
  const changeStatus = async (option, newStatus) => {
    const body = { [option]: newStatus };

    try {
      const resp = await api.patch(`user/admin/${user.id}/action`, body);
      if (resp.status === 200) {
        onDataUpdate();
      }
    } catch (error) {
      console.error("Error al cambiar el estado:", error);
    }
  };

  const handleStatusClick = (option) => {
    changeStatus(option, !user[option]);
  };

  return (
    <div>
      <ul>
        <li
          className="dropdownItem"
          onClick={() => handleStatusClick("isVoluntary")}
        >
          <button>
            {user.isVoluntary ? "Eliminar Voluntario" : "Convertir Voluntario"}
          </button>
        </li>
        <li
          className="dropdownItem"
          onClick={() => handleStatusClick("isAdmin")}
        >
          <button>{user.isAdmin ? "Eliminar Admin" : "Convertir Admin"}</button>
        </li>
        <li
          className="dropdownItem"
          onClick={() => handleStatusClick("isBanned")}
        >
          <button>{user.isBanned ? "Desbanear" : "Banear"}</button>
        </li>
      </ul>
    </div>
  );
}
