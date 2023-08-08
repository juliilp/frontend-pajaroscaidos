'use client'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import LoginImagen from '../../assets/login-imagen.jpg'
import Image from 'next/image'
import { customContext } from '@/store/ContextProvider'
import api from '@/api/api'
import { useRouter } from 'next/navigation'
import { validateLogin } from '@/utils/auxfunctions'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const { setUser, user } = customContext()
  // console.log('user context', user)
  const [switchPassword, setSwitchPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [userNotFound, setUserNotFound] = useState(false)
  const [invalidPass, setInvalidPass] = useState(false)
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  })

  const inputHandler = (e) => {
    setInputLogin({
      ...inputLogin,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    const validationErrors = validateLogin(inputLogin.email, inputLogin.password)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await api.post(`/user/login`, inputLogin, { withCredentials: true })

      if (response.status == 200) {
        const userBackEnd = await response.data
        setUser(userBackEnd.user)
        // console.log('user back:', userBackEnd.user.userEmailValidate)

        if (userBackEnd.user.userEmailValidate === false) {
          router.push('/emailcode')
        } else {
          router.push('/foro')
        }
      }
    } catch (error) {
      console.error('Error inicio sesion:', error)
      if (error.response && error.response.data && error.response.data.error) {
        if (error.response.data.error.code === 'USER_NOT_FOUND') {
          setUserNotFound(true)
        }
        if (error.response.data.error.code === 'INVALID_PASSWORD') {
          setInvalidPass(true)
        }
      }
    }

    setInputLogin({
      email: '',
      password: '',
    })

    // console.log(inputLogin)
  }
  return (
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2">
      <Image src={LoginImagen} className="hidden md:block justify-self-end" alt="imagen" />
      <form
        className="w-[550px]  bg-[#D9D9D9] pb-16 rounded-xl font-baloo "
        onSubmit={submitHandler}
      >
        <h2 className="font-bold  text-2xl text-center mt-2 mb-12">Inicia Sesión</h2>
        <div className="flex flex-col px-4 gap-2 ">
          <span className="text-[#525252]">Email o nombre de usuario</span>
          {/* Le pongo text por que está pidiendo email o nombre de usuario */}
          <input
            type="text"
            className="py-3 outline-none pl-2 "
            onChange={inputHandler}
            name="email"
            value={inputLogin.email}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          {userNotFound && <span className="text-red-500">Usuario no registrado</span>}
        </div>
        <div className="flex flex-col px-4  gap-2 ">
          <span className="text-[#525252]">Contraseña</span>
          <div className="flex relative ">
            <input
              type={switchPassword ? 'text' : 'password'}
              className="py-3  w-full outline-none  pl-2"
              onChange={inputHandler}
              name="password"
              value={inputLogin.password}
            />

            <div
              className="absolute right-0 top-[18%]"
              onClick={() => setSwitchPassword((prev) => !prev)}
            >
              {switchPassword ? <AiOutlineEye size={30} /> : <AiOutlineEyeInvisible size={30} />}
            </div>
          </div>
          {invalidPass && <span className="text-red-500">Contraseña invalida</span>}
          {errors.password && <span className="text-red-500">{errors.password}</span>}
          <span className="text-[#68A4FF] underline">Olvidé la contraseña</span>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#D5BD44] h-[70px] w-[180px] font-bold  text-lg rounded-xl "
          >
            Inicia Sesión
          </button>
          <div className="flex w-full items-center justify-between px-4">
            <div className="h-[10px] w-[30%] bg-[#c2c2c2] shadow-login rounded-2xl  " />
            <span className="text-[#525252]">O registrate con</span>
            <div className="h-[10px] w-[30%] bg-[#c2c2c2]  shadow-login rounded-2xl " />
          </div>
          <button className="bg-[#BCBCBC] h-[75px] w-[180px] flex justify-center items-center rounded-xl">
            <AiOutlineGoogle size={50} />
          </button>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className=" flex flex-col justify-center items-center w-max">
            <span className="text-[#525252]">¿No tienes cuenta en Pájaros Caídos?</span>

            <Link href="/registro">
              <span className="text-[#68A4FF] underline self-end">Registrate</span>
            </Link>
          </div>
        </div>
      </form>
    </section>
  )
}
