import api from "@/api/api";
import "@/styles/DropdownMenu.css";
import React from "react";
import { useRouter } from "next/navigation";

export default function DropdownMenu({ user, onDataUpdate }) {
  const router = useRouter();

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
    if (option === "isAdmin" && !user.isPrincipalAdmin) {
      return changeStatus(option, !user[option]);
    }

    if (option === "isBanned" && !user.isPrincipalAdmin) {
      return changeStatus(option, !user[option]);
    }
    if (option === "isVoluntary") {
      changeStatus(option, !user[option]);
    }
  };

  const handleVerMas = () => {
    router.push(`/dashboard/usuarios/${user.id}`);
  };

  return (
    <div>
      <ul>
        <li className="dropdownItem" onClick={() => handleStatusClick("isVoluntary")}>
          <button>{user.isVoluntary ? "Eliminar Voluntario" : "Convertir Voluntario"}</button>
        </li>
        <li className="dropdownItem" onClick={() => handleStatusClick("isAdmin")}>
          {user.isPrincipalAdmin ? (
            <button disabled={true}>Error: Admin Principal</button>
          ) : (
            <button>{user.isAdmin ? "Eliminar Admin" : "Convertir Admin"}</button>
          )}
        </li>
        <li className="dropdownItem" onClick={() => handleStatusClick("isBanned")}>
          {user.isPrincipalAdmin ? (
            <button disabled={true}>Error: Admin Principal</button>
          ) : (
            <button>{user.isBanned ? "Desbanear" : "Banear"}</button>
          )}
        </li>
        <li className="dropdownItem" onClick={() => handleVerMas()}>
          <button>{"Ver más"}</button>
        </li>
      </ul>
    </div>
  );
}
