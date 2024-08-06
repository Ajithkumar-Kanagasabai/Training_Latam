import Header from "@/src/component/Header";
import HeroSlider from "@/src/component/HomeBanner";
import "./globals.css";
import IconCarousel from "@/src/component/IconCarousel";
import CourseSection from "@/src/component/CourseSection";
import FeaturesSection from "@/src/component/FeaturesSection";
import TestimonialSlider from "@/src/component/TestimonialSlider";
import StatsSection from "@/src/component/StatsSection";
import Footer from "@/src/component/Footer";


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <HeroSlider />
        <IconCarousel />
        <CourseSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialSlider />
      </div>
    </main>
  );
}
