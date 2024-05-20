/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import '../../components/text.css'
const PortfolioPage = () => {

    return (
        <motion.div
            className='h-auto '
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full' >
                <div
                    className="w-screen text-4xl lg:text-5xl xl:text-8xl font-semibold transition-pathText h-[calc(100vh-6rem)] flex items-center justify-center  text-center"
                >
                    My Projects
                </div>
                <div className='h-full bg-gradient-to-t bg-cyan-600 flex flex-col justify-center items-center gap-y-10 gap-x-7'>
                    {/* Content goes here */}

                    {/* PROJECT 1:DELTA-TRANSLATE */}
                    <div className=' h-[100vh] w-9/12 mx-auto flex items-center'>
                        <div className='h-full w-full flex flex-col lg:flex-row justify-between items-center mx-auto  lg:gap-x-10 '>
                            <Image className=' flex-1' src="/delta.gif" alt='car' width={500} height={300} />
                            <div className=' flex-1'>
                                <h2 className='text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-4 transition-pathText'>Delta Translate <span className='text-sm md:text-lg lg:text-xl font-semibold text-black'>(Team Project)</span></h2>
                                <p className='text-[14px] max-w-2xl'>
                                      It's a Language translating web app.
                                      By using this website user can translate their word , sentence , paragraph and even pdf files.
                                      <br />
                                      My contribution in this project :
                                      <br />
                                      SingUp and login page.
                                      <br />
                                      Some layout related design and,
                                      <br />
                                      Translating pdf and and translating pdf download section. 
                                </p>
                                <div className='flex flex-row gap-4 mt-5'>
                                <Link href="/about">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live Site</button>
                                    </Link>

                                    <Link href="/about">
                                    <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Source code</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* PROJECT-2: AUTOMOTIVE CARE */}

                    <div className='h-[100vh] w-9/12 mx-auto '>
                        <div className='h-full flex flex-col lg:flex-row justify-between items-center lg:gap-x-10 '>
                            <Image className='flex-1' src="/car.gif" alt='car' width={500} height={300} />
                            <div className='flex-1'>
                                <h2 className='text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mb-4 transition-pathText'>Automotive Care</h2>
                                <p className='text-[14px] max-w-2xl'>
                                    The website features an intuitive search functionality that allows users to easily find their desired car models by filtering through various options such as make, model, year, and price range.
                                    <br />
                                    With a sleek and modern design, the website provides detailed car listings complete with high-quality images, comprehensive specifications, and user reviews to help buyers make informed decisions.
                            
                                </p>
                                <div className='flex flex-row gap-4 mt-5'>
                                    <Link href="/about">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live Site</button>
                                    </Link>

                                    <Link href="/about">
                                    <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Source code</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* PROJECT 3:EMPLOYEE MANAGEMENT */}

                    <div className='h-[100vh] w-9/12 mx-auto '>
                        <div className='h-full flex flex-col lg:flex-row justify-between items-center  lg:gap-x-10 '>
                            <Image className='flex-1' src="/employee.gif" alt='car' width={500} height={300} />
                            <div className='flex-1'>
                                <h2 className='text-xl transition-pathText md:text-2xl lg:text-3xl font-semibold mb-4'>Employee Management</h2>
                                <p className='text-[14px] max-w-2xl'>
                                    This web is about maintaining employee.Basically it's a Employee Management web app.
                                    <br />
                                    This website has user role base authentication and
                                    <br /> 
                                    Stripe payment method also integrated in this web app.
                                </p>
                                <div className='flex flex-row gap-4 mt-5'>
                                <Link href="/about">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live Site</button>
                                    </Link>

                                    <Link href="/about">
                                    <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Source code</button>
                                    </Link>


                                </div>
                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;


