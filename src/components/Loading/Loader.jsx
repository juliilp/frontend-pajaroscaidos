import Image from "next/image";
import loadingImage from "@/../public/images/loading.gif";

export default function Loader() {
  return (
    <section className="font-semibold min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center">
        <h1 className="text-center text-4xl text-[#0C6410] md:text-6xl">
          Cargando....
        </h1>
        <Image
          src={loadingImage}
          alt="Loading Image"
          width={500}
          height={500}
          priority
          className="w-auto h-64 md:h-80"
        />
      </div>
    </section>
  );
}
