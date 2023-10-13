"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { BiSolidUserX } from "react-icons/bi";

export default function Ban() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      signOut();
    }
  }, [session]);

  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="bg-[#3D3D3D] flex flex-col justify-center items-center gap-7 text-white rounded-lg px-16 py-8">
        <div className="flex gap-3 items-end">
          <BiSolidUserX size={40} color="#D22929" />
          <h1 className="font-semibold text-3xl">
            Oops! Tu cuenta ha sido baneada
          </h1>
        </div>
        <p className="text-base">
          Ponte en contacto con administración para tener mas información.
        </p>
        <button className="bg-[#60EA4A] px-4 py-2 font-semibold rounded-md text-black">
          <a
            href="mailto:pajaroscaidos@yahoo.com.ar?subject=Usuario%20baneado"
            target="_blank"
          >
            Contacto
          </a>
        </button>
      </div>
    </section>
  );
}
