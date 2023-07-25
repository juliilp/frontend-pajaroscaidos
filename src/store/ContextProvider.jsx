"use client";
import { createContext, useContext, useState } from "react";
const store = createContext();

// Para traerte lo que vas a exportar se hace así
// const {numero} = customContext()
export const customContext = () => {
  const context = useContext(store);
  return context;
};
export default function ContextProvider({ children }) {
  // La logica que queres exportar la escribís acá abajo

  const [numero, setNumero] = useState(5);

  return (
    <store.Provider
      // Dentro del value va lo que queres exportar
      value={{ numero }}
    >
      {children}
    </store.Provider>
  );
}
