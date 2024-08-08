import React from 'react';
import { FAQ } from '../types';
import FAQItem from './FAQItem';

interface FAQListProps {
    faqs: FAQ[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
    return (
        <div>
            {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
            ))}
        </div>
    );
};

export default FAQList;
