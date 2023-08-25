import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { RiMessage2Line } from 'react-icons/ri'
import { customContext } from '@/store/ContextProvider'
import { convertirFecha } from '@/utils/auxfunctions'
import api from '../api/api'

export default function CardForo({ titulo, tiempo, usuario, like, message, image, id, reactions }) {
  const { userContext } = customContext()

  const userReaction = reactions?.find((e) => e.userId === userContext?.id)
  // console.log('reaction:', userReaction)
  const [reaction, setReaction] = useState(!!userReaction)
  const [likesNumber, setLikesNumber] = useState(like)
  const fecha = convertirFecha(tiempo)
  const [newLike, setNewLike] = useState(userReaction)
  const [sending, setSending] = useState(false)

  const handleLike = async () => {
    try {
      if (sending) {
        return
      }

      setSending(true)

      const response = await api.post(`/reaction/create/${id}`, {
        idUser: userContext.id,
        reaction: 'like',
      })

      if (response.status === 200) {
        // console.log('id:', response.data.newReaction.id)
        setNewLike(response.data.newReaction.id)
        setReaction(true)
        setLikesNumber(likesNumber + 1)
      }
    } catch (error) {
      console.error('error al dar el me gusta::', error)
    } finally {
      setSending(false)
    }
  }

  const handleUnLike = async () => {
    if (sending) {
      return
    }

    setSending(true)

    try {
      // console.log('userReaction: ', userReaction)
      const response = await api.delete(
        `/reaction/delete/${userReaction !== undefined ? userReaction.id : newLike}`
      ) //userReaction.id

      if (response.status === 200) {
        setReaction(false)
        setLikesNumber(likesNumber - 1)
      }
    } catch (error) {
      console.error('error al sacar el me gusta::', error)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className=" flex w-[95%] h-[150px]  items-center justify-center shadow-cardForo sm:shadow-none sm:border-b sm:border-white ">
      {/* Supuesta imagen */}
      <div className=" flex-[2] h-full w-2/6 p-3 justify-center items-center flex ">
        <div className="bg-slate-600 w-[100%] max-w-[80px] h-[70px] sm:max-w-[120px] sm:h-[100px] lg:max-w-[150px] lg:h-[120px] rounded-2xl">
        {image.includes('.com') ?<img src={image} /> :<span>controlar no foto</span>}
        </div>
      </div>

      <div className="w-4/6 h-[100px] flex flex-col px-3 gap-1 justify-center font-inter ">
        <h2 className="font-bold  text-lg sm:text-2xl">{titulo}</h2>
        <span>
          <b className="text-[#2594EF] cursor-pointer ">Foro</b> - {fecha} por
          <b className="text-[#2594EF] cursor-pointer "> {usuario}</b>
        </span>
        <div className="flex gap-6 self-end sm:self-start pr-6">
          <div className="flex gap-2 ">
            <IoMdHeartEmpty
              color={reaction ? '#E11447' : '#000000'}
              size={25}
              className={`cursor-pointer ${sending ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={sending ? null : reaction ? handleUnLike : handleLike}
            />
            <span className={`font-semibold text-lg ${reaction ? 'text-[#AA153A]' : ''}`}>
              {likesNumber}
            </span>
          </div>

          <div className="flex  gap-2">
            <RiMessage2Line color="#0C6410" size={25} className="cursor-pointer" />
            <span className="text-[#0C6410] font-semibold text-lg self-end ">{message}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
