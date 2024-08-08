import React, { useState } from 'react';
import RatingBar from './RatingBar';
import FeedbackCard from './FeedbackCard';

const feedbacks = [
    {
        name: "Guy Hawkins",
        time: "1 week ago",
        rating: 5,
        feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
    {
        name: "Dianne Russell",
        time: "51 mins ago",
        rating: 5,
        feedback: "This course is just amazing! Has great course content, the best practices, and a lot of real-world knowledge. I love the way of giving examples, the best tips by the instructor which are pretty interesting, fun and knowledgeable and I was never getting bored throughout the course. This course meets more than my expectation and, I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako! Highly recommend this course! Take the next step."
    },
    {
        name: "Steve Rogers",
        time: "1 week ago",
        rating: 5,
        feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
    {
        name: "Howard Stark",
        time: "1 week ago",
        rating: 5,
        feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
    {
        name: "Steve Smith",
        time: "1 week ago",
        rating: 5,
        feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    },
    {
        name: "Howard Bunn",
        time: "1 week ago",
        rating: 5,
        feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako."
    }];

const ReviewsSection: React.FC = () => {
    const [visibleFeedbackCount, setVisibleFeedbackCount] = useState(2);

    const handleLoadMore = () => {
        setVisibleFeedbackCount(prevCount => prevCount + 2);
    };

    return (
        <div className="px-4 md:px-20 bg-white rounded-lg">
            <h2 className="p-8 text-xl font-semibold relative overflow-hidden rounded-lg" style={{ backgroundImage: 'url(/assets/course/Review.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', width: '100%' }}>
                <span className="relative z-10 text-white">Reviews</span>
            </h2>
            <div className='mt-12 flex items-center'>
                <div className="lg:border-2 lg:border-gray w-[20%] py-10">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-center">4.8</p>
                    <div className="mt-2 lg:mt-6 flex justify-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-3 h-3 sm:h-4 sm:w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-orange-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.539 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.964a1 1 0 00-.364-1.118l-3.392-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.964z" />
                            </svg>
                        ))}
                    </div>
                    <div className='text-[10px] sm:text-sm lg:text-lg mt-2 text-center'>Course Rating</div>
                </div>
                <div className="w-[80%] mb-6">
                    <RatingBar rating={5} percentage={75} />
                    <RatingBar rating={4} percentage={21} />
                    <RatingBar rating={3} percentage={3} />
                    <RatingBar rating={2} percentage={1} />
                    <RatingBar rating={1} percentage={1} />
                </div>
            </div>

            <div>
                <div className="my-4 flex justify-center items-center mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Students Feedback</h3>
                </div>
                <div>
                    {feedbacks.slice(0, visibleFeedbackCount).map((feedback, index) => (
                        <FeedbackCard
                            key={index}
                            name={feedback.name}
                            time={feedback.time}
                            rating={feedback.rating}
                            feedback={feedback.feedback}
                        />
                    ))}
                </div>
                <div className='flex justify-center md:justify-start'>
                    {visibleFeedbackCount < feedbacks.length && (
                        <button
                            className="md:w-[16%] lg:w-[12%] bg-[#20C997] text-black hover:font-bold p-2 rounded mt-4"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;
