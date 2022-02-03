import React from 'react';
import { featuresData } from './featuresData';
const Cards = () => {
    return (
        <div className='grid gap-8 sm:gap-0 p-4 sm:p-0 container bg-white mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 transform md:translate-y-[-40px]'>
            {featuresData.map((feature) => {
                return (
                    <article key={feature.id} className='flex flex-col gap-2 shadow-lg border border-solid p-4'>
                        <img className=' rounded-sm' src={feature.src} alt="" />
                        <h3 className=' mt-2 md:text-xl lg:text-2xl uppercase font-semibold text-gray-600'>{feature.heading}</h3>
                        <p className=' text-gray-500'>{feature.paragraph}</p>
                    </article>
                )
            })}
        </div>
    )
};

export default Cards;
