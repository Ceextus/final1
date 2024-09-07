import Image from 'next/image';
import React from 'react';
import { Lumiflex } from 'uvcanvas';


const Testimonials = () => {
  return (
    <main className='bg-[url(/wave-haikei.png)] bg-cover bg-center'>
        
      <div className='flex gap-4 items-center justify-center px-4 py-8 bg-blue-600/50 max-md:flex-col'>
      <div className="card2 flex gap-2  justify-center">
        <Image src={'/passport3.png'} width={200} height={200} className='rounded-full w-20 h-20' />
        
        <div className=''>
            <h1 className='text-2xl font-bold text-gray-200 py-2'>Sixtus Ojochegbe Joseph</h1>
            <p className='italic'>On a scale of 1 - 10, the service and environment at early code computer school is certainly a 10, I'd recommend the school to anyone looking to learn just about anything on the co...</p>
        </div>  
        </div> 
        <div className="card2 flex gap-2  justify-center">
        <Image src={'/passport1.jpg'} width={200} height={200} className='rounded-full w-20 h-20' />
        
        <div className=''>
            <h1 className='text-2xl font-bold text-black py-2'>Sixtus Ojochegbe Joseph</h1>
            <p className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus ab labore. Ab temporibus sapiente fugiat tempore porro ea doloribus</p>
        </div>  
        </div>
        <div className="card2 flex gap-2 justify-center">
        <Image src={'/passport2.png'} width={200} height={200} className='rounded-full w-20 h-20' />
        
        <div className=''>
            <h1 className='text-2xl font-bold text-black py-2'>Sixtus Ojochegbe Joseph</h1>
            <p className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus ab labore. Ab temporibus sapiente fugiat tempore porro ea doloribus</p>
        </div>  
        </div>
        
      </div>
      
    </main>
  );
}

export default Testimonials;
