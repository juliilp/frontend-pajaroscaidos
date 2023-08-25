import EnvenenamientoFoto from "@/../public/images/envenenamiento-foto.png";
import Image from "next/image";
export default function page() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 pb-16 ">
      <div className="w-full bg-slate-500 h-[300px]" />
      {/* comentario de prueba */}
      <h2 className="text-[#0C6410] text-xl md:text-2xl text-center hidden md:block ">
        ENVENENAMIENTO
      </h2>
      <div className="flex flex-col justify-center items-center md:gap-16 md:grid md:grid-cols-2 ">
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-[#0C6410] text-xl text-center md:hidden ">
            ENVENENAMIENTO
          </h2>
          <p className="px-10 max-w-[600px] ">
            El envenemiento es una práctica cruel que frecuentemente sufren las
            aves silvestres y particularmente las palomas urbanas y rurales, con
            el fin de exterminarlas. Consiste en colocar cualquier sustancia
            química dañina, ya sea sólida, líquida o gaseosa, que puede producir
            una enfermedad, lesión, o alterar las funciones del sistema
            digestivo y reproductor cuando entra en contacto con el organismo de
            las aves, provocando incluso la muerte.
            <br /> El artículo 3 inciso 7 de la Ley N° 14.346 prohíbe esta
            actividad que implica “Lastimar…. animales intencionalmente,
            causarles torturas o sufrimientos innecesarios o matarlos por sólo
            espíritu de perversidad” estableciendo una pena de prisión de quince
            días a un año para quienes envenenen a las aves. <br /> Por otra
            parte, distintas jurisdicciones provinciales y/o municipales han
            vedado esta práctica a través de contravenciones y/o faltas, que
            imponen sanciones como multas, inhabilitaciones, etc. <br />
            El Código de Faltas de la Ciudad de Buenos Aires (Ley Nº 451 art.
            1.3.30) tipifica el envenenamiento de aves como una falta al
            establecer que: “El/la que fabrique, venda, o utilice cebos tóxicos
            que provoquen el envenenamiento de aves es sancionado/a con multa de
            cien (100) a setecientas cincuenta (750) unidades fijas”.
          </p>
          <Image
            src={EnvenenamientoFoto}
            alt="imagen"
            className="px-6 md:hidden"
          />
        </div>
        <Image
          src={EnvenenamientoFoto}
          alt="imagen"
          className="hidden md:block self-start"
        />
      </div>
    </section>
  );
}
