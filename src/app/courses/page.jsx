import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";

export default function page() {
  const coureseData = [
    {
      name: "UI/UX Design Certification with 100% Paid Internship",
      tag: "Bestseller",
      img: "/images/course1.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      liveClass: "Live class with mentor",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship",
      perMonth: "2,800",
      url: "/courses/workshop-with-internship",
    },
    {
      name: "UI/UX Design Certification",
      tag: "Bestseller",
      img: "/images/ui-ux.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship",
      perMonth: "2,800",
      url: "/courses/workshop-with-intrnship",
    },
    {
      name: "UI/UX Design Certification with Paid Internship",
      tag: "Bestseller",
      img: "/images/ui_design.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      liveClass: "Live class with mentor",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship",
      perMonth: "2,800",
      url: "/courses/workshop-with-intrnship",
    },
    {
      name: "UI/UX Design Certification with",
      tag: "Bestseller",
      img: "/images/designer-metier.png",
      details:
        "Master the essentials of UI/UX design with our comprehensive course covering topics from beginner to masterclass.",
      duration: "5 Months",
      for: "Beginner to Masterclass",
      type: "Paid Internship",
      perMonth: "2,800",
      url: "/courses/workshop-with-intrnship",
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
                <H3>{program.name}</H3>
                <P className="max-w-max px-6 my-4 bg-secondary rounded mx-auto md:ml-0">
                  {program.tag}
                </P>
                <P>{program.details}</P>
                <P className="text-secondary font-semibold min-h-[18px] mt-6">
                  {program.liveClass}
                </P>
                {program.duration}<FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.for}
                  <FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.type}
              </div>
              <div className="flex flex-col justify-end">
                <P className="font-bold !text-black mb-2 ms-2">
                  INR&nbsp;{program.perMonth}&nbsp;per month
                </P>
                <Link
                  href={program.url}
                  className="rounded-2xl bg-black !text-white hover:bg-primary px-6 py-1 max-w-max min-w-max mx-auto md:mr-auto"
                >
                  View Course Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <SectionDark className="mb-16">
        <div className="flex flex-row p-2 lg:py-6 relative">
          <div className="col-span-3 p-6 !text-white">
            <H2>Looking for a personal batch for yourself?</H2>
            <P className="my-6">
              Master the essentials of UI/UX design with our comprehensive
              course covering topics such as user research, wireframing,
              prototyping, and interaction design.{" "}
            </P>
            <P className="text-orange">
              Beginner to masterclass &nbsp;&#x2022;&nbsp; Paid Internship offer
              if interested
            </P>
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
      </SectionDark>
    </main>
  );
}
