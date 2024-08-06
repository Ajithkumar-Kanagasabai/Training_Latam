import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/logo/Logo.png';
import Insta1 from "../../public/assets/Footer/Image Placeholder.png";
import Insta2 from "../../public/assets/Footer/Container.png";
import Insta3 from "../../public/assets/Footer/Container (1).png";
import Insta4 from "../../public/assets/Footer/Container (2).png";



const Footer: React.FC = () => {
    return (
        <footer className="text-black py-8 px-20 shadow-lg rounded">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" width={100} height={40} />
                </div>

                <div className="flex text-center my-4 md:my-0">
                    <ul className="flex flex-col justify-center">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <div className='flex flex-row gap-4'>
                        <div className="w-20 h-20 overflow-hidden">
                            <Image src={Insta1} alt="Instagram 1" layout="responsive" width={128} height={128} objectFit="cover" />
                        </div>
                        <div className="w-20 h-20 overflow-hidden">
                            <Image src={Insta2} alt="Instagram 2" layout="responsive" width={128} height={128} objectFit="cover" />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className="w-20 h-20 overflow-hidden">
                            <Image src={Insta3} alt="Instagram 3" layout="responsive" width={128} height={128} objectFit="cover" />
                        </div>
                        <div className="w-20 h-20 overflow-hidden">
                            <Image src={Insta4} alt="Instagram 4" layout="responsive" width={128} height={128} objectFit="cover" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
