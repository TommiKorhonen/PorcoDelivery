import React from 'react';
import rekka from "../../../../images/trucking.jpg"
const Story = () => {
    return (
        <section className='p-4 mt-8 flex flex-col md:flex-row justify-center gap-8'>
            <div className='flex flex-col justify-center'>
                <h2 className='mt-4 underline decoration-red-700 text-3xl uppercase text-gray-600 font-bold'>
                    Our Story
                </h2>
                <p className='text-gray-500 mt-3 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae aliquam excepturi nam maiores, ipsam ipsum corrupti nesciunt deleniti aut magnam minima alias ex corporis animi, nihil dolorem beatae hic.</p>
                <p className='uppercase underline mt-2 text-gray-600 font-medium'>More about us</p>
            </div>
            <div>
                <img src={rekka} alt="" className='rounded-md' />
            </div>
        </section>
    )
};

export default Story;
