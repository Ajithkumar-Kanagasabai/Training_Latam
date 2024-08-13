import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import CourseCard from '../app/coursePage/Cards';
import CourseDetails from '../app/coursePage/CourseDetails';
import Syllabus from '../app/coursePage/Syllabus';
import ReviewsSection from '../app/coursePage/ReviewsSection';
import FAQ from '../app/coursePage/FAQ';


const course: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');
    return (
        <>
            <section>
                <Header onSelectCourse={setSelectedCourse} />
                <CourseCard selectedCourse={selectedCourse} />
                <CourseDetails />
                <Syllabus />
                <ReviewsSection />
                <FAQ />
                <Footer />
            </section>
        </>
    )
}

export default course