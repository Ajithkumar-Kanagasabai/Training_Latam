import React from 'react';

interface FAQCategoryProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ name, isActive, onClick }) => {
    return (
        <div
            className={`border-2 shadow-lg cursor-pointer hover:font-bold p-2 pb-3 ${isActive ? 'bg-[#20C997] text-black font-bold' : 'bg-white'}`}
            onClick={onClick}
        >
            {name}
        </div>
    );
};

export default FAQCategory;
