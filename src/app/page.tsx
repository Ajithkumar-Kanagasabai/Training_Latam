import Header from "@/src/app/component/Header";
import HeroSlider from "@/src/app/component/HomeBanner";
import "./globals.css";
import IconCarousel from "@/src/app/component/IconCarousel";
import CourseSection from "@/src/app/component/CourseSection";
import FeaturesSection from "@/src/app/component/FeaturesSection";
import TestimonialSlider from "@/src/app/component/TestimonialSlider";
import StatsSection from "@/src/app/component/StatsSection";
import Footer from "@/src/app/component/Footer";


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
        <Footer />
      </div>
    </main>
  );
}
