// src/component/StatsSection.tsx

import Image from "next/image";
import vector1 from "../../public/assets/Icons/Vector (1).png";
import vector2 from "../../public/assets/Icons/Vector (3).png";
import vector3 from "../../public/assets/Icons/Vector (4).png";

const StatsSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center md:flex-row md:items-start">
                <div className="w-full md:w-1/2">
                    <video
                        src="/path/to/your/video.mp4"
                        controls
                        width="600"
                        height="400"
                        className="rounded-lg"
                        autoPlay
                        loop
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-full mt-6 md:w-1/2 md:mt-0 md:ml-8">
                    <h2 className="text-2xl font-bold">Who we are</h2>
                    <p className="mt-4 text-gray-600">
                        We are a passionate and innovative team committed to fostering a
                        community of skilled IT professionals. Our comprehensive six-month
                        courses are designed to equip our students with the latest
                        industry-relevant skills, ensuring they are well-prepared to thrive
                        in the fast-paced tech landscape.
                    </p>
                    <p className="mt-4 text-[#20C997]">
                        &quot;TRAINING LATAM Empowering Latin American Talent for a Brighter
                        Future in IT.&quot;
                    </p>
                </div>
            </div>
            <div className="mt-4 md:mt-12 text-center">
                <h3 className="text-xl font-bold">Our results in numbers</h3>
                <p className="mt-2 text-gray-600">
                    Our students consistently share how our courses have made a
                    significant impact on their careers and personal growth.
                </p>
                <div className="flex flex-col md:flex-row mt-8 gap-6">
                    <div className="w-full md:w-[45%] flex flex-col p-8 pt-12 bg-[#316B89] rounded-lg font-bold text-white text-left">
                        <Image src={vector2} alt="Image" />
                        <div className="mt-2">Course Joined</div>
                        <div className="text-3xl">25k+</div>
                    </div>
                    <div className="w-full md:w-[25%] flex flex-col p-8 pt-12 border-2 border-gray rounded-lg text-left">
                        <Image src={vector1} alt="Image" />
                        <div className="mt-2 text-gray-600">Students Satisfaction</div>
                        <div className="text-3xl text-[#316B89] font-bold">99%</div>
                    </div>
                    <div className="w-full md:w-[25%] flex flex-col p-8 pt-12 border-2 border-gray rounded-lg text-left">
                        <Image src={vector3} alt="Image" />
                        <div className="mt-2 text-gray-600">Professional Trained</div>
                        <div className="text-3xl text-[#316B89] font-bold">125+</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
