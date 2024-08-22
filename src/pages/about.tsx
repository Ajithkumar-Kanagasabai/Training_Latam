import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';
import Philosophy from '../app/aboutUsPage/Philosophy';
import { LanguageProvider } from '../app/Lanuguage/LanguageContext';


const about = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>
                <LanguageProvider>
                    <Header onSelectCourse={setSelectedCourse} />
                    <TopSection />
                    <WhyChooseUs />
                    <VisionMission />
                    <Philosophy />
                    <Footer />
                </LanguageProvider>
            </section>
        </>
    )
}

export default about