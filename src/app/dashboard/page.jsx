import React from "react";
import Card1 from "@/../public/images/cursos/card1.jpg";
import Card2 from "@/../public/images/cursos/card2.jpg";
import Banners from "@/components/Dashboard/OpcionesInicio/Banners";
import Campañas from "@/components/Dashboard/OpcionesInicio/Campañas";

export default function Dashboard() {
  return (
    <div className="flex justify-center h-[100%] mt-[70px] w-[80%]">
      <div className="flex flex-col justify-center items-center mt-[40px] h-[100%] w-[90%]">
        <h1 className="font-bold text-xl">Banners</h1>
        <div className="flex flex-col items-center rounded-xl mt-[10px] mb-[50px] h-[300px] w-[90%] bg-[#444] ">
          <div className="flex justify-evenly items-center h-[80%] w-[100%]">
            <Banners imagen={Card1} titulo="Lorem ipsum." boton="Eliminar" />
            <Banners imagen={Card1} titulo="Lorem ipsum." boton="Eliminar" />
            <Banners imagen={Card1} titulo="Lorem ipsum." boton="Eliminar" />
          </div>
          <span>Paginado...</span>
          <div className="flex justify-end w-[80%] mb-5">
            <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
              <button>Añadir banner +</button>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-xl">Campañas</h1>
        <div className="flex flex-col items-center rounded-xl mt-[10px] h-[350px] w-[90%] bg-[#444] mb-10">
          <div className="flex justify-evenly items-center h-[80%] w-[100%]">
            <Campañas imagen={Card2} fecha="Julio 18, 2023" titulo="Campañas" />
            <Campañas imagen={Card2} fecha="Julio 18, 2023" titulo="Campañas" />
            <Campañas imagen={Card2} fecha="Julio 18, 2023" titulo="Campañas" />
          </div>
          <span>Paginado...</span>
          <div className="flex justify-end w-[80%] mb-5">
            <div className="flex justify-center items-center w-[18%] h-10 bg-[#60EA4A] font-bold rounded">
              <button>Añadir campaña +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
