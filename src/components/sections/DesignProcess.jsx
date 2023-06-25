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
      <H2 className="capitalize text-center lg:text-start">
        <span className="text-primary">Design process</span> that our students
        follow!
      </H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-auto">
        <div className="mt-10">
          <div className="flex h-20 mb-4 justify-center">
            <div className="relative w-1/4">
              <Image
                src="/images/feature1.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4 hidden lg:flex">
              <Image
                src="/images/indicatorup.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6 text-center lg:text-start">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div className="mt-10">
          <div className="flex h-20 mb-4 justify-center">
            <div className="relative w-1/4">
              <Image
                src="/images/feature2.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4 hidden lg:flex">
              <Image
                src="/images/indicatordown.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6 text-center lg:text-start">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div className="mt-10">
          <div className="flex h-20 mb-4 justify-center">
            <div className="relative w-1/4">
              <Image
                src="/images/feature3.png"
                fill={true}
                className="object-contain"
              />
            </div>
            <div className="relative left-2 w-3/4 hidden lg:flex">
              <Image
                src="/images/indicatorup.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6 text-center lg:text-start">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
        <div className="mt-10">
          <div className="flex h-20 mb-4 justify-center lg:justify-start">
            <div className="relative w-1/4">
              <Image
                src="/images/feature4.png"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
            <div className="pr-6 text-center lg:text-start">
                <H3>Research</H3>
                <P>Gain insights and understand user needs to inform the design process.</P>
            </div>
        </div>
      </div>
    </Section>
  );
}
