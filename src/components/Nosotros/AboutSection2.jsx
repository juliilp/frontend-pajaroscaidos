import Image from 'next/image'
import image1 from '../../../public/images/about_us 2.png'
import image2 from '../../../public/images/about_us 3.png'
export default function AboutSection2() {
    return (
        <>
            <article className=" p-4 w-7/12 text-[#0C6410] font-semibold border-b-2 border-[#0C6410] text-center ">
                <h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg" >Como nacio pajaros caidos.</h2>
            </article>

            <article className="flex flex-col items-center justify-between gap-8
            md:flex-row md:gap-0
             ">
                <p className=" w-11/12 md:w-6/12 lg:w-6/12 2xl:w-6/12">
                    Clara Correa, fundadora y actual presidenta de "Pájaros Caídos", comenzó su camino de ayuda a las aves
                    a partir de la necesidad de resolver situaciones de asistencia a palomas y otras aves urbanas de la
                    ciudad de Buenos Aires. La incansable labor de rescate, orientada y acompañada por veterinarios
                    especialistas de reconocida trayectoria, le permitió adquirir una vasta experiencia en primeros
                    auxilios y alimentación de pichones y aves en situación de riesgo. En el año 2006, abrió el blogspot
                    "Pájaros caídos" para compartir su experiencia y su saber con personas que atravesaban una situación
                    semejante a la que ella experimentó cuando levantó de la calle su primer pichón de torcaza
                    .En 2011 creó la página de Facebook "Refugio de Aves Pajaros Caidos", con el fin de ayudar
                    a las aves heridas, enfermas o accidentadas a traves de consultas de todas aquellas personas
                    que las rescataban y no sabían como hacerlo. Dicha pagina tuvo una inmediata y masiva repercusión
                    alcanzando miles de seguidores en todo el mundo. De allì surgió el lema "ayudar a ayudar", que hoy motiva
                    la actividad de los voluntarios "on-line" que atienden gratuitamente las consultas, alentando y guiando
                    paso a paso al rescatista para salvar la vida de cada ave. Junto con un importante grupo de colaboradores,
                    vio plasmado el sueño de fundar el 9 de mayo de 2014 la Asociación Civil de Ayuda a las Aves Pájaros Caídos,
                    con Personería Jurídica otorgada por la Inspección General de Justicia de la Nación, Resolución N° 5449/2015
                    del 15 de abril de 2015.
                </p>
                <div className=" gap-12 md:gap-32  flex flex-col  justify-between ">
                     <Image src={image1} alt='picture1' className= ' w-full h-auto sm:w-auto  sm:h-[14rem] md:h-[10rem] lg:h-[14rem] xl:h-[16rem] 2xl:h-[17rem]'  />
                     <Image src={image2} alt='picture2' className= ' w-full h-auto sm:w-auto  sm:h-[14rem] md:h-[10rem] lg:h-[14rem] xl:h-[16rem] 2xl:h-[17rem]'  />
                </div>
            </article>

        </>
    )
}