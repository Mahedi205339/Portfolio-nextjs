"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const ContactPage = () => {

    const [success, setSuccess] = useState(true)
    const [error, setError] = useState(false)
    const text = "Say Hello";




    return (
        <motion.div
            className='h-full'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                {/* Text container */}
                <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl'>
                    <div className=''>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * .1
                                }}
                            >{letter}</motion.span>
                        ))}
                        😉
                    </div>

                </div>
                {/* FORM CONTAINER */}
                <div className=''>
                    <form className="h-1/2 lg:h-full bg-blue-100 backdrop:blur-md rounded-lg text-base flex flex-col gap-8 justify-center p-24">

                        <span>Dear Mahedi,</span>

                        <div className="relative z-0 my-5">
                            <div className="flex flex-row items-center">
                                <textarea
                                    rows={3}
                                    name="text"
                                    className="resize-none peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-black focus:border-blue-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />

                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                    Your text
                                </label>
                            </div>

                        </div>
                        <div className="relative z-0 my-5">
                            <div className="flex flex-row items-center">
                                <input
                                    name="emails"
                                    className="resize-none peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-black focus:border-blue-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />

                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                                    My email address
                                </label>
                            </div>
                        </div>

                        <span>Regards</span>

                        <div>
                            <button className='px-3 py-2 md:px-3 md:py-3 lg:px-4 lg:py-3 text-xs lg:text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-2'>Submit</button>
                            <div>
                                {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
                                {error && <span className='text-red-600 font font-semibold'>Something went wrong!</span>}
                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactPage;