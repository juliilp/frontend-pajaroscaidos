import React, { useEffect, useState } from 'react'
import PostComunidad from './PostComunidad'
import { getPostForNuestraComunidad } from '@/api/apiCall/functions'

export default function NuestraComunidad() {
  const [publications, setPublications] = useState([])
  const [option, setOption] = useState('day')

  useEffect(() => {
    async function getPublications() {
      const publicationsResponse = await getPostForNuestraComunidad(option) // NOTA: sacar 'limit' para que traiga todos los posts.
      setPublications(publicationsResponse)
    }
    getPublications()
  }, [option])

  const handlerOption = (option) => {
    setOption(option)
  }

  return (
    <section className="border border-gray-10 shadow-md w-full bg-[#d8d8d9] flex flex-col items-center justify-center xl:max-w-[400px] xl:items-start xl:justify-normal px-4 h-max mr-4 py-6  rounded-lg">
      <div className="max-w-[350px] flex flex-col space-y-2">
        <h2 className="text-[#707070] text-center font-baloo font-semibold text-4xl ">
          ¡Nuestra Comunidad!
        </h2>
        <div className="h-[2px] w-[100%] bg-[#C2C2C2] shadow-login rounded-2xl  " />
        <div className="flex gap-2 text-[#707070] items-center justify-center font-baloo font-semibold text-2xl">
          <button
            className={` ${option === 'day' ? 'text-[#434141] text-3xl' : ''}`}
            onClick={() => handlerOption('day')}
          >
            Hoy
          </button>
          <button
            className={` ${option === 'week' ? 'text-[#434141] text-3xl' : ''}`}
            onClick={() => handlerOption('week')}
          >
            Semana
          </button>
          <button
            className={` ${option === 'month' ? 'text-[#434141] text-3xl' : ''}`}
            onClick={() => handlerOption('month')}
          >
            Mes
          </button>
          <button
            className={` ${option === 'likes' ? 'text-[#434141] text-3xl' : ''}`}
            onClick={() => handlerOption('likes')}
          >
            Tops
          </button>
        </div>
        <div className="h-[5px] w-[100%] bg-[#c2c2c2] shadow-login rounded-2xl  " />
        <div className={`flex flex-col justify-center items-center w-full gap-4 `}>
          <PostComunidad publications={publications} />
        </div>
      </div>
    </section>
  )
}
