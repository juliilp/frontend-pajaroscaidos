"use client";
import Image from "next/image";
import ContactUsButton from "./ContactUsbutton";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";

export default function ShoppingCards({ id, title, image, description, redirect }) {
  return (
    <div
      key={id}
      className="border-[0.1px] border-[#80808000] border-b-0 shadow-2xl m-auto flex flex-col justify-between 
        w-[13rem]  h-[100%]
        sm:w-[14rem]  
        md:w-[14rem]
        lg:w-[18rem]
        xl:w-[19rem]"
    >
      <div>
        <article className=" mySwiperContainer h-[250px] max-h-[600px] z-[-1]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="mySwiper h-full cursor-grab active:cursor-grabbing"
          >
            {image.map((img, ind) => (
              <SwiperSlide key={ind} className="swiper-slide-centered">
                <Image
                  src={img.imageUrl}
                  alt={`${ind}`}
                  fill
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>

        <h5 className="p-[5px] text-base text-center md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl line-clamp-1 font-semibold">
          {title}
        </h5>
      </div>
      <article className="w-[95%] h-[100%] p-2 text-left">
        <p className="break-words p-1 text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl line-clamp-6 sm:line-clamp-4">
          {description}
        </p>
      </article>

      <ContactUsButton id={id} />
    </div>
  );
}
