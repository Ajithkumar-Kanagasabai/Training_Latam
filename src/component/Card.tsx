import React from 'react';
import Image from 'next/image';

// Define the props interface
interface CardProps {
    Images: string;
    title: string;
    startDate: string;
    duration: string;
    price: number; // or string if price should be a string
}

const Card: React.FC<CardProps> = ({ Images, title, startDate, duration, price }) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-xl">
            {/* You need to provide width and height for the Image component */}
            <Image
                className="w-full"
                src={Images}
                alt={title}
                width={400} // Adjust width according to your design
                height={250} // Adjust height according to your design
                layout="responsive" // Optional: Makes the image responsive
            />
            <div className="px-6 py-6">
                <div className="text-center font-bold text-xl mb-2">{title}</div>
            </div>
            <div className="px-6 py-2">
                <p className="text-gray-700 text-base">
                    Started on {startDate} | {duration}
                </p>
                <div className='py-4 text-center'>
                    <p className="font-bold text-xl text-[#316B89]">${price} <span className='font-normal text-lg text-[#A5A5A5]'> usd</span></p>
                </div>
            </div>
        </div>
    );
};

export default Card;
