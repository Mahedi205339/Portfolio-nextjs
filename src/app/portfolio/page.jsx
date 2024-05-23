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
                  <h1> My Projects</h1> 
                  <motion.svg
                    initial={{ opacity: 0.2, y: 0 }}
                    animate={{ opacity: 1, y: "10px" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={70}
                    height={100}
                >
                    <path
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                        d="M15 11L12 14L9 11"
                        stroke="#000000"
                        strokeWidth="1"
                    ></path>
                </motion.svg>
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
                                <p className='text-red-500'>This is a private project. Source core would not be available</p>
                                <div className='flex flex-row gap-4 mt-5'>
                                    <Link href="https://delta-translator-ac8d6.web.app/">
                                        <button className='px-3 py-2 md:px-4 md:py-3 text-xs md:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live site</button>
                                    </Link>

                                    <Link href="https://github.com/deltatranslator/translator-delta-client">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:'>Source code</button>
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
                                    <Link href="https://automotive-assignment-10.web.app/">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live Site</button>
                                    </Link>

                                    <Link href="https://github.com/Mahedi205339/automotive-care-client-side">
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
                                    <Link href="https://employmahedia-12.surge.sh">
                                        <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>Live Site</button>
                                    </Link>

                                    <Link href="https://github.com/Mahedi205339/employee-management-client">
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


