"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/api/api";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Imagen1 from "@/../public/images/QuieroSerVoluntario/1.png";
import Imagen2 from "@/../public/images/QuieroSerVoluntario/2.png";
import Imagen3 from "@/../public/images/QuieroSerVoluntario/3.png";
import Imagen4 from "@/../public/images/QuieroSerVoluntario/4.png";
import Imagen5 from "@/../public/images/QuieroSerVoluntario/5.png";
import "swiper/css";
export default function Page() {
  const [voluntarios, setVoluntarios] = useState([]);
  const imagenes = [
    {
      imagen: Imagen1,
    },
    {
      imagen: Imagen2,
    },
    {
      imagen: Imagen3,
    },
    {
      imagen: Imagen4,
    },
    {
      imagen: Imagen5,
    },
  ];

  useEffect(() => {
    async function apiVoluntarios() {
      const result = await api("/user/voluntary");
      const data = result.data;
      setVoluntarios(data);
    }
    apiVoluntarios();
  }, []);
  return (
    <section>
      <header className="mySwiperContainer h-[180px] md:h-[350px] max-h-[600px]">
        <Swiper
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper w-full h-full cursor-grab active:cursor-grabbing"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={4000}
        >
          {imagenes.map((i) => {
            return (
              <SwiperSlide key={imagenes.keys}>
                <Image src={i.imagen} alt="imagen" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
      <article className="flex flex-col w-full">
        <h1 className="text-center my-12 xl:text-2xl md:text-xl text-lg">
          Tipo de voluntariado
        </h1>
      </article>
    </section>
  );
}
