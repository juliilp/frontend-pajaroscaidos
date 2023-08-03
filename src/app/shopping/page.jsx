"use client"
import React from "react";
import shopimage from '../../../public/images/shopimage.png'
import Image from "next/image";
import ShoppingCards from "@/components/Shop/ShoppingCards";
import font from '../../styles/fonts.module.css'
export default function Shopping() {
    
 const faketotal='12345678912345698711522552'.split('')
    return (
        <div className={`${font.baloo} min-h-screen flex flex-col items-center pt-40 gap-10`}>
            <h1 className=" text-lettersgray font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">NUESTRA TIENDA</h1>

            <main className="w-full flex justify-between items-center">
                <article className=" hidden sm:flex w-6/12  justify-center ">
                    <Image src={shopimage} alt="shopimage" className=" border w-[30rem] h-auto" />
                </article>
                <article className="w-full p-1 sm:w-5/12  lg:px-6 xl:px-10 2xl:px-12   ">
                    <p className=" 
                     md:text-base md:leading-7
                     lg:text-lg lg:leading-8
                     xl:text-xl xl:leading-8
                     2xl:text-2xl  2xl:leading-10
                     text-center">
                        <b className=" font-semibold ">
                            Contamos con una gran variedad de productos con
                            Sentido Social que contribuyen de manera significativa al sostenimiento de la labor social.
                            Todos nuestros productos son pensados con amor.
                        </b>
                    </p>
                </article>
            </main>
             <section className="w-10/12 flex justify-center md:justify-end">
             <button className="  text-white bg-green p-2 w-[8rem] md:p-3 hover:text-gray-100 hover:bg-[#13b113]">
                Donar
            </button>
             </section>
            <section className="  w-full  m-auto grid gap-y-10 
             grid-cols-1 
             min-[350px]:grid-cols-2
             min-[400px]:grid-cols-2
            lg:grid-cols-3
            xl:w-11/12 xl:gap-14
            2xl:grid-cols-4
            2xl:w-10/12   2xl:gap-16 ">
               {faketotal.map((i,index)=>
                <ShoppingCards
                key={index}
                title={`Producto ${index + 1}`}
                detail={`descripcion del producto ${index + 1},qwertyuiopasdfghjklzxcvbnmqwertyuopasdfghjklzxcvbnmqwertyuopasdfghjklzxcvbnmqwertyuopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm`}
               />
               )}
            </section>
        </div>
    )
}
