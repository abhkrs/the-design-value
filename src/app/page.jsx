"use client";

import Counts from "@/components/sections/Counts";
import DesignProcess from "@/components/sections/DesignProcess";
import HomeBanner from "@/components/sections/HomeBanner";
import LearningExp from "@/components/sections/LearningExp";
import MentorForm from "@/components/sections/MentorForm";
import Mentors from "@/components/sections/Mentors";
import StudentsWorking from "@/components/sections/StudentsWorking";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Mentors/>
      <Counts/>
      <DesignProcess/>
      <LearningExp/>
      <StudentsWorking />
      <MentorForm />
      <Testimonials />
    </main>
  )
}
