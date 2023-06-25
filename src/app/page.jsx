import Counts from "@/components/sections/Counts";
import DesignProcess from "@/components/sections/DesignProcess";
import HomeBanner from "@/components/sections/HomeBanner";
import LearningExp from "@/components/sections/LearningExp";
import Mentors from "@/components/sections/Mentors";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Mentors/>
      <Counts/>
      <DesignProcess/>
      <LearningExp/>
    </main>
  )
}
