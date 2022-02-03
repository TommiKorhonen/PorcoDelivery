import React from 'react';
import Header from '../hero/Header';
import Features from './features/Features';
import Stats from './stats/Stats';
import Story from './story & values/Story';

const Main = () => {
    return (
        <main className='bg-gray-50'>
            <Header />
            <Features />
            <Story />
            <Stats />
        </main>
    )
};

export default Main;
