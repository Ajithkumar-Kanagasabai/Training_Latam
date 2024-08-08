import React from 'react';

interface FeedbackCardProps {
    name: string;
    time: string;
    rating: number;
    feedback: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, time, rating, feedback }) => {
    return (
        <div className="border p-4 rounded mb-4">
            <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                <div>
                    <div className='flex flex-row'>
                        <p className="font-semibold">{name}</p>
                        <p className="text-[12px] text-gray-500 ml-2 pt-1">{time}</p>
                    </div>
                    <div className="flex items-center my-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-4 h-4 ${i < rating ? 'text-orange-500' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.539 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.964a1 1 0 00-.364-1.118l-3.392-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.964z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-gray-700">{feedback}</p>
        </div>
    );
};

export default FeedbackCard;
