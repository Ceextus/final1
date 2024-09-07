"use client"
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { LuLoader2 } from "react-icons/lu";

const GithubSignin = () => {

  const [processing, setProcessing] = useState(false)

  const handleSignIn = () => {
    signIn('github', { callbackUrl: '/' })
    setProcessing(true)
  }

  return (
    <button
      disabled={processing}
      onClick={handleSignIn}
      className='rounded-full border py-2 px-3 w-full text-lg flex items-center justify-center'
    >
      <FaGithub className='text-2xl' />
      <span className='mx-auto'>Continue with Github</span>

      {processing && <LuLoader2 className='animate-spin text-2xl'/>}
    </button>
  )
}

export default GithubSignin