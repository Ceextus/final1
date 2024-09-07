"use client"
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { LuLoader } from "react-icons/lu"


const GoogleSignin = () => {
 const [processing, setProcessing]=useState(false)

  const handleSignIn=()=>{
    signIn('google', {callbackUrl: '/'});
    setProcessing(true)
    
  }
  return (
    <main>

      <button
      disabled={processing}
      onClick={handleSignIn}
        className='rounded-full border py-2 px-3 w-full text-lg flex items-center justify-center'
      >

        <FcGoogle className='text-2xl' />
        <span className='mx-auto'>Continue with Google</span>
        {processing && <LuLoader className='animate-spin '/>}
      </button>
    </main>
  )
}

export default GoogleSignin