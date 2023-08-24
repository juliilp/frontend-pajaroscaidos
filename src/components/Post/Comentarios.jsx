"use client";
import { convertirFecha } from "@/utils/auxfunctions";
import { useState } from "react";

export default function Comentarios({ comments }) {
  const [actualComments, setActualComments] = useState({
    Antiguos: true,
    Recientes: false,
    Destacados: false,
  });
  const setComments = (e) => {
    const comments = e.target.id;

    setActualComments({
      ...actualComments,
      Antiguos: false,
      Recientes: false,
      Destacados: false,
      [comments]: true,
    });
  };

  const commentmonth = (coments) => {
    const Date = convertirFecha(coments);
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const month = Date.slice(3).slice(0, 2);
    const day = Date.slice(0, 2);
    const year = Date.slice(-4);

    return ` ${months[parseInt(month - 1)]}, ${day} ${year}`;
  };
  return (
    <div className="w-full  h-full text-lettersgray flex flex-col items-center gap-3">
      <section
        className="flex flex-col items-center w-full gap-4 sm:gap-0
            sm:flex-row  sm:items-stretch  sm:justify-between   sm:w-[95%] "
      >
        <article className="flex w-full sm:w-fit justify-start items-end sm:items-center min-h-[3rem] sm:min-h-[3rem]">
          <h3 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
            Comentarios
          </h3>
        </article>

        <article
          className="flex items-center  min-h-[3rem]  justify-between w-full min-w-fit  max-w-full  
                text-xs  min-[370px]:text-lg  md:text-base lg:text-lg  xl:text-xl 2xl:text-2xl
                md:min-w-[20rem] sm:w-8/12  md:w-6/12  "
        >
          <h4
            id="Antiguos"
            onClick={setComments}
            className={`${
              actualComments.Antiguos && " font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            {" "}
            ANTIGUOS
          </h4>
          <h4
            id="Recientes"
            onClick={setComments}
            className={`${
              actualComments.Recientes && " font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            {" "}
            RECIENTES
          </h4>
          <h4
            id="Destacados"
            onClick={setComments}
            className={`${
              actualComments.Destacados && " font-extrabold"
            } hover:font-extrabold cursor-pointer`}
          >
            {" "}
            DESTACADOS
          </h4>
        </article>
      </section>

      <div
        className={` w-full bg-[#c2c2c2] h-[0.3rem]  border-2 border-lightgray rounded-lg  `}
        style={{ filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
      />

      {comments.length ? (
        <div className=" w-[95%] flex flex-col gap-5 ">
          {comments?.map((i, key) => (
            <section className="flex flex-col  gap-4 items-start" key={key}>
              <article className="flex gap-4">
                <figure className=" rounded-full bg-black h-[2rem] w-[2rem]"></figure>
                <div className="flex flex-col gap-1">
                  <h5 className=" text-xl font-medium">Nombre</h5>
                  {/* <span className=" text-sm">Fecha</span> */}
                  <span className=" text-sm">{commentmonth(i.createdAt)}</span>
                </div>
              </article>

              <article
                title="coment"
                className=" font-semibold w-full sm:w-8/12"
              >
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui suscipit, veniam fuga quibusdam repudiandae eveniet fugit, enim ut aspernatur quae, tempore autem ducimus dolore facilis aut expedita consequatur neque incidunt.</p> */}
                <p className=" break-words">{i.comment}</p>
              </article>
              <div
                className={`  m-auto w-full sm:w-11/12 md:w-10/12 bg-[#c2c2c2] h-[0.1rem]  border-2 border-lightgray rounded-lg  `}
                style={{
                  filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.23))",
                }}
              />
            </section>
          ))}
        </div>
      ) : (
        <div>
          <h1>Sin comentarios</h1>
        </div>
      )}
    </div>
  );
}
