import Image from "next/image";

export default function CardItem({ item, openEditModal }) {
  return (
    <article
      className="bg-[#C2C2C2] hover:bg-[#acacac] w-72 cursor-pointer flex flex-col items-center gap-2 rounded-md"
      onClick={(event) => openEditModal(event, item)}
    >
      <div className="w-full h-64 overflow-x-hidden flex items-center justify-center bg-white rounded-t-md">
        {item.image[0]?.secure_url ? (
          <Image
            width={100}
            height={100}
            src={item.image[0].secure_url}
            alt={`product: ${item.id}`}
            className="h-full w-auto"
          />
        ) : (
          <h1> Sin imagen</h1>
        )}
      </div>
      <section className="w-full flex flex-col flex-grow items-center gap-2 px-3">
        <h2 className="text-xl font-semibold">
          {item.title ?? "Titulo no disponible"}
        </h2>
        <p className="w-full text-lg break-words line-clamp-3">
          {item.description ?? "Descripcion no disponible"}
        </p>
        <div className="w-full flex flex-grow justify-start items-end py-4">
          <p className="break-words">
            <span className="font-semibold">tallas disponibles: </span>
            {item.categories?.map((category) => category?.name).join(", ")}
          </p>
        </div>
      </section>
    </article>
  );
}
