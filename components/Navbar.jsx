import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import th from "../public/assets/images/TH.png"
import {Link} from "react-scroll"
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'experience'
        },
        {
            id: 3,
            link: 'portfolio'
        }
    ]

    return (
        
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div className='flex justify-between items-center w-full h-full px-3 2xl:px-16'>
            <Image src={th} alt="/" width='60' height='40'/>
            <div>
                <ul className='hidden md:flex text-white'>
                    {links.map(({id, link}) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                
            </div>
            </div>
                <div onClick={handleNav} className='md:hidden cursor-pointer pr-4 z-10'>
                    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
                </div>

                {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({id, link}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                        <Link onClick={() => setNav(!nav)}
                        to={link}
                        smooth
                        duration={300}
                        >
                        {link}
                        </Link>
                    </li>
                    ))}
                </ul>
                )}
        </div>
    )
}

export default Navbar;