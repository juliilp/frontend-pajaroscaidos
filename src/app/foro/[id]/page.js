"use client";
import { useEffect, useState } from "react";
import Comentarios from "@/components/Post/Comentarios";
import { getPosts } from "@/libs/PostFunctions";
import Likesbox from "@/components/Post/Likesbox";
import ContentPost from "@/components/Post/Content";
import OtherContent from "@/components/Post/OtherContent";
import InputComment from "@/components/Post/InputComment";
import Image from "next/image";
import ImgPortada from "@/../public/images/foro-id/Portada.png";
import { BiSolidUser } from "react-icons/bi";

export default function Page({ params }) {
  const [publication, setPublication] = useState(null);
  const [likeInProgress, setLikeInProgress] = useState(false);

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
    setLikeInProgress(false);
  };

  const onCommentSubmit = (newComments) => {
    setPublication((prevPublication) => ({
      ...prevPublication,
      comments: newComments,
    }));
  };

  const handleLikeClick = async (reaction) => {
    if (likeInProgress) return;
    setLikeInProgress(true);
  };

  if (!publication) {
    return;
  }

  return (
    <div
      className="min-h-full gap-3 flex flex-col p-6 mt-[70px]
         pl-0 pr-0
         sm:pl-2 sm:pr-2
         md:pl-6 md:pr-6
         lg:pl-12 lg:pr-12
         xl:pl-14  xl:pr-14 
         2xl:pl-20 2xl:pr-20 text-white"
    >
      <header className="w-full h-[10rem] relative ">
        <Image
          src={ImgPortada}
          alt="ImgPortada"
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div className="absolute inset-0 flex items-center ml-16">
          <div className="flex items-center gap-3 h-full">
            <div className="rounded-full overflow-hidden w-20 h-20 relative">
              <Image
                src={publication.user.avatar.avatar_url}
                alt="User Avatar"
                width={1000}
                height={1000}
                className="h-full w-full"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              {!publication?.user.avatar?.avatar_url && (
                <BiSolidUser color="white" size={35} />
              )}
            </div>
            <span className="text-black font-bold text-2xl ml-2">
              {publication.user.nick_name}
            </span>
          </div>
        </div>
      </header>

      <div className="flex min-h-[20rem] gap-3 relative  h-auto ">
        <main
          className="w-full lg:w-8/12 relative h-full bg-lightgray rounded-[10px] text-[#2B2B2B] 
                p-8 pt-4 pb-6 flex flex-col items-center gap-7 "
          id="Post"
        >
          <ContentPost publication={publication} />
          <div className="flex items-center gap-6 w-full justify-between flex-col sm:flex-row">
            <div className="w-full sm:w-[80%]">
              <InputComment
                onCommentSubmit={onCommentSubmit}
                idPost={params.id}
              />
            </div>
            <div className="flex-grow items-start">
              <Likesbox
                postlikes={publication.reactions}
                idPost={params.id}
                updateLikes={updateLikes}
                likeInProgress={likeInProgress}
                onLikeClick={handleLikeClick}
              />
            </div>
          </div>
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
