import Image from "next/image";
import Link from "next/link";
export default function MainCazatrafico({ images }) {
  return (
    <>
      <div className="flex w-full justify-end">
        <Link
          href={"/como-denunciar"}
          className="text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white bg-green p-2 md:p-3 hover:text-gray-100 hover:bg-[#13b113] duration-200"
        >
          Como denunciar
        </Link>
      </div>

      <article className="flex w-[80%] text-lg ">
        <p>
          <strong>
            Puede definirse al mascotismo como el deseo o la afición de las
            personas a tener mascotas o animales de compañía.
          </strong>{" "}
          Históricamente la función de mascota fue cumplida por perros y gatos,
          y en menor medida con algunas especies de aves, que acompañaron a los
          seres humanos por cientos de años. Sin embargo, este afecto ha
          devenido en una terrible práctica que es la comercialización de
          animales silvestres para cumplir el rol de mascotas.
          <br />
          <strong>
            El mascotismo ha generado un enorme tráfico de animales, que son
            extraídos de su hábitat natural, provocando con ello la disminución
            y luego la desaparición de especies,
          </strong>{" "}
          y por otra parte, su muerte en la gran mayoría de los casos ya que no
          resisten el traslado, no pueden adaptarse al lugar donde son
          encerrados o sus nuevos cuidadores carecen de los conocimientos,
          recursos o vocación necesaria para brindarles la alimentación y
          cuidados adecuados.{" "}
          <strong>
            9 de cada 10 animales silvestres que son capturados mueren antes de
            ser vendidos.
          </strong>{" "}
          Las aves, algunas por su colorido, por su canto, o por la habilidad
          para reproducir la voz humana como ocurre con ciertas variedades de
          loros, son una de las especies amenazadas por el mascotismo, y han
          obligado al conjunto de naciones a adoptar medidas para detener el
          tráfico de animales.
          <br />
          <br />
          <strong>
            El artículo 25 de la Ley Nacional N° 22. 421 de Conservación de la
            Fauna prohíbe la caza de animales silvestres cuya captura o
            comercialización estuviera prohibida por la ley, por lo que la
            tenencia como mascotas de esta clase de animales se encuentra
            asimismo vedada.
          </strong>{" "}
          Distintas leyes provinciales siguen este criterio respecto de la fauna
          silvestre local estableciendo sanciones como multas y decomiso de los
          animales. La República Argentina ha suscripto y ratificado mediante la
          Ley N° 22. 344 la Convención sobre el Comercio Internacional de
          Especies Amenazadas de Fauna y Flora Silvestres{" "}
          <strong>(CITES)</strong>. Se trata de un acuerdo internacional cuya
          finalidad es cuidar que el comercio internacional de animales y
          plantas silvestres no implique una amenaza para su supervivencia.{" "}
          <strong>
            Allí se identifican ciertas especies en peligro de extinción entre
            las que se encuentran diferentes tipos de aves cuyo comercio se
            encuentra prohibido, las que su tráfico debe ser controlado y
            aquellas que se encuentran protegidas por su situación de
            vulnerabilidad.
          </strong>{" "}
          El mascotismo implica en sí mismo un acto de crueldad penado por la
          Ley N° 14. 346 artículo 3 inciso 7), ya que provoca en forma directa
          un sufrimiento innecesario a los animales silvestres que son extraídos
          ilegalmente de su hábitat natural para ser introducidos en otros
          ambientes extraños donde sufren encierro, deficiente alimentación,
          imposibilidad de contacto con otros de su especie, entre otras tantas
          situaciones que en muchos casos le provocan la muerte.
          <br />
          <br />
          El Código de Faltas de la Ciudad de Buenos Aires aprobado por la Ley
          N° 451 establece en su artículo 1. 2. 9 que:{" "}
          <strong>
            “El/la que tenga un animal cuya tenencia esté prohibida, salvo con
            fines de estudio o propósitos científicos o artísticos, y no cuente
            con autorización de la autoridad competente o venda, tenga o guarde
            animales en infracción a las normas zoo-sanitarias o de seguridad es
            sancionado/a con multa de veinticinco (25) a doscientas cincuenta
            (250) unidades fijas y/o decomiso de las cosas y/o clausura del
            establecimiento”.
          </strong>{" "}
          Por consiguiente, solo podrán tenerse como animales de compañía
          aquellos que han sido criados de generación en generación bajo la
          vigilancia de los seres humanos, evolucionando de tal manera que ya
          constituye una especie o por lo menos una raza diferente de la forma
          primitiva que le dio origen.
        </p>
      </article>

      <article className="w-full md:w-10/12 md:flex-row flex flex-col items-center justify-around">
        <Image
          src={images[0]}
          alt={`caza-trafico-1`}
          width={500}
          height={500}
          className="md:w-3/12 w-11/12 h-auto hidden md:block"
        />
        <Image
          src={images[1]}
          alt={`caza-trafico-2`}
          width={500}
          height={500}
          className="md:w-3/12 w-11/12 h-auto"
        />
        <Image
          src={images[2]}
          alt={`caza-trafico-3`}
          width={500}
          height={500}
          className="md:w-3/12 w-11/12 h-auto hidden md:block"
        />
      </article>
    </>
  );
}
