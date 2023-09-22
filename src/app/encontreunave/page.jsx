import EncontreUnAve from "@/components/EncontreUnAve/EncontreUnAve";
import Image from "next/image";
import React from "react";
import { DataEncontreUnAve } from "./DataEncontreUnAve";
import bgimage from "@/../public/images/encontreunave/EncontreUnAve.png";
export default function page() {
  return (
    <section className="mt-[70px] flex flex-col w-full gap-8">
      <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={bgimage} alt="bg-tucan" fill className="" />
      </section>
      <h1 className="text-xl text-[#0C6410] text-center font-semibold mt-8 ">
        QUE HACER SI ME ENCUENTRO UN AVE
      </h1>
      <p className="px-8 max-w-[800px] font-semibold mx-auto">
        Encontrar un ave herida, enferma o un pichón caído del nido sin poder
        volar es muy común en zonas urbanas y también rurales. Solo basta con
        prestar atención y observar. Comprometerse y rescatarla de una segura
        muerte es un paso muy importante que enfrentan día a día muchas personas
        que sin conocer nada sobre aves, asumen ese desafio de cuidarlas y
        darles una nueva oportunidad en la vida. Desde esta pñagina queremos
        ayudarte a enfrentar ese desafio para que tu esfuerzo tenga la mejor
        recompensa que es salvar una vida.
      </p>
      <div className="w-full flex flex-col justify-center items-center gap-16 py-12">
        {DataEncontreUnAve.map(
          ({ titulo, imagen, id, parrafo, video, blog }) => {
            return (
              <EncontreUnAve
                key={id}
                titulo={titulo}
                imagen={imagen}
                parrafo={parrafo}
                video={video}
                blog={blog}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
