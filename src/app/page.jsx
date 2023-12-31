"use client";
import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import NuestraComunidadDesktop from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";
import React, { useState, useEffect } from "react";
import NuestraComunidadMobile from "@/components/NuestraComunidadMobile/NuestraComunidadMobile";
import { getBannerImages } from "@/api/apiCall/functions";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      const banners = await getBannerImages();
      setImages(banners);
    }

    fetchBanners();
  }, []);

  return (
    <section className="mt-[70px]">
      <MainHome banner={images} />
      <div className="w-full justify-center items-center flex flex-col gap-0 xl:gap-6 xl:flex-row lg:items-start xl:px-8">
        <Campañas />
        <NuestraComunidadDesktop />
        <div className="flex w-full items-center justify-center xl:hidden">
          <NuestraComunidadMobile />
        </div>
      </div>
    </section>
  );
}
