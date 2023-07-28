"use client"
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
import styles from '../../styles/posts.module.css'
import { useEffect, useState } from 'react'
import Comentarios from '@/components/Post/Comentarios'
import { convertirFecha } from '@/utils/auxfunctions'
import NuestraComunidad from '@/components/NuestraComunidad/NuestraComunidad'
export default function page() {
    const [like, setLike] = useState(false)
    const [posts, setPosts] = useState({});
    const [faketotallike, setFakeTotalLike] = useState(5)
    const [comments, setComments] = useState({})


    useEffect(() => {
        const getposts = () => {
            fetch('http://localhost:3001/api/publication/all').then(res => res.json().then(resp => {
                setPosts(resp.publication)
                setFakeTotalLike(resp.publication.reactions.length)
                setComments(resp.publication.comments[0])
            }))
        }
        const adaptsection=document.getElementById('Uscomunitysection')
        const post=document.getElementById('Post')
        console.log(post.clientHeight);
        adaptsection.style.height=post.clientHeight+'px';
        getposts()
        return () => setPosts({})
    }, [])

    const likepost = () => {
        setLike(!like)
        !like ? setFakeTotalLike(faketotallike + 1) : setFakeTotalLike(faketotallike - 1)
    }

    return (
        <div className=" min-h-full gap-3 flex flex-col p-6 pl-14 pr-14  text-white">
            <header className="w-full h-[10rem] bg-blue-200">
                <h1>header</h1>
            </header>

            <div className="flex    min-h-[20rem] gap-3 relative bg-red-700 h-auto ">

                <main className="w-8/12 relative h-full bg-lightgray   rounded-[10px] text-[#2B2B2B] 
                p-8 pt-4 pb-20 flex flex-col items-center gap-7 " id='Post'>
                    <article className='flex w-full justify-end'>

                        <span className='  text-[#727272]'>Fecha</span>
                        {/* <span className='  text-[#727272]'>{convertirFecha(posts.createdAt)}</span> */}
                    </article>
                    <article className='w-full flex justify-center'>
                        <h1 className=" font-semibold text-4xl  w-11/12">Title</h1>
                        {/* <h1 className=" font-semibold text-4xl  w-11/12">{posts.title}</h1> */}
                    </article>
                    <div className={` w-full bg-[#c2c2c2] h-[0.7rem]  border-2 border-lightgray rounded-lg  `} style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))' }} />

                    <article className=' w-10/12 '>
                        <p className={`${styles.aux} text-[#020000] text-lg  `}>Pájaros Caídos lleva adelante campañas permamentes dirigidas a que la población tome conciencia de los peligros a los que están expuestas las aves, sobre todo en los centros urbanos: el golpe de un ave en vuelo sobre los grandes ventanales, la pirotecnia en las fiestas de fin de año, el uso de la gomera por parte de los niños, las fuertes lluvias, el tráfico de fauna, etc.
                            Alentamos también a que la gente se comprometa en el cuidado de un ave en situación de vulnerabilidad: un pichón caído del nido, un ave herida o enferma, y le informamos sobre las posibles vías de acceso a una resolución del problema.
                            Creemos también que es fundamental la colaboración de la comunidad en la difusión de estas premisas, para que lleguen a la mayor parte de la población, a través de distintos portadores, replicando las publicaciones en la web, o distribuyendo folletos y afiches en su barrio o localidad.
                            El trabajo coordinado con otros grupos y organizaciones comunitarias, es fundamental para que la llegada de nuestros mensajes sea lo más amplia posible, y estamos abiertos a la comunicación con todos aquellos que están dispuestos a un trabajo conjunto.</p>
                    </article>

                    <article className='  flex justify-center  w-10/12'>
                        <div className=' min-h-[15rem]  bg-slate-600 w-8/12 flex items-center justify-center'>
                            <h1 className=' text-center'> Otro contenido/video/imagen</h1>
                        </div>
                    </article>
                    <article className='   absolute bottom-0  right-[2rem] flex items-end gap-2 text-[#E11447] font-bold'>
                        {!like ? <BsSuitHeart className=' text-6xl  cursor-pointer ' onClick={likepost} /> :
                            <BsFillSuitHeartFill className=' text-6xl cursor-pointer' onClick={likepost} />}
                        <span className=' text-xl'>{faketotallike}</span>
                    </article>
                </main>
                <section className="w-4/12  bg-lightgray h-auto overflow-auto flex-1" id='Uscomunitysection'>
                      <NuestraComunidad />
                </section>
            </div >
            <section className="w-full  bg-lightgray min-h-[10rem] p-6">
                <Comentarios comment={comments.comment} createdAt={convertirFecha(comments.createdAt)} />
            </section>
        </div >
    )
}