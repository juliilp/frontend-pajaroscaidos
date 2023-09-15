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
        <CardCursos titulo="CURSO DE MANEJO  DE AVES" image={Card1} />
        <CardCursos titulo="CURSO DE PRIMEROS AUXILIOS" image={Card2} />
        <CardCursos
          titulo="CURSO BÁSICO DE RECONOCIMIENTO DE ESPECIES"
          image={Card3}
        />
        <CardCursos titulo="CONSULTAS SOBRE AVES" image={Card1} />
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
