"use client";
import Image from "next/image";
import pichon from "../../../public/images/alimentacion/pichon.jpg";
import torcaza from "../../../public/images/alimentacion/torcaza.jpg";
import pichonPaloma from "../../../public/images/alimentacion/pichonPaloma.jpg";
import benteveo from "../../../public/images/alimentacion/benteveo.jpg";
import zorzal from "../../../public/images/alimentacion/zorzal.jpg";
import calandria from "../../../public/images/alimentacion/calandria.jpg";
import gorrion from "../../../public/images/alimentacion/gorrion.jpg";
import colibri from "../../../public/images/alimentacion/colibri.jpg";
import cotorra from "../../../public/images/alimentacion/cotorra.jpg";
import atajacamino from "../../../public/images/alimentacion/atajacamino.jpg";
import listaCompleta from "../../../public/images/alimentacion/listaCompleta.jpg";
const data = [
  {
    imageUrl: pichon,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/pichones-recien-nacidos.html",
    titulo: "Alimentación del pichón recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre los cuidados y alimentación de un pichón recién nacido",
  },
  {
    imageUrl: torcaza,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/alimentacion-de-un-pichon-de-paloma.html",
    linkUrlCuidado:
      "http://pajaros-caidos.blogspot.com/2016/04/pichon-de-paloma-torcaza-zenaida.html",
    titulo: "Alimentación del pichón de Torcaza recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Torcaza recién nacido",
    descripcionCuidado:
      "Haz clic aquí para aprender sobre los cuidados de un pichón de Torcaza recién nacido",
  },
  {
    imageUrl: pichonPaloma,
    linkUrlAlimentacion:
      "https://pajaros-caidos.blogspot.com/2016/03/dieta-pichon-de-paloma.html?showComment=1486257013559",
    linkUrlCuidado:
      "https://www.youtube.com/watch?v=TfILXa1FD20&embeds_referring_euri=https%3A%2F%2Fpajaros-caidos.blogspot.com%2F&source_ve_path=MjM4NTE&feature=emb_title",
    titulo: "Alimentación del pichón de Paloma recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Paloma recién nacido",
    descripcionCuidado:
      "Haz clic aquí para aprender sobre los cuidados de un pichón de Paloma recién nacido",
  },
  {
    imageUrl: benteveo,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/benteveo-picabuey-martin-pescador.html",
    titulo: "Alimentación del pichón de Benteveo recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Benteveo recién nacido",
  },
  {
    imageUrl: zorzal,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/benteveo-picabuey-martin-pescador.html",
    titulo: "Alimentación del pichón de Zorzal recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Zorzal recién nacido",
  },
  {
    imageUrl: calandria,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/benteveo-picabuey-martin-pescador.html",
    titulo: "Alimentación del pichón de Calandria recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Calandria recién nacido",
  },
  {
    imageUrl: gorrion,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/01/dieta-de-gorriones.html",
    titulo: "Alimentación del pichón de Gorrión recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Gorrión recién nacido",
  },
  {
    imageUrl: colibri,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2013/01/colibri.html",
    titulo: "Alimentación del pichón de Colibrí recién nacido ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de un pichón de Colibrí recién nacido",
  },
  {
    imageUrl: cotorra,
    linkUrlAlimentacion:
      "http://pajaros-caidos.blogspot.com/2010/11/cotorras-y-loros.html",
    titulo: "Alimentación de una Cotorra recién nacida ",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre la alimentación de una Cotorra recién nacida",
  },
  {
    imageUrl: atajacamino,
    linkUrlAlimentacion:
      "https://1.bp.blogspot.com/-Lk6V2HmBiQU/VkP-cV7n1gI/AAAAAAAAA7I/W7IrVhVbbFc/s640/atajacaminos.jpg",
    titulo: "¿Encontraste un Atajacaminos?",
    descripcionAlimentacion:
      "Haz clic aquí para aprender sobre los cuidados de un Atajacamino",
  },
  {
    imageUrl: listaCompleta,
    linkUrlAlimentacion:
      "https://pajaros-caidos.blogspot.com/2018/08/te-encontraste-un-pichon-y-no-sabes-que.html?m=1",
    titulo: "Encuentra aquí la lista completa",
  },
];

function Alimentacion() {
  return (
    <section>
      <section className="w-full relative min-[320px]:h-[9rem] min-[400px]:h-[10rem] min-[500px]:h-[12rem] sm:h-[13rem]  md:h-[14rem] lg:h-[15rem] 2xl:h-[22rem]">
        <Image
          src={
            "https://res.cloudinary.com/de5xjegp3/image/upload/v1701653811/STATIC%20IMAGE/alimentacion_ld3se5_oakdub.png"
          }
          alt="bg-alimentacion"
          fill
          priority
          className="mt-14"
        />
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 grid-rows-3 gap-4 row-span-2 py-16 ">
        {data.map((item, index) => (
          <div className="card mx-auto relative group" key={index}>
            <div className="card-image rounded-xl">
              <Image
                src={item.imageUrl}
                alt={`Imagen ${index + 1}`}
                width={500}
                height={300}
                className="rounded-xl "
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 bg-gray-800 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 rounded-xl">
              <div className="text-white text-center">
                <h2 className="text-sm lg:text-2xl font-bold">{item.titulo}</h2>
                <a href={item.linkUrlCuidado} key={index}>
                  <p className="text-sm lg:text-xl">
                    {item.descripcionCuidado}
                  </p>
                </a>
                <a href={item.linkUrlAlimentacion} key={index}>
                  <p className="text-sm lg:text-xl pt-2">
                    {item.descripcionAlimentacion}
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Alimentacion;
