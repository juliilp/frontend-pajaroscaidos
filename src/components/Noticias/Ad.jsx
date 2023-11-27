"use client";
import "@/styles/swiper.css";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Advertising = ({ advertising }) => {
  return (
    <div className="col-span-5 lg:col-span-1 hidden lg:flex lg:items-center lg:justify-center flex-col h-[700px]">
      <div className="flex items-center mb-5 text-center">
        <h3 className="mt-5 text-2xl font-bold ">Empresas que colaboran con la ONG</h3>
      </div>
      <Swiper
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-[75%] h-[100%] cursor-grab active:cursor-grabbing rounded-md border border-black bg-black"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={4000}
      >
        {advertising.map((e) => (
          <SwiperSlide key={e.id} className="swiper-slide-centered">
            <a href={`${e.contact}`} target="_blank" rel="noopener noreferrer">
              <Image
                src={e.image[0].secure_url}
                alt={`Ad ${e.company}`}
                fill
                className="w-[50%] max-h-[700px] rounded-md"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Advertising;
