import React from 'react';
import Call from "../../../public/assets/contact/bxs_phone-call.png";
import Mail from "../../../public/assets/contact/ic_sharp-email.png";
import Address from "../../../public/assets/contact/Vector (1).png";
import SocialIcon1 from "../../../public/assets/contact/Group.png";
import SocialIcon2 from "../../../public/assets/contact/Twitter.png";

import Image from 'next/image';

const ContactForm: React.FC = () => {
    return (
        <section className="py-12 px-4 md:px-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Contact Us</h2>
            <p className="mb-6 text-[#717171] text-[14px] sm:text-[16px] text-center">Any question or remarks? Just write us a message!</p>
            <div className="bg-white flex flex-col-reverse md:flex-row">
                <div
                    className="text-white p-8 flex flex-col md:w-[100%] lg:w-[50%]"
                    style={{
                        backgroundImage: 'url(/assets/contact/contactUs.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='flex flex-col justify-start'>
                        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6">Contact Information</h2>
                        <p className="mb-6 text-[#C9C9C9]">Say something to start a live chat!</p>
                    </div>

                    <div className="py-28 flex flex-col space-y-4 items-start justify-center">
                        <p className="flex items-center">
                            <Image src={Call} alt="call" className="w-6 h-6 mb-4 lg:mt-4 mr-8" />
                            +1012 3456 789
                        </p>
                        <p className="flex items-center">
                            <Image src={Mail} alt="mail" className="w-6 h-6 mb-4 lg:mt-4 mr-8" />
                            demo@gmail.com
                        </p>
                        <p className="flex items-center">
                            <Image src={Address} alt="location" className="w-5 h-5 mb-4 lg:mt-4 mr-8" />
                            Address
                        </p>
                    </div>

                    <div className="flex flex-row items-end">
                        <div className="px-3">
                            <Image src={SocialIcon2} alt="SocialMedia" className="w-6 h-6" />
                        </div>
                        <div className="px-3">
                            <Image src={SocialIcon1} alt="twitter" className="w-6 h-6" />
                        </div>
                        <div className="px-3">
                            <Image src={SocialIcon2} alt="" className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="p-8 w-full lg:w-[70%]">
                    <form className="space-y-6">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-semibold text-black">First Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-semibold text-black">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-full">
                                <label className="block text-sm font-semibold text-black mt-8">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-semibold text-black mt-8">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold mt-12">Select Course?</p>
                            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row sm:space-x-3 md:space-x-0 xl:space-x-4">
                                <label className="flex items-center space-x-2 mt-4">
                                    <input
                                        type="radio"
                                        name="course"
                                        value="Full Stack Development"
                                        className="focus:ring-0 focus:outline-none text-green-500"
                                    />
                                    <span className='text-[#717171]'>Full stack Development</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-4">
                                    <input
                                        type="radio"
                                        name="course"
                                        value="Data Science"
                                        className="focus:ring-0 focus:outline-none text-green-500"
                                    />
                                    <span className='text-[#717171]'>Data Science</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-4">
                                    <input
                                        type="radio"
                                        name="course"
                                        value="DevOps and IT Management"
                                        className="focus:ring-0 focus:outline-none text-green-500"
                                    />
                                    <span className='text-[#717171]'>DevOps and IT Management</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-black mt-12">Message</label>
                            <textarea
                                placeholder="Write your message.."
                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-400 mt-4"
                                rows={1}>
                            </textarea>
                        </div>
                        <div className='flex justify-center md:justify-end'>
                            <button
                                type="submit"
                                className="flex items-end justify-center w-40 md:w-36 lg:w-48 p-3 bg-[#20C997] text-black font-semibold rounded-md hover:bg-green-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
