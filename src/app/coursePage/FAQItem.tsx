import React, { useState } from 'react';
import { FAQ } from '../types';
import ArrowUp from "../../../public/assets/Icons/ArrowUp.png";
import ArrowDown from "../../../public/assets/Icons/ArrowDown.png";
import Image from 'next/image';

interface FAQItemProps {
    faq: FAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-2">
            <div
                className={`flex flex-row cursor-pointer hover:font-bold p-5 ${isOpen ? 'bg-[#20C997] text-black font-bold' : 'bg-white'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {faq.question}
                <Image
                    src={isOpen ? ArrowUp : ArrowDown}
                    alt={isOpen ? "Arrow Up" : "Arrow Down"}
                    className="ml-auto mt-1"
                />
            </div>
            {isOpen && (
                <div className="shadow-lg mt-2 p-2 bg-gray-200">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
