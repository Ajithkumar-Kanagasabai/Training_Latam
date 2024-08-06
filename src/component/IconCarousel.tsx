"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Google from "../../public/assets/Icons/Google.png";
import Fb from "../../public/assets/Icons/FacebookScroll.png";
import Youtube from "../../public/assets/Icons/YouTubeScroll.png";
import Pinterest from "../../public/assets/Icons/PinterestScroll.png";
import Twitch from "../../public/assets/Icons/Twitch.png";
import Webflow from "../../public/assets/Icons/Webflow.png";

const IconCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    return (
        <div className="mt-20 w-full mx-auto">
            <h1 className='text-center text-[14px] sm:text-[20px] md:text-[30px] lg:text-[36px] font-bold'>Trusted by 10,000+ companies around the world</h1>
            <Slider {...settings} className="mt-12 pl-12 sm:pl-20">
                <div className="flex justify-center">
                    <Image src={Google} alt='Google' />
                </div>
                <div className="flex justify-center">
                    <Image src={Fb} alt='Facebook' />
                </div>
                <div className="flex justify-center">
                    <Image src={Youtube} alt='Youtube' />
                </div>
                <div className="flex justify-center">
                    <Image src={Pinterest} alt='Pinterest' />
                </div>
                <div className="flex justify-center">
                    <Image src={Twitch} alt='Twitch' />
                </div>
                <div className="flex justify-center">
                    <Image src={Webflow} alt='Webflow' />
                </div>
                <div className="flex justify-center">
                    <Image src={Google} alt='Google' />
                </div>
                <div className="flex justify-center">
                    <Image src={Fb} alt='Facebook' />
                </div>
                <div className="flex justify-center">
                    <Image src={Youtube} alt='Youtube' />
                </div>
                <div className="flex justify-center">
                    <Image src={Pinterest} alt='Pinterest' />
                </div>
                <div className="flex justify-center">
                    <Image src={Twitch} alt='Twitch' />
                </div>
                <div className="flex justify-center">
                    <Image src={Webflow} alt='Webflow' />
                </div>
            </Slider>
        </div>
    );
};

export default IconCarousel;
