import Campañas from "@/components/Home/Campañas";
import MainHome from "@/components/Home/MainHome";
import React from "react";

export default function page() {
  return (
    <section className=" min-h-screen">{/*min-h-screen para que ocupe si o si toda la pantalla*/}
      <MainHome />
      <Campañas
        fecha="Julio 18, 2023"
        texto="La Asociación promueve en forma permanente campañas de rescate, de cocientización, de cuidado y respeto hacia las aves y los animales. Muchas se difunden por redes sociales y llegan a todas partes, y algunas se realizan en forma presencial en la via publica con la participación de voluntarios. Vos podes sumarte y difundir nuestras campañas."
      />
    </section>
  );
}
