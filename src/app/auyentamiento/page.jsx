import Image from "next/image";
import auyentamientoFoto from "@/../public/images/auyentamiento/auyentamientoFoto.jpg";
import bgimage from "@/../public/images/auyentamiento/auyentamiento.jpg";
export default function page() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 pb-16 ">
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[24rem]">
        <Image src={bgimage} alt="bg-tucan" fill className="w-full " />
      </section>
      <h2 className="text-[#0C6410] text-xl md:text-2xl text-center hidden md:block ">
        AUYENTAMIENTO
      </h2>
      <div className="flex flex-col justify-center items-center md:gap-16 md:grid md:grid-cols-2 ">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-[#0C6410] text-xl text-center md:hidden ">
            AUYENTAMIENTO
          </h2>
          <p className="px-10 max-w-[600px] ">
            Consiste en la acción de alejar a las aves de ciertos lugares como
            edificios, campos, o cualquier otro espacio donde habiten, basados
            en la posibilidad que produzcan daños a las personas y sus bienes.
            Aunque es discutible cual es el daño que las aves puedan causar por
            el solo hecho de vivir en un lugar determinado y más aún cuando el
            espacio de donde se las intenta desalojar es su hábitat natural, lo
            cierto es que se trata de una práctica frecuente.
            <br /> Para los aeropuertos, existen normas que regulan
            especialmente la actividad y están basadas en prevenir accidentes en
            las aeronaves.La Resolución N° 108/2006 de la Secretaria de Ambiente
            y Desarrollo Sustentable de la Nación crea el Registro Nacional de
            Criadores de Aves Rapaces para Control de Especies de la Fauna
            Silvestre Potencialmente Peligrosas a la Actividad Aeronáutica.{" "}
            <br /> Sin embargo, la acción de ahuyentar no habilita la
            exterminación de la colonia de aves que habitan el lugar, sino solo
            su inducción a que lo abandonen en forma temporal o permanente.{" "}
            <br /> En principio, ahuyentar a las aves de los lugares de su
            hábitat natural está vedado por las normas, y cuando así se lo
            permita, los mecanismos deben contemplar formas que impidan daños
            físicos, debiendo siempre utilizarse el método menos agresivo hacia
            la especie. Por ejemplo el uso de pinches de metal para impedir que
            las palomas habiten en edificios, en lugar de los plásticos
            flexibles, es un acto de crueldad. En los campos, quemar nidos o
            lugares de hábitat es otra forma de crueldad contra las aves que se
            encuentra tipificada como delito por el artículo 3 inciso 7 de la
            Ley N° 14.346 que prohíbe causarles torturas o sufrimientos
            innecesarios o matarlos por sólo espíritu de perversidad. <br /> A
            este delito, además de la sanción de carácter penal le puede
            corresponder otra de carácter contravencional y/o de faltas, de
            acuerdo a normas provinciales o municipales que vedan este tipo de
            conductas.
            <br /> La Ciudad de Buenos Aires, a través de su Código de Faltas
            (Ley Nº 451) tipifica como infracción el maltrato de aves señalando
            que: “El/la que fabrique, venda, o utilice cualquier sistema o
            mecanismo cruento, que tenga por objeto el ahuyentamiento o la
            exclusión de aves es sancionado/a con multa de cien (100) a
            setecientas cincuenta (750) unidades fijas”, en tanto que asimismo
            sanciona la destrucción de nidos. <br /> Asimismo establece como una
            falta la destrucción de nidos: El/la que destruya nidos, use
            tramperas u hondas tendientes a eliminar o restringir la libertad de
            las aves en lugares y paseos públicos es sancionado/a con multa de
            cien (100) a setecientas cincuenta (750) unidades fijas y decomiso
            de las cosas.
          </p>
          <Image
            src={auyentamientoFoto}
            alt="imagen"
            className="px-6 md:hidden"
          />
        </div>
        <Image
          src={auyentamientoFoto}
          alt="imagen"
          className="hidden md:block self-start"
        />
      </div>
    </section>
  );
}
