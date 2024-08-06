import React from 'react';
import Image from 'next/image';
import Tailored from "../../public/assets/Icons/Tailored.png";
import Expert from "../../public/assets/Icons/Expert.png";
import HandsOn from "../../public/assets/Icons/Hands on learning .png";
import Career from "../../public/assets/Icons/Carrer.png";
import Global from "../../public/assets/Icons/Global.png";
import Webinars from "../../public/assets/Icons/Webinars.png";

const features = [
    {
        title: "Tailored for Latin American Talent",
        description: "Our programs are specifically designed to address the unique needs and challenges Latin American professionals face in the global IT market.",
        icon: Tailored,
    },
    {
        title: "Expert Instructors",
        description: "Learn from industry veterans and thought leaders who bring real-world experience and insights to the classroom.",
        icon: Expert,
    },
    {
        title: "Hands-On Learning",
        description: "Engage in practical projects and real-life scenarios that enhance learning and ensure job readiness.",
        icon: HandsOn,
    },
    {
        title: "Career Support",
        description: "Benefit from our dedicated career services, including job placement assistance, resume building, and interview preparation.",
        icon: Career,
    },
    {
        title: "Global Community",
        description: "Join a diverse and supportive network of peers, alumni, and mentors worldwide.",
        icon: Global,
    },
    {
        title: "Webinars",
        description: "We regularly schedule webinars on popular topics. Webinars are scheduled at various dates throughout the year and are free to register and join.",
        icon: Webinars,
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-4 md:py-16 px-4 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">What Makes Us The Best Academy Online?</h2>
                <p className="text-gray-600 mb-12">
                    At TRAINING LATAM, we aim to help Latin American talent land remote jobs with UK clients. We have established strong alliances with local companies eager to onboard our alumni, providing them immediate opportunities to apply their newly acquired skills. You gain access to industry connections and real-world job prospects by choosing us, ensuring a smooth transition from training to employment.
                </p>
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-row p-6 rounded-lg shadow-md items-center">
                            <div className="w-[50%] text-4xl mb-4">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="object-contain"
                                />
                            </div>
                            <div className='w-[80%]'>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="mt-4 text-gray-700">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
