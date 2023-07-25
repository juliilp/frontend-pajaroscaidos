"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../app/swiper.css";
import { Navigation } from "swiper/modules";

export default function MainHome() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[300px]"
      >
        <SwiperSlide className="swiper-slide-centered">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide-centered">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
