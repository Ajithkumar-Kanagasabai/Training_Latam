import React from 'react';

interface RatingBarProps {
    rating: number;
    percentage: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ rating, percentage }) => {
    return (
        <div className="flex items-center my-2 ml-4">
            <span className="w-80 text-[14px] sm:text-md md:text-lg">{rating} Star Rating</span>
            <div className="w-full bg-gray-200 rounded h-2 mx-2">
                <div
                    className="bg-orange-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <span className="">{percentage}%</span>
        </div>
    );
};

export default RatingBar;
