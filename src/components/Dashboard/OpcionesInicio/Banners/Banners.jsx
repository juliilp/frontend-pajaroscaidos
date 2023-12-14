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
  const [windowWidth, setWindowWidth] = useState(null);
  const [bannersPerPage, setBannersPerPage] = useState(null);

  const toggleModal = (infoModal) => {
    setModal({ toggle: !modal.toggle, infoModal: infoModal });
  };

  const deleteBanners = async () => {
    try {
      const response = await api.delete(`/news/banner/${banners[0].id}`);

      if (response.status === 200) {
        alert("El banner fue borrado con exito.");
      }
    } catch (error) {
      console.error("Error al borrar el Banner:", error);
    }
  };

  useEffect(() => {
    const updateBannersPerPage = () => {
      const width = window.innerWidth;
      let bannersPerPage = null;

      if (width < 425) {
        bannersPerPage = 1;
      } else {
        bannersPerPage = 2;
      }

      setWindowWidth(width);
      setBannersPerPage(bannersPerPage);
    };

    window.addEventListener("resize", updateBannersPerPage);
    updateBannersPerPage();

    return () => {
      window.removeEventListener("resize", updateBannersPerPage);
    };
  }, [windowWidth]);

  const fetchBanners = async () => {
    if (bannersPerPage !== null) {
      try {
        const response = await api.get(
          `/news/banner?bannerPerPage=${bannersPerPage}&pageNumber=${pageNumberBanner}`
        );

        setBanners(response.data.images.banners);
        setTotalPagesBanner(response.data.images.totalPages);
      } catch (error) {
        console.error("Error al obtener los banners:", error);
      }
    }
  };

  const handlePageChangeBanner = (pageNumber) => {
    setPageNumberBanner(pageNumber);
  };

  useEffect(() => {
    fetchBanners();
  }, [pageNumberBanner, bannersPerPage]);

  const handleDataUpdated = async () => {
    await fetchBanners();
  };

  return (
    <>
      <h1 className="text-center pt-6 text-2xl font-bold">Banners</h1>
      <div className="bg-[#4f4f4f] flex flex-col items-center rounded-xl mt-[10px] mb-[50px] h-[400px] w-[90%]">
        <div className="flex justify-evenly items-center h-[80%] w-[95%]">
          {banners.map((banner, index) => (
            <section className="bg-[#C2C2C2] mx-3 flex flex-col rounded-md" key={index}>
              <div className="">
                <Image
                  src={banner.image.secure_url}
                  width={400}
                  height={300}
                  alt="prueba"
                  className=" h-[auto] w-full max-w-[400px] max-h-[300px] rounded-md"
                />
              </div>
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
        <div className="flex md:justify-end justify-center w-[95%] mb-5">
          <div className="flex justify-center items-center px-2 md:w-[22%] w-[53%] text-sm h-8 bg-[#60EA4A] font-bold rounded">
            <button onClick={() => toggleModal()}>Añadir banner +</button>
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

export default Banners;
