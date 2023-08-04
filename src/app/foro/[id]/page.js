"use client"
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
import styles from '../../../styles/posts.module.css'
import {  useEffect, useState } from 'react'
import Comentarios from '@/components/Post/Comentarios'
import NuestraComunidad from '@/components/NuestraComunidad/NuestraComunidad'
import axios from 'axios'



export default function page({ params }) {
    const [like, setLike] = useState(false)
    const [posts, setPosts] = useState({});
    const [faketotallike, setFakeTotalLike] = useState(5)
    const [comments, setComments] = useState([])
    const [postisload, setPostIsLoad] = useState(true)
    const [responsive, setResponsive] = useState(false)
    const [error, setError] = useState({status:false})

    useEffect(() => {

        const getposts = async() => {
            try {
              const {data} = await axios.get(`https://pajaros-caidos-backend.onrender.com/publication/${params.id}`)
              
         setPosts(data?.publication)
                    setFakeTotalLike(data?.publication.reactions.length)
                    setComments(data?.publication.comments)

        
            } catch (error) {
                    setError({
                        status:true,
                        message:error.message
                    })
            }

        }
        setPostIsLoad(false)
        getposts()
        return () => {
            setPosts({});
            setPostIsLoad(true)
            setComments([{}])
        }
    }, [])

    useEffect(() => {
        let controlate = responsive;
        const fixstyles = () => {
            const adaptsection = document.getElementById('Uscomunitysection')
            const post = document.getElementById('Post')
            adaptsection && post && (adaptsection.style.maxHeight = post.clientHeight + 'px')
            adaptsection && post && (adaptsection.style.height = post.clientHeight + 'px')
        }
        const responsiveControl = () => {
            if (window.innerWidth < 768 && !controlate) {

                setResponsive(true);
            } else if (window.innerWidth > 769 && controlate) {

                setResponsive(false)
            }
        };
        !controlate && fixstyles();
        window.addEventListener("resize", responsiveControl);

        return () => {
            window.removeEventListener("resize", responsiveControl);
        };
    }, [responsive])
    const likepost = () => {
        setLike(!like)
        !like ? setFakeTotalLike(faketotallike + 1) : setFakeTotalLike(faketotallike - 1)
    }

    // if(error.status){
    //     throw new Error(error.message)
    // } ///manejo de error provisorio , redirige a pagina de error

    return (
        <div className=" min-h-full gap-3 flex flex-col p-6 
         pl-0 pr-0
         sm:pl-2 sm:pr-2
         md:pl-6 md:pr-6
         lg:pl-12 lg:pr-12
         xl:pl-14  xl:pr-14 
         2xl:pl-20 2xl:pr-20 text-white">
            <header className="w-full h-[10rem] bg-blue-200">
                <h2>header</h2>
            </header>

            <div className="flex    min-h-[20rem] gap-3 relative  h-auto ">

                <main className="w-full lg:w-8/12 relative min-h-[40rem] h-full bg-lightgray   rounded-[10px] text-[#2B2B2B] 
                p-8 pt-4 pb-20 flex flex-col items-center gap-7 " id='Post'>
                    <article className='flex w-full justify-end'>

                        <span className='  text-[#727272]'>Fecha</span>
                        {/* <span className='  text-[#727272]'>{convertirFecha(posts.createdAt)}</span> */}
                    </article>
                    <article className='w-full flex justify-center'>
                        <h1 className=" font-semibold  sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl  w-11/12">{posts.title}</h1>
                    </article>
                    <div className={` w-full bg-[#c2c2c2] h-[0.7rem]  border-2 border-lightgray rounded-lg  `} style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30))' }} />

                    <article className=' w-full sm:w-11/12  md:w-10/12 '>
                        <p className={`${styles.aux} text-[#020000] sm:text-sm  md:text-base xl:text-xl 2xl:text-2xl  `}>
                              {posts.description}
                        </p>
                    </article>

                    <article className='  flex justify-center  w-10/12'>
                        <div className=' min-h-[15rem]  bg-slate-600 w-8/12 flex items-center justify-center'>
                            <h1 className=' text-center'> Otro contenido/video/imagen</h1>
                        </div>
                    </article>
                    <article className='   absolute bottom-0  right-[2rem] flex items-end gap-2 text-[#E11447] font-bold'>
                        {!like ? <BsSuitHeart className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl  cursor-pointer ' onClick={likepost} /> :
                            <BsFillSuitHeartFill className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer' onClick={likepost} />}
                        <span className=' text-xl'>{faketotallike}</span>
                    </article>
                </main>
                {!responsive &&
                    <section className=" md:w-8/12 lg:w-4/12 flex justify-center  bg-lightgray h-auto min-h-[30rem]  overflow-y-scroll " id='Uscomunitysection'>
                        {postisload ? <h1>Cargando...</h1> : <NuestraComunidad />}
                    </section>}
            </div >
            <section className="w-full  bg-lightgray min-h-[15rem] h-full  sm:p-6">
                <Comentarios comments={comments} />
            </section>

            {responsive &&
                    <section className=" w-full flex justify-center  bg-lightgray h-auto min-h-[30rem] " >
                        {postisload ? <h1>Cargando...</h1> : <NuestraComunidad />}
                    </section>}
        </div >
    )
}