/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import ListaUsuarios from "@/components/Dashboard/Usuarios/ListaUsuarios";
import Pagination from "@/components/Pagination/Pagination";
import api from "@/api/api";
import Loading from "../loading";

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userPerPage = 6;

  const fetchUsersData = async () => {
    try {
      const resp = await api.get(
        `user/all?userPerPage=${userPerPage}&pageNumber=${pageNumber}`
      );

      setUsers(resp.data.users.users);
      setTotalPages(resp.data.users.totalPages);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, [pageNumber]);

  const handleDataUpdate = async () => {
    await fetchUsersData();
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="h-full w-full px-6 flex flex-col items-center justify-between gap-2 pt-[70px]">
      <h1 className="text-center pt-6 text-2xl font-bold">Usuarios</h1>
      <div className="bg-[#4f4f4f] w-full flex flex-col gap-2 p-3 rounded-xl text-white">
        <table className="w-full table-auto text-center border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th>
                <strong>Avatar</strong>
              </th>
              <th>
                <strong>Email</strong>
              </th>
              <th>
                <strong>Nickname</strong>
              </th>
              <th>
                <strong>Voluntario</strong>
              </th>
              <th>
                <strong>Admin</strong>
              </th>
              <th>
                <strong>Baneado</strong>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ListaUsuarios users={users} onDataUpdate={handleDataUpdate} />
          </tbody>
        </table>
      </div>
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        changePage={handlePageChange}
      />
    </section>
  );
}
