import React from 'react';

const Header = () => {
    return (
        <header className='flex bg-hero-bg min-h-screen bg-cover bg-no-repeat bg-center'>
            <div className='flex container mx-auto px-8 py-72'>
                <h1 className="text-4xl lg:text-7xl leading-tight uppercase font-black text-white">
                    Your ultimate trucking and
                    <br />
                    warehouse services
                </h1>
            </div>
        </header>
    )
};

export default Header;
