import { Suspense } from "react";
import { convertirFecha } from "@/utils/auxfunctions";
import Image from "next/image";

export default function ContentPost({ publication }) {
  const { title, createdAt, description, image } = publication;
  return (
    <>
      <article className="flex w-full justify-end">
        <span className="text-[#727272]">Fecha :</span>
        <span className="text-[#727272]">{convertirFecha(createdAt)}</span>
      </article>
      <article className="w-full flex justify-center">
        <Suspense fallback={<p>Cargando...</p>}>
          <h1 className=" font-semibold  sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl  w-11/12">
            {title}
          </h1>
        </Suspense>
      </article>
      <div
        className="w-full bg-[#c2c2c2] h-[0.7rem]  border-2 border-lightgray rounded-lg"
        style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))" }}
      />

      <article className=" w-full sm:w-11/12  md:w-10/12 ">
        <Suspense fallback={<p>Cargandoo....</p>}>
          <p className="text-[#020000] sm:text-sm  md:text-base xl:text-xl 2xl:text-2xl">
            {description}
          </p>
        </Suspense>
      </article>

      {image[0].secure_url && (
        <article className="flex justify-center w-10/12">
          <div className="h-auto w-full flex items-center justify-center relative">
            <Image
              src={image[0].secure_url}
              alt={image[0].public_id}
              width={1000}
              height={1000}
              className="h-full w-full rounded-lg"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </article>
      )}
    </>
  );
}
