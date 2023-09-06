import Image from "next/image";

export default function Section4Articulo2({ image }) {
  return (
    <>
      <article className="w-full flex justify-center">
        <h4 className=" text-green 2xl:text-3xl xl:text-2xl lg:text-xl text-base ">
          EL MOMENTO MÁS ESPERADO
        </h4>
      </article>
      <article className="w-full">
        <p>
          medida que fue evaluado el estado sanitario de cada una de las aves,
          su plumaje y su destreza en el vuelo, se fue planificando su
          liberación. Trabajando de manera conjunta con las autoridades de la
          Dirección de Flora y Fauna de la Provincia de Buenos Aires y la
          Dirección de Fauna Silvestre del ámbito nacional, se definió el
          destino de cada ejemplar. Una vez que se libró la orden del Juez que
          tenía a su cargo la causa, entregamos a las autoridades
          correspondientes las aves oriundas del interior del país, y a las
          autoridades de Fauna de la Provincia de Buenos Aires, aquellas que
          correspondían a su jurisdicción. Con alegría y emoción, asistimos
          junto con las autoridades, a ese momento inolvidable en el que se abre
          la jaula, y se las ve salir con ímpetu y alegría, hacia una vida
          digna. Sin duda, este fue un paso adelante en el largo camino contra
          el maltrato animal y la venta ilegal de fauna silvestre, un logro que
          fue posible gracias al trabajo coordinado de la comunidad, los
          funcionarios y autoridades de cada área, movidos por el respeto y el
          amor que los animales requieren y merecen.
        </p>
      </article>
      <article className="w-full flex justify-center">
        <Image
          src={image}
          alt="img5"
          className="w-8/12"
          width={2161}
          height={746}
        />
      </article>
    </>
  );
}
