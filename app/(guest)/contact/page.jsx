
import React from 'react';
import { FiMessageCircle } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { SlCallEnd } from "react-icons/sl";
import Link from 'next/link';


const page = () => {
  return (
    <main className='bg-blue-100 h-dvh flex justify-center items-center'>
        
        <div className='w-[60rem] h-[40rem] bg-blue-400 flex flex-col gap-[3rem] justify-center '>
            <div className='ml-[4rem]  '>
                <p className='text-white font-semibold underline flex justify-center text-lg'>Recommended</p>
            </div>
            <div className='flex justify-center'>

            <div className='flex flex-col w-[15rem] text-center ml-[4rem] justify-center '>
                
                <p className='text-3xl text-white font-bold mx-auto'><FiMessageCircle/></p>
                <Link href='#' ><p className='text-white hover:underline font-semibold'>Message Us</p></Link> 
                <p className='text-sm text-white italic'>Chat with a Todo assistant directly or leave a message for one of our agents</p>
            </div>
            </div>

            <div className='ml-[4rem] '>
                <p className='text-white font-semibold underline flex justify-center text-lg'>Other Methods</p> 
            </div>

            <div className='flex justify-between mx-auto gap-[10rem] '>
            <div className='flex flex-col w-[10rem] text-center '>
                
                <p className='text-3xl text-white font-bold mx-auto'><FaPeopleGroup/></p>
                <Link href='#' ><p className='text-white hover:underline font-semibold'>Ask the community</p></Link> 
                <p className='text-sm text-white italic'>Find others with the same issues</p>
            </div>

            <div className='flex flex-col w-[10rem] text-center '>
                
                <p className='text-3xl text-white font-bold mx-auto'><FaHandshake/></p>
                <Link href='#' ><p className='text-white hover:underline font-semibold'>Resolution Center</p></Link> 
                <p className='text-sm text-white italic'>Resolve transaction or account issues</p>
            </div>

            <div className='flex flex-col w-[7.5rem] text-center '>
                
                <p className='text-3xl text-white font-bold mx-auto'><SlCallEnd/></p>
                <Link href='#' ><p className='text-white hover:underline font-semibold'>Call Us</p></Link> 
                <p className='text-sm text-white italic  '> We'll answer as soon as we can</p>
            </div>




            </div>

        </div>

      
    </main>
  );
}

export default page;
