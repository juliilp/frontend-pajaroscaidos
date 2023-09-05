import React from "react";

export default function TextoMobile({ texto, longitud, className }) {
  const Textov2 = () => {
    if (texto && texto.length > longitud) {
      return texto.slice(0, longitud) + "...";
    }
    return texto;
  };
  const TextoEditado = Textov2(texto, longitud);
  return (
    <span
      className={`${className} md:text-lg font-medium justify-self-start text-[#575757]`}
    >
      {TextoEditado}
    </span>
  );
}
