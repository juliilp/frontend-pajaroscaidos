'use client'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSolidUser } from 'react-icons/bi'
import Logo from '../../../public/images/navbar-logo.png'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import Image from 'next/image'
import Link from 'next/link'
import { customContext } from '@/store/ContextProvider'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const { user, logout } = customContext()

  const [switchMenu, setSwitchMenu] = useState(false)
  const handlerSwitchMenu = () => {
    setSwitchMenu((prev) => !prev)
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }
  return (
    <header className="bg-[#3D3D3D] h-[70px] w-full fixed top-0 left-0 z-[999999] ">
      <nav className="w-full h-full flex items-center  justify-between px-3">
        <GiHamburgerMenu
          size={35}
          color="white"
          className="md:hidden"
          onClick={handlerSwitchMenu}
        />
        <div className="hidden md:flex gap-12 lg:gap-24">
          <Image src={Logo} alt="logo" className="h-[62px] w-[80px] object-cover" />
          <MenuDesktop />
        </div>

        <div className="flex items-center justify-center gap-3">
          {user && user.nick_name ? (
            <>
              <span className="text-white font-baloo font-semibold">{user.nick_name}</span>
              {user.avatar !== '-' ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              ) : (
                <BiSolidUser size={35} color="white" />
              )}
              <button onClick={handleLogout} className="text-white font-baloo font-semibold">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white font-baloo font-semibold">
                Iniciar sesión
              </Link>
              <BiSolidUser size={35} color="white" />
            </>
          )}
        </div>
      </nav>
      {switchMenu && <MenuMobile />}
    </header>
  )
}
