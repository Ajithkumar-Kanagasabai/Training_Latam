"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo/Logo.png';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

interface HeaderProps {
    onSelectCourse: (courseName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectCourse }) => {
    const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const coursesDropdownRef = useRef<HTMLDivElement>(null);
    const languageDropdownRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                coursesDropdownRef.current &&
                !coursesDropdownRef.current.contains(event.target as Node)
            ) {
                setIsCoursesDropdownOpen(false);
            }
            if (
                languageDropdownRef.current &&
                !languageDropdownRef.current.contains(event.target as Node)
            ) {
                setIsLanguageDropdownOpen(false);
            }
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="mt-5 md:px-[50px] bg-white">
            <div className="container px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex md:hidden items-center justify-between">
                        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                        <div
                            ref={sidebarRef}
                            className={`z-10 flex flex-col fixed top-0 left-0 w-48 h-full bg-gray-900 text-white transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link href="/" className="text-[#FFFFFF] hover:text-[#20C997] hover:font-bold">Home</Link>
                            <Link href="/about" className="text-[#FFFFFF] hover:text-[#20C997] hover:font-bold">About</Link>
                            <div className="relative" ref={coursesDropdownRef}>
                                <Link href="/course">
                                    <button
                                        onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                                        className="flex items-center text-[#FFFFFF] hover:text-[#20C997] hover:font-bold"
                                    >
                                        Courses
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                </Link>
                                {isCoursesDropdownOpen && (
                                    <div className="w-[300px] absolute bg-white border mt-1 rounded shadow-lg z-10">
                                        <Link href="#" className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">Full Stack Development</Link>
                                        <Link href="#" className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">Data Science and Analytics</Link>
                                        <Link href="#" className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">DevOps and IT Management</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/contact" className="text-[#FFFFFF] hover:text-[#20C997] hover:font-bold">Contact</Link>
                        </div>
                        {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" />}
                    </div>
                    <Link href="/" ><Image src={Logo} alt="Logo" className="h-8 w-32 lg:w-100" /></Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-[#464646] hover:text-[#20C997] hover:font-bold">Home</Link>
                    <Link href="/about" className="text-[#464646] hover:text-[#20C997] hover:font-bold">About</Link>
                    <div className="relative" ref={coursesDropdownRef}>
                        <Link href="/course">
                            <button
                                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                                className="flex items-center text-[#464646] hover:text-[#20C997] hover:font-bold"
                            >
                                Courses
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </Link>
                        {isCoursesDropdownOpen && (
                            <div className="w-[300px] absolute bg-white border mt-1 rounded shadow-lg z-10">
                                <Link href="#" onClick={() => onSelectCourse('Full Stack Development')} className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">Full Stack Development</Link>
                                <Link href="#" onClick={() => onSelectCourse('Data Science and Analytics')} className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">Data Science and Analytics</Link>
                                <Link href="#" onClick={() => onSelectCourse('DevOps and IT Management')} className="block px-4 py-3 text-[#464646] hover:text-[#20C997] hover:font-bold">DevOps and IT Management</Link>
                            </div>
                        )}
                    </div>
                    <Link href="/contact" className="text-[#464646] hover:text-[#20C997] hover:font-bold">Contact</Link>
                </nav>
                <div className="flex space-x-4">
                    <div className="relative" ref={languageDropdownRef}>
                        <button
                            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                            className="flex items-center border border-gray-300 px-2 py-1 rounded"
                        >
                            EN
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isLanguageDropdownOpen && (
                            <div className="w-[100px] absolute bg-white border mt-1 rounded shadow-lg z-10">
                                <button className="block px-4 py-2 text-[#464646] hover:text-[#20C997] hover:font-bold">English</button>
                                <button className="block px-4 py-2 text-[#464646] hover:text-[#20C997] hover:font-bold">Chinese</button>
                                <button className="block px-4 py-2 text-[#464646] hover:text-[#20C997] hover:font-bold">French</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
