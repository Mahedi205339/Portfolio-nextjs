"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
const PortfolioPage = () => {



    return (
        <motion.div
            className='h-full'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-[600vh]' >
                <motion.div
                    className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center"
                    initial={{ y: "0%", fontSize: "8rem" }}
                >
                    My Projects
                </motion.div>
                <div className='h-[100vh] bg-gradient-to-t bg-cyan-500 to to-blue-500'>
                    {/* Content goes here */}
                    
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;


