import React from 'react';

const VisionMission: React.FC = () => {
    return (
        <div className="w-full">
            <section className="text-white py-8 lg:py-16 px-4 md:px-20" style={{ backgroundImage: 'url(/assets/about/ourvision.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR VISION</h2>
                <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                <p className="text-lg md:text-xl mb-4">
                    We envision a future where Latin American talent is at the forefront of technological innovation, driving progress and transformation in the global IT sector. Through our commitment to excellence in education and professional development, we aim to be the catalyst for success for every student who joins our program.
                </p>
                <p className="text-lg md:text-xl mb-6">
                    Join us at TRAINING LATAM and take the first step towards a rewarding and impactful career in technology. Together, we can achieve greatness.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-center">
                    “TRAINING LATAM – Empowering Latin American Talent for a Brighter Future in IT”
                </p>
            </section>

            <section className="bg-gray-100 text-gray-800 py-8 lg:py-16 px-4 md:px-20">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">OUR MISSION</h2>
                <div className="h-1 w-8 bg-[#316B89] mb-1 ml-6"></div>
                <div className="h-1 w-16 bg-[#20C997] mb-1"></div>
                <div className="h-1 w-4 bg-[#316B89] mb-4"></div>
                <p className="text-lg md:text-xl mt-8">
                    At TRAINING LATAM, we aim to empower Latin American talent by providing rigorous training programs that equip individuals with the skills needed to thrive in the global IT sector. We strive to bridge the gap between ambition and achievement, ensuring our students are prepared for success in remote job opportunities with UK clients and beyond.
                </p>
            </section>
        </div>
    );
};

export default VisionMission;
