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
  const [windowWidth, setWindowWidth] = useState(null);
  const [newsPerPage, setNewsPerPage] = useState(null);

  const toggleModalPut = (infoModal) => {
    setModalPut({ toggle: !modalPut.toggle, infoModal: infoModal });
  };

  const toggleModalPost = (infoModal) => {
    setModalPost({ toggle: !modalPost.toggle, infoModal: infoModal });
  };

  useEffect(() => {
    const updateNewsPerPage = () => {
      const width = window.innerWidth;
      let newsPerPage = null;

      if (width < 425) {
        newsPerPage = 1;
      } else {
        newsPerPage = 3;
      }

      setWindowWidth(width);
      setNewsPerPage(newsPerPage);
    };

    window.addEventListener("resize", updateNewsPerPage);
    updateNewsPerPage();

    return () => {
      window.removeEventListener("resize", updateNewsPerPage);
    };
  }, [windowWidth]);

  const fetchCampañas = async () => {
    if (newsPerPage !== null) {
      try {
        const response = await api.get(`/news?pageNumber=${pageNumber}&newsPerPage=${newsPerPage}`);
        setCampañas(response.data.news);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error al obtener las campañas:", error);
      }
    }
  };
  useEffect(() => {
    fetchCampañas();
  }, [pageNumber, newsPerPage]);

  const handleDataUpdated = async () => {
    await fetchCampañas();
  };

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <>
      <h1 className="text-center pt-6 text-2xl font-bold">Campañas</h1>
      <div className="bg-[#4f4f4f] flex flex-col items-center rounded-xl mt-[10px] h-[450px] w-[90%] mb-10">
        <div className="flex justify-evenly gap-3 items-center h-[80%] w-[100%] px-6">
          {campañas.map((campaña) => (
            <section
              className="bg-[#C2C2C2] w-[30%] h-[250px] flex flex-col rounded-md cursor-pointer text-center"
              onClick={() => toggleModalPut(campaña)}
              key={campaña.id}
            >
              <div className=" flex justify-center p-2">
                <Image
                  src={campaña.image[campaña.image.length - 1].secure_url}
                  width={150}
                  height={200}
                  alt="prueba"
                  className="item-center h-[auto] w-[auto] max-w-[200px] max-h-[200px] w-full rounded-md"
                />
              </div>
              <div className="p-2 flex flex-col items-center text-[#727272] text-sm">
                <span>{formatDate(campaña.updatedAt)}</span>
                <div className="flex flex-col font-bold text-xl text-black">
                  <span className="line-clamp-2">{campaña.title}</span>
                </div>
              </div>
            </section>
          ))}
        </div>
        <Pagination pageNumber={pageNumber} totalPages={totalPages} changePage={handlePageChange} />

        <div className="flex md:justify-end justify-center w-[95%] md:w-[95%] mb-5">
          <div className="flex justify-center items-center px-2 md:w-[22%] w-[53%] text-sm h-8 bg-[#60EA4A] font-bold rounded">
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
