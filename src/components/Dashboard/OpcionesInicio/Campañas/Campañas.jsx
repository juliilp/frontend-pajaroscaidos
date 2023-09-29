/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import api from "@/api/api";
import Image from "next/image";
import formatDate from "@/helpers/FormatDate";
import Pagination from "@/components/Pagination/Pagination";
import ModalPutCampañas from "@/components/Dashboard/OpcionesInicio/Campañas/ModalPut";
import ModalPostCampaña from "@/components/Dashboard/OpcionesInicio/Campañas/ModalPost";

function Campañas() {
  const [modalPut, setModalPut] = useState({ toggle: false, infoModal: {} });
  const [modalPost, setModalPost] = useState({ toggle: false, infoModal: {} });
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [campañas, setCampañas] = useState([]);

  const toggleModalPut = (infoModal) => {
    setModalPut({ toggle: !modalPut.toggle, infoModal: infoModal });
  };

  const toggleModalPost = (infoModal) => {
    setModalPost({ toggle: !modalPost.toggle, infoModal: infoModal });
  };

  const fetchCampañas = async () => {
    try {
      const response = await api.get(
        `/news?pageNumber=${pageNumber}&newsPerPage=3`
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
        <div className="flex justify-evenly items-center h-[80%] w-[100%]">
          {campañas.map((campaña) => (
            <section
              className="bg-[#ccc] w-[30%] h-[250px] flex flex-col rounded-md cursor-pointer text-center"
              onClick={() => toggleModalPut(campaña)}
              key={campaña.id}
            >
              <div className=" flex justify-center p-2">
                <Image
                  src={campaña.image[0].secure_url}
                  width={150}
                  height={200}
                  alt="prueba"
                  className=" w-[90%] h-[120px]"
                />
              </div>
              <div className="p-2 flex flex-col items-center text-[#727272] text-sm">
                <span>{formatDate(campaña.updatedAt)}</span>
                <div className="flex flex-col font-bold text-xl text-black">
                  <span>{campaña.title}</span>
                </div>
              </div>
            </section>
          ))}
        </div>
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages}
          changePage={handlePageChange}
        />

        <div className="flex justify-end w-[80%] mb-5">
          <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
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
