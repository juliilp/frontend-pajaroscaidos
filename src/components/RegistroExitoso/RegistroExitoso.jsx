import Image from "next/image";
import { useState, useEffect } from "react";
import clapimage from "@/assets/clap_image.webp";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

export default function RegistroExitoso() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [loading]);
  const redirect = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push("/emailcode");
  };
  if (loading) return <Loading />;
  return (
    <div className="min-h-screen flex items-center justify-center  flex-col gap-4 md:flex-row w-full text-[#3D3D3D]">
      <section className="">
        <Image
          src={clapimage}
          className=" max-w-full w-[16rem] md:w-[20rem] h-auto"
          alt="claps"
        />
      </section>
      <section className="flex flex-col gap-8 items-center">
        <h1 className=" text-3xl md:text-5xl font-bold">Registro exitoso</h1>
        <p className="text-lg md:text-2xl">
          ya puedes publicar y ver contenido. Pero antes tienes que validar el
          email
        </p>
        <button
          onClick={(e) => redirect(e)}
          className=" text-white rounded-lg p-3 text-base md:text-xl bg-green hover:bg-[green]"
        >
          Ok! llevame a validar mi email
        </button>
      </section>
    </div>
  );
}
