"use client"
import Image from 'next/image'
// import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='h-full flex items-center justify-between px-4 lg:px-20 sm:px-8 md:px-20 xl:px-48'>
      <div className='hidden md:flex gap-4 w-1/3'>
        {
          links.map(link => (
            <a key={link.title} href={link.url}>{link.title}</a>
          ))
        }
      </div>
      {/* Logo  */}
      <div className='md:hidden lg:flex w-1/3  justify-center items-center'>
        <a href="/" className='text-sm bg-black rounded-md font-bold flex items-center border-black border-2'>
          <span className='text-white pl-2 pr-1'>MAH</span>
          <span className='w-12 h-8 bg-white text-black flex items-center justify-center pr-2 font-bold'>EDI</span>
        </a>

      </div>
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        {/* TODO : input valid profile links */}
        <a href="/">
          <Image src="/github.png" alt='github' width={24} height={24} />
        </a>

        <a href="/">
          <Image src="/linkedin.png" alt='linkedin' width={24} height={24} />
        </a>

        <a href="/">
          <Image src="/facebook.png" alt='facebook logo' width={24} height={24} />
        </a>

        <a href="/">
          <Image src="/instagram.png" alt='instagram' width={24} height={24} />
        </a>

      </div>

      {/* RESPONSIVE  menu*/}
      <div className='md:hidden'>
        {/* Menu button  */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className='w-10 h-8 flex flex-col justify-center'></div>
          <div className='w-10 h-8 flex flex-col justify-center'></div>
          <div className='w-10 h-8 flex flex-col justify-center'></div>

        </button>
        {/* Menu List  */}
        {/* {
          open && open
        } */}
        <div className='absolute top-0 left-0 h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map(link => (
            <a key={link.title} href={link?.url}></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
