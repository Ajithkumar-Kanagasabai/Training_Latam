import React from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import TopSection from '../app/aboutUsPage/TopSection';
import WhyChooseUs from '../app/aboutUsPage/WhyChooseUs';
import VisionMission from '../app/aboutUsPage/VisionMission';


const about = () => {
    return (
        <>
            <section>
                <Header />
                <TopSection />
                <WhyChooseUs />
                <VisionMission />
                <Footer />
            </section>
        </>
    )
}

export default about