import CardTiroAlPichon from "@/components/CardTiroAlPichon/CardTiroAlPichon";
import Image from "next/image";
import Imagen1 from "@/../public/images/tiroalpichon/Imagen1.png";
import Imagen2 from "@/../public/images/tiroalpichon/Imagen2.png";
import Imagen3 from "@/../public/images/tiroalpichon/Imagen3.png";
import bgimage from "@/../public/images/tiroalpichon/TiroAlPichon.png";

function Tiroalpichon() {
  return (
    <section className=" mt-[70px] flex justify-center items-center w-full flex-col gap-8  md:px-0 ">
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[24rem]">
        <Image src={bgimage} alt="bg-tucan" fill className="w-full " />
      </section>
      <h1 className="text-center font-semibold  text-2xl text-[#0C6410] my-8 ">
        CAZA DEPORTIVA TIRO AL PICHON
      </h1>
      <p className="max-w-[1150px] md:px-12 font-semibold px-2">
        El “tiro al pichón” es una actividad perversa que se realiza en el marco
        de torneos donde el ganador es aquel que más palomas mata. Consiste en
        soltar este tipo de aves dentro de un espacio en forma de abanico que se
        llama pedana, donde un tirador debe derribarlas utilizando un arma de
        fuego, generalmente una escopeta. La paloma muerta que cae dentro de la
        pedana es la única que suma puntos; por lo tanto, el ganador es el
        participante que más palomas extermine, y que logre ubicar los cuerpos
        de las aves en la zona perimetrada. <br /> En este tipo de torneos, las
        palomas se trasladan en pequeñas jaulas y luego de casi un día sin
        alimento y desorientadas -maltrato intencional que hace que vuelen más
        rápido-, se las libera para ser derribadas a los pocos centímetros, y ya
        caídas sobre el suelo, heridas y desangrándose en muchos casos, pero aún
        vivas, son arrojadas a tachos donde terminan muriendo por asfixia al ser
        apiladas unas sobre otras. Debe destacarse que las palomas que se
        utilizan en este tipo de torneos son capturadas ilegalmente de su
        hábitat.
      </p>
      <div className="flex  flex-wrap w-full justify-center items-center gap-6 lg:gap-12 my-6">
        <Image
          src={Imagen1}
          alt="imagen1"
          className="w-full max-w-[300px] h-[250px]"
        />
        <Image
          src={Imagen2}
          alt="imagen2"
          className="w-full max-w-[300px] h-[250px]"
        />
        <Image
          src={Imagen3}
          alt="imagen3"
          className="w-full max-w-[300px] h-[250px]"
        />
      </div>
      <p className="max-w-[1150px] md:px-12 font-semibold px-2">
        Esta práctica cruel, mal llamada &ldquo;deporte&rdquo;, está prohibida
        en la República Argentina, por diversas normas de protección de los
        animales. Los torneos o competencias de Tiro al Pichón o a la Paloma
        tienen su origen a principios del siglo XIX en Londres. Se trataba de
        una competencia donde la puntería era la destreza que se intentaba
        demostrar y ganaba el que más aves matara. <br /> La mecánica originaria
        de esta práctica cruel consistía en colocar palomas en hoyos que se
        hacían en el suelo y se tapaban con sombreros, los que eran movidos para
        que el ave se eleve en vuelo y un tirador apostado a determinada
        distancia realice varios disparos con el fin de que impacten en el
        animal. Esta competencia tuvo distintos cambios, desde personas que
        arrojaban a las palomas de sus manos hasta jaulas que se abrían a
        distancia. La actividad se extendió principalmente por el Reino Unido,
        Francia, España y llegó a la Argentina a fines del Siglo XIX. En 1870 se
        prohibió el Tiro al Pichón en el Reino Unido. <br /> Fue Deporte
        Olímpico en las Olimpiadas de París de 1900. Fue su debut y despedida
        por las críticas de las sociedades protectoras de animales del mundo. A
        su vez, el primer Club de Tiro a las Palomas de Argentina fue fundado en
        Mar del Plata en 1890 con el nombre de Pigeon Club Argentino y Pedro
        Luro fue su presidente. Fue la Sociedad Protectora de Animales creada en
        1869 por Ignacio Lucas Albarracín, sobrino de Domingo F. Sarmiento,
        quien emprende la primera gran lucha contra los torneos de tiro al
        pichón en Argentina. <br /> El 25 de julio de 1891, el Congreso Nacional
        sanciona la Ley N° 2786 también conocida como &ldquo;Ley
        Sarmiento&rdquo; que declaraba &ldquo;…actos punibles los malos
        tratamientos ejercitados con los animales, y las personas que los
        ejerciten sufrirán una multa de dos a cinco pesos, o en su defecto
        arresto, computándose dos pesos por cada día&rdquo;. <br /> Con esta
        normativa, quedaba prohibida la práctica y competencias de tiro al
        pichón / paloma, ya que se trataba indudablemente de una actividad que
        implicaba &ldquo;malos tratamientos ejercitados con animales&rdquo;.{" "}
        <br /> En 1947 el entonces Presidente Juan Domingo Perón dicta el
        Decreto N° 39914 por el cual se permite la práctica del tiro a la paloma
        en polígonos fiscalizados por el Ministerio de Guerra, norma que por su
        rango inferior a la Ley N° 2786 resultaba abiertamente inconstitucional.
        En el citado Decreto, el entonces Presidente de la República señala en
        los considerandos que &ldquo;Que existe la conveniencia en el fomento
        del tiro sobre blancos vivos por su aplicación a los fines de la defensa
        nacional&rdquo;, en tanto que en su artículo segundo se disponía en un
        acto de misericordia la donación a hospitales o asilos &ldquo;para
        alimentación de enfermos, las aves abatidas en tal concepto&rdquo;.{" "}
        <br /> En 1954 se sanciona la Ley Nº 14346 en donde se describen
        expresamente cuáles son los malos tratos o actos de crueldad contra los
        animales, enunciando en su artículo 3 que &ldquo;Serán considerados
        actos de crueldad&rdquo; (…) Lastimar y arrollar animales
        intencionalmente, causarles torturas o sufrimientos innecesarios,
        matarlos por el solo espíritu de perversidad&rdquo; (inciso 7) y
        &ldquo;Realizar actos públicos o privados de riñas de animales, corridas
        de toros, novilladas y parodias, en que se mate, hiera u hostilice a los
        animales&rdquo; (inciso 8).
      </p>

      <div className="flex gap-6 justify-center items-center w-full flex-col lg:flex-row   lg:gap-24 mt-12 py-2 px-2">
        <CardTiroAlPichon
          titulo="PROHIBICION DEL TIRO AL PICHON"
          parrafo="El Tiro al Pichón o la Paloma se encuentra expresamente prohibido por la Ley Nacional Nº 14.346. Ademas, diversas provincias avanzaron en una prohibicion local, cuyas leyes son las siguientes:"
          visibleBoton={false}
          listaVisible={true}
        />
        <CardTiroAlPichon
          titulo="PIGEON CLUB"
          parrafo="A pesar de su prohibición por la Ley Nacional Nº 14.346 y la Ley Nº 11.406 de la Provincia de Buenos Aires, los torneos de tiro al pichón continuaban en Ingeniero Maschwitz, Escobar. Estos eventos eran organizados por el Pigeon Club Argentino, con respaldo de autoridades. Sin embargo, en 2014, Pajaros Caídos intervino. Tras denuncias desestimadas, se usó una acción de amparo que detuvo los torneos por más de un año. A partir de diciembre de 2015, quedaron definitivamente prohibidos en la Provincia de Buenos Aires."
          visibleBoton={true}
          listaVisible={false}
        />
      </div>
    </section>
  );
}

export default Tiroalpichon;
