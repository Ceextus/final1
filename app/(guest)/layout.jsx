"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthProvider from '../components/AuthProvider'
import { Toaster } from '@/components/ui/toaster'
// import { Toaster } from '@/components/ui/toaster'

const layout = ({ children }) => {
  return (
    <main>
      <AuthProvider>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Toaster/>
      </AuthProvider>
    </main>
  )
}

export default layout