"use client"
import React from 'react';
import { motion } from 'framer-motion';
const PortfolioPage = () => {
    return (
        <motion.div
        className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
    >
        <div>
            portfolio page
            <h2>Portfolio will show here</h2>
            <h2>Portfolio will show here</h2>
            <h3>texting github commit if it working</h3>
        </div>
    </motion.div>
    );
};

export default PortfolioPage;