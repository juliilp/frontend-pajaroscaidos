import React from "react";
import baner from "../../../public/images/voluntariado.svg";
import Image from "next/image";
import { Navbar } from "@/components/Voluntarios/Navbar";
import { VolunteerSection } from "@/components/Voluntarios/VolunteerSection";
import api from "@/api/api";

export default function Voluntarios() {
  return (
    <div>
      <Navbar />
      <Image src={baner} alt="baner" />

      <VolunteerSection />
    </div>
  );
}
