import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft} from "react-icons/hi";

const Banner = () => {
        const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://www.justaccountants.co.uk/wp-content/uploads/2013/07/amazon-banner.png",
        "https://x2u3s3r4.stackpathcdn.com/wp-content/uploads/2022/04/Amazon-Unveils-Buy-With-Prime-Expanding-Prime-Shopping-Benefits-Beyond-Amazon.com_.png?x30842",
        "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6567356/pexels-photo-6567356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1 );
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1 );
    };
    console.log(currentSlide);
  return (
  <div className="w-full h-auto overflow-x-hidden">
    <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
            <img className="w-screen h-full object-cover" src={data[0]} alt="ImgOne" loading="priority"/>
            <img className="w-screen h-full object-cover" src={data[1]} alt="ImgTwo"/>
            <img className="w-screen h-full object-cover" src={data[2]} alt="ImgThree"/>
            <img className="w-screen h-full object-cover" src={data[3]} alt="ImgFour"/>
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <HiArrowLeft />
            </div>
            <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <HiArrowRight />
            </div>
        </div>
    </div>
  </div>);
}

export default Banner