"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({link}) => {

    const pathName = usePathname()
    // console.log(pathName);
   

    return (
        <div>
            <Link className={` rounded p-1 ${pathName  === link.url && "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2"} `} href={link.url}>{link.title}</Link>
        </div>
    );
};

export default NavLinks;