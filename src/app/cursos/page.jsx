import Image from "next/image";
import Banner from "@/../public/images/cursos/banner.jpg";
import Card1 from "@/../public/images/cursos/card1.jpg";
import Card2 from "@/../public/images/cursos/card2.jpg";
import Card3 from "@/../public/images/cursos/card3.jpg";
import CardCursos from "@/components/cursos/CardCursos";

export default function page() {
  return (
    <section className="mt-[70px] flex flex-col gap-16 pb-16">
      <div className="w-full h-[134px] sm:h-[260px] lg:h-80 2xl:h-[40rem] relative">
        <Image src={Banner} alt="Banner" fill priority={true} />
      </div>
      <h1 className="text-2xl text-center font-bold text-[#0C6410]">
        NUESTROS CURSOS
      </h1>
      <div className="flex items-center justify-center w-full px-8 gap-10 flex-wrap">
        <CardCursos
          titulo="CURSO DE MANEJO  DE AVES"
          image={Card1}
          descripcion="La finalidad de este curso es poder aprender lo elemental del rescate de aves. Desde cómo y dónde resguardarlas, cómo y con qué alimentarlas, cómo mantenerlas estables, la importancia de la visita a un veterinario especialista en aves y realizar un plan sanitario."
        />
        <CardCursos
          titulo="CURSO PARA SER VOLUNTARIO"
          image={Card2}
          descripcion="Para atender las consultas que deja la gente en nuestra pagina de consultas sobre aves.
          Consiste en un curso gratuito y online donde se capacita a los futuros voluntarios con información previamente chequeada por veterinarios especialistas en aves, sobre dietas y cuidados de las diferentes especies por las que nos consultan, aprendiendo a identificar las especies y la dieta acorde a cada especie.
          También se enseña cómo abordar de la mejor manera las consultas, con el fin de ser precisos a la hora de brindar información, con empatía y solidaridad hacia el consultante."
        />
        <CardCursos
          titulo="CURSO BÁSICO DE RECONOCIMIENTO DE ESPECIES"
          image={Card3}
          descripcion="A través de este curso se pretende mostrar las especies más comunes que llegan a nuestro grupo de Consultas sobre Aves y cómo identificarlas a través de características físicas en tres etapas de sus vidas: pichones, juveniles y adultos. 
          "
        />
        <CardCursos
          titulo="CURSO DE PRIMEROS AUXILIOS"
          image={Card1}
          descripcion="En este curso se ve fundamentalmente el manejo de un ave en situación de vulnerabilidad, tanto heridas, pichones desequilibrados o hipotermicos, y otras aves en situación de riesgo.
          Cómo manejar cada situación de emergencia, tanto las lesiones hasta poder asistir a un veterinario especialista en aves, cómo manipularla, dónde colocarla, qué síntomas tener en cuenta a la hora de hacer una observación del ave rescatada y cómo estabilizarla."
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center">
          Si estas interasado en participar puedes comunicarte mediante el
          siguiente boton.
        </h1>
        <a
          target="_blank"
          href={"mailto:pajaroscaidos@yahoo.com.ar"}
          className=" text-center text-white bg-[#128117] py-2 px-4 w-[40%] md:w-[25%] lg:w-[15%] rounded hover:bg-[#00812b] duration-200"
        >
          Correo electronico
        </a>
      </div>
    </section>
  );
}
