/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import Section from "../typography/Section";
import H2 from "../typography/H2";
import Image from "next/image";
import H3 from "../typography/H3";
import P from "../typography/P";

export default function DesignProcess() {
  return (
    <Section bg="bg-white py-12">
      <H2 className="capitalize">
        <span className="text-primary">Design process</span> that our students
        follow!
      </H2>
      <div className="grid grid-cols-4 gap-6 mt-20 mb-6">
        <div>
          <div className="flex h-20 mb-4">
            <div className="relative w-1/4">
              <Image
                src="/images/feature1.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4">
              <Image
                src="/images/indicatorup.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div>
          <div className="flex h-20 mb-4">
            <div className="relative w-1/4">
              <Image
                src="/images/feature2.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4">
              <Image
                src="/images/indicatordown.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div>
          <div className="flex h-20 mb-4">
            <div className="relative w-1/4">
              <Image
                src="/images/feature3.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4">
              <Image
                src="/images/indicatorup.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div>
          <div className="flex h-20 mb-4">
            <div className="relative w-1/4">
              <Image
                src="/images/feature4.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
      </div>
    </Section>
  );
}
