'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const ProviderAuth = (props) => {
  return <SessionProvider>{props.children}</SessionProvider>
}

export default ProviderAuth
