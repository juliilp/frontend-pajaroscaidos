import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import NuestraComunidad from "@/components/NuestraComunidad/NuestraComunidad";
import React from "react";

export default function page() {
  return (
    <section>
      <MainHome />
      <div className="w-full flex flex-col gap-6 xl:flex-row xl:gap-0 bg-[#d8d9d8] ">
        <div className="w-full h-max flex flex-col gap-6 md:grid  md:grid-cols-2 2xl:grid-cols-3 ">
          <Campañas
            fecha="Julio 18, 2023"
            texto="La Asociación promueve en forma permanente campañas de rescate, de cocientización, de cuidado y respeto hacia las aves y los animales. Muchas se difunden por redes sociales y llegan a todas partes, y algunas se realizan en forma presencial en la via publica con la participación de voluntarios. Vos podes sumarte y difundir nuestras campañas."
          />
          <Campañas
            fecha="Julio 18, 2023"
            texto="La Asociación promueve en forma permanente campañas de rescate, de cocientización, de cuidado y respeto hacia las aves y los animales. Muchas se difunden por redes sociales y llegan a todas partes, y algunas se realizan en forma presencial en la via publica con la participación de voluntarios. Vos podes sumarte y difundir nuestras campañas."
          />
          <Campañas
            fecha="Julio 18, 2023"
            texto="La Asociación promueve en forma permanente campañas de rescate, de cocientización, de cuidado y respeto hacia las aves y los animales. Muchas se difunden por redes sociales y llegan a todas partes, y algunas se realizan en forma presencial en la via publica con la participación de voluntarios. Vos podes sumarte y difundir nuestras campañas."
          />
          <Campañas
            fecha="Julio 18, 2023"
            texto="La Asociación promueve en forma permanente campañas de rescate, de cocientización, de cuidado y respeto hacia las aves y los animales. Muchas se difunden por redes sociales y llegan a todas partes, y algunas se realizan en forma presencial en la via publica con la participación de voluntarios. Vos podes sumarte y difundir nuestras campañas."
          />
        </div>
        <NuestraComunidad />
      </div>
    </section>
  );
}
