"use client";

import Section from "@/components/uielements/Section";
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
          <div className="bg-[#FFFFFF75] rounded-lg shadow px-6 py-8 grid gap-1">
            {accordionData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div
                  className={`flex ${index === activeIndex ? "active" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="!text-4xl text-secondary font-bold mr-2">
                    0{index + 1}.
                  </span>
                  <span className="text-2xl font-semibold">{item.title}</span>
                  <button
                    className={`${
                      index === activeIndex ? "bg-black" : "bg-secondary text-xl font-bold"
                    }  rounded-full !text-white ml-auto min-h-[28px] max-h-[28px] min-w-[28px] text-center`}
                  >
                    <span className="-mt-2">{index === activeIndex ? "x" : "+"}</span>
                  </button>
                </div>
                {index === activeIndex && (
                  <div className="ml-12 p-3 pb-0 mt-2 text-lg">
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
