import React from 'react';

const Header = () => {
    return (
        <header className='flex bg-hero-bg h-[500px] lg:h-[500px] xl:h-[600px] bg-cover bg-no-repeat bg-center'>
            <div className='flex flex-col container mx-auto px-8 pt-20 sm:pt-28 md:pt-36 xl:pt-52'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight uppercase font-black text-white">
                    Your ultimate trucking and
                    <br />
                    warehouse services
                </h1>
                <div className='flex max-w-xs sm:max-w-3xl flex-wrap sm:flex-nowrap gap-4 sm:gap-8 mt-8'>
                    <button className='bg-red-700 hover:border-2 headerBtn'>Get in touch</button>
                    <button className='border-2 hover:bg-red-700 border-solid headerBtn'>About Us</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
