import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
  <>
    <div className='flex'>
        <img src='Phone.png' alt="Phone Icon" className='size-7'/>
        <p>+66 2256 4183, +66 2256 4462</p>
        <img src='Mail.png' alt="Mail Icon" className='size-7'/>
        <p>prmdcu@gmail.com</p>
    </div>
  </>
  )
};

export default Navbar;