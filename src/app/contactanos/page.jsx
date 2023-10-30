import Image from "next/image";
import CardComoColaborar from "@/components/ComoColaborar/CardComoColaborar";
import Consultas from "@/../public/images/contactanos/contactanos-consultas.webp";
import Donaciones from "@/../public/images/contactanos/contactanos-donaciones.webp";
import Contacto from "@/../public/images/contactanos/contactanos-contacto.webp";
import Banner from "@/../public/images/contactanos/Banner-min.webp";
import Adoptar from "@/../public/images/contactanos/adoptar.webp";

export default function page() {
  return (
    <section className="mt-[70px] flex flex-col gap-16 pb-16 font-baloo">
      <div className="w-full h-[134px] sm:h-[260px] lg:h-80 2xl:h-[40rem] relative">
        <Image src={Banner} alt="Banner" fill priority />
      </div>
      <div className="flex items-center justify-center w-full px-8 gap-10 flex-wrap ">
        <CardComoColaborar
          titulo="CONSULTAS SOBRE AVES"
          parrafo={
            <p>
              MUY IMPORTANTE: Si queres realizar alguna consulta sobre aves, o
              recibir asistencia en casos de URGENCIA, accede al enlace que
              tenes a continuación y escribí tu consulta en la sección
              &quot;Crear Publicación&quot; de la Página de Facebook Refugio de
              Aves Pájaros Caídos, que te responderemos a la mayor brevedad
              posible.
            </p>
          }
          image={Consultas}
          nombreBoton="CONTACTANOS"
          enlace="https://www.facebook.com/groups/787284759474301"
        />
        <CardComoColaborar
          titulo="CONTACTO"
          parrafo={
            <p>
              Para cualquier propuesta, inquetud, ofrecimiento, donación,
              denuncia, voluntariado, o lo que quieras comunicarnos, podes
              realizarlo a través de nuestro correo electronico. Te
              contestaremos a la mayor brevedad posible.
              pajaroscaidos@yahoo.com.ar
            </p>
          }
          image={Contacto}
          nombreBoton="CORREO ELECTRONICO"
          enlace="mailto:pajaroscaidos@yahoo.com.ar"
        />
        <CardComoColaborar
          titulo="DONACIONES"
          parrafo={
            <p>
              Para poder seguir trabajando por el bienestar de las aves y
              crecer, necesitamos de tu colaboracion. Desde acá podrás ayudarnos
              a construir nuevos refugios para aves, dictar cursos de
              capacitación, realizar campañas de concientización, formular
              denuncias por actos de maltrato o crueldad, trabajar contra el
              tráfico ilegal de animales, entre otras tantas cosas.
            </p>
          }
          image={Donaciones}
          nombreBoton="DONAR"
          enlace="https://linktr.ee/donacionpajaroscaidos"
        />
        <CardComoColaborar
          titulo="QUIERO ADOPTAR"
          parrafo={
            <p>
              En nuestro esfuerzo por fomentar el cuidado y la protección de las
              aves, te brindamos la oportunidad de darle un hogar amoroso a una
              de nuestras hermosas aves. Cada ser alado tiene una historia única
              y está en busca de un compañero humano.
            </p>
          }
          image={Adoptar}
          nombreBoton="ADOPTAR"
          enlace="https://forms.gle/7PgvVJotmGrYJHwz7"
        />
      </div>
    </section>
  );
}
