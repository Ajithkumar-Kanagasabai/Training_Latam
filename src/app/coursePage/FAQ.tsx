import React, { useState } from 'react';
import { Category } from '../types';
import FAQCategory from './FAQCategory';
import FAQList from './FAQList';
import Link from 'next/link';

const categories: Category[] = [
    {
        name: 'Full Stack Development',
        faqs: [
            { question: 'What types of IT training courses do you offer?', answer: 'We offer a variety of IT training courses, including programming, cybersecurity, data analysis, cloud computing, and more.' },
            { question: 'Are the courses self-paced or instructor-led?', answer: 'Our courses are designed to be flexible. You can choose from self-paced courses or instructor-led sessions, depending on your learning preference.' },
            { question: 'Do I need prior IT knowledge to enroll in the courses?', answer: 'No prior IT knowledge is required for our beginner courses. We also offer advanced courses for those with more experience.' },
            { question: 'How can I enroll in a course?', answer: 'To enroll, simply browse our course catalog, select the course you’re interested in, and follow the registration instructions on the course page.' },
            { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, PayPal, and bank transfers.' },
            { question: 'Is there a refund policy?', answer: 'Yes, we offer a 14-day refund policy. If you are not satisfied with a course, you can request a refund within 14 days of purchase.' },
            { question: 'Will I receive a certificate upon completion of a course?', answer: 'Yes, you will receive a digital certificate upon successfully completing a course.' },
        ],
    },
    {
        name: 'DevOPs and IT Management',
        faqs: [
            { question: 'Will I receive a certificate upon completion of a course?', answer: 'Yes, you will receive a digital certificate upon successfully completing a course.' },
            { question: 'What payment methods do you accept?', answer: 'We accept major credit cards, PayPal, and bank transfers.' },
            { question: 'Do I need prior IT knowledge to enroll in the courses?', answer: 'No prior IT knowledge is required for our beginner courses. We also offer advanced courses for those with more experience.' },
            { question: 'What types of IT training courses do you offer?', answer: 'We offer a variety of IT training courses, including programming, cybersecurity, data analysis, cloud computing, and more.' },
        ],
    },
    {
        name: 'Data Science and Analytics',
        faqs: [
            { question: 'How can I enroll in a course?', answer: 'To enroll, simply browse our course catalog, select the course you’re interested in, and follow the registration instructions on the course page.' },
            { question: 'Is there a refund policy?', answer: 'Yes, we offer a 14-day refund policy. If you are not satisfied with a course, you can request a refund within 14 days of purchase.' },
            { question: 'Will I receive a certificate upon completion of a course?', answer: 'Yes, you will receive a digital certificate upon successfully completing a course.' },
            { question: 'Do I need prior IT knowledge to enroll in the courses?', answer: 'No prior IT knowledge is required for our beginner courses. We also offer advanced courses for those with more experience.' },
        ],
    },
];

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section className="px-4 md:px-20 mt-12">
            <h2
                className="p-8 text-xl font-semibold relative overflow-hidden rounded-lg"
                style={{ backgroundImage: 'url(/assets/course/FAQs.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', width: '100%' }}
            >
                <span className="relative z-10 text-white">Frequently asked questions</span>
            </h2>
            <div className="mt-4 flex flex-col lg:flex-row lg:items-start p-4 gap-8">
                <div className="flex flex-row w-full gap-4">
                    <div className="w-[40%] md:w-[50%] lg:w-[50%] xl:w-[30%] lg:w-1/4">
                        {categories.map((category, index) => (
                            <FAQCategory
                                key={index}
                                name={category.name}
                                isActive={category.name === activeCategory.name}
                                onClick={() => setActiveCategory(category)}
                            />
                        ))}
                    </div>
                    <div className="w-full lg:w-3/4">
                        <FAQList faqs={activeCategory.faqs} />
                    </div>
                </div>
                <div className="lg:w-1/4 bg-gray-100 shadow-md rounded-md p-6 lg:self-start">
                    <h2 className="text-lg font-bold mb-4">Dont find your answer!</h2>
                    <p className="text-gray-600 mb-6">Dont worry, Contact Us and our support team will help you.</p>
                    <Link
                        href="/contact"
                        className="flex justify-center w-full px-4 py-2 bg-[#20C997] text-black text-sm font-semibold rounded-md hover:font-bold transition duration-200"
                    >
                        Contact Us
                    </Link>
                    {/* <form>
                        <div className="mb-4">
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#20C997]"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#20C997]"
                                rows={4}
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-[#20C997] text-black text-sm font-semibold rounded-md hover:font-bold transition duration-200"
                        >
                            Submit Question
                        </button>
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
