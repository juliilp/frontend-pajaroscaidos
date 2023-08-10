import Caza from "@/../public/images/sacrificios.png";
import Image from "next/image";

export default function page() {
  return (
    <section className="mt-[70px] flex flex-col items-center justify-center w-full gap-8 md:gap-16 ">
      <div className="w-full bg-slate-500 h-[10rem]" />
      <h2 className="text-[#0C6410] font-semibold">CAZA DE AVES</h2>
      <div className="md:grid md:grid-cols-5">
        <p className="px-6 mb-8 md:mb-16 max-w-[800px] md:col-span-3 ">
          Los sacrificios religiosos son actos que llevan a cabo los seres
          humanos, mediante los cuales ofrecen a sus dioses la vida de animales
          para expiar sus culpas, pedir por cuestiones particulares o
          simplemente agradecer. Se trata de actos absolutamente innecesarios,
          crueles y perversos que suceden en todo el mundo, donde animales
          inocentes, indefensos, seres sintientes, son mutilados, decapitados o
          desangrados lentamente. Cultos umbanda, judíos ortodoxos, o rituales
          indígenas entre otros, suelen sacrificar aaves y particularmente
          gallinas, provocando además de la muerrte, un sufrimiento
          innenecesario y cruel. Estas de situaciones en Argentina configuran el
          delito de crueldad tipificado por el artículo 3 incisos 2) y 7) de la
          Ley N° 14.346 en cuanto supone mutilar y causarles torturas o
          sufrimientos innecesarios. Si bien la Constitución de la República
          Argentina garantiza a todos sus haabitantes el ejercicio libre de su
          culto o religión, el mismo debe realizarse respetando las normas
          legales vigentes, por lo que el sacrificio de animales no esta
          autorizado para ninguna práctica o ceremonia. La Ley Nº 21.745 que
          regula el reconocimiento de las religiones y cultos que no sean parte
          de la Iglesia Católica, establece que no respetar el orden público, el
          que se define como el cumplimiento de las normas legales existentes,
          es motivo de no reconocimiento y/o perdida de la autorizacioón como
          asociación religiosa. El artículo 3 inciso b) de la Ley Nº 21.745
          establece que perderá su inscripción como culto la asociación
          religiosa: "cuando se hubiere comprobado que los principios y/o
          propósitos que dieron origen a la constitución de la asociación o la
          actividad que ejerce, resultaren lesivas al orden público, la
          seguridad nacional, la moral y las buenas costumbres"- La utilizaciñon
          y sacrificio de animales en cultos y ceremonias religiosas es un acto
          ilegal penado por la Ley Nº 14.346 que debe ser denunciado a las
          autoridades.
        </p>
        <Image
          src={Caza}
          alt="caza"
          className="object-cover mx-auto max-w-[320px] h-[500px] md:col-span-2 "
        />
      </div>
      <div className="bg-[#C2C2C2] mx-6 max-w-[1000px] flex flex-col gap-8 md:gap-24 mb-10">
        <span className="text-[#0C6410] text-center text-xl md:text-2xl mx-auto mt-6 ">
          REGISTRO NACIONAL DE CULTOS <br />
          LEY Nº 21.745
        </span>
        <p className="font-semibold  self-center justify-self-center mx-6 mb-24 ">
          Buenos Aires, 10 de febrero de 1978. En uso de las atribuciones
          conferidas por el artículo 5º del Estatuto para el Proceso de
          Reorganización Nacional, EL PRESIDENTE DE LA NACION ARGENTINA SANCIONA
          Y PROMULGA CON FUERZA DE LEY: ARTICULO 1º -- Créase en el ámbito del
          Ministerio de Relaciones Exteriores y Culto el Registro Nacional de
          Cultos, por ante el cual procederán a tramitar su reconocimiento e
          inscripción las organizaciones religiosas que ejerzan sus actividades
          dentro de la jurisdicción del Estado Nacional, que no integren la
          Iglesia Católica Apostólica Romana. ARTICULO 2º -- El Poder Ejecutivo
          procederá a establecer las condiciones y recaudos que deberán
          cumplirse para obtener el reconocimiento e inscripción en el Registro
          Nacional de Cultos. Dicho reconocimiento e inscripción serán previos y
          condicionarán la actuación de todas las organizaciones religiosas a
          que se refiere el artículo 1º, como así también el otorgamiento y
          pérdida de personería jurídica o, en su caso, la constitución y
          existencia de la asociación como sujeto de derecho. Las organizaciones
          religiosas comprendidas, ya inscriptas, deberán proceder a su
          reinscripción en un plazo de 90 días desde la publicación del decreto
          de reglamentación de la presente ley; caso contrario, pasado dicho
          plazo se las tendrá por no inscriptas. ARTICULO 3º -- Se procederá a
          la denegatoria de la inscripción solicitada o cancelación de la misma
          si ya hubiere sido acordada, en los siguientes casos: a) cuando
          mediare el incumplimiento de lo dispuesto por la presente ley y su
          reglamentación. b) cuando se hubiere comprobado que los principios y/o
          propósitos que dieron origen a la constitución de la asociación o la
          actividad que ejerce, resultaren lesivas al orden público, la
          seguridad nacional, la moral y las buenas costumbres. c) cuando el
          ejercicio de sus actividades fuere distinto de los principios y/o
          propósitos que determinaron su reconocimiento e inscripción o fuere
          lesivo para otras organizaciones religiosas. ARTICULO 4º -- Los casos
          mencionados en el artículo anterior implican: a) la prohibición de
          actuar en el territorio nacional y/o b) la pérdida de la personería
          jurídica o el carácter de sujeto de derecho. ARTICULO 5º -- La
          presente ley es de orden público y el Poder Ejecutivo Nacional
          procederá a su reglamentación dentro de los 60 días a partir de su
          publicación. ARTICULO 6º -- Comuníquese, publíquese y dése a la
          Dirección Nacional del Registro Oficial y archívese-
        </p>
      </div>
    </section>
  );
}
