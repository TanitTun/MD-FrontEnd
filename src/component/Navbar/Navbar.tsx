import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
  <>
    <div className='max-w-[1140px] flex p-0 mx-auto'>
        <img src='Phone.png' alt="Phone Icon" className='size-7 mr-2.5'/>
        <p>+66 2256 4183, +66 2256 4462</p>
        <img src='Mail.png' alt="Mail Icon" className='size-7 mx-1'/>
        <p>prmdcu@gmail.com</p>
        <img src="/Question.png" alt="Question Icon" className='size-7 mx-1'/>
        <p>Help Desk</p>
    </div>
  </>
  )
};

export default Navbar;