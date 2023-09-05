"use client";
import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import NuestraComunidadDesktop from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";
import api from "@/api/api";
import React, { useState, useEffect } from "react";
import Loading from "./loading";
import NuestraComunidadMobile from "@/components/NuestraComunidadMobile/NuestraComunidadMobile";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getBannerImages() {
      try {
        const response = await api.get(`/news/banner`);
        setImages(response.data.images);
      } catch (error) {
        console.log("error al obtener las noticias: ", error);
      }
    }

    getBannerImages();
  }, []);

  if (!images[0]) {
    return <Loading />;
  }

  return (
    <section className="mt-[70px]">
      <MainHome banner={images} />
      <div className="w-full justify-center items-center flex flex-col gap-0 xl:gap-6 xl:flex-row lg:items-start xl:px-8">
        <Campañas />
        <NuestraComunidadDesktop />
        {/* Necesito centrarlo de ésta manera ya que no tiene nada mas que lo contenga */}
        <div className="flex w-full items-center justify-center xl:hidden">
          <NuestraComunidadMobile />
        </div>
      </div>
    </section>
  );
}
