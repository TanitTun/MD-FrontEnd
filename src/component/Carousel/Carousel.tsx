'use client'

import React, { ReactNode, useState } from 'react';
import './Carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  children: ReactNode; // Allows any valid React children (e.g., JSX, string, etc.)
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const [curr, setCurr] = useState(0);
  console.log(slides)

  const prev = () => 
    setCurr((curr) => (curr===0? slides.length-1 : curr-1 ))
  const next = () => 
    setCurr((curr) => (curr=== slides.length-1 ? 0 : curr+1 ))

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform duration-500'
      style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full max-h-96 object-contain">
            {slide}
          </div>
        ))}
      </div>

      <div className='absolute inset-0 flex items-center
      justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80
        text-gray-800 hover:bg-white'>
          <FaChevronLeft size={40} />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80
        text-gray-800 hover:bg-white'>
          <FaChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
