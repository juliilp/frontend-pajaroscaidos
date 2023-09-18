"use client";
import Link from "next/link";
import React from "react";
import YoutubePlay from "../YoutubePlay/YoutubePLay";

import Image from "next/image";

export default function EncontreUnAve({
  titulo,
  imagen,
  parrafo,
  video,
  blog,
}) {
  const parrafov2 = parrafo.split("\n");
  return (
    <section className="bg-[#C2C2C2] p-8 max-w-[728px] h-full flex flex-col gap-8 md:p-16 md:gap-16">
      <h2 className="text-[#0C6410] text-center font-semibold ">{titulo}</h2>

      {video ? (
        <YoutubePlay
          styles="max-w-[500px] h-[400px] w-full mx-auto"
          videoID="wUN2wjMBTtw"
        />
      ) : (
        <Image
          src={imagen}
          alt="imagen"
          className="mx-auto max-w-[400px] h-[250px]"
        />
      )}

      <div>
        {parrafov2.map((paragraph, index) => {
          return (
            <p key={index} className="font-semibold text-sm pl-8">
              {paragraph}
              {blog && (
                <Link
                  href="#"
                  className="m1-1 text-sm font-semibold cursor-pointer underline block"
                  prefetch={false}
                >
                  Acceder al blog
                </Link>
              )}
            </p>
          );
        })}
      </div>
    </section>
  );
}
