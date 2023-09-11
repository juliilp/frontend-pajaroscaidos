import Image from "next/image";
import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";

export default function page() {
  const Consultas =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694040088/contactanos-consultas_aud5gw.png";
  const Donaciones =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694040162/contactanos-donaciones_x9et7z.png";
  const Contacto =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694040144/contactanos-contacto_cgzhrj.png";
  const Banner =
    "https://res.cloudinary.com/di5mf85h3/image/upload/v1694040422/Banner-min_bif2sv.png";
  return (
    <section className="mt-[70px] flex flex-col gap-16 pb-16">
      <div className="relative w-screen">
        <Image
          src={Banner}
          alt="Banner"
          width={1392}
          height={522}
          priority={true}
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center w-full px-8 gap-10 flex-wrap ">
        <CardComoColaborar
          titulo="CONSULTAS SOBRE AVES"
          parrafo='MUY IMPORTANTE: Si queres realizar alguna consulta sobre aves, o recibir asistencia en casos de URGENCIA, accede al enlace que tenes a continuación y escribí tu consulta en la sección "Crear Publicación" de la Página de Facebook Refugio de Aves Pájaros Caídos, que te responderemos a la mayor brevedad posible.'
          image={Consultas}
          nombreEnlace="CONTACTANOS"
          enlace="https://www.facebook.com/refugio.de.aves.pajaros.caidos"
        />
        <CardComoColaborar
          titulo="CONTACTO"
          parrafo="Para cualquier propuesta, inquetud, ofrecimiento, donación, denuncia, voluntariado, o lo que quieras comunicarnos, podes realizarlo a través de nuestro correo electronico. Te contestaremos a la mayor brevedad posible. pajaroscaidos@yahoo.com.ar"
          image={Contacto}
          nombreEnlace="CORREO ELECTRONICO"
          enlace="mailto:pajaroscaidos@yahoo.com.ar"
        />
        <CardComoColaborar
          titulo="DONACIONES"
          parrafo="Para poder seguir trabajando por el bienestar de las aves y crecer, necesitamos de tu colaboracion. Desde acá podrás ayudarnos a construir nuevos refugios para aves, dictar cursos de capacitación, realizar campañas de concientización, formular denuncias por actos de maltrato o crueldad, trabajar contra el tráfico ilegal de animales, entre otras tantas cosas."
          image={Donaciones}
          nombreEnlace="DONAR"
          enlace="https://link.mercadopago.com.ar/pajaroscaidos"
        />
      </div>
    </section>
  );
}
