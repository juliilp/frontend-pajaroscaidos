'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import api from '@/api/api'
import { useRouter } from 'next/navigation'
const store = createContext()

export default function ContextProvider({ children }) {
  // La logica que queres exportar la escribís acá abajo
  const router = useRouter()

  const [numero, setNumero] = useState(5)

  const [userContext, setUserContext] = useState(() => {
    const storedUser = Cookies.get('user')
    if (storedUser) {
      const decodedUser = decodeURIComponent(storedUser)
      return JSON.parse(decodedUser)
    }
    return null
  })

  const [newUserId, setNewUserId] = useState(() => {
    const storedUser = Cookies.get('newUserId')
    if (storedUser) {
      const decodedUser = decodeURIComponent(storedUser)
      return JSON.parse(decodedUser)
      // return storedUser
    }
    return null
  })

  useEffect(() => {
    Cookies.set('user', JSON.stringify(userContext), { expires: 7 })
  }, [userContext])

  const logout = async () => {
    try {
      const response = await api.get('user/logout')

      if (response.status === 200) {
        Cookies.remove('user')
        router.push('/')

        setUserContext(null)
      }
    } catch (error) {
      console.error('Error al cerrar sesion', error)
    }
  }

  return (
    <store.Provider
      // Dentro del value va lo que queres exportar
      value={{ numero, userContext, setUserContext, logout, newUserId, setNewUserId }}
    >
      {children}
    </store.Provider>
  )
}

// Para traerte lo que vas a exportar se hace así
// const {numero} = customContext()
export const customContext = () => {
  const context = useContext(store)
  return context
}
