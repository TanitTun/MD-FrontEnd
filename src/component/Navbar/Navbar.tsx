import React from 'react';
import './Navbar.css';
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
  // information section
  <div className='header-wrapper'>
    <div className='top-navigation-wrapper'>
      <div className='max-w-[1140px] flex p-0 mx-auto'>
        <div className='top-navigation-left-text flex'>
          <img src='Phone.png' alt="Phone Icon" className='size-5 mr-2'/>
          <i className='mr-3.5 px-0'>+66 2256 4183, +66 2256 4462</i>
          <img src='Mail.png' alt="Mail Icon" className='size-5 mr-2'/>
          <i className='mr-3.5 px-0'>prmdcu@gmail.com</i>
          <img src="/Question.png" alt="Question Icon" className='size-5 mr-2'/>
          <i className='mr-3.5 px-0'>Help Desk</i>
        </div>
      </div>
    </div>

    {/* navigator section */}
    <div className='logo-container'>
      <img src="MD-Logo.png" alt="MD-Logo" className='align-middle max-w-full h-auto w-auto' />
    </div>

    <div className="navigation-wrapper">
      <nav className='block'>
        <ul className='main-menu'>
          <li><Link href="/prospective-students" className=''>ผู้สนใจสมัครเรียน</Link></li>
          <li><Link href="/current-students" className=''>นิสิตปัจจุบัน</Link></li>
          <li><Link href="/faculty-and-staff" className=''>อาจารย์และบุคลากร</Link></li>
          <li><Link href="/general-visitors" className=''>บุคคลทั่วไป</Link></li>
        </ul>
      </nav>
    </div>

  </div>
  )
};

export default Navbar;