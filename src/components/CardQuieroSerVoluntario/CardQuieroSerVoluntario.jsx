import Image from "next/image";

export default function CardQuieroSerVoluntario({ titulo, imagen }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <Image src={imagen} alt="imagen" />
    </section>
  );
}
