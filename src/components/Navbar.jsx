import Link from 'next/link'
import React from 'react'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 lg:px-20 sm:px-8 md:px-20 xl:px-48'>
      {/* Logo  */}
      <div>
        <Link href="/" className='text-sm bg-black rounded-md font-bold flex items-center border-black border-2'>
          <span className='text-white pl-2'>MAH</span>
          <span className='w-12 h-8 bg-white text-black flex items-center justify-center pr-2'>EDI</span></Link>

      </div>
      {/* RESPONSIVE  */}
      <div>
        {/* Menu button  */}
        <button >
          <div className='w-10 h-8 flex flex-col justify-center'></div>
          <div className='w-10 h-8 flex flex-col justify-center'></div>
          <div className='w-10 h-8 flex flex-col justify-center'></div>

        </button>
        {/* Menu List  */}
        <div className='absolute top-0 left-0 h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map(link => (
            <Link key={link.title} href={link?.url}></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar