import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import api from "@/api/api";
import Image from "next/image";
import formatDate from "@/helpers/FormatDate";

export default function Campañas() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(
          `/news?pageNumber=${pageNumber}&newsPerPage=6`
        );

        setNews(response.data.news);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };

    fetchNews();
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    <div className="w-full h-max flex flex-wrap gap-6 md:grid 2xl:grid-cols-3 justify-center items-center lg:justify-normal lg:items-stretch">
      {news.map((e) => (
        <div
          key={e.id}
          className="w-full  max-w-[300px] font-roboto bg-[#d9d9d9] p-4 lg:p-0  rounded-md my-6 justify-self-center"
        >
          <Image
            src={e.image[0].secure_url}
            alt="auto"
            width={250}
            height={200}
            className=" h-[150px] w-[200px]"
          />

          <span className="text-[#727272] text-sm ">
            {formatDate(e.createdAt)}
          </span>
          <h1 className="font-bold  text-xl my-2 ">{e.title}</h1>
          <p className="text-sm  ">{e.description}</p>
        </div>
      ))}

      <div className="w-full md:col-span-3 md:row-start-3 flex justify-center mt-4 md:mt-0">
        <Pagination
          pageNumber={pageNumber}
          totalPages={totalPages}
          changePage={handlePageChange}
        />
      </div>
    </div>
  );
}
