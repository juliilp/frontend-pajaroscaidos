import jsonData from "./ContenidoTarjetas.json";
export default function TarjetaCrueldadMaltrato() {
  return (
    <div>
      {jsonData.map((item, index) => (
        <article
          key={index}
          className="m-4 p-2 box-border bg-gray-300 border border-gray-300 shadow-md rounded-lg transition-opacity hover:bg-gray-400"
        >
          <h2 className="p-2 font-bold text-3xl font-baloo leading-16 text-red-600">
            {item.titulo}
          </h2>
          <p className="p-4 m-auto font-bold text-xl font-baloo leading-8 text-gray-600">
            {item.texto}
          </p>
          <p>+</p>
        </article>
      ))}
    </div>
  );
}
