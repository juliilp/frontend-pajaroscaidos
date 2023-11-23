"use client";
import { adminActions, getUserById, getVoluntaryTypes } from "@/api/apiCall/UserRequests";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserData = ({ params }) => {
  const [user, setUser] = useState();
  const [voluntaryTypes, setVoluntaryTypes] = useState([]);
  const [selectedVoluntaryType, setSelectedVoluntaryType] = useState("");

  useEffect(() => {
    const func = async () => {
      const response = await getUserById(params.id);

      setUser(response.user);
      const types = await getVoluntaryTypes();
      setVoluntaryTypes(types.types);
    };
    func();
  }, [params.id]);

  const changeStatus = async (option, newStatus) => {
    const body = { [option]: newStatus };

    await adminActions(user.id, body);
    window.location.reload();
  };

  const handleStatusClick = (option) => {
    if (option === "isAdmin" && !user.isPrincipalAdmin) {
      return changeStatus(option, !user[option]);
    }

    if (option === "isBanned" && !user.isPrincipalAdmin) {
      return changeStatus(option, !user[option]);
    }
    if (option === "isVoluntary") {
      return changeStatus(option, !user[option]);
    }
    if (option === "isDeveloper") {
      return changeStatus(option, !user[option]);
    }
  };

  const handleVoluntaryType = async () => {
    await changeStatus("voluntaryType", selectedVoluntaryType);
  };

  if (!user) {
    return <>loading...</>;
  }

  return (
    <div className="p-4 bg-white shadow-md max-w-2xl mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4">Datos del usuario {user.nick_name}</h1>
      <Image
        src={user.avatar?.secure_url}
        alt="User Avatar"
        width={100}
        height={100}
        className="h-[100px] w-[100px] object-cover mb-4 rounded-full"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
      <p>
        <span className="font-bold">Nombre:</span> {user.first_name}
      </p>
      <p>
        <span className="font-bold">Apellido:</span> {user.last_name}
      </p>
      <p>
        <span className="font-bold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-bold">Teléfono:</span> {user.phone_number}
      </p>
      <p>
        <span className="font-bold">País:</span> {user.country}
      </p>
      <p>
        <span className="font-bold">Ciudad:</span> {user.city}
      </p>
      <p>
        <span className="font-bold">Provincia/Estado:</span> {user.province}
      </p>
      <p>
        <span className="font-bold">Fecha de nacimiento:</span> {user.birth_date}
      </p>
      <p>
        <span className="font-bold">Descripción:</span> {user.description?.aboutMe} Mi labor en la
        ONG: {user.description?.work}
      </p>
      <p>
        <span className="font-bold">Contacto:</span> {user.contact}
      </p>
      <p>
        <span className="font-bold">Código de Email:</span> {user.emailValidateCode}
      </p>

      <hr className="my-4 border-t border-gray-300" />

      <h3 className="text-xl font-bold mb-2">Estados</h3>
      <p>
        <span className="font-bold">Permisos de administrador:</span> {user.isAdmin ? "SI" : "NO"}
      </p>
      {user.isPrincipalAdmin ? (
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md" disabled={true}>
          Admin Principal
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded-md"
          onClick={() => handleStatusClick("isAdmin")}
        >
          {user.isAdmin ? "Sacar permisos de administrador" : "Dar permisos de administrador"}
        </button>
      )}

      <p>
        <span className="font-bold">Permisos de voluntario:</span> {user.isVoluntary ? "SI" : "NO"}
      </p>

      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        onClick={() => handleStatusClick("isVoluntary")}
      >
        {user.isVoluntary ? "Desasignar como voluntario" : "Asignar como voluntario"}
      </button>

      <p>
        <span className="font-bold">Cuenta baneada:</span> {user.isBanned ? "SI" : "NO"}
      </p>
      {user.isPrincipalAdmin ? (
        <button className="bg-red-500 text-white px-2 py-1 rounded-md" disabled={true}>
          Admin Principal
        </button>
      ) : (
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-md"
          onClick={() => handleStatusClick("isBanned")}
        >
          {user.isBanned ? "Desbanear" : "Banear"}
        </button>
      )}

      <p>
        <span className="font-bold">Tipo de voluntario:</span> {user.voluntaryType}
      </p>
      <select
        className="border rounded-md px-2 py-1"
        value={selectedVoluntaryType}
        onChange={(e) => setSelectedVoluntaryType(e.target.value)}
      >
        {voluntaryTypes.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={handleVoluntaryType}>
        Aplicar Cambios
      </button>

      <p>
        <span className="font-bold">Email validado:</span> {user.userEmailValidate ? "SI" : "NO"}
      </p>
      <p>
        <span className="font-bold">Cuenta registrada con Google:</span>{" "}
        {user.registerWithAuth0 ? "SI" : "NO"}
      </p>
      <p>
        <span className="font-bold">Desarrollador de la pagina:</span>{" "}
        {user.isDeveloper ? "TRUE" : "FALSE"}
      </p>
      <button
        className="bg-gray-500 text-white px-2 py-1 rounded-md"
        onClick={() => handleStatusClick("isDeveloper")}
      >
        {user.isDeveloper ? "isDeveloper" : "isNotDeveloper"}
      </button>
    </div>
  );
};

export default UserData;
