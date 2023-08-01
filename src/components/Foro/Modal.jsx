import { useState } from "react";
import { useEffect } from "react"

export default function ModalnewPost({ setvisible }) {
    useEffect(() => {
        const body = document.getElementById('Body');
        body && (body.style.overflow = 'hidden')
        return () => {
            body && (body.style.overflow = 'auto')
        }
    })

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        image: [''],
    })
    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: [e.target.value]
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newPost)
        setvisible()
    }
    return (
        <main className="bg-[#686868cc] min-h-screen fixed h-full w-full flex justify-center items-center top-0">

            <div className="relative font-baloo font-semibold h-[30rem] w-[35rem] bg-[#D9D9D9] flex flex-col justify-between ">
                <button className="absolute right-0 top-0  text-2x1" onClick={setvisible}>X</button>

                <form className="w-full flex flex-col gap-5  ">
                    <section className=" w-full flex justify-start items-center bg-lightgray min-h-[3rem] ">
                        <h1>Crea tu post</h1>
                    </section>
                    <section className="w-full">
                        <input onChange={handleChange} value={newPost.title} className="p-3 w-full" type="text" name="title" placeholder="Agrega un titulo (obligatorio)" />
                    </section>
                    <section className="w-full">
                        <textarea onChange={handleChange} value={newPost.description} className="w-full p-3 resize-none h-[10rem] " name="description" id="" cols="30" rows="10" placeholder="Aquí tú posteo (obligatorio)" />
                    </section>

                    <section className="flex w-full items-center justify-center gap-8">
                        <article><span>Imagen</span></article>
                        <article><span>Video</span></article>
                    </section>

                </form>
                <section className="w-full bg-[#43851dc9] h-[3rem]">
                    <button onClick={handleSubmit} type="submit" className="w-full h-full text-center text-[#2B2B2B] ">

                        Publica tu post
                    </button>
                </section>
            </div>
        </main>
    )
}