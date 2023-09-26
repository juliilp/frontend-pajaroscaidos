"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../app/swiper.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Imagen1 from "@/../public/images/HomeCarousel/Imagen1.jpg";
import Imagen2 from "@/../public/images/HomeCarousel/Imagen2.jpg";
import Imagen3 from "@/../public/images/HomeCarousel/Imagen3.jpg";

export default function MainHome() {
  return (
    <div className="mySwiperContainer h-[350px] max-h-[600px] z-[-1]">
      <Swiper
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper h-full"
        autoplay={{
          delay: 4000, // tiempo automatico al pasar a la otra imagen
          disableOnInteraction: false,
        }}
        speed={4000} // velocidad con que pasa a la otra imagen
      >
        <SwiperSlide className="swiper-slide-centered">
          <Image
            src={Imagen1}
            alt="Banner imagen1"
            fill
            className="w-full h-full object-cover"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">
          <Image
            src={Imagen2}
            alt="Banner imagen2"
            fill
            className="w-full h-full object-cover"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">
          <Image
            src={Imagen3}
            alt="Banner imagen3"
            fill
            className="w-full h-full object-cover"
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
