"use client";
import api from "@/api/api";
import DonarButton from "@/components/Shop/DonarButton";
import Image from "next/image";
import LoadingCardHome from "@/components/LoadingCardHome/LoadingCardHome";
import Pagination from "@/components/Pagination/Pagination";
import React, { useEffect, useState } from "react";
import shopimage from "@/../public/images/TiendaSolidaria/shopimage.webp";
import ShoppingCards from "@/components/Shop/ShoppingCards";
import banner from "@/../public/images/TiendaSolidaria/banner-shop.webp";

export default function Shopping() {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getAllProducts = async () => {
      const resp = await api.get(
        `shop/items?itemPerPage=6&pageNumber=${pageNumber}`
      );
      setProducts(resp.data.items.items);
      setTotalPages(resp.data.items.totalPages);
    };

    getAllProducts();
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-[70px] gap-[1.5rem] pb-14">
      <section className="w-full md:px-[10%]">
        <Image src={banner} alt="banner" width={2000} height={600} priority />
      </section>
      <h1 className="text-[#0C6410]  font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        NUESTRA TIENDA
      </h1>

      <main className="w-full flex justify-between items-center">
        <article className=" hidden sm:flex w-6/12  justify-center ">
          <Image
            src={shopimage}
            alt="shopimage"
            className=" w-[30rem] h-auto"
          />
        </article>
        <article className="w-full p-1 sm:w-5/12 lg:px-6 xl:px-10 2xl:px-12">
          <p
            className=" 
                     md:text-base md:leading-7
                     lg:text-lg lg:leading-8
                     xl:text-xl xl:leading-8
                       2xl:leading-10
                     text-center"
          >
            <b className=" font-semibold ">
              Contamos con una gran variedad de productos con Sentido Social que
              contribuyen de manera significativa al sostenimiento de la labor
              social. Todos nuestros productos son pensados con amor.
            </b>
          </p>
        </article>
      </main>
      <section className="w-10/12 flex justify-center md:justify-end">
        <DonarButton />
      </section>

      <div className="w-full h-max flex flex-wrap gap-6 md:grid 2xl:grid-cols-3 justify-center items-center lg:justify-normal lg:items-stretch">
        {products.length > 0 ? (
          products.map((e, i) => (
            <ShoppingCards
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              image={e.image}
            />
          ))
        ) : (
          <>
            <LoadingCardHome />
            <LoadingCardHome />
            <LoadingCardHome />
            <LoadingCardHome />
            <LoadingCardHome />
            <LoadingCardHome />
          </>
        )}

        <div className="w-full md:col-span-3 md:row-start-3 flex justify-center mt-4 md:mt-0">
          <Pagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            changePage={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
