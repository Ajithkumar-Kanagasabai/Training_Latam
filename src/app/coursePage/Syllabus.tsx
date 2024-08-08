import React, { useState } from 'react';
import tabImage from "../../../public/assets/course/Rectangle 2326.png";
import Image from 'next/image';

const Syllabus: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [activeTabTwo, setActiveTabTwo] = useState<number>(0);

    const tabContent = [
        {
            title: '1. Basics of HTML, CSS, and JavaScript',
            content: 'Lorem ipsum dolor sit amet consectetur. A at sed at neque condimentum ultrices blandit velit iaculis. Amet nullam ullamcorper et purus donec nunc nunc. Est imperdiet vivamus fermentum id neque tortor diam. Sodales egestas nec arcu et a pulvinar nisl.Lorem ipsum dolor sit amet consectetur. A at sed at neque condimentum ultrices blandit velit iaculis. Amet nullam ullamcorper et purus donec nunc nunc. Est imperdiet vivamus fermentum id neque tortor diam. Sodales egestas nec arcu et a pulvinar nisl.',
            image: tabImage,
        },
        {
            title: '2. Introduction to web servers and databases',
            content: 'The entry requirements for the Certified Tester Foundation Level qualification are that the candidate should have a basic working knowledge of IT. On arrival at the course candidates should have read the provided Syllabus in preparation for the course. The course is intensive and those delegates who have prepared achieve a higher exam success rate.',
            image: tabImage,
        },
        {
            title: '3. Overview of the development workflow',
            content: 'To qualify as an internationally recognised Certified Foundation Level Tester and be issued with an ISTQB® Foundation Level Certificate, delegates must successfully pass the exam: The examination consists of a one-hour exam with 40 multiple choice questions. It will be a ‘closed book’ examination i.e. no notes or books will be allowed into the examination room. Duration of 60 minutes (or 75 minutes for candidates taking examinations that are not in their native language) The pass mark is 65% (26 out of 40).',
            image: tabImage,
        },
    ];

    const tabContent2 = [
        {
            title: '1. JavaScript ES6+ features',
            content: 'Lorem ipsum dolor sit amet consectetur. A at sed at neque condimentum ultrices blandit velit iaculis. Amet nullam ullamcorper et purus donec nunc nunc. Est imperdiet vivamus fermentum id neque tortor diam. Sodales egestas nec arcu et a pulvinar nisl.Lorem ipsum dolor sit amet consectetur. A at sed at neque condimentum ultrices blandit velit iaculis. Amet nullam ullamcorper et purus donec nunc nunc. Est imperdiet vivamus fermentum id neque tortor diam. Sodales egestas nec arcu et a pulvinar nisl.',
            image: tabImage,
        },
        {
            title: '2. Responsive design principles',
            content: 'The entry requirements for the Certified Tester Foundation Level qualification are that the candidate should have a basic working knowledge of IT. On arrival at the course candidates should have read the provided Syllabus in preparation for the course. The course is intensive and those delegates who have prepared achieve a higher exam success rate.',
            image: tabImage,
        },
        {
            title: '3. Introduction to React/Angular',
            content: 'To qualify as an internationally recognised Certified Foundation Level Tester and be issued with an ISTQB® Foundation Level Certificate, delegates must successfully pass the exam: The examination consists of a one-hour exam with 40 multiple choice questions. It will be a ‘closed book’ examination i.e. no notes or books will be allowed into the examination room. Duration of 60 minutes (or 75 minutes for candidates taking examinations that are not in their native language) The pass mark is 65% (26 out of 40).',
            image: tabImage,
        },
    ];

    return (
        <div className="px-4 md:px-20 lg:px-20 bg-white p-4 md:p-6 rounded-lg">
            <h2 className="p-4 md:p-8 text-xl font-semibold relative overflow-hidden rounded-lg" style={{ backgroundImage: 'url(/assets/course/Syllabus.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', width: '100%' }}>
                <span className="relative z-10 text-white">Syllabus</span>
            </h2>
            <h2 className="text-[12px] sm:text-[lg] md:text-xl bg-gray-100 font-bold py-4 px-2 mb-4">Section 1. Introduction to Full Stack Development</h2>
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex flex-col w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                    {tabContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`text-left p-2 ${activeTab === index ? 'font-bold text-[#20C997]' : 'text-black hover:font-bold'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="flex-1 p-4">
                    <div className="hidden md:block">
                        <Image src={tabContent[activeTab]?.image} alt={tabContent[activeTab]?.title} className="w-full rounded-md" />
                        <p className="mt-4 text-black">{tabContent[activeTab]?.content}</p>
                    </div>
                    <div className="block md:hidden">
                        {tabContent.map((tab, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left p-2 w-full ${activeTab === index ? 'font-bold text-[#20C997]' : 'text-black hover:font-bold'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                                {activeTab === index && (
                                    <div className="mt-2">
                                        <Image src={tab.image} alt={tab.title} className="w-full rounded-md" />
                                        <p className="mt-2 text-black">{tab.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="mt-12 text-[12px] sm:text-[lg] md:text-xl bg-gray-100 font-bold py-4 px-2 mb-4">Section 2. Front-End Development Essentials</h2>
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex flex-col w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                    {tabContent2.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTabTwo(index)}
                            className={`text-left p-2 ${activeTabTwo === index ? 'font-bold text-[#20C997]' : 'text-black hover:font-bold'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="flex-1 p-4">
                    <div className="hidden md:block">
                        <Image src={tabContent2[activeTabTwo]?.image} alt={tabContent2[activeTabTwo]?.title} className="w-full rounded-md" />
                        <p className="mt-4 text-black">{tabContent2[activeTabTwo]?.content}</p>
                    </div>
                    <div className="block md:hidden">
                        {tabContent2.map((tab, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => setActiveTabTwo(index)}
                                    className={`text-left p-2 w-full ${activeTabTwo === index ? 'font-bold text-[#20C997]' : 'text-black hover:font-bold'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                                {activeTabTwo === index && (
                                    <div className="mt-2">
                                        <Image src={tab.image} alt={tab.title} className="w-full rounded-md" />
                                        <p className="mt-2 text-black">{tab.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Syllabus;
