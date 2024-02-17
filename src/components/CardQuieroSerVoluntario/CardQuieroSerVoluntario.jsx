import Image from "next/image";
import ImagenDefault from "@/../public/images/QuieroSerVoluntario/1.png";
import { FaWpforms } from "react-icons/fa";
export default function CardQuieroSerVoluntario({ titulo, imagen, form }) {
  return (
    <section className="w-full max-w-[350px] h-[350px] bg-[#c2c2c2] rounded-md p-8 flex flex-col gap-4">
      <h2 className="text-[#0C6410] text-xl font-semibold text-center">
        {titulo}
      </h2>
      <Image
        src={imagen ? imagen : ImagenDefault}
        alt="imagen"
        width={300}
        height={150}
        className="h-[200px]"
      />

      <div className="w-full justify-center flex">
        <a
          href={form}
          target="_blank"
          className="transform transition-all hover:scale-105 duration-300 ease-in-out"
        >
          <span className="mx-auto rounded-xl py-[0.35rem] px-4 bg-[#979595]">
            Quiero inscribirme
          </span>
        </a>
      </div>
    </section>
  );
}
