"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const images = [
    '/assets/Home/ImagePlaceholder.png',
    '/assets/Home/ImagePlaceholder.png',
    '/assets/Home/ImagePlaceholder.png',
];

const HeroSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} className="my-5 relative">
            {images.map((image, index) => (
                <div key={index} className="relative flex items-center justify-center">
                    <Image src={image} alt={`Slide ${index}`} width={1920} height={1080} className="object-cover" />
                    <Image
                        src="/assets/Home/OverlayImage.png"
                        alt="Overlay"
                        width={1920}
                        height={1080}
                        className="absolute inset-0 w-full h-full object-cover opacity-100"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className="flex md:hidden px-[10%] text-white text-lg font-bold text-center" style={{ lineHeight: "25px" }}>The Future Of Technology Is In Latam. Learn The Tools With Us, Boost Your Skills And Build Your Dreams!</h1>
                        <h1 className="hidden md:flex lg:hidden px-[10%] text-white text-2xl font-bold text-center" style={{ lineHeight: "35px" }}>The Future Of Technology Is In Latam. Learn The Tools With Us, Boost Your Skills And Build Your Dreams!</h1>
                        <h1 className="hidden lg:flex px-[10%] text-white text-4xl font-bold text-center" style={{ lineHeight: "70px" }}>The Future Of Technology Is In Latam. Learn The Tools With Us, Boost Your Skills And Build Your Dreams!</h1>
                        <div className="flex mt-4 lg:mt-12 space-x-4">
                            <button className="bg-[#20C997] text-black py-3 px-8 rounded-3xl">View Course &rarr;</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default HeroSlider;
