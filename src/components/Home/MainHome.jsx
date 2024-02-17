"use client";
import "@/styles/swiper.css";
import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import DefaultBanner from "@/../public/images/Home/DefaultBanner.webp";

export default function MainHome({ banner }) {
  console.log(banner);
  return (
    <div className="mySwiperContainer h-[180px] md:h-[350px] max-h-[600px] z-[-1]">
      {banner?.[0] ? (
        <Swiper
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper w-full h-full cursor-grab active:cursor-grabbing"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={4000}
        >
          {banner.map((e) => (
            <SwiperSlide key={e.id} className="swiper-slide-centered">
              <Image
                src={e.image.secure_url}
                alt={`Banner ${e.name}`}
                fill
                className="w-full h-auto"
                // Priority to first banner
                priority={e.id === banner[0].id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Image
          src={DefaultBanner}
          alt="DefaultBanner"
          height={350}
          width={1208}
          className="w-full h-[180px] md:h-[350px]"
          priority
        />
      )}
    </div>
  );
}
