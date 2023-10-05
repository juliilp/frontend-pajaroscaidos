import CardItem from "./CardItem";

export default function ProductSection({ data, openCreateModal, openEditModal }) {
    
    return (
        <>
            <div className=" w-full overflow-scroll min-[500px]:overflow-visible h-[35rem] min-[500px]:h-auto flex flex-col  sm:grid gap-2  max-w-[40rem] m-auto grid-flow-row grid-rows-3 grid-cols-2
         md:grid-cols-3 md:grid-rows-2 md:max-w-[60rem]
        ">
                {data?.items?.map((i, key) =>
                    <CardItem data={i} key={key} openEditModal={openEditModal} />
                )}
            </div>
            
            <article className=' flex justify-center sm:justify-end w-full'>
                <button onClick={openCreateModal} className=' p-2 sm:p-4 bg-green'>Añadir item +</button>
            </article>

        </>
    )

}