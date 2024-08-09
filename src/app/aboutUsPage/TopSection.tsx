import React from 'react';
import About1 from "../../../public/assets/about/Banner.png";
import About2 from "../../../public/assets/about/Rectangle 3.png";
import Image from 'next/image';

const TopSection: React.FC = () => {
    return (
        <div className="w-full">
            <section className="px-4 md:px-20 mt-8 bg-white grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex items-center justify-center relative overflow-hidden">
                    <Image src={About1} alt="About Us" className="shadow-lg w-full lg:h-[600px]" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className="px-[10%] text-white text-4xl font-bold text-center" style={{ lineHeight: "50px" }}>The Future Of Technology Is In Latam. Learn The Tools With Us, Boost Your Skills And Build Your Dreams!</h1>
                    </div>
                </div>
                <div className='pl-8'>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 mt-4 lg:mt-0">ABOUT US</h2>
                    <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                    <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                    <div className="h-1 w-4 bg-[#316B89] mb-4"></div>

                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
                    <p className="text-gray-600 mb-6">
                        At TRAINING LATAM, we are dedicated to empowering Latin American talent by providing opportunities for skill development and professional growth in the IT sector. Our mission is to bridge the gap between ambition and achievement for individuals across Latin America who aspire to excel in the dynamic world of technology.
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Who We Are</h3>
                    <p className="text-gray-600">
                        We are a passionate and innovative team committed to fostering a community of skilled IT professionals. Our comprehensive six-month courses are designed to equip our students with the latest industry-relevant skills, ensuring they are well-prepared to thrive in the fast-paced tech landscape.
                    </p>
                </div>
            </section>

            <section className="px-4 md:px-20 grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className='px-8'>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 mt-4 lg:mt-0">WHAT WE DO</h2>
                    <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                    <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                    <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                    <p className="text-gray-600 mb-6">
                        Specializing in intensive six-month training programs, we focus on delivering high-quality, practical education that meets the demands of the ever-evolving IT sector. Our courses cover a wide range of critical areas, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>
                            <span className="font-semibold">Full Stack Development:</span> Master the art of coding and software engineering.
                        </li>
                        <li>
                            <span className="font-semibold">Data Science and Analytics:</span> Unlock the potential of data with cutting-edge techniques.
                        </li>
                        <li>
                            <span className="font-semibold">DevOps and IT Management:</span> Streamline operations and improve efficiency.
                        </li>
                    </ul>
                </div>
                <div className="flex items-center mt-4 lg:mt-0">
                    <Image src={About2} alt="What We Do" className="shadow-lg w-full lg:h-[600px]" />
                </div>
            </section>
        </div>
    );
};

export default TopSection;
