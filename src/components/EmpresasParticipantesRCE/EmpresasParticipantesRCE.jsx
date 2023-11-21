import Image from "next/image";

export default function EmpresasParticipantesRCE({ titulo, imagen, texto }) {
  return (
    <article className="w-full max-w-[400px] bg-[#C2C2C2]  h-full md:h-[600px] py-6 flex  items-center flex-col rounded-md gap-6 px-2 ">
      <h1 className="text-[#0C6410] text-xl md:text-2xl font-semibold ">
        {titulo}
      </h1>
      <Image
        src={imagen}
        alt="imagen"
        className=" w-full max-w-[350px] h-[200px] sm:h-[300px] rounded-md"
      />
      <p className="text-ellipsis max-w-lg text-center ">{texto}</p>
    </article>
  );
}
