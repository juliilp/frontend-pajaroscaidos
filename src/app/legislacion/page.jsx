import LeyesNacionales from "@/components/Legislacion/LeyesNacionales";
import LeyesProvinciales from "@/components/Legislacion/LeyesProvinciales";
import Image from "next/image";
import image1 from "@/../public/images/Legislacion/legislacion_1.webp";
import Link from "next/link";

export default function page() {
  return (
    <div className="font-semibold flex flex-col items-center gap-12 pt-[69px] pb-[5rem]">
      <div className="w-full relative h-[8rem] min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem] md:h-[14rem] lg:h-[15rem] 2xl:h-[17rem]">
        <Image src={image1} alt="background" fill priority={true} />
      </div>

      <main className="flex flex-col gap-12 items-center w-full">
        <h1 className="text-[#0C6410] 2xl:text-4xl xl:text-3xl lg:text-2xl text-base ">
          LEGISLACION
        </h1>

        <section className="relative bg-lightgray px-4 sm:px-8  md:px-14 lg:px-20 pb-8 w-11/12 md:w-10/12">
          <Link
            href="/como-denunciar"
            className=" absolute right-0 -top-9 md:-top-12 lg:-top-14 text-sm min-[350px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white bg-green p-2 md:p-3 hover:text-gray-100 hover:bg-[#13b113] duration-200"
          >
            Como denunciar
          </Link>
          <LeyesNacionales />
        </section>

        <section className=" bg-lightgray px-4 sm:px-8  md:px-14 lg:px-20 pb-8 w-11/12 md:w-10/12">
          <LeyesProvinciales />
        </section>
      </main>
    </div>
  );
}
