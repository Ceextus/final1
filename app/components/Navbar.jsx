"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LuLoader2 } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  
  const { data: session, status } = useSession()
  const [navOpen, setNavOpen] = useState(false)
  const navLists = [
    {
      id: 1,
      href: "/",
      title: "Home"
    },
    {
      id: 2,
      href: "/about",
      title: "About"
    },
    {
      id: 3,
      href: "/contact",
      title: "Contact"
    },
    
  ]
  console.log(session, status)
  if(status=='authenticated'){
    navLists.push({
      id: 4,
      href: "/todo",
      title: "To-Do", 
    })
  }
  // let x = 3
  // const [navOpen, setNavOpen] = useState(false)

  // const { data: session, status } = useSession()

  // console.log(session, status);
  

  // console.log(session.user.name);

  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
      <Link href={'/'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center z-50'>
        <Image src={'/logo.png'} width={200} height={200} className='rounded-full w-14 h-14' />
        <span>to-do</span>
      </Link>

      <ul className={`flex gap-14 max-lg:flex-col  max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:h-dvh max-lg:top-0 max-lg:right-0 max-lg:bg-slate-200/90 transition-all ml-auto ${!navOpen ? "max-lg:translate-x-full" : ""} `}>
        {navLists.map((list) => (

          <li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>
            <Link href={list.href}>
              {list.title}
            </Link>
          </li>
        ))}
      </ul>

      {
        status == 'loading' ? (<LuLoader2 className='animate-spin text-2xl text-blue-600'/>) :
          status == 'unauthenticated' ? (
            <Link href={'/signin'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600 ml-10'>Sign In</Link>
          ) : (
            
            <div className='px-4'>
              <DropdownMenu className='mx-10'>
              <DropdownMenuTrigger className='outline-none'>
                <Avatar>
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>
                    {session.user.name.slice(0,2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem href={'/todo'}>To Do</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>

          )
      }

      <button
        onClick={() => setNavOpen(!navOpen)}
        className='lg:hidden z-50'
      >
        {navOpen ? <IoMdClose className='text-2xl text-blue-600' /> : <MdOutlineMenu className='text-2xl text-blue-600' />}
      </button>
    </nav>
  )
}

export default Navbar