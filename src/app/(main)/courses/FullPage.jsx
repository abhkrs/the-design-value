"use client";

import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import CoursePanel from "@/components/uielements/CoursePanel";
import Section from "@/components/uielements/Section";
import { useEffect, useState } from "react";
import api from "../../../../utils/api";
import SkeletonLoader from "@/components/uielements/SkeletonLoader";
export default function FullPage() {
  const [allCourses, setAllCourses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const numberOfSkeletons = 4;

  useEffect(() => {
    const getAllCourse = async () => {
      const response = await api.get("/Courses/allCourses");
      setIsLoaded(true);
      setAllCourses(response.CourseData);
    };

    getAllCourse();
  }, []);
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
        {!isLoaded &&
          Array.from({ length: numberOfSkeletons }, (_, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center md:flex-row justify-between px-6 py-6 md:py-10 gap-2 md:gap-0 mb-5"
            >
              <div className="relative xl:min-w-[350px] min-h-[200px] md:w-[350px] md:h-[200px] h-[300px] w-full">
                <SkeletonLoader className={"min-w-[350px] min-h-[200px] w-full"} />
              </div>
              <div className="sm:pl-6 pl-2 md:mr-auto md:w-[60%] w-full mt-auto">
                <SkeletonLoader className={"md:!w-[70%] !w-[95%] min-h-[30px] mb-3"} />
                <SkeletonLoader className={"!md:w-[20%] !w-[60%] min-h-[30px] mb-3"} />
                <SkeletonLoader className={"!md:w-[30%] !w-[70%] min-h-[30px] mb-3"} />
                <SkeletonLoader className={"!md:w-[25%] !w-[60%] min-h-[30px] mb-3"} />
                <SkeletonLoader className={"!md:w-[55%] !w-[80%] min-h-[30px] mb-3"} />
              </div>
              <div className="flex flex-col xl:justify-end md:w-[20%] sm:w-[30%] w-[50%] md:mx-auto mr-auto">
                <SkeletonLoader
                  className={"!w-[85%] min-h-[30px] mb-3 mx-auto"}
                />
                <SkeletonLoader
                  className={"!w-[100%] min-h-[40px] mb-3 !rounded-lg"}
                />
              </div>
            </div>
          ))}
        {isLoaded &&
          allCourses &&
          allCourses.map((courseDetails, index) => (
            <div className="grid gap-10 md:my-6" key={courseDetails.UId}>
              <CoursePanel
                courseName={courseDetails.CourseName}
                img={`/images/courseimages/${courseDetails?.imgName}`}
                tag={courseDetails.Tag}
                tagbg={`${courseDetails.TagColor}`}
                details={courseDetails.Details}
                liveClass={courseDetails.LiveClass}
                duration={courseDetails.CourseDuration}
                courseFor={courseDetails.For}
                type={courseDetails.Type}
                perMonth={courseDetails.PerMonth}
                rating={courseDetails?.Rating}
                url={`/courses/${courseDetails.slug}`}
              />
            </div>
          ))}
      </div>

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
