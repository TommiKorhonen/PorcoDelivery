import React from 'react';
import { statsData } from './statsData';
const Cards = () => {
    return <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center gap-8 sm:gap-0 p-4 sm:p-0 container mx-auto'>
        {statsData.map((stat) => {
            return (
                <article key={stat.id} className='flex bg-white flex-col items-center justify-center gap-2 shadow-md border border-solid p-4'>
                    {stat.src}
                    <h3 className=' mt-2 md:text-xl lg:text-2xl uppercase font-semibold text-gray-600'>{stat.heading}</h3>
                    <p className=' text-gray-500'>{stat.paragraph}</p>
                </article>
            )
        })}
    </div>
};

export default Cards;
