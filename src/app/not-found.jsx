"use client";
import Link from "next/link";
import errorimage from "@/../public/images/ERROR.svg";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex pt-10 md:pt-0 flex-col md:flex-row relative justify-center items-center min-h-screen  ">
      <main className="flex w-5/12 flex-col items-center ">
        <div className=" w-fit flex flex-col gap-8 md:gap-16">
          <section className="flex flex-col gap-8 items-center">
            <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3D3D3D]">
              Ooops!
            </h2>
            <h1 className="text-[#3D3D3D]  text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Algo salio mal!
            </h1>
          </section>

          <section className="w-full">
            <Link href={"/"}>
              <button className="w-full p-1 rounded-lg h-full bg-[#0C6410] text-white">
                Ok! llevame al home
              </button>
            </Link>
          </section>
        </div>
      </main>

      <section className="flex   md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
        <Image
          src={errorimage}
          alt="error-img"
          className=" h-[25rem] w-auto min-h-[18rem] "
        />
      </section>
    </div>
  );
}
