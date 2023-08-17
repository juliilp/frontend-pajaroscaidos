
'use client'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import LoginImagen from '../../assets/registro-login.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { customContext } from '@/store/ContextProvider'
import { validateLogin } from '@/utils/auxfunctions'
import api from '@/api/api'
import Cookies from 'js-cookie'


export default function Login() {
  const router = useRouter()
  const { setUser, setNewUserId, user } = customContext()
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
        const userBackEnd = response.data
        // console.log('user back:', userBackEnd.user.id)

        if (userBackEnd.user.userEmailValidate === false) {
          Cookies.set('newUserId', JSON.stringify({ id: userBackEnd.user.id }), { expires: 7 })

          router.push('/emailcode')
        } else {
          setUser(userBackEnd.user)
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
    <section className="w-full h-screen flex justify-center items-center md:grid md:grid-cols-2  md:px-8 md:gap-12 lg:gap-24">

      <Image src={LoginImagen} className="hidden md:block justify-self-end" alt="imagen" />

      <form
        className="w-full max-w-[500px] pb-16 rounded-xl font-baloo bg-white "
        onSubmit={submitHandler}
      >

        <h2 className="font-bold  text-2xl text-center mt-4 mb-12">Inicia Sesión</h2>


        <div className="flex flex-col px-4 gap-2 mb-6 ">
          <span className="text-[#525252]">Email o nombre de usuario</span>

          <input
            type="text"
            className="py-3 outline-none pl-2  bg-[#EEEEEE] "
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

              className="py-3  w-full outline-none  pl-2 bg-[#EEEEEE] "
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
          <Link href="/login/forget-password">
            <span className="text-[#68A4FF] underline">Olvidé la contraseña</span>
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center my-10">
          <button
            type="submit"
            className="bg-[#43851D] text-white h-[70px] w-[180px] text-lg rounded-xl "
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


        <div className="w-full flex justify-center items-center gap-2 ">
          <span className="text-[#525252]">¿No tienes cuenta en Pájaros Caídos?</span>

          <Link href="/registro">
            <span className="text-[#68A4FF] underline">Registrate</span>
          </Link>
        </div>
      </form>
    </section>
  )
}
