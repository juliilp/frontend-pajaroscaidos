import Link from "next/link";
import React from "react";
import Image from "next/image";
import Imagen from "@/../public/images/actosmaltratoycrueldad.png";
export default function page() {
  return (
    <section className="mt-[70px] py-8 font-baloo">
      <h2 className="text-[#0C6410] font-semibold md:text-2xl text-center ">
        ACTOS DE CRUELDAD Y MALTRATO
      </h2>
      <div className="px-6 md:px-12  ">
        <p className="font-semibold mt-4">
          Existen diversas formas de crueldad y maltrato que sería imposible
          identificarlas a todas, sin embargo, algunas de ellas pueden consistir
          en:
        </p>
        <div className="w-[60%] my-6 mx-auto h-[5px] bg-[#C2C2C2] shadow-cardForo" />
        <h2 className="text-[#C12E1A] underline font-semibold text-xl my-4 ">
          ACTOS DE CRUELDAD Y MALTRATO - LEY Nacional Nº 14.346
        </h2>
        <p>
          La Republica Argentina cuenta con una ley nacional, de aplicación en
          tdo su territorio, en el cual se describen los actos qe son
          considerado maltrato o crueldad hacia los animales.
        </p>
        <span className="mb-4">Son considerados actos de maltrato:</span>
        <ul className="flex flex-col gap-4">
          <li>
            1° No alimentar en cantidad y calidad suficiente a los animales
            domésticos o cautivos.
          </li>
          <li>
            2° Azuzarlos para el trabajo mediante instrumentos que, no siendo de
            simple estímulo, les provoquen innecesarios castigos o sensaciones
            dolorosas.
          </li>
          <li>
            3° Hacerlos trabajar en jornadas excesivas sin proporcionarles
            descanso adecuado, según las estaciones climáticas.
          </li>
          <li>
            4° Emplearlos en el trabajo cuando no se hallen en estado físico
            adecuado.
          </li>
          <li>5° Estimularlos con drogas sin perseguir fines terapéuticos.</li>
          <li>
            6° Emplear animales en el tiro de vehículos que excedan notoriamente
            sus fuerzas.
          </li>
        </ul>
        <span>Son considerados actos de crueldad:</span>
        <ul className="flex flex-col gap-4">
          <li>
            1° Practicar la vivisección con fines que no sean científicamente
            demostrables y en lugares o por personas que no estén debidamente
            autorizados para ello.
          </li>
          <li>
            2° Mutilar cualquier parte del cuerpo de un animal, salvo que el
            acto tenga fines de mejoramiento, marcación o higiene de la
            respectiva especie animal o se realice por motivos de piedad.
          </li>
          <li>
            3° Intervenir quirúrgicamente animales sin anestesia y sin poseer el
            título de médico o veterinario, con fines que no sean terapéuticos o
            de perfeccionamiento técnico operatorio, salvo el caso de urgencia
            debidamente comprobada.
          </li>
          <li>
            4° Experimentar con animales de grado superior en la escala
            zoológica al indispensable según la naturaleza de la experiencia.
          </li>
          <li>
            5° Abandonar a sus propios medios a los animales utilizados en
            experimentaciones.
          </li>
          <li>
            6° Causar la muerte de animales grávidos cuando tal estado es
            patente en el animal y salvo el caso de las industrias legalmente
            establecidas que se fundan sobre la explotación del nonato.
          </li>
          <li>
            7° Lastimar y arrollar animales intencionalmente, causarles torturas
            o sufrimientos innecesarios o matarlos por sólo espíritu de
            perversidad.
          </li>
          <li>
            8° Realizar actos públicos o privados de riñas de animales, corridas
            de toros, novilladas y parodias, en que se mate, hiera u hostilice a
            los animales.
          </li>
        </ul>
        <h2 className="text-[#C12E1A] underline font-semibold text-xl my-4 ">
          ENTRETENIMIENTO Y DIVERSION
        </h2>
        <p>
          La utilización de animales y por consiguiente de aves en espectáculos,
          ferias y cualquier otra actividad de entretenimiento puede constituir
          un acto de crueldad, incluso cuando las mismas estuvieran autorizadas
          por los organismos competentes. <br /> Su utilización en espectáculos
          teatrales, circenses, o en contenidos audiovisuales en donde se los
          haga participar en acciones inducidas por los seres humanos,
          representa un acto de crueldad. La Ley N° 14.346 en su artículo 3
          inciso 7) prohíbe causarles sufrimientos innecesarios en tanto el
          inciso 8) veda realizar actos públicos o privados en donde se los
          mate, hiera u hostilice. <br /> Dato curioso es la Ordenanza N° 545.21
          de la Ciudad de Buenos Aires dictada en el año 1910, en donde prohibía
          arrojar aves u otras clase de animales en teatros, cines y
          espectáculos públicos, que regulaba los espectáculos en cines y
          teatros. <br /> No existe necesidad ni razón que justifique exponer a
          los animales en espectáculos ya que no pueden comprender la finalidad
          y objetivo en el cual se los involucra. Este tipo de situaciones
          genera un estrés que la norma define como sufrimiento innecesario u
          hostilidad.La exhibición de animales para su venta, exposición,
          competencia, o cualquier otro fin en ferias puede ser una actividad
          autorizada por la legislación y contar con permisos otorgados por
          autoridades públicas. <br /> Sin embargo, resultan eventos
          innecesarios que causan sufrimiento a las especies involucradas y
          constituyen un acto de crueldad. Su traslado, encierro, su exhibición
          frente a un entorno desconocido, casi siempre en espacios reducidos,
          expuestos a cambios de temperatura, y mal alimentados resulta un acto
          de maltrato y crueldad sancionado por el artículo 2 inciso 1) “No
          alimentar en cantidad y calidad suficiente a los animales domésticos o
          cautivos” y artículo 3 inciso 7) y 8) de la Ley N° 14.346 “causarles …
          sufrimientos innecesarios” o “Realizar actos públicos o privados en
          que se mate, hiera u hostilice a los animales”. <br /> La exhibición
          de los animales en zoológicos se encuentra en pleno proceso de
          revisión en la Argentina, criterio que debe hacerse extensivo a las
          ferias por las mismas razones, ya que ello implica una nociva
          exposición al público, inadecuados espacios donde son colocados,
          estrés y sufrimiento entre otras causas.
        </p>
        <Image
          src={Imagen}
          alt="imagen"
          className="w-full mx-auto max-w-[450px] h-[250px] sm:h-[300px] my-6"
        />
        <h2 className="text-[#C12E1A] underline font-semibold text-xl my-4 ">
          Jaulas con espacio insuficiente
        </h2>
        <p>
          Jaulas con espacio insuficiente: En muchos casos donde la tenencia de
          aves como mascotas está autorizada, consiste un acto de crueldad su
          colocación en espacios reducidos donde no puedan extender sus alas
          como mínimo. Esto ocurre en jaulas pequeñas, en donde los animales
          apenas pueden realizar cualquier movimiento en su interior. Esta
          situación configura un sufrimiento innecesario penalizado por el
          artículo 3 inciso 7) de la Ley N° 14346.
        </p>
        <h2 className="text-[#C12E1A] underline font-semibold text-xl my-4 ">
          Palomas mensajeras
        </h2>
        <p>
          Si bien la Ley Nacional N° 27.171 declara a la Colombofilia como una
          actividad deportiva basada en competencias con palomas mensajeras de
          carrera y que va desde la cría, educación, entrenamiento y
          mejoramiento de la paloma mensajera, organizaciones defensoras de los
          derechos de los animales consideran a esta práctica como una suerte de
          maltrato animal.
          <br />
          La Ley Nacional N° 27.171 sancionada por el Congreso nacional en
          agosto de 2015 considera paloma mensajera de carrera, a la subespecie
          de la paloma bravía (Columba Livia), dotada de condiciones
          particulares en cuanto a su fenotipo y desarrollo de sus dotes
          naturales de orientación, que le permiten regresar a su palomar
          (hábitat natural) desde grandes distancias y volar en condiciones
          normales ininterrumpidamente para llegar a su destino. Debe citarse
          que para ciertas organizaciones defensoras de los derechos de los
          animales, las competencias de palomas mensajeras son un acto de
          crueldad ya que obligan a estas aves a realizar largos y complejos
          recorridos sin el descanso adecuado, contraviniendo de esta forma el
          artículo 2 inciso 2 de la Ley Nacional N° 14.346. También ha sido foco
          de controversia, la aparición de casos de palomas mensajeras
          estimuladas con drogas para mejorar su rendimiento, o su sacrificio
          por llegar a destiempo en competencias, situación que encuadraría en
          las prohibiciones 2 inciso 5) de la Ley N° 14.346.
        </p>
        <h2 className="text-[#C12E1A] underline font-semibold text-xl my-4 ">
          Tinturas / coloracion
        </h2>
        <p>
          Teñir o cambiar el color de las plumas, piel o pelaje de los animales
          es un acto de crueldad vedado por la Ley N° 14.346 en su artículo 3
          inciso 7) que prohíbe causarles torturas o sufrimientos innecesarios.{" "}
          <br /> La coloración de animales es un acto innecesario que afecta la
          salud de los animales, ya que las tinturas provocan intoxicación en su
          piel, ojos, sistema respiratorio y demás organos internos y posterior
          muerte. El algunos países es común vender pollitos de colores, los
          cuales mueren al poco tiempo por la toxicidad de las pinturas que
          usan. En Argentina, es muy frecuente que los traficantes traten con
          lavandina a ciertas aves como los pichones de loros o cotorras, con el
          fin de darles una tonalidad amarilla y venderlos como una especie
          exótica. Lamentablemente, la gran mayoría suele morir a los pocos días
          de ser tratados con cloro.
        </p>
        <div className="shadow-cardForo  p-4  mt-6 max-w-[85%] ">
          <h2 className="text-[#0D6210] underline font-semibold text-xl my-4 ">
            Legislacion
          </h2>
          <p>
            <a
              className="underline mr-2"
              href="https://www.pajaroscaidos.org.ar/Ley-14346/"
            >
              Ley Nº 14.346
            </a>
            Se establecen penas para las personas que maltraten o hagan victimas
            de actos de crueldad a los animales. Ley Nº 27.711 Actividad
            deportiva. Colombofilia
          </p>
          <p>
            <a
              className="underline mr-2"
              href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/250000-254999/252228/norma.htm"
            >
              Ley Nº 27.711
            </a>
            Actividad deportiva. Colombofilia
          </p>
        </div>
      </div>
    </section>
  );
}
