/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Section from "../uielements/Section";
import H2 from "../typography/H2";
import P from "../typography/P";
import H4 from "../typography/H4";

export default function LearningExp() {
  return (
    <Section className="grid md:grid-cols-2 gap-6 lg:my-20 md:py-12 py-8">
      <div className="relative min-h-[300px] order-2 md:order-1">
        <Image
          src="/images/learning-experience.png"
          fill={true}
          className="object-contain"
          alt=""
        />
      </div>
      <div className="order-1 md:order-2">
        <H2 className='mb-6 text-center lg:text-start'>
          Premium <span className="text-secondary">Learning</span> Experience
        </H2>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
         <div className="w-20 h-20">
         <div className="relative w-20 h-20">
            <Image
              src="/images/live.png"
              fill={true}
              className="object-contain"
              alt=""
            />
          </div>
         </div>
          <div>
            <H4>Live Mentor Classes</H4>
            <P>Talk with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</P>
          </div>
        </div>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
          <div className="w-20 h-20">
          <div className="relative w-20 h-20">
            <Image
              src="/images/practice.png"
              fill={true}
              className="object-contain"
              alt=""
            />
          </div>
          </div>
          <div>
            <H4>Practice And Revise</H4>
            <P>Learning isn&#39;t just restricted to attending classes; it also involves working on projects at home, building your design portfolio, and creating presentations.</P>
          </div>
        </div>
        <div className="flex gap-4 align-center my-6 inter lg:w-[90%]">
          <div className="w-20 h-20">
          <div className="relative !w-20 !h-20">
            <Image
              src="/images/anytime.png"
              fill={true}
              className="object-contain"
              alt=""
            />
          </div>
          </div>
          <div>
            <H4>Learn Anytime, Anywhere</H4>
            <P>Join our classes to watch from the comfort of any of your devices with decent network.</P>
          </div>
        </div>
      </div>
    </Section>
  );
}
