import Image from "next/image";

export default function MainSectionArticulo1({ image }) {
  return (
    <>
      <article className=" px-4 w-11/12 md:p-0 md:w-6/12">
        <p className=" break-words">
          `25-07-2023 INCAUTACION DE GUACAMAYOS EN MATADEROS Efectivos del
          Departamento Delitos Ambientales de la Policía Federal Argentina,
          rescataron dos Guacamayos Azul y Amarillo (Ara Ararauna) en peligro de
          extinción, los cuales se encontraban cautivos en jaulas escondidas
          entre los acopios de mercadería de una fábrica de vidrios de la
          localidad de Mataderos, CABA, en infracción a las Leyes de
          Conservación de la Fauna Silvestre (22.421) y la de Maltrato Animal
          (14.346) La investigación comenzó a raíz de una denuncia en la que se
          hizo saber a las autoridades de la existencia de estos dos Guacamayos
          enjaulados en un área no adecuada. Tomó intervención la Unidad Fiscal
          de Investigación en Materia Ambiental (UFEMA) de la Ciudad Autónoma de
          Buenos Aires a cargo del Dr. Carlos Fel Rolero Santurian, Secretaría
          del Dr. Ricardo Bomparola, quien dio intervención al Departamento de
          Delitos Ambientales, lográndose determinar la veracidad de la
          denuncia. Con las pruebas reunidas, se procedió a la incautación de
          las dos aves, que fueron trasladadas a la Ong. Pájaros Caídos, en
          donde se procurará un período de cuarentena para su rehabilitación y
          posterior reinserción a su hábitat especifico. El responsable de la
          firma quedó a disposición de la Fiscalía interventora, afectado por
          los delitos de Tráfico de Fauna Silvestre y Maltrato Animal. La manera
          de frenar el Tráfico Ilegal de Fauna es hacer la Denuncia!!! Si se
          denuncia, las autoridades pueden intervenir y salvar a los animales
          que se tienen en cautiverio. Si ves maltrato animal, venta de animales
          silvestres, te enterás de caza ilegal de fauna silvestre, por favor
          Denunciá, las denuncias si sirven.`
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
