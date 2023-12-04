import Image from "next/image";

export default function MainSectionArticulo1({ image }) {
  return (
    <>
      <article className=" px-4 w-11/12 md:p-0 md:w-6/12">
        <p className=" break-words">
        COCO EL MONO RESCATADO DE UNA FIESTA EN BELGRANO El dia 5 de diciembre de 2021, la Unidad Fiscal Especializada en Delitos Ambientales (UFEMA) de la Ciudad de Buenos Aires solicitó ayuda a nuestra Asociación para poder derivar un mono carayá que había sido descubierto en un procedimiento judicial en una vivienda en el barrio de Belgrano, en la Ciudad de Buenos Aires. Ante la emergencia y frente a la inexistencia de otros centros de rescate que se pudieran hacer cargo, accedimos a recibir a Coco, quien tiene unos 5 años de edad, una salud muy frágil por años de desatención y maltrato, quien se encuentra ahora controlado por veterinarios. &aposCoco es un mono carayá de al menos 5 años, que se encontraba encerrado en un armario sin luz, agua, ni ventilación. Esta especie está protegida y es ilegal tenerla de mascota. Coco además tiene tetraparesia, una atrofia muscular que le impide moverse dinámicamente. Luego la Justicia dispuso la LIBERTAD total y absoluta de “COCO” y lo declaró libre de cualquier medida DE RESTRICCION LEGAL Y/O INJERENCIA EN SU CARACTER DE ANIMAL NO HUMANO SUJETO DE DERECHOS Desde la Asociación Pájaros Caídos estamos muy felices de haber sido parte de este proceso que se inició con el rescate de Coco por parte de la Unidad Fiscal Especializada de Delitos Ambientales (UFEMA) de la Ciudad de Buenos Aires, y con los miles de personas que están tomando conciencia que los animales son seres sintientes, que tienen derechos y que los animales silvestres deben estar en su hábitat natural y no encerrados como mascotas. Y luego su traslado, para que pueda tener una mejor vida.
        </p>
      </article>

      <article className="w-6/12 hidden md:block">
        <Image
          src={image}
          alt="Bg-article-1"
          className="m-auto w-8/12 h-auto max-h-[625px]"
          quality={100}
        />
      </article>
    </>
  );
}
