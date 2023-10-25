"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ShoppingCards from "@/components/Shop/ShoppingCards";
import { getItemShopById, getItemLimit } from "@/api/apiCall/functions";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import DonarButton from "@/components/Shop/DonarButton";
import ContactUsButton from "@/components/Shop/ContactUsbutton";

export default function Page({ params }) {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getItemShopById(params.id);

      setItem(data.item);
      const dataItems = await getItemLimit(3);
      setItems(dataItems.items);
    }

    fetchData();
  }, [params.id]);

  if (!item || !items) return;

  return (
    <div className=" min-h-screen  flex flex-col items-center justify-center gap-9 pt-24 pb-5">
      <h1 className="text-[#756F70] font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        DETALLE DEL PRODUCTO
      </h1>

      <section className="w-10/12 flex justify-center md:justify-end">
        <DonarButton />
      </section>

      <main className="flex flex-col items-center gap-6 md:gap-0 md:flex-row md:items-start justify-between w-[95%] text-black">
        <section className="flex items-start justify-center w-full md:w-5/12">
          <div className="h-[25rem] w-[25rem] ">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className="mySwiper h-full cursor-grab active:cursor-grabbing"
            >
              {item.image.map((img, ind) => (
                <SwiperSlide key={ind} className="swiper-slide-centered">
                  <Image
                    src={img.secure_url}
                    alt={`${ind}`}
                    fill
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="flex flex-col w-[300px]:w-11/12 min-[450px]:w-10/12 sm:w-9/12 md:w-6/12 gap-10">
          <article className="flex justify-center w-full md:justify-start">
            <h2 className="text-[#128117] font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              {item.title}
            </h2>
          </article>

          <article>
            <p className="break-words p-1 text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl line-clamp-6 sm:line-clamp-4">
              {item.description}
            </p>
          </article>

          <article className="flex flex-col gap-3">
            <span>tallas disponibles : {item.categories.map((e) => e.name)} </span>
          </article>

          <article className="w-full flex justify-center">
            <ContactUsButton />
          </article>
        </section>
      </main>

      <section className="flex w-[95%] flex-col gap-3 ">
        <article className=" p-4 w-full flex justify-center md:justify-start">
          <h3 className="font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#756F70]">
            PRODUCTOS QUE TE PUEDEN INTERESAR
          </h3>
        </article>

        <div className="w-full h-max flex flex-wrap gap-6 md:grid 2xl:grid-cols-3 justify-center items-center lg:justify-normal lg:items-stretch">
          {items?.map((item) => (
            <ShoppingCards
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
