import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import P from "../typography/P";
import H3 from "../typography/H3";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";

export default function CoursePanel({
  courseName,
  img,
  tag,
  tagbg,
  liveClass,
  duration,
  courseFor,
  type,
  perMonth,
  url,
  rating,
}) {
  let style;

  switch (tagbg) {
    case "AC3E20":
      style = "bg-[#AC3E20] text-[#AC3E20]";
      break;
    case "008A0E":
      style = "bg-[#008A0E] text-[#008A0E]";
      break;
    case "084FC7":
      style = "bg-[#084FC7] text-[#084FC7]";
      break;
    case "008A0E":
      style = "bg-[#008A0E] text-[#008A0E]";
      break;
    default:
      style = "bg-[#008A0E] text-[#008A0E]";
  }

  return (
    <div className="bg-white flex flex-col items-center md:flex-row justify-between px-6 py-6 md:py-10 gap-2 md:gap-0">
      <div className="relative min-w-full md:hidden lg:block lg:min-w-[250px] xl:min-w-[300px] min-h-[200px] sm:min-h-[300px] lg:min-h-full">
        <Image
          src={img}
          alt={courseName}
          fill={true}
          className="object-fit h-auto w-auto"
        />
      </div>
      <div className="pl-6 mr-auto">
        <H3 className="!text-2xl font-semibold">{courseName}</H3>
        {tagbg && (
          <div
            className={`${style} bg-opacity-25 max-w-max py-1 font-semibold px-6 my-4 rounded`}
          >
            {tag}
          </div>
        )}
        {/* <P className="!text-lg xl:w-4/5">{details}</P> */}
        <P className="text-secondary min-h-[12px] mt-3 !text-lg">{liveClass}</P>
        <div className="flex font-semibold my-2 items-start">
          <span className="text-gold">{rating}</span>
          <StarRating rating={parseFloat(rating) || 0} />
        </div>
        <span className="text-gray-500 !text-lg">
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
      <div className="flex flex-col xl:justify-end w-full md:w-auto pl-4 mt-auto">
        <div className="relative hidden md:block lg:hidden w-full min-h-[200px] min-w-full mb-4">
          <Image
            src={img}
            alt={courseName}
            fill={true}
            className="object-fit h-auto w-auto"
          />
        </div>
        <div className="flex flex-col justify-end">
          <P className="font-bold !text-black mb-2 ms-2 !text-lg">
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
