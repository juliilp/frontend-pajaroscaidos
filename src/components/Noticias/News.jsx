"use client";

import { getNewsById } from "@/api/apiCall/NewsRequests";
import formatDate from "@/helpers/FormatDate";
import Image from "next/image";
import { useEffect, useState } from "react";

const News = ({ id }) => {
  const [news, setNews] = useState();

  useEffect(() => {
    const call = async () => {
      const response = await getNewsById(id);

      setNews(response.news);
    };
    call();
  }, [id]);

  if (!news) {
    return <div>loading..</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-[800px] mx-auto mt-15">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="mt-5 text-3xl font-bold">{news.title}</h2>
        </div>

        <div>
          <Image
            src={news.image[0].secure_url}
            alt="auto"
            width={500}
            height={500}
            className="mt-5 max-w-full h-auto max-h-[650px] lg:max-w-[650px] rounded-md object-cover mx-auto lg:mr-5"
          />
        </div>

        <div className="mt-5">
          <p className="text-[#727272] text-sm mb-3">{formatDate(news.createdAt)}</p>
          <p className="mb-5">{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
