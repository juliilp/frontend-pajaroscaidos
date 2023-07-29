import PostComunidad from "./PostComunidad";
export default function NuestraComunidad() {
  return (
    <section className="w-full bg-[#d8d8d9] flex items-center justify-center xl:max-w-[400px] xl:items-start xl:justify-normal px-4 h-max mr-4 py-6 rounded-lg">
      <div className="max-w-[350px]  flex flex-col ">
        <h2 className="text-[#707070] text-center font-baloo font-semibold text-4xl ">
          ¡Nuestra Comunidad!
        </h2>
        <div className="flex gap-2 text-[#707070] items-center justify-center font-baloo font-semibold text-2xl h-[40px] ">
          <button className="focus:text-3xl">Hoy</button>
          <button className="focus:text-3xl">Semana</button>
          <button className="focus:text-3xl">Mes</button>
          <button className="focus:text-3xl">Tops</button>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <PostComunidad />
          <PostComunidad />
        </div>
      </div>
    </section>
  );
}
