"use client"
import Link from 'next/link'
import React from 'react'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'




const page = () => {

  return (
    <main className='h-dvh bg-[url(/bg.png)] bg-cover bg-center max-lg:h-dvh'>
      <div className='h-dvh bg-black/70'>
        <div className='flex flex-col gap-[8rem] items-center justify-center text-white h-dvh w-[50rem] max-lg:w-full mx-auto max-lg:p-5'>
       
          <p className='text-2xl text-center max-md:text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vel dignissimos doloremque sit necessitatibus ratione et doloribus cumque vitae iusto, reprehenderit aspernatur in itaque saepe quam blanditiis voluptatibus similique id non mollitia ducimus repellendus! Vitae fugit ullam inventore iure optio.
          </p>
          <div className='flex gap-[8rem] max-lg:gap-5 max-lg:flex-col '>
            <button
              className='border p-3 max-lg:p-2 text-3xl max-lg:text-lg rounded-lg hover:text-black hover:bg-white transition-all max-lg:w-full'
            >
              <Link href={'#'}>Learn More</Link>
            </button>
            <button
             className='border p-3 max-lg:p-2 text-3xl max-lg:text-lg rounded-lg hover:text-black hover:bg-white transition-all max-lg:w-full'
            >
              <Link href={'/signin'}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
      <Testimonials/>
      <Footer/>
      
    </main>
    
  )
}


export default page