import Image from "next/image";
import image1 from "../../../public/images/about_us 2.png";
import image2 from "../../../public/images/about_us 3.png";
export default function AboutSection2() {
  return (
    <>
      <article className=" flex justify-center p-4 w-full md:max-w-[600px] text-[#0C6410] border-b-2 border-[#0C6410] ">
        <h2 className="xl:text-2xl md:text-xl text-lg">
          Como nacio pajaros caidos.
        </h2>
      </article>

      <article
        className="flex flex-col items-center justify-center gap-8
            md:flex-row md:items-start
             "
      >
        <p className=" w-6/12 md:max-w-[575px] text-base">
          Clara Correa, fundadora y actual presidenta de &quot;Pájaros
          Caídos&quot;, comenzó su camino de ayuda a las aves a partir de la
          necesidad de resolver situaciones de asistencia a palomas y otras aves
          urbanas de la ciudad de Buenos Aires. La incansable labor de rescate,
          orientada y acompañada por veterinarios especialistas de reconocida
          trayectoria, le permitió adquirir una vasta experiencia en primeros
          auxilios y alimentación de pichones y aves en situación de riesgo. En
          el año 2006, abrió el blogspot &quot;Pájaros caídos&quot; para
          compartir su experiencia y su saber con personas que atravesaban una
          situación semejante a la que ella experimentó cuando levantó de la
          calle su primer pichón de torcaza .En 2011 creó la página de Facebook
          &quot;Refugio de Aves Pajaros Caidos&quot;, con el fin de ayudar a las
          aves heridas, enfermas o accidentadas a traves de consultas de todas
          aquellas personas que las rescataban y no sabían como hacerlo. Dicha
          pagina tuvo una inmediata y masiva repercusión alcanzando miles de
          seguidores en todo el mundo. De allì surgió el lema &quot;ayudar a
          ayudar&quot;, que hoy motiva la actividad de los voluntarios
          &quot;on-line&quot; que atienden gratuitamente las consultas,
          alentando y guiando paso a paso al rescatista para salvar la vida de
          cada ave. Junto con un importante grupo de colaboradores, vio plasmado
          el sueño de fundar el 9 de mayo de 2014 la Asociación Civil de Ayuda a
          las Aves Pájaros Caídos, con Personería Jurídica otorgada por la
          Inspección General de Justicia de la Nación, Resolución N° 5449/2015
          del 15 de abril de 2015.
        </p>
        <div className=" gap-12 flex flex-col  justify-between ">
          <Image
            src={image1}
            alt="picture1"
            className=" w-full h-auto sm:w-auto  sm:h-[14rem] md:h-[7rem] lg:h-[12rem] "
          />
          <Image
            src={image2}
            alt="picture2"
            className=" w-full h-auto sm:w-auto  sm:h-[14rem] md:h-[10rem] lg:h-[14rem] "
          />
        </div>
      </article>
    </>
  );
}
