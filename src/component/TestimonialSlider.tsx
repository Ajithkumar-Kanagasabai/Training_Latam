"use client"
import React from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import JhonDoe from "../../public/assets/Testimonials/Group 875.png";
import QuoteTop from "../../public/assets/Testimonials/“.png";
import QuoteBottom from "../../public/assets/Testimonials/”.png";

const testimonials = [
    {
        name: 'Jhon Doe',
        role: 'Student',
        image: JhonDoe,
        text: 'I recently completed an IT training course through the Training LATAM Portal. The content was excellent, and the instructors were knowledgeable. The online platform was easy to use, and the support team was very helpful. Thanks to this training, I improved my skills and got a new job in IT. I highly recommend LATAM Training Portal.',
        rating: 5,
    },
    {
        name: 'Steve Rogers',
        role: 'Student',
        image: JhonDoe,
        text: 'I recently completed an IT training course through the Training LATAM Portal. The content was excellent, and the instructors were knowledgeable. The online platform was easy to use, and the support team was very helpful. Thanks to this training, I improved my skills and got a new job in IT. I highly recommend LATAM Training Portal.',
        rating: 5,
    },
    {
        name: 'Howard Stark',
        role: 'Student',
        image: JhonDoe,
        text: 'I recently completed an IT training course through the Training LATAM Portal. The content was excellent, and the instructors were knowledgeable. The online platform was easy to use, and the support team was very helpful. Thanks to this training, I improved my skills and got a new job in IT. I highly recommend LATAM Training Portal.',
        rating: 5,
    },
];

const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="mt-8 relative flex flex-col items-center justify-center w-full px-28">
            <div className="w-full flex items-center justify-center">
                <div className="w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-1000"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-shrink-0 w-full flex justify-center">
                                <div className="flex flex-col items-center p-12 pl-40 bg-white rounded-lg shadow-lg md:flex-row bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/Testimonials/Group 877.png')` }}>
                                    <div className='w-[100%] flex flex-col'>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <p className="mt-12 text-lg text-white font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-white">{testimonial.role}</p>
                                        <div className="flex mt-2 gap-2">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <span key={i} className="text-yellow-400">★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full mt-4 px-20 md:ml-6 md:mt-0 relative">
                                        <div className="absolute -top-8 left-0 animate-float">
                                            <Image
                                                src={QuoteTop}
                                                alt="Quote Top"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <p className="mt-4 text-white" style={{ lineHeight: "30px" }}>{testimonial.text}</p>
                                        <div className="absolute -bottom-8 right-0 animate-float">
                                            <Image
                                                src={QuoteBottom}
                                                alt="Quote Bottom"
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-12 flex items-center justify-center">
                <button onClick={prevSlide} className="focus:outline-none">
                    <FaArrowLeft className="text-2xl mx-4" />
                </button>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot mx-1 ${index === currentIndex ? 'bg-black' : 'bg-gray-400'} w-2 h-2 rounded-full cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
                <button onClick={nextSlide} className="focus:outline-none">
                    <FaArrowRight className="text-2xl mx-4" />
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
