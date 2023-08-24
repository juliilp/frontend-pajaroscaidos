"use client";
import { useEffect, useState } from "react";
import Comentarios from "@/components/Post/Comentarios";
import { getPosts } from "@/libs/PostFunctions";
import Likesbox from "@/components/Post/Likesbox";
import ContentPost from "@/components/Post/Content";
import OtherContent from "@/components/Post/OtherContent";

export default function Page({ params }) {
  const [publication, setPublication] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts(params.id);
      setPublication(data.publication);
    }

    fetchData();
  }, [params.id]);

  const updateLikes = (newLikes) => {
    setPublication((prevPublication) => ({
      ...prevPublication,
      reactions: newLikes,
    }));
  };

  if (!publication) {
    return;
  }

  return (
    <div
      className=" min-h-full gap-3 flex flex-col p-6 
         pl-0 pr-0
         sm:pl-2 sm:pr-2
         md:pl-6 md:pr-6
         lg:pl-12 lg:pr-12
         xl:pl-14  xl:pr-14 
         2xl:pl-20 2xl:pr-20 text-white"
    >
      <header className="w-full h-[10rem] bg-blue-200">
        <h2>header</h2>
      </header>

      <div className="flex    min-h-[20rem] gap-3 relative  h-auto ">
        <main
          className="w-full lg:w-8/12 relative min-h-[40rem] h-full bg-lightgray   rounded-[10px] text-[#2B2B2B] 
                p-8 pt-4 pb-20 flex flex-col items-center gap-7 "
          id="Post"
        >
          <ContentPost publication={publication} />
          <Likesbox
            postlikes={publication.reactions}
            idPost={params.id}
            updateLikes={updateLikes}
          />
        </main>
        <OtherContent desktop={true} />
      </div>
      <section className="w-full  bg-lightgray min-h-[15rem] h-full  sm:p-6">
        <Comentarios comments={publication.comments} />
      </section>

      <OtherContent mobile={true} />
    </div>
  );
}
