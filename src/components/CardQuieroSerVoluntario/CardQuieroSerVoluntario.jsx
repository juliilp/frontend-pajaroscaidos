import Image from "next/image";

export default function CardQuieroSerVoluntario({ titulo, imagen }) {
  return (
    <section className="w-full max-w-[320px] h-[200px] bg-[#c2c2c2] rounded-md p-6">
      <h2 className="text-[#0C6410] text-xl font-semibold text-center">
        {titulo}
      </h2>
      <Image src={imagen} alt="imagen" />
    </section>
  );
}
