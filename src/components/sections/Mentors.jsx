"use client";

import React, { useState } from "react";
import Section from "../uielements/Section";
import H2 from "../typography/H2";

export default function Mentors() {
  const [activeTiles, setActiveTiles] = useState(false);
  return (
    <Section className="py-14">
      <H2>
        Meet Our <span className="text-secondary">Mentors</span>
      </H2>
      <div className="grid md:grid-cols-2 gap-6 py-6 md:py-10">
        <div className="bg-white min-h-[180px] shadow-md rounded-xl"></div>
        <div className="bg-white min-h-[180px] shadow-md rounded-xl"></div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          className={`${
            !activeTiles ? "bg-primary w-6" : "w-3 bg-gray-400"
          } h-3 rounded-lg shadow-lg`}
        ></button>
        <button
          className={`${
            activeTiles ? "bg-primary w-6" : "w-3 bg-gray-400"
          } h-3 rounded-lg shadow-lg`}
        ></button>
        <button
          className={`${
            activeTiles ? "bg-primary w-6" : "w-3 bg-gray-400"
          } h-3 rounded-lg shadow-lg`}
        ></button>
        <button
          className={`${
            activeTiles ? "bg-primary w-6" : "w-3 bg-gray-400"
          } h-3 rounded-lg shadow-lg`}
        ></button>
      </div>
    </Section>
  );
}
