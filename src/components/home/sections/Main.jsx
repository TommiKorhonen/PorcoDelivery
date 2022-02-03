import React from 'react';
import Header from '../hero/Header';
import Features from './features/Features';
import Story from './story & values/Story';

const Main = () => {
    return (
        <main className=' bg-gray-50'>
            <Header />
            <div className='min-h-screen'>
                <Features />
                <Story />
            </div>
        </main>
    )
};

export default Main;
