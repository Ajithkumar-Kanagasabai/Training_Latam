import React, { useState } from 'react';

const CourseDetails: React.FC = () => {

    return (
        <div className="md:px-20 bg-white p-6 rounded-lg">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Whats Included</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-4 bg-gray-100 rounded-lg">
                    <h2 className="rounded-lg p-8 text-xl font-semibold relative overflow-hidden" style={{ backgroundImage: 'url(/assets/course/Entry.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', width: '100%' }}>
                        <span className="relative z-10 text-white">Entry</span>
                    </h2>
                    <p className="px-4 pt-4 text-md sm:text-xl font-semibold mt-2">ISTQB Foundation Entry Requirements</p>
                    <p className="px-4 pt-6 text-gray-700">
                        The entry requirements for the Certified Tester Foundation Level qualification are that the candidate should have a basic working knowledge of IT.
                    </p>
                    <p className="px-4 pb-8 mt-2 text-gray-700">
                        On arrival at the course candidates should have read the provided Syllabus in preparation for the course. The course is intensive and those delegates who have prepared achieve a higher exam success rate.
                    </p>
                </div>

                <div className="mt-4 bg-gray-100 rounded-lg">
                    <h2 className="rounded-lg p-8 text-xl font-semibold relative overflow-hidden" style={{ backgroundImage: 'url(/assets/course/TheExam.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100px', width: '100%' }}>
                        <span className="relative z-10 text-white">The Exam</span>
                    </h2>
                    <p className="px-4 pt-4 text-md sm:text-xl font-semibold mt-2">ISTQB Foundation Exam</p>
                    <p className="px-4 pt-6 text-gray-700">
                        To qualify as an internationally recognised Certified Foundation Level Tester and be issued with an ISTQB® Foundation Level Certificate, delegates must successfully pass the exam:
                    </p>
                    <ul className="pl-6 pb-8 text-gray-700 list-disc list-inside">
                        <li>The examination consists of a one-hour exam with 40 multiple choice questions.</li>
                        <li>It will be a closed book examination i.e. no notes or books will be allowed into the examination room.</li>
                        <li>Duration of 60 minutes (or 75 minutes for candidates taking examinations that are not in their native language)</li>
                        <li>The pass mark is 65% (26 out of 40).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
