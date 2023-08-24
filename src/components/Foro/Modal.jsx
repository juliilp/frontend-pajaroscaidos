import { newpostvalidations } from "@/utils/auxfunctions";
import { useContext, useState } from "react";
import { useEffect } from "react"
import { AiOutlinePlayCircle } from "react-icons/ai";
import { RiImageFill } from "react-icons/ri";
import styles from '../../styles/modal.module.css'
import { createNewPost } from "@/api/apiCall/functions";
import { customContext } from "@/store/ContextProvider";
export default function ModalnewPost({ setvisible }) {
    const { user } = customContext()
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
        image: ['vacioporahora'],
    })
    const [errors, setErrors] = useState({
        default: 'campos vacíos'
    })

    const [visibleErrors, setVisibleError] = useState(false)

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        });

        setErrors(newpostvalidations({
            ...newPost,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if ('default' in errors) {
            setVisibleError(true)
            return alert(errors.default)
        }
        if (Object.entries(errors).length) {
            setVisibleError(true)
            return alert('Revisa los errores')
        }
        if (!Object.entries(errors).length) {
            setVisibleError(false)
             createNewPost(user.id,newPost)
            console.log(newPost)
            setTimeout(() => {
                setvisible()
            }, 5000)
        }

    }

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {

            // setNewPost({
            //     ...newPost,
            //     [event.target.name]: [reader.result]
            // })
            console.log(reader.result);//imagen en base 64
        };
        reader.readAsDataURL(file);

    };

    return (
        <main className="bg-[#686868cc] min-h-screen fixed h-full w-full flex justify-center items-center top-0 overflow-scroll">

            <div className={`${styles.font} relative font-semibold h-[35rem] max-h-[90%] w-[40rem] max-w-[97%]  bg-[#D9D9D9] flex flex-col justify-between
             
             md:h-[28rem] md:w-[38rem]
             lg:h-[30rem] lg:w-[40rem]
             xl:h-[33rem] xl:w-[43rem]
             2xl:h-[35rem] 2xl:w-[45rem] `}>
                <button className="absolute right-0 top-0  text-2x1" onClick={setvisible}>X</button>
                <button onClick={() => console.log(user)}>ver usuario id</button>
                <form className="w-full flex flex-col gap-5   h-5/6 overflow-y-auto ">
                    <section className=" w-full flex justify-start items-center bg-lightgray min-h-[4rem] ">
                        <h1 className=" text-2xl ml-4">Crea tu post!</h1>
                    </section>
                    <section className="w-full">
                        <input onChange={handleChange} value={newPost.title} className="p-3 w-full" type="text" name="title" placeholder="Agrega un titulo (obligatorio)" />
                    </section>
                    <section className="w-full">
                        <textarea onChange={handleChange} value={newPost.description} className="w-full p-3 resize-none h-[15rem] md:h-[10rem] max-lg:landscape:max-h-[5rem]    " name="description" id="" cols="30" rows="10" placeholder="Aquí tú posteo (obligatorio)" />
                    </section>

                    <section className="flex  w-full items-center h-[25%] justify-center gap-8">
                        <article>
                            <input type="file" name="image" onChange={handlePhotoChange} id="selectimage" className="hidden" accept="image/*" />
                            <label htmlFor="selectimage" className=" flex items-center gap-2" >
                                <RiImageFill className="cursor-pointer text-2xl " />
                                <span className="cursor-pointer text-[#989898] ">Imagen</span>
                            </label>
                        </article>

                        <article>
                            <input type="file" name="" id="SelectVideo" className="hidden" accept="video/*" />
                            <label htmlFor="SelectVideo" className="flex items-center gap-2 ">
                                <AiOutlinePlayCircle className="cursor-pointer text-2xl" />
                                <span className="cursor-pointer text-[#989898]">Video</span>
                            </label>
                        </article>
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