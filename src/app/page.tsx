import React from "react";
import Navbar from "@/component/Navbar/Navbar";
import Carousel from "@/component/Carousel/Carousel";

const slides = [
  '/Slide1.jpg',
  '/Slide2.jpg',
  '/Slide3.jpg',
  '/Slide4.jpg',
  '/Slide5.jpg',
  '/Slide6.jpg',
  '/Slide7.jpg',
]

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel>
        {slides.map((s,index)=>(
          <img key={index} src={s} alt={`Slides ${index+1}`} />
        ))}
      </Carousel>
    </div>
  );
}
