import CardVoluntariado from "@/components/CardVoluntariado/CardVoluntariado";
import { dataVoluntario } from "@/components/CardVoluntariado/dataVoluntario";

export default function page() {
  return (
    <section className="mt-[70px]">
      <div className="hidden md:block w-full h-[200px] bg-slate-600" />
      <h2 className="w-full text-center text-xl my-8 lg:text-2xl ">
        Voluntarios
      </h2>
      <div className="px-8 mx-auto max-w-[800px] mb-8">
        <p>
          Los voluntario son una parte fundamental de nuestra asociación, ya que
          donan su tiempo y sus conocimientos, asegurando el funcionamiento de
          distintos servicios y acciones que Pájaros Caídos presta, en sus
          diversas acciones de cuidado y respeto a las aves.Consiste en atender
          las consultas que llegan a través de la página de Facebook del Refugio
          de Aves Pájaros Caidos, brindando orientación en el cuidado y la
          alimentación de las distintas especies de aves, dando indicaciones
          referidas a los primeros auxilios de un ave en peligro y derivando a
          un profesional o centro de atención especializado.Para ser voluntario
          on line necesitas:
        </p>
        <ul className="list-disc pl-6 ">
          <li>
            Una computadora con acceso a internet y un perfil de Facebook.
          </li>
          <li>Disponer de un horario fijo.</li>
          <li>Actitud responsable y capacidad para atender a la gente.</li>
        </ul>
        <p>
          No es necesario ser un experto en la atención de aves, desde la
          Sociación brindamos previamente la capacitación y la información para
          dar respuesta a las demandas más habituales.
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center">
        {dataVoluntario.map((card) => {
          return (
            <CardVoluntariado
              key={card.id}
              titulo={card.titulo}
              imagen={card.imagen}
              parrafo={card.parrafo}
              Livisible={card.Livisible}
              Parrafo2visible={card.Parrafo2visible}
              li1={card.li1}
              li2={card.li2}
              li3={card.li3}
              parrafo2={card.parrafo2}
              className={card.id == 1 && "h-[1000px]"}
            />
          );
        })}
      </div>
    </section>
  );
}
