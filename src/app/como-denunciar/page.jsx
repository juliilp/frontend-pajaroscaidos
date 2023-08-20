import ComoDenunciarFirstSection from "@/components/ComoDenunciar/ComoDenunciarFirstSection";
import ComoDenunciarMainSection from "@/components/ComoDenunciar/ComoDenunciarMainSection";
import ComodenunciarSecondSection from "@/components/ComoDenunciar/ComoDenunciarSecondSection";
import ComoDenunciarThirdSection from "@/components/ComoDenunciar/ComoDenunciarThirdSection";
import Image from "next/image";
import bgimage1 from '../../../public/images/como-denunciar-image1.png'
import bgimage2 from '../../../public/images/como-denunciar-image2.png'
import image3 from '../../../public/images/como-denunciar-image3.png'
import image4 from '../../../public/images/como-denunciar-image4.png'
export default function page(){
    return(
        <div className="flex flex-col items-center gap-14 w-full pt-[70px] pb-[5rem] ">
            <section className="w-full relative h-[15rem] ">
               <Image src={bgimage1} alt="bg-image-1" fill/>
            </section>
            <main className="flex flex-col gap-8 w-11/12">
                <ComoDenunciarMainSection/>
            </main>
            <section className="flex justify-between w-11/12">
                <ComoDenunciarFirstSection/>
            </section>
            <section className="w-full relative h-[15rem]">
                <Image src={bgimage2} fill/>
            </section>
            <section className="w-11/12 flex justify-between ">
               <ComodenunciarSecondSection image1={image3} image2={image4} />
            </section>
            <section className="w-11/12 flex flex-col gap-8 ">
                 <ComoDenunciarThirdSection/>
            </section>
        </div>
    )
}