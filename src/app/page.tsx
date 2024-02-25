import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoseUs from "@/components/WhyChoseUs";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
    </main>
  );
};

export default page;
