/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "@/api/api";
import ModalPost from "@/components/Dashboard/OpcionesInicio/Banners/ModalPost";
import Pagination from "@/components/Pagination/Pagination";
function Banners() {
  const [banners, setBanners] = useState([]);
  const [modal, setModal] = useState({ toggle: false, infoModal: {} });
  const [pageNumberBanner, setPageNumberBanner] = useState(1);
  const [totalPagesBanner, setTotalPagesBanner] = useState(0);

  const toggleModal = (infoModal) => {
    setModal({ toggle: !modal.toggle, infoModal: infoModal });
  };

  const deleteBanners = async () => {
    try {
      const response = await api.delete(`/news/banner/${banners.id}`);
      console.log(response);
    } catch (error) {
      console.error("Error al borrar el Banner:", error);
    }
  };

  const fetchBanners = async () => {
    try {
      const response = await api.get(
        `/news/banner?bannerPerPage=2&pageNumber=${pageNumberBanner}`
      );

      setBanners(response.data.images.banners);
      setTotalPagesBanner(response.data.images.totalPages);
    } catch (error) {
      console.error("Error al obtener los banners:", error);
    }
  };

  const handlePageChangeBanner = (pageNumber) => {
    setPageNumberBanner(pageNumber);
  };

  useEffect(() => {
    fetchBanners();
  }, [pageNumberBanner]);

  const handleDataUpdated = async () => {
    await fetchBanners();
  };

  return (
    <>
      <h1 className="font-bold text-xl">Banners</h1>
      <div className="flex flex-col items-center rounded-xl mt-[10px] mb-[50px] h-[400px] w-[90%] bg-[#444] ">
        <div className="flex justify-evenly items-center h-[80%] w-[95%]">
          {banners.map((banner, index) => (
            <section
              className="bg-[#ccc] mx-3 flex flex-col rounded-md"
              key={index}
            >
              <Image
                src={banner.image.secure_url}
                width={150}
                height={150}
                alt="prueba"
                className=" w-full h-[100px] rounded-md"
              />
              <div className="p-2">
                <span>{banner.name}</span>
                <div className="flex justify-end">
                  <button
                    className="bg-[#D22929] rounded flex justify-center items-center h-8 w-20 text-white"
                    onClick={deleteBanners}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
        <Pagination
          pageNumber={pageNumberBanner}
          totalPages={totalPagesBanner}
          changePage={handlePageChangeBanner}
        />
        <div className="flex justify-end w-[80%] mb-5">
          <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
            <button onClick={() => toggleModal()}>Añadir banner +</button>
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-screen top-0 right-0 flex justify-center items-center fixed bg-[#0000008e] ${
          modal.toggle ? "block" : "hidden"
        }`}
      >
        <ModalPost
          handleDataUpdated={handleDataUpdated}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}

export default Banners;
