import Image from "next/image";

export default function Section3Articulo2({ image }) {
  return (
    <>
      <article>
        <h3 className=" text-green 2xl:text-3xl xl:text-2xl lg:text-xl text-base ">
          EL CIERRE DE “LA FERIA DE LOS PÁJAROS”
        </h3>
      </article>

      <div className="flex  flex-col-reverse items-center gap-8 md:gap-0 md:flex-row justify-between">
        <article className=" w-9/12 md:w-6/12">
          <Image src={image} alt="img4" />
        </article>
        <article className="w-full md:w-[46%]">
          <p>
            La buena noticia del cierre de los puestos de venta de aves de la
            Feria de Villa Domínico, llegó el día 30 de mayo de 2015, pero la
            lucha contra la venta de animales, había comenzado una década atrás.
            La Feria, creada en 1969, era conocida como la Feria de los Pájaros;
            allí se podía conseguir cualquier animal: roedores, aves, reptiles,
            perros, gatos, etc., muchos de ellos arrancados de su hábitat,
            producto del tráfico de fauna, sometidos a situaciones de maltrato y
            crueldad animal. Luego de muchas denuncias presentadas por vecinos y
            por distintas organizaciones ante la Justicia, el Municipio, la
            Dirección de Flora y Fauna de la Provincia y la Secretaría de
            Comercio, se logró hace tres años que cese la venta de perros y
            gatos. Este año, la Feria de los Pájaros llegó a su fin, y el logro
            llega como reconocimiento al sostenido trabajo de un equipo que no
            dejó jamás que el desaliento los ganara.
          </p>
        </article>
      </div>
    </>
  );
}
