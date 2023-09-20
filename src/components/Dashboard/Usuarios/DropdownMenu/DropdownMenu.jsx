import api from "@/api/api";
import "@/styles/DropdownMenu.css";
import React, { useEffect, useState } from "react";

export default function DropdownMenu({ user, onDataUpdate }) {
  const [dataUpdated, setDataUpdated] = useState(false);

  useEffect(() => {
    if (dataUpdated) {
      onDataUpdate();
      setDataUpdated(false);
    }
  }, [dataUpdated, onDataUpdate]);

  const changeStatus = async (option, newStatus) => {
    const body = { [option]: newStatus };

    try {
      const resp = await api.patch(`user/admin/${user.id}/action`, body);
      if (resp.status === 200) {
        setDataUpdated(true);
      }
    } catch (error) {
      console.error("Error al cambiar el estado:", error);
    }
  };

  return (
    <div>
      <h3>{user.nick_name}</h3>
      <ul>
        <li
          className="dropdownItem"
          onClick={() => changeStatus("isVoluntary", !user.isVoluntary)}
        >
          {user.isVoluntary ? (
            <a>Eliminar Voluntario</a>
          ) : (
            <a>Convertir Voluntario</a>
          )}
        </li>
        <li
          className="dropdownItem"
          onClick={() => changeStatus("isAdmin", !user.isAdmin)}
        >
          {user.isAdmin ? <a>Eliminar Admin</a> : <a>Convertir Admin</a>}
        </li>
        <li
          className="dropdownItem"
          onClick={() => changeStatus("isBanned", !user.isBanned)}
        >
          {user.isBanned ? <a>Desbanear</a> : <a>Banear</a>}
        </li>
      </ul>
    </div>
  );
}
