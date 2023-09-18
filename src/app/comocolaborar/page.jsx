import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";
import Construccion from "@/../public/images/colaborar-construccion.png";
import Donaciones from "@/../public/images/colaborar-donaciones.png";
import Voluntarios from "@/../public/images/colaborar-voluntarios.png";

export default function page() {
  return (
    <section className="mt-[70px]">
      <div className="hidden md:block w-full h-[200px] bg-slate-600" />
      <div className="hidden md:flex flex-col gap-8 my-8 ">
        <span className="text-center md:text-2xl">COMO COLABORAR</span>
        <p className="max-w-[800px] text-center w-full mx-auto md:text-lg">
          Existen diferentes maneras de colaborar con la Asociación Civil de
          Ayuda a las Aves Pájaros Caídos. Todas son imporantes para seguir
          trabajando por los derechos y el bienestar de las aves, construir
          nuevos refugios, dictar cursos de capacitación, realizar campañas de
          concientización, formular denuncias por actos de maltrato o crueldado,
          trabajar contra el tráfico ilegal de animales, entre otras tantas
          cosas.
        </p>
      </div>
      <div className="flex items-center justify-center w-full  px-[5%] gap-10 flex-wrap ">
        <CardComoColaborar
          titulo="Materiales de construcción"
          parrafo="Necesitamos materiales de construcción para ampliar y mejorar nuestros Refugios. Necesitamos chapas, tirantes, hierros, malla de alambre, pintura entre otras cosas."
          image={Construccion}
        />
        <CardComoColaborar
          titulo="Voluntarios"
          parrafo="Podes colaborar siendo voluntario de las multiples tareas que lleva adelante Pájaros Caídos. Tu com`promiso es esencial para seguir creciendo."
          nombreBoton="VOLUNTARIADOS"
          image={Voluntarios}
        />
        <CardComoColaborar
          titulo="Donaciones"
          parrafo="Para poder seguir trabajando por el bienestar de las aves y crecer, necesitamos de tu colaboracion. Desde acá podrás ayudarnos a construir nuevos refugios para aves, dictar cursos de capacitación, realizar campañas de concientización, formular denuncias por actos de maltrato o crueldad, trabajar contra el tráfico ilegal de animales, entre otras tantas cosas."
          nombreBoton="MERCADO PAGO"
          image={Donaciones}
        />
      </div>
    </section>
  );
}
