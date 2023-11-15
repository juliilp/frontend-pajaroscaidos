"use client";
import { useEffect, useState } from "react";
import Comentarios from "@/components/Post/Comentarios";
import { getPost } from "@/api/apiCall/PostRequests";
import ContentPost from "@/components/Post/Content";
import InputComment from "@/components/Post/InputComment";
import Image from "next/image";
import ImgPortada from "@/../public/images/foro-id/Portada.webp";
import { BiSolidUser } from "react-icons/bi";
import NuestraComunidad from "@/components/NuestraComunidadDesktop/NuestraComunidadDesktop";

export default function Page({ params }) {
  const [publication, setPublication] = useState(null);
  const [likeInProgress, setLikeInProgress] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getPost(params.id);
      setPublication(data.publication);
    }

    fetchData();
  }, [params.id]);

  const onCommentSubmit = (newComments) => {
    setPublication((prevPublication) => ({
      ...prevPublication,
      comments: newComments,
    }));
  };

  if (!publication) {
    return;
  }

  return (
    <section className="min-h-full gap-3 flex flex-col pb-6 mt-[70px] text-white">
      <header className="w-full h-40 relative">
        <Image src={ImgPortada} alt="ImgPortada" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center sm:ml-16 ml-6">
          <div className="flex items-center gap-3 h-full">
            <div className="rounded-full overflow-hidden w-20 h-20 relative">
              <Image
                src={publication.user.avatar?.secure_url}
                alt="User Avatar"
                width={1000}
                height={1000}
                className="h-full w-full"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              {!publication?.user.avatar?.secure_url && <BiSolidUser color="red" size={35} />}
            </div>
            <span className="text-black font-bold text-2xl ml-2">{publication.user.nick_name}</span>
          </div>
        </div>
      </header>

      <article className="flex min-h-[20rem] gap-3 relative justify-center h-auto ">
        <main
          className="w-full lg:w-8/12 relative h-full bg-lightgray rounded-[10px] text-[#2B2B2B] 
                p-8 pt-4 pb-6 flex flex-col items-center gap-7 "
          id="Post"
        >
          <ContentPost publication={publication} postId={params.id} />
          <div className="flex items-center gap-6 w-full justify-between flex-col sm:flex-row">
            <div className="w-full sm:w-[80%]">
              <InputComment onCommentSubmit={onCommentSubmit} idPost={params.id} />
            </div>
          </div>
        </main>
        <NuestraComunidad />
      </article>
      <section className="p-4 md:p-0 md:mx-6 bg-lightgray min-h-[15rem] h-full sm:p-6 rounded-[10px] 2xl:mx-20">
        <Comentarios comments={publication.comments} />
      </section>
    </section>
  );
}
