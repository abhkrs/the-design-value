import React from "react";
import { FaCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";
import P from "../typography/P";
import H3 from "../typography/H3";
import Link from "next/link";
import Image from "next/image";

export default function CoursePanel({
  courseName,
  img,
  tag,
  tagbg,
  details,
  liveClass,
  duration,
  courseFor,
  type,
  perMonth,
  url,
}) {
  tagbg = tagbg.toString();
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between px-6 py-6 md:py-10 gap-2 md:gap-0">
      <div className="relative xl:min-w-[350px] min-h-[300px]">
        <Image
          src={img}
          alt={courseName}
          fill={true}
          className="object-cover h-auto w-auto"
        />
      </div>
      <div className="pl-6 mr-auto">
        <H3 className="!text-2xl">{courseName}</H3>
        <div
          className={`bg-[#${tagbg}] bg-opacity-25 max-w-max py-1 font-semibold px-6 my-4 rounded`}
        
        >
          {tag}
        </div>
        {/* <P className="!text-lg xl:w-4/5">{details}</P> */}
        <P className="text-secondary font-semibold min-h-[12px] mt-3 !text-lg">
          {liveClass}
        </P>
        <span className="flex text-gold font-semibold my-2">
          <span className="mr-2 -mt-1">4.8</span> <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
        <span className="text-gray-500 !text-lg md:font-semibold">
          <span className="block md:inline-block">
            <FaCircle className="inline mr-2 md:mx-2 w-2 h-2 mb-1 md:hidden" />
            {duration}
          </span>
          <span className="block md:inline-block">
            <FaCircle className="inline mr-2 md:mx-2 w-2 h-2 mb-1" />
            {courseFor}
          </span>
          <span className={`${!type ? "hidden" : "block md:inline-block"}`}>
            {" "}
            <FaCircle className="inline mr-2 md:mx-2 w-2 h-2 mb-1" />
            {type}
          </span>
        </span>
      </div>
      <div className="flex flex-col xl:justify-end -mt-2">
        <div className="relative hidden md:block xl:hidden w-full min-h-[70%] mb-4">
          <Image
            src={img}
            alt={courseName}
            fill={true}
            className="object-cover h-auto w-auto"
          />
        </div>
        <div className="flex flex-col justify-end">
          <P className="font-bold !text-black mb-2 md:ms-2 !text-lg">
            INR&nbsp;{perMonth}&nbsp;per month
          </P>
          <Link
            href={url}
            className="rounded-full bg-black !text-white !text-lg hover:bg-primary px-6 py-2 max-w-max min-w-max md:mr-auto"
          >
            View Course Details
          </Link>
        </div>
      </div>
    </div>
  );
}
