"use client";
import News from "@/components/Noticias/News";
import Advertising from "@/components/Noticias/Ad";
import { useEffect, useState } from "react";
import { getAdvertising, getNewsById } from "@/api/apiCall/NewsRequests";
import Loading from "../loading";

const Page = ({ params }) => {
  const [news, setNews] = useState();
  const [advertising, setAdvertising] = useState([]);

  useEffect(() => {
    const call = async () => {
      const response = await getNewsById(params.id);
      setNews(response.news);
      const resAd = await getAdvertising();
      // console.log("ad: ", resAd.advertising);

      setAdvertising(resAd.advertising.advertising);
    };
    call();
  }, [params.id]);

  if (!news || !advertising || !advertising[0]) return <Loading />;

  return (
    <div className=" p-6 rounded-lg  mx-auto mt-15 grid grid-cols-5 gap-5 mt-16">
      <Advertising advertising={advertising} />
      <News news={news} />
    </div>
  );
};

export default Page;
