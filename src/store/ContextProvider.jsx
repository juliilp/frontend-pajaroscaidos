"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import api from "@/api/api";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
const store = createContext();

const key = process.env.NEXT_PUBLIC_SECRET_KEY_DATA_JWT;

export default function ContextProvider({ children }) {
  // La logica que queres exportar la escribís acá abajo
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await api.get("user/logout");

      if (response.status === 200) {
        Cookies.remove("user");
        Cookies.remove("JWT");
        router.push("/");

        setUserContext(null);
      }
    } catch (error) {
      console.error("Error al cerrar sesion", error);
    }
  };

  const [JWTContext, setJWTContext] = useState(() => {
    const storedUser = Cookies.get("user");

    if (storedUser) {
      const decodedUser = decodeURIComponent(storedUser);

      const JWT = JSON.parse(decodedUser);

      try {
        jwt.verify(JWT, key);
        return JWT;
      } catch (error) {
        console.log("Error JWT: ", error.message);
        logout();
      }
    }
    return null;
  });
  const [UserContext, setUserContext] = useState();

  const [newUserId, setNewUserId] = useState(() => {
    const storedUser = Cookies.get("newUserId");
    if (storedUser) {
      const decodedUser = decodeURIComponent(storedUser);
      return JSON.parse(decodedUser);
      // return storedUser
    }
    return null;
  });

  useEffect(() => {
    Cookies.set("user", JSON.stringify(JWTContext), { expires: 7 });
    const storedUser = JWTContext;

    if (storedUser) {
      const decodedUser = decodeURIComponent(storedUser);

      const JWTDecoded = jwt.verify(decodedUser, key);

      setUserContext(JWTDecoded.user);
    }
  }, [JWTContext]);

  return (
    <store.Provider
      // Dentro del value va lo que queres exportar
      value={{
        UserContext,
        setUserContext,
        logout,
        newUserId,
        setNewUserId,
        setJWTContext,
      }}
    >
      {children}
    </store.Provider>
  );
}

// Para traerte lo que vas a exportar se hace así

export const CustomContext = () => {
  const context = useContext(store);
  return context;
};
