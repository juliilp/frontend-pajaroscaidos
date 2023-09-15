import Image from "next/image";
import loadimage from "../../public/images/loading.gif";

export default function Loading() {
  return (
    <div className="font-semibold min-h-screen text-[#0C6410]  flex flex-col items-center justify-center">
      <main className="flex flex-col md:flex-row md:gap-0 justify-around items-center ">
        <article className="text-center text-4xl md:text-6xl ">
          <h1>Cargando....</h1>
        </article>
        <article>
          <Image src={loadimage} alt="loading.." />
        </article>
      </main>
    </div>
  );
}
