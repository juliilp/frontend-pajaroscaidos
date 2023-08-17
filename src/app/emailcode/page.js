'use client'
import React, { useState } from 'react'
import LoginImagen from '../../assets/registro-login.png'
import Image from 'next/image'
import api from '@/api/api'
import { useRouter } from 'next/navigation'
import { customContext } from '@/store/ContextProvider'

export default function EmailCode() {
  const router = useRouter()
  const regex = /^[0-9]+$/
  const { newUserId } = customContext()

  // console.log('usuario emailcode: ', newUserId.id)

  const [errors, setErrors] = useState(false)
  const [invalidCode, setInvalidCode] = useState(false)
  const [input, setInput] = useState({
    code: '',
  })

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    // console.log('input', input.code)
    if (!input.code || !regex.test(input.code)) {
      setErrors(true)
      return
    }

    try {
      const response = await api.post(`user/${newUserId.id}/validate`, input, {
        withCredentials: true,
      })

      if (response.status == 200) {
        router.push('/login')
      }
    } catch (error) {
      console.error('Error al validar codigo:', error)
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error.code === 'INVALID_CODE') {
          setInvalidCode(true)
        }
      }
    }

    setInput({
      code: '',
    })

    // console.log(input)
  }

  const sendNewCode = async (e) => {
    e.preventDefault()

    try {
      const response = await api.patch(`user/${newUserId.id}/code`, { withCredentials: true })

      if (response.status == 200) {
        return alert(`Se envió un nuevo código al correo: `) //${user.email} react context
      }
    } catch (error) {
      console.error('Error al enviar un nuevo código:', error)
    }
  }

  return (
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2">
      <Image src={LoginImagen} className="hidden md:block justify-self-end" alt="imagen" />
      <form
        className="w-[550px]  bg-[#FFFFFF] pb-16 rounded-xl font-baloo "
        onSubmit={submitHandler}
      >
        <h2 className="font-bold  text-2xl text-center mt-2 mb-12">Validar e-mail</h2>
        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">
            Ingrese el código para validar su correo electrónico
          </span>
          <input
            type="text"
            className="bg-[#EEEEEE] py-3 outline-none pl-2 "
            onChange={inputHandler}
            name="code"
            value={input.code}
          />
          {errors && <span className="text-red-500">Código debe ser numérico.</span>}
          {invalidCode && <span className="text-red-500">El código ingresado es invalido</span>}
        </div>
        <div className="flex flex-col  justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl "
          >
            Enviar código
          </button>
        </div>
        <div className="flex w-full items-center justify-between px-4">
          <div className="h-[10px] w-[100%] bg-[#c2c2c2] shadow-login rounded-2xl  " />
        </div>
        <div className="flex flex-col  justify-center items-center my-10">
          <button
            onClick={(e) => sendNewCode(e)}
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl "
          >
            Solicitar un nuevo código
          </button>
        </div>
      </form>
    </section>
  )
}
