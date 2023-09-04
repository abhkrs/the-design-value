"use client";

import React, { useState } from "react";
import Section from "../uielements/Section";
import H2 from "../typography/H2";
import Slider from "../uielements/Slider";
import Image from "next/image";
import P from "../typography/P";

const testimonialData = [
  {
    id: 1,
    mentorImg: "/images/mentor.png",
    mentorName: "Finlay Kirk",
    mentorExp: "8",
    mentorLinkedin: "url",
    mentorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 2,
    mentorImg: "/images/mentor.png",
    mentorName: "Finlay Kirk",
    mentorExp: "5",
    mentorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
  {
    id: 3,
    mentorImg: "/images/mentor.png",
    mentorName: "Finlay Kirk",
    mentorExp: "4",
    mentorMsg:
      "“Unleash your teaching prowess and become a UI/UX instructor with us. Inspire the next generation of designers and shape the future of user experience.",
  },
];

const newResponsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
};

export default function Mentors() {
  const testiSlides = testimonialData.map((card) => (
    <div className="bg-white grid grid-cols-2 rounded-lg p-5 mx-2" key={card.id}>
      <div className="relative h-full w-full">
        <Image
          src={card.mentorImg}
          alt={card.mentorName}
          fill={true}
          className="object-cover pe-4"
        />
      </div>
      <div>
        <P className="mb-6 ml-2 !leading-relaxed text-lg">{card.mentorMsg}</P>
        <P className="!text-black mt-2 font-semibold capitalize text-start">
          {card.mentorName}
        </P>
        <P className="mt-2 capitalize">{card.mentorExp}</P>
      </div>
    </div>
  ));

  return (
    <Section className="py-14">
      <H2>
        Meet Our <span className="text-secondary">Mentors</span>
      </H2>
      <div className="mt-16 md:mt-10 mb-6 -ml-2">
        <Slider slides={testiSlides} noControl noDots={false} responsive={newResponsive} />
      </div>
    </Section>
  );
}
