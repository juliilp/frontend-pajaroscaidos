import Image from "next/image";
export default function CardItem({data, openEditModal }) {
    
    return (
        <article className=" flex p-2 flex-col items-center justify-center gap-2  rounded-lg bg-[#C2C2C2] min-h[18rem] md:min-h-[22rem] md:h-auto"
            onClick={(event) => openEditModal(event, data)} >

            <article className="h-[48%] ">
                {data.image[0]?.secure_url?
                    <Image width={100} height={100} src={data.image[0].secure_url} alt={`products`}
                        className="w-auto  min-h-[9rem] max-h-[11rem]   h-[10rem]" />
                   :<h1> Sin imagen</h1>
                    }
            </article>
            <h3 className=" text-base md:text-xl xl:text-2xl 2xl:text-3xl">{data.title ?? 'Titulo no disponible'}</h3>
            <article className="flex flex-col justify-between h-[52%]">
                <p className="leading-none text-center">{data.description ?? 'Descripcion no disponible'}</p>
                <span className="">tallas disponibles:{data.categories?.map(i=>i?.name).join(',')}</span>
            </article>
        </article>
    )
}