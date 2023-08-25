import LeyesNacionales from "@/components/Legislacion/LeyesNacionales";
import LeyesProvinciales from "@/components/Legislacion/LeyesProvinciales";
import font from '../../styles/fonts.module.css'
import Image from "next/image";
import image1 from '../../../public/images/legislacion_1.png'
export default function page() {
    return (
        <div className={`${font.baloo} font-semibold flex flex-col items-center gap-12 pt-[69px] pb-[5rem]`}>
            <div className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
                <Image src={image1}
                    alt="background"
                    fill
                />
            </div>

            <main className="flex flex-col gap-12 items-center w-full">
                <h1 className="text-[#0C6410] 2xl:text-4xl xl:text-3xl lg:text-2xl text-base ">LEGISLACION</h1>
                

                <section className=" bg-lightgray px-4 sm:px-8  md:px-14 lg:px-20 pb-8 w-11/12 md:w-10/12">
                    <LeyesNacionales />
                </section>

                <section className=" bg-lightgray px-4 sm:px-8  md:px-14 lg:px-20 pb-8 w-11/12 md:w-10/12">
                    <LeyesProvinciales />
                </section>
            </main>
        </div>
    )
}