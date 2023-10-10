/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import api from "@/api/api";
import ViewMobile from "./Mobile/ViewMobile";
import ViewDesktop from "./Desktop/ViewDesktop";
import Pagination from "@/components/Pagination/Pagination";
import ModalPutCampañas from "@/components/Dashboard/OpcionesInicio/Campañas/ModalPut";
import ModalPostCampaña from "@/components/Dashboard/OpcionesInicio/Campañas/ModalPost";

function Campañas() {
  const [modalPut, setModalPut] = useState({ toggle: false, infoModal: {} });
  const [modalPost, setModalPost] = useState({ toggle: false, infoModal: {} });
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [campañas, setCampañas] = useState([]);
  const [newsPerPage, setNewsPerPage] = useState(3);

  const toggleModalPut = (infoModal) => {
    setModalPut({ toggle: !modalPut.toggle, infoModal: infoModal });
  };

  const toggleModalPost = (infoModal) => {
    setModalPost({ toggle: !modalPost.toggle, infoModal: infoModal });
  };

  const fetchCampañas = async () => {
    try {
      const response = await api.get(
        `/news?pageNumber=${pageNumber}&newsPerPage=${newsPerPage}`
      );

      setCampañas(response.data.news);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error al obtener las campañas:", error);
    }
  };

  useEffect(() => {
    fetchCampañas();
  }, [pageNumber]);

  const handleDataUpdated = async () => {
    await fetchCampañas();
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <>
      <h1 className="font-bold text-xl">Campañas</h1>
      <div className="flex flex-col items-center rounded-xl mt-[10px] h-[450px] w-[90%] bg-[#444] mb-10">
        <div className="flex justify-evenly gap-3 items-center h-[80%] w-[100%] px-6">
          <ViewMobile campañas={campañas} setNewsPerPage={setNewsPerPage} />
          <ViewDesktop campañas={campañas} setNewsPerPage={setNewsPerPage} />
        </div>
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages}
          changePage={handlePageChange}
        />

        <div className="flex md:justify-end justify-center w-[95%] md:w-[95%] mb-5">
          <div className="flex justify-center items-center px-2 md:w-[30%] w-[45%] text-sm h-8 bg-[#60EA4A] font-bold rounded">
            <button onClick={() => toggleModalPost()}>Añadir campaña +</button>
          </div>
        </div>
      </div>

      <div
        className={`h-screen w-screen top-0 right-0 flex justify-center items-center fixed bg-[#0000008e] ${
          modalPut.toggle ? "block" : "hidden"
        }`}
      >
        <ModalPutCampañas modal={modalPut} toggleModal={toggleModalPut} />
      </div>
      <div
        className={`h-screen w-screen top-0 right-0 flex justify-center items-center fixed bg-[#0000008e] ${
          modalPost.toggle ? "block" : "hidden"
        }`}
      >
        <ModalPostCampaña
          handleDataUpdated={handleDataUpdated}
          modal={modalPost}
          toggleModal={toggleModalPost}
        />
      </div>
    </>
  );
}

export default Campañas;
