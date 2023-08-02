"use client"

import Link from "next/link"

export default function error ({error,reset}){
    return(
        <div className="absolute">
             <h1>Ocurrio un error :{error.message}</h1>
             <button onClick={reset}>recargar</button>
             <Link href={'/'} >
             
             <button>Ir al inicio</button>
             </Link>
        </div>
    )
}