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
      <div className="w-full justify-center flex flex-col gap-6 xl:flex-row lg:gap-0 xl:px-8">
        <Campañas />
        <NuestraComunidad />
      </div>
    </section>
  );
}
