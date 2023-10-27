import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";
import Image from "next/image";
import Construccion from "@/../public/images/Como Colaborar/como colaborar2.webp";
import Donaciones from "@/../public/images/Como Colaborar/como colaborar.webp";
import Voluntarios from "@/../public/images/Como Colaborar/como colaborar3.webp";
import bgimage from "@/../public/images/Como Colaborar/ComoColaborar.webp";

export default function page() {
  return (
    <section className="mt-[70px] pb-48">
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[18rem]">
        <Image src={bgimage} alt="bg-tucan" fill className="w-full " />
      </section>
      <div className=" flex flex-col gap-8 my-8 ">
        <span className="text-[#0C6410] text-xl text-center ">
          COMO COLABORAR
        </span>
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
      <article className="flex items-center justify-center w-full  px-[5%] gap-10 flex-wrap py-2">
        <CardComoColaborar
          titulo="Voluntarios"
          parrafo="Podes colaborar siendo voluntario de las multiples tareas que lleva adelante Pájaros Caídos. Tu com`promiso es esencial para seguir creciendo."
          nombreBoton="VOLUNTARIADOS"
          image={Voluntarios}
          enlace="https://mail.google.com/mail/?view=cm&to=pajaroscaidos@yahoo.com.ar"
        />
        <CardComoColaborar
          titulo="Materiales de construcción"
          parrafo="Necesitamos materiales de construcción para ampliar y mejorar nuestros Refugios. Necesitamos chapas, tirantes, hierros, malla de alambre, pintura entre otras cosas."
          image={Construccion}
        />
        <CardComoColaborar
          titulo="Donaciones"
          parrafo="Para poder seguir trabajando por el bienestar de las aves y crecer, necesitamos de tu colaboracion. Desde acá podrás ayudarnos a construir nuevos refugios para aves, dictar cursos de capacitación, realizar campañas de concientización, formular denuncias por actos de maltrato o crueldad, trabajar contra el tráfico ilegal de animales, entre otras tantas cosas."
          nombreBoton="MERCADO PAGO"
          image={Donaciones}
          enlace="https://link.mercadopago.com.ar/pajaroscaidos"
        />
      </article>
    </section>
  );
}
