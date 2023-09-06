"use client";

import React, { useState } from "react";
import Section from "../uielements/Section";
import H2 from "../typography/H2";
import Slider from "../uielements/Slider";
import Image from "next/image";
import P from "../typography/P";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const mentormonialData = [
  {
    id: 1,
    mentorImg: "/images/krish.png",
    mentorName: "Krishanu Choudhury",
    mentorExp: "5",
    mentorLinkedin: "url",
    mentorMsg: "Professional experience in UI and UX Design in Fintech and Health Industry.",
  },
  {
    id: 2,
    mentorImg: "/images/abhiroop.png",
    mentorName: "Abhiroop Banerjee",
    mentorExp: "5",
    mentorMsg: "Professional experience in UX Research and Visual Graphic Design in Fintech, Transport, Service and Health Industry.",
  },
  {
    id: 3,
    mentorImg: "/images/mrunali.png",
    mentorName: "Mrunali Dutt",
    mentorExp: "8",
    mentorMsg: "UX Researcher and Design Manager in the IT industry with experience in Banking and Finance sector.",
  },
];

const newResponsive = {
  0: {
    items: 1,
  },
  992: {
    items: 2,
  },
};

export default function Mentors() {
  const mentorSlides = mentormonialData.map((card) => (
    <div className="bg-white grid grid-cols-7 rounded-lg p-5 mx-2 xl:min-h-[240px] lg:min-h-[260px]" key={card.id}>
      <div className="relative h-full w-full col-span-3">
        <Image
          src={card.mentorImg}
          alt={card.mentorName}
          fill={true}
          className="object-cover rounded-md"
        />
      </div>
      <div className="ml-4 relative col-span-4">
        <Link href="#" className="absolute top-1 right-0 bg-secondary bg-opacity-50 rounded-full"><FaLinkedinIn className="h-10 w-10 text-primary p-2"/></Link>
        <P className="!text-black font-semibold capitalize !text-2xl mr-10">{card.mentorName}</P>
        <P className="mr-10 mb-4 mt-1">Mentor at <span className="text-secondary text-lg">TheDesignValue</span></P>
        <P className="mb-4 mr-4 !leading-relaxed text-lg">{card.mentorMsg}</P>
        <P className="mt-2 mr-4 capitalize !text-[#E59819] italic">{card.mentorExp}+ years of industry experience</P>
      </div>
    </div>
  ));

  return (
    <Section className="py-14">
      <H2>
        Meet Our <span className="text-secondary">Mentors</span>
      </H2>
      <div className="mt-16 md:mt-10 mb-6 -ml-2">
        <Slider slides={mentorSlides} noControl noDots={false} responsive={newResponsive} />
      </div>
    </Section>
  );
}
