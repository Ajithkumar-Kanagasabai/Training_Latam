import Image from 'next/image';
import React from 'react';
import Icon1 from "../../../public/assets/about/Group 14.png";
import Icon2 from "../../../public/assets/about/Group 9.png";
import Icon3 from "../../../public/assets/about/Group 10.png";
import Icon4 from "../../../public/assets/about/Group 11.png";
import Icon5 from "../../../public/assets/about/Group 12.png";


const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-white py-8 lg:py-12 px-4 md:px-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">WHY CHOOSE US?</h2>
            <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
            <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
            <div className="h-1 w-4 bg-[#316B89] mb-4"></div>

            <div className="w-100 h-px bg-gray-300 my-4 mt-8 lg:mt-0 lg:hidden"></div>

            <div className="w-100 h-px bg-black hidden lg:flex"></div>


            <div className="grid grid-cols-1 lg:grid-cols-5 text-center">
                <div className="flex flex-col items-center px-2">
                    <Image src={Icon1} alt="Tailored for Latin American Talent" className="w-16 h-16 mb-4 lg:mt-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Tailored for Latin American Talent</h3>
                    <p className="text-gray-600">
                        Our programs are specifically designed to address the challenges and opportunities Latin American professionals face in the global IT market.
                    </p>
                </div>

                <div className="w-100 h-px bg-gray-300 my-4 lg:hidden"></div>

                {/* <div className="w-px h-100 bg-black hidden lg:flex"></div> */}


                <div className="flex flex-col items-center px-2">
                    <Image src={Icon2} alt="Expert Instructors" className="w-16 h-16 mb-4 lg:mt-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Expert Instructors</h3>
                    <p className="text-gray-600">
                        Learn from industry veterans who bring real-world insights into the classroom.
                    </p>
                </div>

                <div className="w-100 h-px bg-gray-300 my-4 lg:hidden"></div>

                {/* <div className="w-px h-100 bg-black hidden lg:flex"></div> */}


                <div className="flex flex-col items-center px-2">
                    <Image src={Icon3} alt="Hands-On Learning" className="w-16 h-16 mb-4 lg:mt-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Hands-On Learning</h3>
                    <p className="text-gray-600">
                        Engage in practical projects and exercises that simulate real-world job roles.
                    </p>
                </div>

                <div className="w-100 h-px bg-gray-300 my-4 lg:hidden"></div>

                {/* <div className="w-px h-100 bg-black hidden lg:flex"></div> */}


                <div className="flex flex-col items-center px-2">
                    <Image src={Icon4} alt="Career Support" className="w-16 h-16 mb-4 lg:mt-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Career Support</h3>
                    <p className="text-gray-600">
                        Benefit from our dedicated career services, including job placement assistance, resume building, and interview preparation.
                    </p>
                </div>

                <div className="w-100 h-px bg-gray-300 my-4 lg:hidden"></div>

                {/* <div className="w-px h-100 bg-black hidden lg:flex"></div> */}


                <div className="flex flex-col items-center px-2">
                    <Image src={Icon5} alt="Global Community" className="w-16 h-16 mb-4 lg:mt-8" />
                    <h3 className="text-lg font-semibold text-gray-800">Global Community</h3>
                    <p className="text-gray-600">
                        Join a diverse and supportive network of peers, alumni, and mentors.
                    </p>
                </div>
            </div>

            <div className="w-100 h-px bg-gray-300 my-4 lg:hidden"></div>

            {/* <div className="w-px h-100 bg-black hidden lg:flex"></div> */}


            <p className="text-gray-600 mt-12 text-center mx-auto">
                At TRAINING LATAM, we aim to help Latin American talent land remote jobs with UK clients. We have established strong alliances with local companies eager to onboard our alumni, providing them immediate opportunities to apply their newly acquired skills. You gain access to industry connections and real-world job prospects by choosing us, ensuring a smooth transition from training to employment.
            </p>
        </div>
    );
};

export default WhyChooseUs;
