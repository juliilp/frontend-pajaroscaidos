import Image from "next/image";

export default function Section2Articulo2({ image }) {
  return (
    <>
      <article>
        <h2 className=" text-green 2xl:text-3xl xl:text-2xl lg:text-xl text-base ">
          LA TAREA DE SALVAR LAS AVES
        </h2>
      </article>
      <div className="flex flex-col items-center gap-8 md:gap-0 md:flex-row justify-between ">
        <article className="w-full md:w-6/12">
          <p>
            La primera medida que llevamos a cabo fue sacar a todas las aves de
            las jaulas sucias y contaminadas, y colocarlas en recintos grandes;
            el Dr. Héctor Funes, uno de los médicos consultores de nuestra
            asociación, realizó un pormenorizado diagnóstico e informe del
            estado en que se encontraban, e indicó el tratamiento y la
            alimentación correspondiente. El pronóstico no era para nada
            alentador, dadas las patologías detectadas, el bajo peso, el estrés
            y el mal estado general. Los primeros días eran cruciales, y con una
            dedicación exclusiva de parte de un grupo de voluntarios, logramos
            que sobrevivieran más del 80 por ciento del centenar de aves
            secuestradas. Los tratamientos continuaron durante casi dos meses, y
            se les proporcionó además, espacios amplios para que pudieran
            practicar vuelo y entrenar su musculatura. Descargar 1° informe de
            veterinario - Descargar 2° informe de veterinarioF
          </p>
        </article>
        <article className="w-9/12 md:w-[46%]">
          <Image src={image} alt="img3" width={702} height={371} />
        </article>
      </div>
    </>
  );
}
