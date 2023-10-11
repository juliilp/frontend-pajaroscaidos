import YouTube from "react-youtube";
import { Suspense } from "react";
export default function MainAboutSection() {
  const videoID = "biNrwxvKgjM";
  return (
    <>
      <section className="p-4 w-full md:max-w-[600px] text-[#0C6410] border-b-2 border-[#0C6410]">
        <h1 className=" xl:text-2xl md:text-xl text-lg">SOBRE NOSOTROS</h1>
      </section>

      <article
        className=" w-full p-3
             min-[450px]:p-2 min-[450px]:w-11/12
             md:w-8/12  md:p-4 xl:p-5 
             2xl:p-6 text-base "
      >
        <p>
          Pájaros Caídos es una asociación civil sin fines de lucro con
          personería jurídica que tiene por objeto defender los derechos de las
          aves, protegiendo y ayudando a aquellas que se encontraren en
          situación de vulnerabilidad y promoviendo y acompañando su proceso de
          rescate, rehabilitación y reinserción. Asimismo, lleva a cabo acciones
          de educación en la comunidad, tendientes a lograr una toma de
          conciencia respecto del cuidado de las aves y la defensa y
          preservación de su hábitat y colabora con diversos organismos en la
          confección y dictado de normas y leyes adecuadas para tal fin
        </p>
      </article>

      <article className="w-10/12 md:w-9/12 max-w-[650px] bg-black h-[20rem]">
        <Suspense fallback={<p>Cargando video...</p>}>
          <YouTube
            videoId={videoID}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {},
            }}
            className="w-full h-full"
          />
        </Suspense>
      </article>
    </>
  );
}
