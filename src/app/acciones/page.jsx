import CardAcciones from "@/components/Acciones/CardAcciones";
import React from "react";
import { dataAcciones } from "@/components/Acciones/dataAcciones";
export default function Acciones() {
  return (
    <section className="mt-[70px] w-full pb-12 flex flex-col gap-12">
      <div className="w-full flex flex-col items-center justify-center">
        <span className="text-[#0C6410] text-2xl font-medium mt-12 mb-6">
          ACCIONES
        </span>
        <p className="px-6 max-w-[800px] font-semibold">
          La Asociación de Pájaros Caídos se destaca por su dedicación en la
          protección de aves en situaciones vulnerables. Rescatando,
          rehabilitando y preservando hábitats, el equipo de expertos y
          voluntarios brinda atención médica, refugio seguro y concientización.
          Su compromiso no solo salva vidas aviares,sino que también restaura la
          dignidad y el equilibrio en nuestros ecosistemas.
        </p>
        <div className="w-full h-[3px] bg-[#0C6410] hidden md:block my-16" />
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-32 md:gap-16">
        {dataAcciones.map((card) => {
          return (
            <CardAcciones
              key={card.id}
              titulo={card.titulo}
              texto={card.texto}
              image={card.image}
              redireccion={card.redireccion}
              distanciaImagen={
                card.id % 2 === 0
                  ? "lg:justify-self-end"
                  : "lg:justify-self-start"
              }
              distanciaDiv={
                card.id % 2 !== 0
                  ? "lg:justify-self-end"
                  : "lg:justify-self-start"
              }
              className={card.id % 2 !== 0 && "order-[-2]"}
            />
          );
        })}
      </div>
    </section>
  );
}
