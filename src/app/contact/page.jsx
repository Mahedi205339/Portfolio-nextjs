"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';

const ContactPage = () => {

    // const [success, setSuccess] = useState(true)
    // const [error, setError] = useState(false)
    const text = "Contact Me";
    //    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, 'template_qqfb71d', form.current, 'WW-EyD5gED4_nzldg')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                toast.success('message sent')
            }, (error) => {
                console.log(error.text);
            });
    }




    return (
        <motion.div
            className='min-h-screen overflow-y-scroll md:overflow-y-hidden lg:overflow-y-hidden xl:overflow-y-hidden'
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2 }}
        >

            <Toaster />
            <div className='h-full flex flex-col items-center lg:flex-row px-5 lg:px-20 xl:px-48 gap-3'>
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
                        😎
                    </div>


                </div>
                {/* FORM CONTAINER */}
                <div className='h-1/2 flex-1  bg-blue-100 backdrop:blur-md rounded-lg text-base'>
                    <form ref={form} onSubmit={sendEmail} className="h-1/2 lg:h-full flex flex-col gap-8 justify-center p-12 md:p-24">

                        <span>Dear Mahedi,</span>

                        <div className="relative z-0 my-5">
                            <div className="flex flex-row items-center">
                                <textarea
                                    rows={3}
                                    name="message"
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
                                    name="your_email"
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
                            <button className='px-4 py-3 text-base  work-text rounded-lg ring-black bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-2'>Submit</button>

                        </div>
                    </form>
                    <div className='flex md:hidden justify-center gap-6 mb-3 items-center'>
                        {/* TODO : input valid profile links */}
                        <Link href="/https://github.com/Mahedi205339">
                            <Image src="/github.png" alt='github' width={32} height={32} />
                        </Link>

                        <Link href="/https://www.linkedin.com/in/mahedi205339/">
                            <Image src="/linkedin.png" alt='linkedin' width={32} height={32} />
                        </Link>

                        <Link href="/https://www.facebook.com/profile.php?id=100077396804897">
                            <Image src="/facebook.png" alt='facebook logo' width={32} height={32} />
                        </Link>

                        <Link href="/https://www.instagram.com/mahedi_hasan_turag/">
                            <Image src="/instagram.png" alt='instagram' width={32} height={32} />
                        </Link>

                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactPage;