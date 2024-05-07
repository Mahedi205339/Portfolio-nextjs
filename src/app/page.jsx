/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import "./layout.css"

const Homepage = () => {
  return (
    <div className='h-full flex flex-col '>

      {/* IMAGE CONTAINER */}
      <div className='h-1/2 relative'>
        <Image src="/hero.png" alt='hero' fill className='object-contain' />
      </div>
      {/* TEXT CONTAINER  */}
      <div className='h-1/2 flex flex-col items-start gap-4 justify-center px-5 py-2'>
        <h2>
          Hello
        </h2>
        <h1 className=''>
          I'm Mahedi Hasan
        </h1>
        <p>
          Front-end Web Developer
        </p>
        <p>
          Build a personal website or portfolio that showcases my projects, skills,
          and experience. Include detailed descriptions of the technologies I've used,
          problems I've solved, and the impact of my work.

        </p>
        {/* button  */}
        <div className='flex gap-4'>
          <button className='px-4 py-3 work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>View My Work</button>
          <button class="px-4 py-3 bg-white  rounded-lg border border-cyan-600 gradient-text contact-btn hover:bg-gradient-to-r from-cyan-500 to-blue-600">Contact me</button>

        </div>


      </div >
    </div>
  );
};

export default Homepage;
