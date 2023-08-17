"use client"

import { setReaction } from "@/libs/PostFunctions"
import { useState } from "react"
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'

export default function Likesbox({ idPost,postlikes }) {
    const fakeUser='32b01c36-3646-4394-b750-2269fe1c0b40'
    const isUserReacted=postlikes.filter((i)=>i.userId ===fakeUser).length?true:false

    const [likes, setLikes] = useState(postlikes.length ?? 5);

    const [userLike, setUserLike] = useState(isUserReacted)
    
    const likepost = async (e) => {
        const data={
            idPost,
            reaction:e.target.id,
            idUser:fakeUser
        }
    
        try {
            const resquestReaction=await setReaction(data)
            setUserLike(!userLike)

            if (!userLike) {
                setLikes(likes + 1)
            } else {
                setLikes(likes - 1)
            }
        } catch (error) {
          console.log(error)
        }

    }
    return (
        <article className='   absolute bottom-0  right-[2rem] flex items-end gap-2 text-[#E11447] font-bold'>
            {!userLike ? <BsSuitHeart className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl  cursor-pointer ' onClick={likepost} id="like" /> :
                <BsFillSuitHeartFill className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer' onClick={likepost}  />}
            <span className=' text-xl'>{likes}</span>
        </article>
    )
}