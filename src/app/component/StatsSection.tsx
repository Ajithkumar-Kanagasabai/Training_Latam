import Image from "next/image";
import vector1 from "../../../public/assets/Icons/Vector (1).png";
import vector2 from "../../../public/assets/Icons/Vector (3).png";
import vector3 from "../../../public/assets/Icons/Vector (4).png";
import Group from "../../../public/assets/Icons/Group.png";
import Group1 from "../../../public/assets/Icons/Group (1).png";


const StatsSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 md:px-20 lg:px-20 xl:px-4 py-8">
            <div className="flex flex-col-reverse items-center lg:flex-row lg:items-start">
                <div className="w-full mt-12 lg:mt-0 lg:w-1/2">
                    <video
                        src="/assets/Home/Sample.mp4"
                        controls
                        className="rounded-lg w-[100%] h-[300px] md:h-[400px] xl:h-[350px]"
                        autoPlay
                        loop
                        muted
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-full lg:mt-6 lg:w-1/2 lg:mt-0 lg:ml-8">
                    <h2 className="text-2xl font-bold">Who we are</h2>
                    <p className="mt-4 text-gray-600">
                        We are a passionate and innovative team committed to fostering a
                        community of skilled IT professionals. Our comprehensive six-month
                        courses are designed to equip our students with the latest
                        industry-relevant skills, ensuring they are well-prepared to thrive
                        in the fast-paced tech landscape.
                    </p>
                    <div className="mt-8 md:mt-12 lg:mt-16 flex flex-row gap-8">
                        <div className="mt-8 md:mt-4 lg:mt-2 flex flex-col gap-4">
                            <Image src={Group} alt="Image" className="h-8 w-8" />
                            <Image src={Group1} alt="Image" />
                        </div>
                        <p className="mt-10 sm:mt-12 md:mt-8 lg:mt-4 text-[#20C997]">
                            &quot;TRAINING LATAM Empowering Latin American Talent for a Brighter
                            Future in IT.&quot;
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 md:mt-12 text-center">
                <h3 className="text-xl font-bold">Our results in numbers</h3>
                <p className="mt-4 text-gray-600">
                    Our students consistently share how our courses have made a
                    significant impact on their careers and personal growth.
                </p>
                <div className="flex flex-col md:flex-row mt-8 gap-6">
                    <div className="w-full md:w-90 xl:w-100 flex flex-col p-8 pt-12 bg-[#316B89] rounded-lg font-bold text-white text-left">
                        <Image src={vector2} alt="Image" />
                        <div className="mt-2">Course Joined</div>
                        <div className="text-3xl">25k+</div>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div className="w-full md:w-40 xl:w-80 flex flex-col p-8 pt-12 border-2 border-gray rounded-lg text-left">
                            <Image src={vector1} alt="Image" />
                            <div className="mt-2 text-gray-600">Students Satisfaction</div>
                            <div className="text-3xl text-[#316B89] font-bold">99%</div>
                        </div>
                        <div className="w-full md:w-40 xl:w-80 flex flex-col p-8 pt-12 border-2 border-gray rounded-lg text-left">
                            <Image src={vector3} alt="Image" />
                            <div className="mt-2 text-gray-600">Professional Trained</div>
                            <div className="text-3xl text-[#316B89] font-bold">125+</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
