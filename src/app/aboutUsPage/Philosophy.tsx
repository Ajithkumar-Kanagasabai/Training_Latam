import React from 'react';
import strategyImage from "../../../public/assets/about/strategy.png";
import Image from 'next/image';

const Philosophy: React.FC = () => {
    return (
        <div className="py-0">
            <section className="text-gray-800 py-8 lg:py-16 px-4 md:px-20">
                <div className="flex flex-col lg:flex-row">
                    <div className=''>
                        <h2 className="lg:hidden text-2xl md:text-4xl font-bold mb-6">OUR STRATEGY</h2>
                        <div className="lg:hidden h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                        <div className="lg:hidden h-1 w-16 bg-[#20C997] mb-1"></div>
                        <div className="lg:hidden h-1 w-4 bg-[#316B89] mb-0 lg:mb-4"></div>
                    </div>
                    <div className="w-full lg:w-2/4 xl:w-1/4 flex justify-center">
                        <Image src={strategyImage} alt="Strategy" className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] lg:w-[90%] lg:h-[90%]" />
                    </div>
                    <div className="w-full lg:w-2/4 xl:w-3/4 text-center lg:text-left">
                        <h2 className="hidden lg:flex text-2xl md:text-4xl font-bold mb-6">OUR STRATEGY</h2>
                        <div className="hidden lg:flex h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                        <div className="hidden lg:flex h-1 w-16 bg-[#20C997] mb-1"></div>
                        <div className="hidden lg:flex h-1 w-4 bg-[#316B89] mb-4"></div>
                        <p className="text-lg mb-0 lg:mb-6 mt-0 lg:mt-8">
                            Our strategy revolves around delivering comprehensive, two-month courses tailored to meet the specific demands of the IT industry. We focus on practical, hands-on learning experiences that prepare our students for the technical aspects of their roles and the global business environment. Through strategic alliances with local companies and ongoing support, we facilitate direct pathways to employment for our graduates.
                        </p>
                    </div>

                </div>
            </section>

            <section className="bg-gray-100 text-gray-800 py-8 lg:py-16 px-4 md:px-20">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR PHILOSOPHY</h2>
                <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                <p className="text-lg md:text-xl mt-8">
                    At TRAINING LATAM, we aim to empower Latin American talent by providing rigorous training programs that equip individuals with the skills needed to thrive in the global IT sector. We strive to bridge the gap between ambition and achievement, ensuring our students are prepared for success in remote job opportunities with UK clients and beyond.
                </p>
            </section>
        </div>
    );
}

export default Philosophy;