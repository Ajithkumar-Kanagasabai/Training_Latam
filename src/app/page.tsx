"use client";
import React, { useState } from 'react';
import Header from "@/src/app/component/Header";
import HeroSlider from "@/src/app/component/HomeBanner";
import "./globals.css";
import IconCarousel from "@/src/app/component/IconCarousel";
import CourseSection from "@/src/app/component/CourseSection";
import FeaturesSection from "@/src/app/component/FeaturesSection";
import TestimonialSlider from "@/src/app/component/TestimonialSlider";
import StatsSection from "@/src/app/component/StatsSection";
import Footer from "@/src/app/component/Footer";
import { LanguageProvider } from './Lanuguage/LanguageContext';

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<string>('Full Stack Development');

  return (
    <main>
      <LanguageProvider>
        <div id="homepage">
          <Header onSelectCourse={setSelectedCourse} />
          <HeroSlider />
          <IconCarousel />
          <CourseSection />
          <FeaturesSection />
          <StatsSection />
          <TestimonialSlider />
          <Footer />
        </div>
      </LanguageProvider>
    </main>
  );
}
