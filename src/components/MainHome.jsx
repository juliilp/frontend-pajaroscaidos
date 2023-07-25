"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../app/styles/swiper.css";
// import "./styles.css";

// import required modules
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
