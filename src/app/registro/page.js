'use client'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import LoginImagen from '../../assets/login-imagen.jpg'
import Image from 'next/image'
import { customContext } from '@/store/ContextProvider'
import api from '@/api/api'
import { useRouter } from 'next/navigation'
import { validateCreateUser } from '@/utils/auxfunctions'

export default function Registro() {
  const router = useRouter()
  const { setUser } = customContext()
  const [switchPassword, setSwitchPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [emailUsed, setEmailUsed] = useState(false)
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    first_name: '',
    last_name: '',
  })

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    const validationErrors = validateCreateUser(input)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const { passwordConfirm, ...userData } = input
      const response = await api.post(`/user/create`, userData, { withCredentials: true })

      if (response.status == 200) {
        const user = await response.data
        // console.log('newUser', user.newUser)
        setUser(user.newUser)
        router.push('/emailcode')
      }
    } catch (error) {
      console.error('Error al crear usuario:', error)
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error.code === 'EMAIL_USED') {
          setEmailUsed(true)
        }
      }
    }

    setInput({
      email: '',
      password: '',
      passwordConfirm: '',
      first_name: '',
      last_name: '',
    })

    // console.log(input)
  }

  return (
    <section className="w-full bg-[#D9D9D9] h-screen flex justify-center items-center md:grid md:grid-cols-2">
      <Image src={LoginImagen} className="hidden md:block justify-self-end" alt="imagen" />
      <form
        className="w-[550px]  bg-[#FFFFFF] pb-16 rounded-xl font-baloo "
        onSubmit={submitHandler}
      >
        <h2 className="font-bold  text-2xl text-center mt-2 mb-12">Registrate</h2>

        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Nombre</span>
          <input
            type="text"
            className="py-3 outline-none pl-2 bg-[#D9D9D9] "
            onChange={inputHandler}
            name="first_name"
            value={input.first_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: errors.first_name ? 'visible' : 'hidden' }}
          >
            {errors.first_name}
          </span>
        </div>

        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Apellido</span>
          <input
            type="text"
            className="py-3 outline-none pl-2 bg-[#D9D9D9]"
            onChange={inputHandler}
            name="last_name"
            value={input.last_name}
          />
          <span
            className="text-red-500"
            style={{ visibility: errors.last_name ? 'visible' : 'hidden' }}
          >
            {errors.last_name}
          </span>
        </div>

        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Email</span>
          <input
            type="text"
            className="py-3 outline-none pl-2 bg-[#D9D9D9]"
            onChange={inputHandler}
            name="email"
            value={input.email}
          />
          <span
            className="text-red-500"
            style={{ visibility: errors.email || emailUsed ? 'visible' : 'hidden' }}
          >
            {errors.email || (emailUsed && 'Existe un usuario registrado con el e-mail ingresado')}
          </span>
        </div>

        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Contraseña</span>
          <div className="flex relative ">
            <input
              type={switchPassword ? 'text' : 'password'}
              className="py-3  w-full outline-none  pl-2 bg-[#D9D9D9]"
              onChange={inputHandler}
              name="password"
              value={input.password}
            />
            <div
              className="absolute right-0 top-[18%]"
              onClick={() => setSwitchPassword((prev) => !prev)}
            >
              {switchPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
            </div>
          </div>
          <span
            className="text-red-500"
            style={{ visibility: errors.password ? 'visible' : 'hidden' }}
          >
            {errors.password}
          </span>
        </div>

        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Confirmar Contraseña</span>
          <div className="flex relative ">
            <input
              type={switchPassword ? 'text' : 'password'}
              className="py-3  w-full outline-none  pl-2 bg-[#D9D9D9]"
              onChange={inputHandler}
              name="passwordConfirm"
              value={input.passwordConfirm}
            />
            <div
              className="absolute right-0 top-[18%]"
              onClick={() => setSwitchPassword((prev) => !prev)}
            >
              {switchPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
            </div>
          </div>
          <span
            className="text-red-500"
            style={{ visibility: errors.passwordConfirm ? 'visible' : 'hidden' }}
          >
            {errors.passwordConfirm}
          </span>
        </div>

        <div className="flex flex-col  justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#008000] h-[70px] w-[180px] font-bold text-[#FFFFFF] text-lg rounded-xl "
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </section>
  )
}
