import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChoseUs from "@/components/WhyChoseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructor from "@/components/Instructor";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChoseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructor />
    </main>
  );
};

export default page;
