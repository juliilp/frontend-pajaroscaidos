"use client";
import Banners from "@/components/Dashboard/OpcionesInicio/Banners/Banners";
import Campañas from "@/components/Dashboard/OpcionesInicio/Campañas/Campañas";
import Advertising from "@/components/Dashboard/OpcionesInicio/Publicidad/Advertising";

export default function Dashboard() {
  return (
    <section className="flex justify-center h-[100%] pt-[70px]">
      <div className="flex flex-col justify-center items-center mt-[20px] h-[100%] w-[90%]">
        <Banners />
        <Campañas />
        <Advertising />
      </div>
    </section>
  );
}
