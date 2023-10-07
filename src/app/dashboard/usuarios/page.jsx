"use client";
import React, { useState, useEffect } from "react";
import Pagination from "@/components/Pagination/Pagination";
import api from "@/api/api";
import Loading from "../loading";
import TableDesktop from "@/components/Dashboard/Usuarios/TableDesktop";
import TableMobile from "@/components/Dashboard/Usuarios/TableMobile";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <TableDesktop users={users} handleDataUpdate={handleDataUpdate} />
        <TableMobile users={users} handleDataUpdate={handleDataUpdate} />
      </div>
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        changePage={handlePageChange}
      />
    </section>
  );
}
