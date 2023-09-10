"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../app/swiper.css";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function MainHome({ banner }) {
  return (
    <div className="mySwiperContainer h-[350px] max-h-[600px] z-[-1]">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-full"
        autoplay={{
          delay: 4000, // tiempo automatico al pasar a la otra imagen
          disableOnInteraction: false,
        }}
        speed={4000} // velocidad con que pasa a la otra imagen
      >
        {banner.map((e) => (
          <SwiperSlide key={e.id} className="swiper-slide-centered">
            <Image
              src={e.image.secure_url}
              alt={`Banner ${e.name}`}
              fill
              className="w-full h-full object-cover"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
