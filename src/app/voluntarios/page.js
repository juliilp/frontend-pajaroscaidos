import React from "react";
import baner from "../../../public/images/voluntariado.svg";
import Image from "next/image";
import { Navbar } from "@/components/Voluntarios/Navbar";
import { VoluntariosSeccion } from "@/components/Voluntarios/VoluntariosSeccion";

export default function Voluntarios() {
  return (
    <div>
      <Navbar />
      <Image src={baner} alt="baner" />

      <VoluntariosSeccion />
    </div>
  );
}
