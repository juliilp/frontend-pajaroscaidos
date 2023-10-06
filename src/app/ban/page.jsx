"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

export default function Ban() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      signOut();
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h1>
        Te baneamos la cuenta capo! Ponete en contacto con administración para resolver el problema
        xd
      </h1>
    </div>
  );
}
