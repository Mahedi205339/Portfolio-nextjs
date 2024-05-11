"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import NavLinks from './navLinks'
import { motion } from 'framer-motion';
import Link from 'next/link';
import './text.css'


const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {

  const [open, setOpen] = useState(false)


  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className='h-full flex items-center justify-between px-4 lg:px-20 sm:px-8 md:px-20 xl:px-48'>
      {/* LINKS  */}
      <div className='hidden md:flex gap-4 w-1/3  text-base'>
        {
          links.map(link => (
            <NavLinks key={link.title} link={link} />
          ))
        }
      </div>
      {/* Logo  */}
      <div className='md:hidden lg:flex w-1/3  xl:justify-center xl:items-center'>
        <a href="/" className='text-xl bg-black rounded-md font-bold flex items-center border-black border-2'>
          <span className='text-white pl-2 pr-1 bg-gradient-to-r from-cyan-500 to-blue-600'>MAH</span>
          <span className=' h-8 bg-white text-black pr-2 flex justify-center items-center '>EDI.</span>
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
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>

        </button>
        {/* Menu List  */}
        {
          open &&
          <motion.div variants={listVariants} initial="closed" animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black  flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link className='transition-pathText' href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        }

      </div>
    </div>
  )
}

export default Navbar
