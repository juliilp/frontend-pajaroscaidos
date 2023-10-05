import CardItem from "./CardItem";

export default function ProductSection({ data, openCreateModal, openEditModal }) {
    
    return (
        <>
            <div className="grid gap-2  max-w-[40rem] m-auto grid-flow-row grid-rows-3 grid-cols-2
         md:grid-cols-3 md:grid-rows-2 md:max-w-[60rem]
        ">
                {data?.items?.map((i, key) =>
                    <CardItem data={i} key={key} openEditModal={openEditModal} />
                )}
            </div>
            
            <article className=' flex justify-end w-full'>
                <button onClick={openCreateModal} className=' p-4 bg-green'>Añadir item +</button>
            </article>

        </>
    )

}