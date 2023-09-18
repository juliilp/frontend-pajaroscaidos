import Image from "next/image";
import loadingImage from "@/../public/images/loading.gif";

export default function Loader() {
  return (
    <div className="font-semibold min-h-screen flex flex-col items-center justify-center">
      <main className="flex flex-col md:flex-row md:gap-0 justify-around items-center ">
        <h1 className="text-center text-4xl text-[#0C6410] md:text-6xl">
          Cargando....
        </h1>
        <Image src={loadingImage} alt="Loading Image" />
      </main>
    </div>
  );
}
