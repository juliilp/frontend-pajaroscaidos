"use client";
import React, { useState, useEffect, Suspense } from "react";
import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import NuestraComunidadDesktop from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";
import NuestraComunidadMobile from "@/components/NuestraComunidadMobile/NuestraComunidadMobile";
import { getBannerImages } from "@/api/apiCall/functions";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const banners = await getBannerImages();
      banners ? setImages(banners) : console.log("Error al obtener banners");
    }
    getImages();
  }, []);

  return (
    <section className="mt-[70px]">
      <MainHome banner={images} />
      <div className="w-full justify-center items-center flex flex-col gap-0 xl:gap-6 xl:flex-row lg:items-start xl:px-8">
        <Suspense fallback={<h1 className="font-semibold">Cargando....</h1>}>
          <Campañas />
        </Suspense>
        <NuestraComunidadDesktop />
        {/* Necesito centrarlo de ésta manera ya que no tiene nada mas que lo contenga */}
        <div className="flex w-full items-center justify-center xl:hidden">
          <NuestraComunidadMobile />
        </div>
      </div>
    </section>
  );
}
