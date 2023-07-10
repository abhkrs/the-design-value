import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle, FaRegStarHalf, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";

export default function page() {
  const coureseData = [
    {
      name: "UI/UX Design Certification with 100% Paid Internship",
      tag: "🔥 Bestseller",
      tagColor: "AC3E20",
      img: "/images/course1.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      liveClass: "Live class with mentor",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship",
      perMonth: "2,200",
      url: "/courses/workshop-with-internship",
    },
    {
      name: "UI/UX Design with Job Placement",
      tag: "🤕 Sold Out",
      tagColor: "084FC7",
      img: "/images/ui-ux.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      duration: "12 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship & Job",
      perMonth: "7,000",
      url: "/courses/",
    },
    {
      name: "UI/UX Certification",
      tag: "🏅 Recommended for Learners",
      tagColor: "#008A0E",
      img: "/images/ui_design.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      liveClass: "Live class with mentor",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "",
      perMonth: "1,000",
      url: "/courses/",
    },
    {
      name: "1 Month Workshop in UI/UX Design",
      tag: "🧑🏽‍🎓 For Beginners to Explore UI/UX",
      tagColor: "8A006C",
      img: "/images/designer-metier.png",
      details:
        "In this workshop you will unlock the power of user-centered design and elevate your UI/UX skills in our immersive workshop, where creativity meets functionality to create seamless user experiences",
      duration: "4 Classes",
      for: "Beginner to Intermediate",
      type: "Paid Internship",
      perMonth: "2,800",
      url: "/courses/",
    },
  ];
  return (
    <main>
      <Section>
        <H1 className="my-4">
          Introducing our <span className="text-secondary">Famous Four!</span>
        </H1>
        <P>
          Ours is an eclectic team of, graphic designers, product designers,
          content creators, project managers, artwork professionals,
          researchers, and artists. We are a creative bunch that collaborates,
          through what we call ‘organised chaos’, where efficiency and
          productivity matter most to us, peppered with healthy doses of
          ingenious insanity and ideation.
        </P>
      </Section>
      <Section>
        <div className="grid gap-10 mt-6">
          {coureseData.map((program) => (
            <div
              key={program.name}
              className="bg-white flex flex-col md:flex-row px-6 py-6 md:py-10 gap-6 md:gap-0 text-center md:text-start"
            >
              <div className="relative min-w-[300px] min-h-[300px] md:min-h-0">
                <Image
                  src={program.img}
                  alt={program.name}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="md:px-6 lg:px-8">
                <H3 className="!text-2xl">{program.name}</H3>
                <P className={`!bg-[#${program.tagColor}] !bg-opacity-25 !text-[#${program.tagColor}] max-w-max py-1 !font-semibold px-6 my-4 rounded mx-auto md:ml-0`}>
                  {program.tag}
                </P>
                <P className="!text-lg lg:w-4/5">{program.details}</P>
                <P className="text-secondary font-semibold min-h-[12px] mt-3 !text-lg">
                  {program.liveClass}
                </P>
                <span className="flex justify-center md:justify-start text-gold font-semibold my-2">
                 <span className="mr-2 -mt-1">4.8</span> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </span>
                <span className="text-gray-500 !text-lg font-semibold">{program.duration}<FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.for}
                  <FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.type}</span>
              </div>
              <div className="flex flex-col justify-end">
                <P className="font-bold !text-black mb-2 ms-2 !text-lg">
                  INR&nbsp;{program.perMonth}&nbsp;per month
                </P>
                <Link
                  href={program.url}
                  className="rounded-3xl bg-black !text-white hover:bg-primary px-6 py-1 max-w-max min-w-max mx-auto md:mr-auto !text-lg !font-semibold"
                >
                  View Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="mb-16" >
        <div className="flex flex-col md:flex-row p-2 lg:py-6 lg:px-10 relative bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/bglgr.png')`}}>
          <div className="p-6 !text-white">
            <H2 className="lg:!text-4xl">Looking for a personal batch for yourself?</H2>
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
            >☎️ Contact Us</Link>
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
      </Section>
    </main>
  );
}
