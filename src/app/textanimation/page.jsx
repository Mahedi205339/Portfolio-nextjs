"use client"
import React from 'react';
import { motion } from 'framer-motion'


const TextPage = () => {

  const variants = {
        variant1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition:{
                duration:3
            }
        },
        variant2: {
            x: 100,
            y: -300,
            rotation: 90,
        },
    };


    return (
        <div className='h-full flex items-center justify-center'>
            <motion.div
                className='w-96 h-96 bg-red-500 rounded-lg'
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                // whileHover={{ scale: 1.5 }}
                // whileTap={{ scale: 0.9 }}

                initial={{ x: -100 }}
                // animate={{ x: 400, y: 300, opacity: 0.5 }}
                transition={{ delay: 2, duration: 4 }}
                variants={variants}
                animate="variant1"
                // animate="variant2"
            >
                <h3>hello</h3>
            </motion.div>

        </div>
    );
};

export default TextPage;