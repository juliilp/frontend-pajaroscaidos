import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";
import Consultas from "@/../public/images/contactanos-consultas.png";
import Donaciones from "@/../public/images/contactanos-donaciones.png";
import Contacto from "@/../public/images/contactanos-contacto.png";
export default function page() {
  return (
    <section className="mt-[70px] flex flex-col gap-16">
      <div className="hidden md:block w-full h-[200px] bg-slate-600" />
      <div className="flex items-center justify-center w-full  px-[5%] gap-10 flex-wrap">
        <CardComoColaborar
          titulo="CONSULTAS SOBRE AVES"
          parrafo='MUY IMPORTANTE: Si queres realizar alguna consulta sobre aves, o recibir asistencia en casos de URGENCIA, accede al enlace que tenes a continuación y escribí tu consulta en la sección "Crear Publicación" de la Página de Facebook Refugio de Aves Pájaros Caídos, que te responderemos a la mayor brevedad posible.'
          image={Consultas}
          nombreBoton="CONTACTANOS"
        />
        <CardComoColaborar
          titulo="CONTACTO"
          parrafo="Para cualquier propuesta, inquetud, ofrecimiento, donación, denuncia, voluntariado, o lo que quieras comunicarnos, podes realizarlo a través de nuestro correo electronico. Te contestaremos a la mayor brevedad posible. pajaroscaidos@yahoo.com.ar"
          image={Contacto}
        />
        <CardComoColaborar
          titulo="DONACIONES"
          parrafo="Para poder seguir trabajando por el bienestar de las aves y crecer, necesitamos de tu colaboracion. Desde acá podrás ayudarnos a construir nuevos refugios para aves, dictar cursos de capacitación, realizar campañas de concientización, formular denuncias por actos de maltrato o crueldad, trabajar contra el tráfico ilegal de animales, entre otras tantas cosas."
          image={Donaciones}
        />
      </div>
    </section>
  );
}
