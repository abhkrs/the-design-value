/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Section from "../typography/Section";
import H2 from "../typography/H2";
import H5 from "../typography/H5";
import P from "../typography/P";
import H4 from "../typography/H4";

export default function LearningExp() {
  return (
    <Section className="grid grid-cols-2 gap-6 my-20">
      <div className="relative min-h-[300px]">
        <Image
          src="/images/learning-experience.png"
          fill={true}
          className="object-contain"
        />
      </div>
      <div>
        <H2 className='mb-6'>
          Premium <span className="text-secondary">Learning</span> Experience
        </H2>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
          <div className="relative w-20 h-20">
            <Image
              src="/images/live.png"
              fill={true}
              className="object-contain"
            />
          </div>
          <div>
            <H4>Live Mentor classes</H4>
            <P>Talk with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</P>
          </div>
        </div>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
          <div className="relative w-20 h-20">
            <Image
              src="/images/practice.png"
              fill={true}
              className="object-contain"
            />
          </div>
          <div>
            <H4>Live Mentor classes</H4>
            <P>Talk with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</P>
          </div>
        </div>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
          <div className="relative w-20 h-20">
            <Image
              src="/images/anytime.png"
              fill={true}
              className="object-contain"
            />
          </div>
          <div>
            <H4>Live Mentor classes</H4>
            <P>Talk with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</P>
          </div>
        </div>
      </div>
    </Section>
  );
}
