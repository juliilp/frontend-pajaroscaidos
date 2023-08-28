import Caza from "@/../public/images/caza.png";
import Image from "next/image";

export default function page() {
  return (
    // Comentario
    <section className="mt-[70px] flex flex-col items-center justify-center w-full gap-8 md:gap-16 ">
      <div className="w-full bg-slate-500 h-[10rem]" />
      <h2 className="text-[#0C6410] font-semibold">CAZA DE AVES</h2>
      <div className="md:grid md:grid-cols-2">
        <p className="px-6 mb-8 md:mb-16 max-w-[500px] ">  
          La caza en sí misma es una actividad cruel que en algunas
          circunstancias lamentablemente se encuentra autorizada por la ley y
          aunque ello no configure un delito penal o infracción contravencional,
          no deja de ser un acto de perversidad, que implica perseguir un animal
          indefenso con el fin de darle muerte o extraerlo de su hábitat natural
          sea cual fuere su finalidad. Si bien hay normas que permiten la caza,
          la utilización de mecanismos no autorizados configuran un delito o
          infracción que es sancionado por la ley. El delito de caza de animales
          silvestres con armas, artes o medios prohibidos está tipificado por el
          artículo 26 de la Ley N° 22.421 de Conservación de la Fauna y por el
          artículo 3 inciso 7) de la Ley N° 14.346 que penaliza lastimar y
          arrollar animales intencionalmente, causarles torturas o sufrimientos
          innecesarios o matarlos por sólo espíritu de perversidad. En el caso
          de las aves, configuran actos de crueldad el uso de redes, trampas,
          reflectores, lazos, hondas, sustancias tóxicas, venenosas y gomosos
          como el pega-pega, la captura o destrucción en masa de aves, nidos,
          huevos y crías, la formación de cuadrillas de a pie o a caballo para
          perseguir aves como perdices, martinetas, y animales en general, cazar
          en horas de la noche, entre otros. Independientemente de las sanciones
          de carácter penal que correspondan, distintas jurisdicciones
          provinciales o municipales cuentan con normas que configuran a este
          tipo de prácticas como contravenciones o faltas a las que se castiga
          con multas, decomiso de armas, inhabilitaciones, etc.
        </p>
        <Image src={Caza} alt="caza" className="mx-auto" />
      </div>
      <div className="bg-[#C2C2C2] mx-6 max-w-[1000px] flex flex-col gap-8 md:gap-24  h-[450px]  mb-10">
        <span className="text-[#0C6410] text-xl md:text-2xl mx-auto mt-6 ">
          Legislación
        </span>
        <p className="font-bold  self-center justify-self-center mx-6  ">
          Ley Nº 22.421 Ley Conservacion de la Fauna <br />
          Ley Nº 14.346 Se establecen penas para las personas que maltraten o
          hagan victimas de actos de crueldad a los animales
        </p>
      </div>
    </section>
  );
}
