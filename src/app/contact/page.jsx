"use client"
import React from 'react';
import { motion } from 'framer-motion';
const ContactPage = () => {

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
                    <form action="0">
                        <span>Dear Mahedi Hasan,</span>
                        <textarea name="" id=""></textarea>
                        <span>My mail address is :</span>
                        <input type="text" />
                        <span>Regards</span>
                        <button>Send</button>
                    </form>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactPage;