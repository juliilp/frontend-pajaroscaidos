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
import CardQuieroSerVoluntario from "@/components/CardQuieroSerVoluntario/CardQuieroSerVoluntario";
import CardQuieroSerVoluntarioLoading from "@/components/CardQuieroSerVoluntario/CardQuieroSerVoluntarioLoading";
export default function Page() {
  const [voluntarios, setVoluntarios] = useState([]);
  const [typesVoluntarios, setTypesVoluntarios] = useState([]);
  const imagenes = [
    {
      id: "1",
      imagen: Imagen1,
    },
    {
      id: "2",
      imagen: Imagen2,
    },
    {
      id: "3",
      imagen: Imagen3,
    },
    {
      id: "4",
      imagen: Imagen4,
    },
    {
      id: "5",
      imagen: Imagen5,
    },
  ];
  useEffect(() => {
    async function fetchData() {
      try {
        const [voluntariosResult, typesVoluntariosResult] = await Promise.all([
          api("/user/voluntary"),
          api("/user/voluntary-types"),
        ]);

        const voluntariosData = voluntariosResult.data;
        const typesVoluntariosData = typesVoluntariosResult.data.types;

        setVoluntarios(voluntariosData);
        setTypesVoluntarios(typesVoluntariosData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    fetchData();
  }, []);

  function generateLoadingCards(count) {
    const loadingCards = [];
    for (let i = 0; i < count; i++) {
      loadingCards.push(<CardQuieroSerVoluntarioLoading key={i} />);
    }
    return loadingCards;
  }

  return (
    <section>
      <header className="mySwiperContainer h-full px-[10%] mt-[70px] ">
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
              <SwiperSlide key={i.id}>
                <Image src={i.imagen} alt="imagen" priority />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
      <section className="flex flex-col w-full pb-12">
        <h1 className="text-center my-12 xl:text-2xl md:text-xl text-lg">
          Tipo de voluntariado
        </h1>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end justify-center gap-10 mx-auto justify-items-center">
          {typesVoluntarios.length > 0
            ? typesVoluntarios.map((t) => {
                return (
                  <CardQuieroSerVoluntario
                    key={t}
                    titulo={t.name}
                    imagen={t.image}
                    form={t.formUrl}
                  />
                );
              })
            : generateLoadingCards(8)}
        </article>
      </section>
    </section>
  );
}
