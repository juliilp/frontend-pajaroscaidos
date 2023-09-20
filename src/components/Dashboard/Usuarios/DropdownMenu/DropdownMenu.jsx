import api from "@/api/api";
import "@/styles/DropdownMenu.css";
import React from "react";

/**
 * Renders a dropdown menu with options to change the status of a user.
 * @param {Object} props.user - The user object containing the user's information and status.
 * @param {Function} props.onDataUpdate - A callback function to be called when the data is updated.
 * @returns {JSX.Element} - The rendered dropdown menu component.
 */

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
