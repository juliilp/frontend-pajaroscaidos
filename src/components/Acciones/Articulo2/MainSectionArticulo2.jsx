import Image from "next/image";

export default function MainSectionArticulo2({ image1, image2 }) {
  return (
    <>
      <article>
        <h1 className=" text-green 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg">
          FERIA DE VILLA DOMINICO
        </h1>
      </article>
      <article>
        <p>
          El día 21 de diciembre de 2014 sería el comienzo de la caída de uno de
          los máximos exponentes en la venta de aves: la Feria De Villa
          Domínico, situada en la zona sur del conurbano bonaerense, lugar de
          asidua concurrencia de las personas que no tienen reparos en comprar y
          vender ejemplares de aves víctimas del tráfico de fauna, actividad
          prohibida por leyes y ordenanzas, y repudiada por gran parte de la
          comunidad. Desde bastante tiempo atrás se venía trabajando en la
          búsqueda de una manera eficiente de terminar con uno de los focos más
          grandes de venta delictiva de animales. Un grupo de vecinos de Villa
          Domínico, las ONG “APAC Avellaneda” y “Zoonosis Lanús”, persistieron
          en las denuncias hasta dar con una Fiscal responsable y sensible
          frente al maltrato animal, la Dra. Carla Musitani. Su forma de
          intervención permitió que se pudiera embestir de manera persistente
          con allanamientos que se llevaron a cabo entre diciembre de 2014 y
          abril de 2015, con una acción judicial por maltrato animal
          (incumplimiento de la Ley 14.346). La Asociación Civil de Ayuda a las
          Aves Pájaros Caídos fue convocada para salvaguardar las aves que allí
          se encontraran, por lo que concurrimos con nuestro equipo de rescate,
          acompañando los allanamientos. Colaboramos en el traslado e inventario
          de las aves, asistiéndolas de manera tal de evitarles en lo posible,
          el estrés que estas situaciones producen. Jilgueros, cabecita negra,
          reyes del bosque, cardenales, cardenillas, reinamoras, tordo amarillo,
          federales, tordos músicos, etc. hacinados en jaulas pequeñísimas,
          sucias, al rayo del sol o en los baúles de los autos, sin agua ni
          comida adecuada, algunos con heridas, fue el panorama tenebroso con el
          que nos encontramos en el deambular por los puestos de la feria.
        </p>
      </article>
      <article className="flex justify-around">
        <Image src={image1} className="w-5/12 h-auto" alt="img1" />
        <Image
          src={image2}
          className="w-5/12 h-auto hidden md:block"
          alt="img2"
        />
      </article>
    </>
  );
}
