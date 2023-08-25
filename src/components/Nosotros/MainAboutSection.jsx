import YouTube from "react-youtube";
import { Suspense } from "react";
export default function MainAboutSection() {
    const videoID = 'biNrwxvKgjM'
    return (
        <>

            <section className=" p-4 w-7/12 text-[#0C6410] font-semibold border-b-2 border-[#0C6410]">
                <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg">SOBRE NOSOTROS</h1>
            </section>

            <article className=" w-full p-3
             min-[450px]:p-2 min-[450px]:w-11/12
             md:w-8/12  md:p-4 xl:p-5 
             2xl:p-6 ">
                <p>Pájaros Caídos es una asociación civil sin fines de lucro con personería jurídica que tiene por objeto defender los derechos de las aves, protegiendo y ayudando a aquellas que se encontraren en situación de vulnerabilidad y promoviendo y acompañando su proceso de rescate, rehabilitación y reinserción. Asimismo, lleva a cabo acciones de educación en la comunidad, tendientes a lograr una toma de conciencia respecto del cuidado de las aves y la defensa y preservación de su hábitat y colabora con diversos organismos en la confección y dictado de normas y leyes adecuadas para tal fin</p>
            </article>

            <article className="w-10/12 md:w-9/12 bg-black md:h-[30rem] h-[22rem]">
                <Suspense fallback={<p>Cargando video...</p>}>

                    <YouTube

                        videoId={videoID}
                        opts={{
                            height: "100%",
                            width: "100%",
                            playerVars: {},

                        }}
                        className="w-full h-full "
                    />
                </Suspense>
            </article>
        </>
    )
}