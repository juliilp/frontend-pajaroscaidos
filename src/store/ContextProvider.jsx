'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
const store = createContext()

export default function ContextProvider({ children }) {
  // La logica que queres exportar la escribís acá abajo

  const [numero, setNumero] = useState(5)

  const [user, setUser] = useState(() => {
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
    Cookies.set('user', JSON.stringify(user), { expires: 7 })
  }, [user])

  const logout = () => {
    Cookies.remove('user')
    setUser(null)
  }

  return (
    <store.Provider
      // Dentro del value va lo que queres exportar
      value={{ numero, user, setUser, logout, newUserId, setNewUserId }}
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
