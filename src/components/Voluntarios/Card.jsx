import Image from "next/image";
import React from "react";
import photo from "../../../public/images/fotos.svg";
import s from "./styles/Card.module.css";

export const Card = ({ name }) => {
  return (
    <div className={s.flip_card}>
      <div className={s.flip_card_inner}>
        <div className={s.flip_card_front}>
          <Image src={photo} alt="avatar" />
        </div>
        <div className={s.flip_card_back}>
          <p className={s.name}>{name}</p>
          <p className={s.description}>
            Soy una persona apasionada y deversa en mis intereses. Me encanta
            dedicar mi tiempo libre a salvar aves heridas, brindándoles cuidado
            y protección. También soy programador, y la creatividad que me
            brinda la programación complementa mi amor por la naturaleza y me
            ayuda a encontrar soluciones innovadoras en ambos ámbitos.
          </p>
        </div>
      </div>
    </div>
  );
};
