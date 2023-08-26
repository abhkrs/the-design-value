"use client";

import Section from "@/components/uielements/Section";
import Image from "next/image";
import React from "react";

import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Alright, but what exactly do you do?",
      content: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      title:
        "Alright, but what exactly do you do?",
      content:
        "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
      title: "Alright, but what exactly do you do?",
      content: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
    },
    {
        title:
          "Alright, but what exactly do you do?",
        content:
          "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      },
      {
        title: "Alright, but what exactly do you do?",
        content: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      },
      {
        title:
          "Alright, but what exactly do you do?",
        content:
          "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      },
      {
        title: "Alright, but what exactly do you do?",
        content: "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
      },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <main>
      <Section>
        <div className="my-10">
          <div className="bg-[#FFFFFF75] rounded-lg shadow md:px-6 md:py-8 grid gap-1 -mx-3 md:mx-auto">
            {accordionData.map((item, index) => (
              <div key={index} className="bg-white p-6 md:rounded-lg shadow">
                <div>
                <span className="!text-4xl text-gray-400 font-bold mr-4 md:hidden">
                    {index<10 && '0'}{index + 1}
                  </span>
                </div>
                <div
                  className={`flex ${index === activeIndex ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="!text-4xl dm-sans text-secondary font-bold mr-4 hidden md:block">
                    {index<10 && '0'}{index + 1}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold mt-2 md:mt-0">{item.title}</span>
                  <button
                    className="ml-auto"
                  >
                    {/* <span className="-mt-2">{index === activeIndex ? "x" : "+"}</span> */}
                    <Image
                    src={index === activeIndex ? "/images/xmark.png" : "/images/plus.png"}
                    alt="plus minus"
                    height="35"
                    width="35"
                    className="!h-12 md:!h-auto !w-14 ml-2 md:!w-auto"
                    />
                  </button>
                </div>
                {index === activeIndex && (
                  <div className="-ml-3 md:ml-10 p-3 pb-0 md:mt-0 text-lg">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Accordion;
