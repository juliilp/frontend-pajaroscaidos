import { useState } from "react"

export default function Comentarios({ id, comment, createdAt, userId }) {
    const [actualComments, setActualComments] = useState({
        Antiguos: true,
        Recientes: false,
        Destacados: false
    })
    const setComments = (e) => {
        const comments = e.target.id


        setActualComments({
            ...actualComments,
            Antiguos: false,
            Recientes: false,
            Destacados: false,
            [comments]: true,
        })

    }
    const months=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const month=createdAt.slice(3).slice(0,2)
    const day=createdAt.slice(0,2) 
    const year=createdAt.slice(-4)

    const commentmonth=` ${months[parseInt(month - 1)]}, ${day} ${year}` 
    return (
        <div className="w-full  h-full text-lettersgray flex flex-col items-center gap-3">

            <section className="flex  justify-between  w-[95%] ">

                <article className="flex justify-start items-center">
                    <h3 className=" text-2xl font-semibold">Comentarios</h3>
                </article>

                <article className="flex justify-between   w-4/12 items-center ">
                    <h4 id="Antiguos" onClick={setComments} className={`${actualComments.Antiguos && ' font-extrabold'} hover:font-extrabold cursor-pointer`}> ANTIGUOS</h4>
                    <h4 id="Recientes" onClick={setComments} className={`${actualComments.Recientes && ' font-extrabold'} hover:font-extrabold cursor-pointer`}> RECIENTES</h4>
                    <h4 id="Destacados" onClick={setComments} className={`${actualComments.Destacados && ' font-extrabold'} hover:font-extrabold cursor-pointer`}> DESTACADOS</h4>
                </article>

            </section>

            <div className={` w-full bg-[#c2c2c2] h-[0.3rem]  border-2 border-lightgray rounded-lg  `} style={{ filter: ' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }} />

            <div className=" w-[95%] flex flex-col gap-5 ">

                <section className="flex flex-col  gap-4 items-start ">
                    <article className="flex gap-4">
                        <figure className=" rounded-full bg-black h-[2rem] w-[2rem]"></figure>
                        <div className="flex flex-col gap-1">
                            <h5 className=" text-xl font-medium">Nombre</h5>
                            {/* <span className=" text-sm">Fecha</span> */}
                            <span className=" text-sm">{commentmonth}</span>
                        </div>
                    </article>

                    <article title="coment" className=" font-semibold">
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui suscipit, veniam fuga quibusdam repudiandae eveniet fugit, enim ut aspernatur quae, tempore autem ducimus dolore facilis aut expedita consequatur neque incidunt.</p> */}
                    <p>{comment}</p>
                    </article>

                </section>
              
            </div>

        </div>
    )
}