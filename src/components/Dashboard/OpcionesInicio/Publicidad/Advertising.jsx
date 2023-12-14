/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api/api";
import ModalPost from "@/components/Dashboard/OpcionesInicio/Publicidad/ModalPost";
import Pagination from "@/components/Pagination/Pagination";
function Advertising() {
  const [advertising, setAdvertising] = useState([]);
  const [modal, setModal] = useState({ toggle: false, infoModal: {} });
  const [pageNumberAdvertising, setPageNumberAdvertising] = useState(1);
  const [totalPagesAdvertising, setTotalPagesAdvertising] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);
  const [advertisingPerPage, setAdvertisingPerPage] = useState(null);

  const toggleModal = (infoModal) => {
    setModal({ toggle: !modal.toggle, infoModal: infoModal });
  };

  const deleteAdvertising = async (id) => {
    try {
      const response = await api.delete(`/advertising/${id}`);

      if (response.status === 200) {
        alert("La publicidad fue borrada con exito.");
      }
    } catch (error) {
      console.error("Error al borrar la publicidad:", error);
    }
  };

  useEffect(() => {
    const updateAdvertisingPerPage = () => {
      const width = window.innerWidth;
      let advertisingPerPage = null;

      if (width < 425) {
        advertisingPerPage = 1;
      } else {
        advertisingPerPage = 2;
      }

      setWindowWidth(width);
      setAdvertisingPerPage(advertisingPerPage);
    };

    window.addEventListener("resize", updateAdvertisingPerPage);
    updateAdvertisingPerPage();

    return () => {
      window.removeEventListener("resize", updateAdvertisingPerPage);
    };
  }, [windowWidth]);

  const fetchAdvertising = async () => {
    if (advertisingPerPage !== null) {
      try {
        const response = await api.get(
          `/advertising?advertisingPerPage=${advertisingPerPage}&pageNumber=${pageNumberAdvertising}`
        );

        // console.log("ad", response.data);
        setAdvertising(response.data.advertising.advertising);
        setTotalPagesAdvertising(response.data.advertising.totalPages);
      } catch (error) {
        console.error("Error al obtener las publicidades:", error);
      }
    }
  };

  const handlePageChangeAdvertising = (pageNumber) => {
    setPageNumberAdvertising(pageNumber);
  };

  useEffect(() => {
    fetchAdvertising();
  }, [pageNumberAdvertising, advertisingPerPage]);

  const handleDataUpdated = async () => {
    await fetchAdvertising();
  };

  return (
    <>
      <h1 className="text-center pt-6 text-2xl font-bold">Publicidad</h1>
      <div className="bg-[#4f4f4f] flex flex-col items-center rounded-xl mt-[10px] mb-[50px] h-[500px] w-[90%]">
        <div className="flex justify-evenly items-center h-[80%] w-[95%] pt-3">
          {advertising.map((ad, index) => (
            <section className="bg-[#C2C2C2] mx-3 flex flex-col rounded-md" key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={ad.image[0].secure_url}
                  width={300}
                  height={300}
                  alt="prueba"
                  className=" h-[auto] w-[auto] max-w-[300px] max-h-[300px] rounded-md"
                />
              </div>
              <div className="p-2">
                <span>{ad.name}</span>
                <div className="flex justify-end">
                  <button
                    className="bg-[#D22929] rounded flex justify-center items-center h-8 w-20 text-white"
                    onClick={() => deleteAdvertising(ad.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
        <Pagination
          pageNumber={pageNumberAdvertising}
          totalPages={totalPagesAdvertising}
          changePage={handlePageChangeAdvertising}
        />
        <div className="flex md:justify-end justify-center w-[95%] mb-5">
          <div className="flex justify-center items-center px-2 md:w-[22%] w-[53%] text-sm h-8 bg-[#60EA4A] font-bold rounded">
            <button onClick={() => toggleModal()}>Añadir Advertising +</button>
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-screen top-0 right-0 flex justify-center items-center fixed bg-[#0000008e] ${
          modal.toggle ? "block" : "hidden"
        }`}
      >
        <ModalPost handleDataUpdated={handleDataUpdated} toggleModal={toggleModal} />
      </div>
    </>
  );
}

export default Advertising;
