import React, { useState } from "react";
import PostComunidadMobile from "./PostComunidadMobile";
import { useEffect } from "react";
import { getPostForNuestraComunidad } from "@/api/apiCall/functions";

export default function NuestraComunidadMobile() {
  const [publications, setPublications] = useState([]);
  const [option, setOption] = useState("day");
  useEffect(() => {
    async function getPublications() {
      const publicationsResponse = await getPostForNuestraComunidad(option); // NOTA: sacar 'limit' para que traiga todos los posts.
      setPublications(publicationsResponse);
    }
    getPublications();
  }, [option]);
  const botonesOpciones = [
    { etiqueta: "Hoy", valor: "day" },
    { etiqueta: "Semana", valor: "week" },
    { etiqueta: "Mes", valor: "month" },
    { etiqueta: "Tops", valor: "likes" },
  ];

  const handlerOption = (option) => setOption(option);
  return (
    <section className="flex xl:hidden flex-col w-[90%] mx-[5%] my-8 bg-white rounded-xl p-6 pl-4 max-w-[1000px] ">
      <h2 className="text-lg">Nuestra Comunidad</h2>
      <div className="flex justify-around mt-6">
        {botonesOpciones.map(({ etiqueta, valor }) => {
          return (
            <button
              key={valor}
              className={`${option === valor && "text-[#434341] underline"}`}
              onClick={() => handlerOption(valor)}
            >
              {etiqueta}
            </button>
          );
        })}
      </div>
      <hr />
      <PostComunidadMobile publications={publications} />
    </section>
  );
}