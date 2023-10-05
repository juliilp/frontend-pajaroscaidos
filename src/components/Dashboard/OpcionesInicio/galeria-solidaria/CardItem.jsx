import Image from "next/image";
export default function CardItem({ data, openEditModal }) {

    return (
        <article className=" flex p-2 flex-col items-center  bg-[#C2C2C2] gap-2  cursor-pointer hover:bg-[#acacac]"
            onClick={(event) => openEditModal(event, data)} >

            <article className=" ">
                {data.image[0]?.secure_url ?
                    <Image width={100} height={100} src={data.image[0].secure_url} alt={`products`}
                        className="w-auto  h-[9rem]  sm:h-[10rem]   md:h-[11rem] lg:h-[13rem] xl:h-[14rem] 2xl:[15rem]" />
                    : <h1> Sin imagen</h1>
                }
            </article>

            <article className="  w-full flex flex-col items-center gap-2 break-words justify-between h-full ">
                    <h3 className=" text-base md:text-xl xl:text-2xl 2xl:text-3xl">{data.title ?? 'Titulo no disponible'}</h3>
                    <p className="leading-none text-center break-words w-full">{data.description ?? 'Descripcion no disponible'}</p>
                <div className="  ">
                    <span className=" w-full break-words">tallas disponibles: {data.categories?.map(i => i?.name).join(', ')}</span>
                </div>
            </article>

        </article>
    )
}