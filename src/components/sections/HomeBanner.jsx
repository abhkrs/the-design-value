/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

import Image from "next/image";
import H1 from "../typography/H1";
import Section from "../uielements/Section";
import P from "../typography/P";

export default function HomeBanner() {
  return (
    <Section bg="bg-white">
      <div className="grid md:grid-cols-2 gap-[31px] py-10">
        <div className="">
          <H1 className="!text-3xl capitalize text-center md:text-start lg:!text-[56px] !leading-[110%] font-[700] mb-6">
            India’s first{" "}
            <span className="text-secondary">UI/UX design school</span> with
            <span className="block">Paid internships</span>
          </H1>
          <P className="text-center md:text-start !text-xl xl:pr-8">
            Be a part of the future design community and embark on a journey of
            creativity and innovation with our UI/UX course, designed
            specifically for working professionals and ambitious students.
          </P>
          <Link
            href=" "
            className="bg-black !text-white mt-10 rounded-3xl px-6 py-3 hover:bg-primary block max-w-max mx-auto md:mx-0"
          >
            View Courses
          </Link>
        </div>
        <div className="relative min-h-[300px]">
          <Image
            src="/images/objects.png"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
