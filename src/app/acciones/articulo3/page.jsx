import Image from "next/image";
import React from "react";
import Image1 from "@/../public/images/AccionesClubPigeionClubArgentino/Imagen1.webp";
import Image2 from "@/../public/images/AccionesClubPigeionClubArgentino/Imagen2.webp";
import Image3 from "@/../public/images/AccionesClubPigeionClubArgentino/Imagen3.webp";
import Image4 from "@/../public/images/AccionesClubPigeionClubArgentino/Imagen4.webp";
import bgimage from "@/../public/images/AccionesClubPigeionClubArgentino/NoMatanza.webp";

export default function page() {
  return (
    <section className="mt-[70px] flex flex-col gap-8 w-full">
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[22rem]">
        <Image src={bgimage} alt="bg-tucan" fill priority className="w-full" />
      </section>
      <h2 className="text-[#0C6410] text-center text-2xl font-semibold mt-8">
        CLUB PIGEON CLUB ARGENTINO
      </h2>
      <div className="flex flex-col justify-center items-center lg:items-stretch  w-full lg:grid grid-cols-7 gap-8">
        <p className="col-span-5 px-6 md:px-12 lg:px-18 justify-self-center max-w-[1000px] ">
          El tiro al pichón o tiro a la paloma, es una actividad perversa que
          consiste en practicar tiro o realizar competencias utilizando aves y
          en particular palomas como blanco. <br /> Consiste en liberar palomas
          en un poligono de tiro y gana el que más palomas derribe y que caigan
          dentro de un espacio determinado. <br /> Las competencias de Tiro al
          Pichón se encuentran prohibidas mediante la Ley Nacional N° 14.346 que
          sanciona los malos tratos contra los animales, no obstante lo cual,
          ciertas lagunas legales y el desinterés de funcionarios judiciales han
          permitido que esta prñactica de lleve a cabo en distintos lugares de
          la Argentina como la Provincia de Buenos Aires.Además, la Ley
          Provincial N° 11.406 prohíbe expresamente los torneos de tiro al
          pichón en territorio bonaerense. <br /> Dewbe señalarse que hacìa más
          de una decada que vecinos y proteccionistas de Escobar venían
          protestando contra la matanza de palomas en el Pigeon Club Argentino,
          sin ningun resultado. <br /> En el año 2014 la Asociación tomó
          conocimiento de las Competencias de Tiro organizadas por el Pigeon
          Club Argentino ubicado en la Localidad de Ingeniero Maschwitz, Partido
          de Escobar. Si bien se realizaron reiteradas denuncias para que se
          suspendieran los campeonatos, la Fiscalìa Penal de Escobar
          sospechosamente jamás intervino jamás in falta de r, desconociendo la
          Ley Provincial N ° 11.406 del año 2003 de la Provincia de Buenos Aires
          que prohibía expresamente el “Tiro al Pichón” o “Tiro a la Paloma,
          obstaculizaba la acción de la justicia. El 25 de octubre de 2014, la
          Asociación realizó una protesta frente a la entrada del Pigeon Club
          Argentino mientras se realizaba un torneo de tiro al pichón. Durante
          la misma se logró obtener imágenes y grabar videos que luego sirvieron
          como sustento de las acciones judiciales que se iniciaron
          posteriormente. <br /> En noviembre de 2014, se presentó una acción de
          amparo que tramitó por ante el Juzgado Civil y Comercian N° 2 del
          Departamento Judicial de Zarate-Campaña caratulado “Zevallos Víctor c/
          Pigeon Club Argentino s/ Amparo”, la que consiguió a través de una
          medida cautelar que los torneos de Tiro al Pichón del Pigeon Club
          estuvieran suspendidos entre noviembre de 2014 y octubre de 2015,
          fecha en la cual cesó la suspensiñon de las competencias. <br /> A
          mediados del año 2015, la Asociación de Ayuda a las Aves Pájaros
          Caídos” inició un petitorio por internet a través de la plataforma
          “Change.org” para que el entonces Gobernador de la Provincia de Buenos
          Aires reglamente la Ley Provincial N° 11.406. En poco tiempo se
          reunieron casi nueve mil firmas. <br />
          Con el fin de impulsar la reglamentación de la Ley Provincial N°
          11.406, se mantuvieron reuniones periódicas con la Dirección de Fauna
          Provincial a los efectos de que se reactive el expediente donde
          tramitaba el proyecto de reglamentación, lográndose que el mismo fuera
          enviado para su firma al Gobernador provincial. <br /> Todas esas
          gestiones, tuvieron como resultado directo que el 2 de diciembre de
          2015 el Gobierno de la Provincia de Buenos Aires dictó el Decreto N°
          2.169/2015 mediante el cual se reglamenta la Ley Provincial N°11.406 y
          el mismo fue publicado en el Boletín Oficial el martes 2 de febrero de
          2016. Se trata de un importantísimo logro que logró poner fin en el
          ámbito de la Provincia de Buenos Aires a las competencias aberrantes
          que utilizan palomas como blanco de entretenimiento y diversión.
        </p>
        <div className="flex flex-col  w-full gap-8 lg:col-span-2 justify-center items-center lg:justify-start   ">
          <Image
            src={Image1}
            alt="imagen1"
            className="w-[90%]  max-w-[350px] h-[300px]"
          />
          <Image
            src={Image2}
            alt="imagen2"
            className="w-[90%]  max-w-[350px] h-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-12 md:flex-wrap md:flex-row mt-1 my-12 ">
        <Image
          src={Image4}
          alt="imagen4"
          className=" w-[90%] max-w-[400px] h-[200px] object-cover"
        />
        <Image
          src={Image3}
          alt="imagen3"
          className=" w-[90%] max-w-[400px] h-[220px] "
        />
      </div>
    </section>
  );
}
