import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import formatDate from "@/helpers/FormatDate";
import LoadingCardHome from "../LoadingCardHome/LoadingCardHome";
import { getNews } from "@/api/apiCall/NewsRequests";

export default function Campañas() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [news, setNews] = useState([]);
  const newsPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(pageNumber, newsPerPage);
      setNews(data?.news);
      setTotalPages(data?.totalPages);
    };

    fetchNews();
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return (
    <div className="w-full h-max flex flex-wrap gap-6 md:grid 2xl:grid-cols-3 justify-center items-center lg:justify-normal lg:items-stretch">
      {news.length > 0 ? (
        news.map((e) => (
          <div
            key={e.id}
            className="w-full  max-w-[300px] font-roboto bg-[#d9d9d9] p-4 lg:p-0  rounded-md my-6 justify-self-center"
          >
            <Image
              src={e.image[0].imageUrl}
              alt="auto"
              width={250}
              height={200}
              className=" h-[150px] w-[200px]"
            />

            <span className="text-[#727272] text-sm ">{formatDate(e.createdAt)}</span>
            <h1 className="font-bold  text-xl my-2 ">{e.title}</h1>
            <p className="text-sm  ">{e.description}</p>
          </div>
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
        <Pagination pageNumber={pageNumber} totalPages={totalPages} changePage={handlePageChange} />
      </div>
    </div>
  );
}
