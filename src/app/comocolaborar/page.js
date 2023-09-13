import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";
import Image from "next/image";
export default function page() {
  const Construccion =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694645383/colaborar-construccion_tx5v4v.png";
  const Donaciones =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694645383/colaborar-donaciones_f4krh3.png";
  const Voluntarios =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694645383/colaborar-voluntarios_e1hfxi.png";
  return (
    <section className="mt-[70px]">
      <section className="relative w-screen">
        <Image
          src="https://res.cloudinary.com/di5mf85h3/image/upload/v1694645116/image_13_w0lvlt.png"
          alt="bg-image-1"
          width={1822}
          height={460}
          className="w-full h-full"
          property={true}
        />
      </section>
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
