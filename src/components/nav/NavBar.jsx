import React, { useState } from 'react';
import Box from "../../images/Box.png"
import { MenuIcon } from '@heroicons/react/solid'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='flex justify-around sticky top-0 z-50 bg-white shadow-md'>
            <div className='flex items-center'>
                <img src={Box} alt="" className='h-24 w-24' />
                <h2 className='text-2xl font-bold'>Porcodelivery</h2>
            </div>
            <ul className='hidden md:flex gap-8 items-center text-xl uppercase'>
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <MenuIcon onClick={() => toggle()} className='w-10 md:hidden cursor-pointer' />
        </nav>
    )
};

export default NavBar;
