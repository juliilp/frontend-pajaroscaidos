"use client";
import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import NuestraComunidad from "@/components/NuestraComunidad/NuestraComunidad";
import api from "@/api/api";
import React, { useState, useEffect } from "react";
import Loading from "./loading";

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

      <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-0">
        <Campañas />

        <div className="lg:w-[30%] lg:ml-6">
          <NuestraComunidad />
        </div>
      </div>
    </section>
  );
}
