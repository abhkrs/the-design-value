"use client";

import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import CoursePanel from "@/components/uielements/CoursePanel";
import Section from "@/components/uielements/Section";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
export default function FullPage() {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    const getAllCourse = async () => {
      const response = await api.get("/Courses/allCourses");
      console.log(response.CourseData);
      setAllCourses(response.CourseData);
    };

    getAllCourse();
  }, []);
  console.log(allCourses);
  return (
    <main>
      <Section className="py-20 md:pt-10 md:pb-0">
        <H1 className="my-4 text-center md:text-start text-4xl">
          Introducing our{" "}
          <span className="text-secondary block md:inline">Famous Four!</span>
        </H1>
        <P className="hidden md:block">
          Ours is an eclectic team of, graphic designers, product designers,
          content creators, project managers, artwork professionals,
          researchers, and artists. We are a creative bunch that collaborates,
          through what we call ‘organised chaos’, where efficiency and
          productivity matter most to us, peppered with healthy doses of
          ingenious insanity and ideation.
        </P>
        <P className="md:hidden text-center">
          Select Course as per your needs. <br />
          (All courses are open for all Age groups)
        </P>
      </Section>
      <div className="2xl:container md:p-4 md:px-12 lg:px-28 mx-auto">
        {allCourses &&
          allCourses.map((courseDetails, index) => (
            <div className="grid gap-10 md:my-6" key={courseDetails.UId}>
              <CoursePanel
                courseName={courseDetails.CourseName}
                img={`/images/course${index + 1}.png`}
                tag={courseDetails.Tag}
                tagbg={courseDetails.TagColor}
                details={courseDetails.Details}
                liveClass={courseDetails.LiveClass}
                duration={courseDetails.CourseDuration}
                courseFor={courseDetails.For}
                type={courseDetails.Type}
                perMonth={courseDetails.PerMonth}
                url={`/courses/${courseDetails.slug}`}
              />
            </div>
          ))}
      </div>
      {/* <CoursePanel
            courseName="UI/UX Design Certification with 100% Paid Internship"
            img="/images/course1.png"
            tag="🔥 Bestseller"
            tagbg=""
            details="Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass."
            liveClass="Live class with mentor"
            duration="5 Months"
            courseFor="Beginner to Masterclass"
            type="Paid Internship"
            perMonth="2200"
            url="/courses/workshop-with-internship"
          />

          <CoursePanel
            courseName="UI/UX Design with Job Placement"
            img="/images/ui_design.png"
            tag="🏅 Recommended for Learners"
            tagbg="!bg-[#8A006C25] !text-[#8A006C]"
            details="Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass."
            liveClass="Live class with mentor"
            duration="5 Months"
            courseFor="Beginner to Masterclass"
            perMonth="1000"
            url=""
          />

          <CoursePanel
            courseName="UI/UX Design with Job Placement"
            img="/images/ui-ux.png"
            tag="🤕 Almost Sold Out"
            tagbg="!bg-[#084FC725] !text-[#084FC7]"
            details="Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass."
            liveClass="Live class with mentor"
            duration="12 Months"
            courseFor="Beginner to Masterclass"
            type="Paid Internship & Job"
            perMonth="7000"
            url=""
          />

          <CoursePanel
            courseName="Personal Batch"
            img="/images/designer-metier.png"
            tag="🧑🏽‍🎓 For Beginners to Masterclass"
            tagbg="!bg-[#008A0E26] !text-[#8A006C]"
            details="In this workshop you will unlock the power of user-centered design and elevate your UI/UX skills in our immersive workshop, where creativity meets functionality to create seamless user experiences"
            liveClass="Live class with mentor"
            duration="5 Months"
            courseFor="Beginner to Masterclass"
            perMonth="3000"
            url=""
          /> 
        </div>
      </div>*/}
      {/* <Section className="mb-16 !p-0">
        <div
          className="flex flex-col md:flex-row p-2 lg:py-6 lg:px-10 relative bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('/images/bglgr.png')` }}
        >
          <div className="p-6 !text-white">
            <H2 className="lg:!text-4xl">
              Looking for a personal batch for yourself?
            </H2>
            <P className="my-6 !text-white !text-xl">
              Master the essentials of UI/UX design with our comprehensive
              course covering topics such as user research, wireframing,
              prototyping, and interaction design.{" "}
            </P>
            <P className="!text-gold !text-xl mb-6">
              Beginner to masterclass &nbsp;&#x2022;&nbsp; Paid Internship offer
              if interested
            </P>
            <Link
              href="/"
              className="py-2 px-7 rounded-full bg-white text-black hover:bg-secondary font-semibold"
            >
              ☎️ Contact Us
            </Link>
          </div>

          <div className="relative -right-10 lg:-bottom-6 -bottom-2 min-w-[300px] min-h-[200px]">
            <Image
              src="/images/laptopguy.png"
              alt="Laptop Guy"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </Section> */}
    </main>
  );
}
