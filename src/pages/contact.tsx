import React, { useState } from 'react'
import Header from '../app/component/Header'
import "../app/globals.css";
import Footer from '../app/component/Footer';
import ContactForm from '../app/contactPage/ContactForm';


const contact = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

    return (
        <>
            <section>
                <Header onSelectCourse={setSelectedCourse} />
                <ContactForm />
                <Footer />
            </section>
        </>
    )
}

export default contact