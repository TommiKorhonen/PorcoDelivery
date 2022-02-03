import React from 'react';

const Dropdown = () => {
  return (
    <ul className='flex flex-col text-xl transition duration-500 ease-in-out"'>
      <li className='p-4 border'>Home</li>
      <li className='p-4 border'>About</li>
      <li className='p-4 border'>Careers</li>
      <li className='p-4 border'>Contact</li>
    </ul>
  )
};

export default Dropdown;
