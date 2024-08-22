import React from 'react';
import Vector1 from "../../../public/assets/course/Vector (1).png";
import Vector2 from "../../../public/assets/course/Vector (2).png";
import Vector3 from "../../../public/assets/course/Vector (3).png";
import Time from "../../../public/assets/course/Group.png";
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
    selectedCourse: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ selectedCourse }) => {

    return (
        <div className="md:px-20 bg-white p-6 rounded-lg">
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col w-full md:w-[60%] mb-6 md:mb-0'>
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">{selectedCourse}</h1>
                    <p className="text-gray-700 mb-4">
                        This course provides a comprehensive introduction to full stack development, covering the basics of both front-end and back-end technologies. Students will learn about HTML, CSS, JavaScript, and basic server-side scripting. This is an ideal course for beginners who are new to web development.
                    </p>
                    <div className="flex flex-row items-center mb-4">
                        <span className="mr-2"><Image src={Time} alt="Img" width={16} height={16} /></span>
                        <span>8 Weeks</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:ml-auto">
                    <div className="flex flex-row items-center justify-center mb-4 md:mb-0">
                        <h2 className="text-xl lg:text-2xl font-bold">$1999</h2>
                        <div className="h-8 w-px bg-gray-300 mx-4"></div>
                        <span className="text-yellow-500">★</span>
                        <span className='ml-1'>4.8</span>
                    </div>
                    <div className='flex justify-center'>
                        <Link href="/contact" className="w-[40%] md:w-full bg-[#20C997] px-6 md:px-12 py-1 rounded-3xl mt-0 md:mt-4 font-semibold">Get Course</Link>
                    </div>
                </div>
            </div>


            <div className="w-100 h-px bg-gray-300 my-4"></div>

            <div className="flex flex-col lg:flex-row justify-between mt-8 space-y-8 md:space-y-0">
                <div className='w-full lg:w-2/4 xl:w-2/4'>
                    <h2 className="text-xl font-bold mb-2">What You Will Learn</h2>
                    <p className="text-gray-700 mb-4">
                        This course provides a comprehensive introduction to full stack development, covering the basics of both front-end and back-end technologies. Students will learn about HTML, CSS, JavaScript, and basic server-side scripting. This is an ideal course for beginners who are new to web development.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row gap-8'>
                    <div className='w-full md:w-1/2 lg:w-[100%] xl:w-[100%] shadow-md px-6 md:px-8 py-8 bg-white'>
                        <Image src={Vector1} alt="Img" width={30} height={30} />
                        <h3 className="text-lg font-semibold my-2">Course Format</h3>
                        <ul>
                            <li className="flex items-center mb-2">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                Virtual
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                Classroom
                            </li>
                            <li className="flex items-center">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                E-Learning
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-[100%] xl:w-[100%] bg-gray-100 shadow-md px-6 md:px-8 py-8'>
                        <Image src={Vector2} alt="Img" width={20} height={20} />
                        <h3 className="text-lg font-semibold my-2">Course Details</h3>
                        <ul>
                            <li className="flex items-center mb-2">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                8 Weeks
                            </li>
                            <li className="flex items-center mb-2">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                100% Remote
                            </li>
                            <li className="flex items-center">
                                <Image src={Vector3} alt="Img" width={16} height={16} className="mr-2" />
                                Limited Stocks
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CourseCard;
