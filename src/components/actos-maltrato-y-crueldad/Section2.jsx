import Image from "next/image";
import Bird from "@/../public/images/Actos de Maltrato y crueldad/actosmaltratoycrueldad.webp";

export default function EntretenimientoYDiversion() {
  return (
    <section className="px-6 md:px-24 pt-6">
      <h2 className="text-[#0C6410] underline font-semibold text-2xl mb-3 uppercase">
        Entretenimiento y diversion
      </h2>
      <p className="text-lg">
        <strong>
          La utilización de animales y por consiguiente de aves en espectáculos,
          ferias y cualquier otra actividad de entretenimiento puede constituir
          un acto de crueldad, incluso cuando las mismas estuvieran autorizadas
          por los organismos competentes.
        </strong>{" "}
        <br /> Su utilización en espectáculos teatrales, circenses, o en
        contenidos audiovisuales en donde se los haga participar en acciones
        inducidas por los seres humanos, representa un acto de crueldad.{" "}
        <strong>
          La Ley N° 14.346 en su artículo 3 inciso 7) prohíbe causarles
          sufrimientos innecesarios en tanto el inciso 8) veda realizar actos
          públicos o privados en donde se los mate, hiera u hostilice.
        </strong>{" "}
        <br /> Dato curioso es la Ordenanza N° 545.21 de la Ciudad de Buenos
        Aires dictada en el año 1910, en donde prohibía arrojar aves u otras
        clase de animales en teatros, cines y espectáculos públicos, que
        regulaba los espectáculos en cines y teatros. <br />{" "}
        <strong>
          No existe necesidad ni razón que justifique exponer a los animales en
          espectáculos ya que no pueden comprender la finalidad y objetivo en el
          cual se los involucra.
        </strong>{" "}
        Este tipo de situaciones genera un estrés que la norma define como
        sufrimiento innecesario u hostilidad.La exhibición de animales para su
        venta, exposición, competencia, o cualquier otro fin en ferias puede ser
        una actividad autorizada por la legislación y contar con permisos
        otorgados por autoridades públicas. <br /> Sin embargo, resultan eventos
        innecesarios que causan sufrimiento a las especies involucradas y
        constituyen un acto de crueldad.{" "}
        <strong>
          Su traslado, encierro, su exhibición frente a un entorno desconocido,
          casi siempre en espacios reducidos, expuestos a cambios de
          temperatura, y mal alimentados resulta un acto de maltrato y crueldad
          sancionado por el artículo 2 inciso 1) “No alimentar en cantidad y
          calidad suficiente a los animales domésticos o cautivos” y artículo 3
          inciso 7) y 8) de la Ley N° 14.346 “causarles … sufrimientos
          innecesarios” o “Realizar actos públicos o privados en que se mate,
          hiera u hostilice a los animales”.
        </strong>{" "}
        <br /> La exhibición de los animales en zoológicos se encuentra en pleno
        proceso de revisión en la Argentina, criterio que debe hacerse extensivo
        a las ferias por las mismas razones, ya que ello implica una nociva
        exposición al público, inadecuados espacios donde son colocados, estrés
        y sufrimiento entre otras causas.
      </p>
      <Image
        src={Bird}
        alt="Bird"
        className="w-full mx-auto max-w-[450px] h-[250px] sm:h-[300px] my-6"
      />
    </section>
  );
}
