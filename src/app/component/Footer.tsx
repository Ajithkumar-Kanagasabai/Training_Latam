import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo/Logo.png';
import Insta1 from "../../../public/assets/Footer/Image Placeholder.png";
import Insta2 from "../../../public/assets/Footer/Container.png";
import Insta3 from "../../../public/assets/Footer/Container (1).png";
import Insta4 from "../../../public/assets/Footer/Container (2).png";
import Fb from "../../../public/assets/Icons/Facebook.png";
import Twitter from "../../../public/assets/Icons/Twitter.png";
import Insta from "../../../public/assets/Icons/Instagram.png";
import Linkedin from "../../../public/assets/Icons/LinkedIn.png";
import Youtube from "../../../public/assets/Icons/YouTube.png";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="text-black py-8 px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="w-[20%]">
                    <Link href="/"> <Image src={Logo} alt="Logo" width={100} height={40} /></Link>
                    <p className='hidden md:flex mt-6 text-[#727272]'>The Future Of Technology Is In Latam. Learn The Tools With Us, Boost Your Skills And Build Your Dreams!</p>
                </div>

                <div className="flex flex-col mt-8 md:my-4">
                    <h3 className="text-lg font-semibold mb-2">Menu</h3>
                    <ul className="md:mt-2 flex flex-col justify-center text-[#727272]">
                        <li className="py-1"><Link href="/">Home</Link></li>
                        <li className="py-1"><Link href="/course">Courses</Link></li>
                        <li className="py-1"><Link href="/about">About</Link></li>
                        <li className="py-1"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 mt-8 md:my-4">
                    <h3 className="text-lg font-semibold mb-2">Follow on Instagram</h3>
                    <div className='md:mt-2 flex flex-row gap-4'>
                        <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                            <Image src={Insta1} alt="Instagram 1" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                            <Image src={Insta2} alt="Instagram 2" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                            <Image src={Insta3} alt="Instagram 3" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-40 h-40 md:w-20 md:h-20 overflow-hidden aspect-w-1 aspect-h-1">
                            <Image src={Insta4} alt="Instagram 4" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-16 container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p className='hidden md:flex text-[12px] lg:text-[18px] text-[#727272]'>Copyright &copy; 2024 Training Latam | All rights reserved</p>
                <div className="flex space-x-8 sm:space-x-20 md:space-x-3 xl:space-x-8 mb-6 lg:mb-0 justify-center">
                    <Image src={Fb} alt="Fb Icon" />
                    <Image src={Twitter} alt="Insta Icon" />
                    <Image src={Insta} alt="Twitter Icon" />
                    <Image src={Linkedin} alt="Twitter Icon" />
                    <Image src={Youtube} alt="Twitter Icon" />

                </div>
                <p className='flex md:hidden text-[8px] sm:text-[14px] text-[#727272] text-center'>Copyright &copy; 2024 Training Latam | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
