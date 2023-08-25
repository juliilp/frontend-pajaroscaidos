import MainSectionArticulo2 from "@/components/Acciones/Articulo2/MainSectionArticulo2";
import Section2Articulo2 from "@/components/Acciones/Articulo2/Section2Articulo2";
import Section3Articulo2 from "@/components/Acciones/Articulo2/Section3Articulo2";
import Section4Articulo2 from "@/components/Acciones/Articulo2/Section4Articulo2";
import Image from "next/image";
import bgimage from '../../../../public/images/villa-dominico-BG.png'
import image1 from '../../../../public/images/villa-dominico-1.png'
import image2 from '../../../../public/images/villa-dominico-2.png'
import image3 from '../../../../public/images/villa-dominico-3.png'
import image4 from '../../../../public/images/villa-dominico-4.png'
import image5 from '../../../../public/images/villa-dominico-5.png'
import font from '../../../styles/fonts.module.css'
export default function page() {
    return (
        <div className={`${font.baloo} font-semibold min-h-screen flex flex-col items-center pt-[70px] gap-12 pb-12`}>
             <section className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
                <Image src={bgimage} alt="bg-tucan" fill className=""/>
             </section>
            <main className="flex flex-col items-center w-11/12 gap-12">
                <MainSectionArticulo2 image1={image1} image2={image2} />
            </main>
            <section className="flex flex-col w-11/12 items-center gap-12">
                <Section2Articulo2 image={image3} />
            </section>
            <section className="flex flex-col w-11/12 items-center gap-12">
                <Section3Articulo2 image={image4}/>
            </section>
            <section className="flex flex-col w-11/12 items-center gap-12">
                <Section4Articulo2 image={image5} />
            </section>
        </div>
    )
}