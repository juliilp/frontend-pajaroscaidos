/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import api from "@/api/api";
import { getBannerImages } from "@/api/apiCall/functions";
import Pagination from "@/components/Pagination/Pagination";
import Modal from "@/components/Dashboard/OpcionesInicio/Modal";
import Banners from "@/components/Dashboard/OpcionesInicio/Banners";
import Campañas from "@/components/Dashboard/OpcionesInicio/Campañas";

export default function Dashboard() {
  const [modal, setModal] = useState({ toggle: false, infoModal: {} });
  const [inputValue, setInputValue] = useState("");
  const [banners, setBanners] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [campañas, setCampañas] = useState([]);

  const toggleModal = (infoModal) => {
    setModal({ toggle: !modal.toggle, infoModal: infoModal });
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const fetchBanners = async () => {
    const images = await getBannerImages();
    setBanners(images);
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

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    fetchCampañas();
    fetchBanners();
  }, [pageNumber]);

  return (
    <section className="flex justify-center h-[100%] pt-[70px]">
      <div className="flex flex-col justify-center items-center mt-[20px] h-[100%] w-[90%]">
        <h1 className="font-bold text-xl">Banners</h1>
        <div className="flex flex-col items-center rounded-xl mt-[10px] mb-[50px] h-[300px] w-[90%] bg-[#444] ">
          <div className="flex justify-evenly items-center h-[80%] w-[95%]">
            <Banners banners={banners} titulo="Lorem ipsum." boton="Eliminar" />
          </div>
          <span>Paginado...</span>
          <div className="flex justify-end w-[80%] mb-5">
            <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
              <button>Añadir banner +</button>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-xl">Campañas</h1>
        <div className="flex flex-col items-center rounded-xl mt-[10px] h-[450px] w-[90%] bg-[#444] mb-10">
          <div className="flex justify-evenly items-center h-[80%] w-[100%]">
            <Campañas campañas={campañas} toggleModal={toggleModal} />
          </div>
          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
          <div className="flex justify-end w-[80%] mb-5">
            <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
              <button>Añadir campaña +</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-screen top-0 right-0 flex justify-center items-center fixed bg-[#0000008e] ${
          modal.toggle ? "block" : "hidden"
        }`}
      >
        <Modal
          handleInputValue={handleInputValue}
          modal={modal}
          toggleModal={toggleModal}
        />
      </div>
    </section>
  );
}
