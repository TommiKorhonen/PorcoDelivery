import React, { useState } from 'react';
import Box from "../../images/Box.png"
import { MenuIcon } from '@heroicons/react/solid'
import Dropdown from './Dropdown';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='sticky top-0 z-50 bg-white shadow-md'>
            <div className='flex justify-around'>
                <div className='flex items-center'>
                    <img src={Box} alt="" className='h-24 w-24' />
                    <h2 className='text-2xl font-bold'>Porcodelivery</h2>
                </div>
                <ul className='hidden lg:flex gap-8 items-center text-xl uppercase'>
                    <li className='menuItems'>Home</li>
                    <li className='menuItems'>About</li>
                    <li className='menuItems'>Careers</li>
                    <li className='menuItems'>Contact</li>
                </ul>
                <MenuIcon onClick={() => toggle()} className='w-10 lg:hidden cursor-pointer' />
            </div>
            {isOpen ? <Dropdown /> : ""}
        </nav>
    )
};

export default NavBar;
