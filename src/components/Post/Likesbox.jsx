"use client"

import { useState } from "react"
import { BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'

export default function Likesbox({postlikes}) {
    const [likes,setLikes]=useState(postlikes??5)
    const [userLike,setUserLike]=useState(false)
      const likepost = () => {
        setUserLike(!userLike)
        !userLike ? setLikes(likes + 1) : setLikes(likes - 1)
    }
    return (
        <article className='   absolute bottom-0  right-[2rem] flex items-end gap-2 text-[#E11447] font-bold'>
            {!userLike ? <BsSuitHeart className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl  cursor-pointer ' onClick={likepost} /> :
                <BsFillSuitHeartFill className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer' onClick={likepost} />}
            <span className=' text-xl'>{likes}</span>
        </article> 
    )
}