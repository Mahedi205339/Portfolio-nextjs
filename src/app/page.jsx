"use client"
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import React from 'react';
import "./layout.css"
import { motion } from 'framer-motion'
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div 
    className='h-full'
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration: 1}}
>

      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>

        {/* IMAGE CONTAINER */}
        <div className='h-1/2 relative lg:h-full lg:w-1/2'>
          <Image src="/banner.png" alt='hero' fill className='object-contain' />
        </div>
        {/* TEXT CONTAINER  */}
        <div className='h-1/2 flex flex-col items-start gap-3 justify-center px-5 py-2 lg:h-full lg:w-1/2 '>
          <h2 className='text-base md:text-2xl lg:text-3xl font-semibold'>
            Hello
          </h2>
          <div className='flex items-center gap-1'>

            <div className='text-2xl md:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold effect-text'>
              <Typewriter options={{
                strings: ["I'm Mahedi Hasan"],
                delay: 100,

                autoStart: true,
                loop: true,
              }} />
            </div>


          </div>

          <div className='text-base md:text-xl font-semibold effect-text'>
            <Typewriter options={{
              strings: ["Front-end Web Developer"],
              delay: 100,

              autoStart: true,
              loop: true,
            }} />
          </div>
          <p className='text-xs md:text-base lg:text-base'>
            Build a personal website or portfolio that showcases my projects, skills,
            and experience. Include detailed descriptions of the technologies I've used,
            problems I've solved, and the impact of my work.

          </p>
          {/* button  */}
          <div className='flex gap-4'>
            <Link href="/about">
            <button className='px-3 py-2 md:px-4 md:py-3 text-xs md:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>View My Work</button>
            </Link>
            <Link href="/">
            <button className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-base bg-white  rounded-lg border border-cyan-600 gradient-text contact-btn hover:bg-gradient-to-r from-cyan-500 to-blue-600">Contact me</button>
            </Link>
          </div>


        </div >
      </div>
    </motion.div>
  );
};

export default Homepage;
