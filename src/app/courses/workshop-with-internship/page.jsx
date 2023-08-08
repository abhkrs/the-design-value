"use client";

import React, { useState, useContext, useEffect } from "react";
import Testimonials from "@/components/sections/Testimonials";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RegistrationContext } from "@/context/RegistrationContext";
import Modal from "@/components/ui/Modal";
import AboutCourse from "@/components/sections/AboutCourse";
import ViewCertificate from "@/components/sections/ViewCertificate";
import CallbackForm from "@/components/APIComponents/CallbackForm";


export default function Page() {
  const {
    openRegistrationModal,
    courseModal,
    setSelectedCourse,
    selectedCourse,
  } = useContext(RegistrationContext);
  const [callBackForm, setCallBackForm] = useState(false);
  useEffect(() => {
    if (selectedCourse.courseName) {
      openRegistrationModal();
    }
  }, [selectedCourse]);

  const handleCourseClick = () => {
    setSelectedCourse((prev) => ({
      ...prev,
      courseId: 1,
      courseName: "UI/UX Design with 100% Paid Internship",
      coursePrice: 2500,
    }));
  };

  return (
    <main>
      <Modal {...courseModal} />
      {callBackForm && (
        <CallbackForm onClose={() => setCallBackForm(false)} courseNumber={0} />
      )}
      <SectionDark className="flex flex-col lg:flex-row pt-12 pb-8 justify-between relative max-h-min">
        <div className="lg:w-2/3">
          <H2 className="!text-white md:!text-4xl inter !font-inter">
            UI/UX Design with{" "}
            <span className="block md:inline">100% Paid Internship</span>
          </H2>
          <P className="my-6 !text-base md:!text-lg !text-[#d4d4d4]">
            Master the essentials of UI/UX design with our comprehensive course
            covering topics such as user research, wireframing, prototyping, and
            interaction design.
          </P>
          <div className="text-gold text-lg font-semibold flex my-4">
            4.8
            <FaStar className="mx-1 ml-4 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStarHalfAlt className="mx-1 mt-1" />
          </div>
          <P className="bg-secondary !text-base px-2 py-1 !text-white max-w-max font-normal">
            86% Placement Rate after internship
          </P>
          <div className="text-gray-400 mt-6 flex justify-start">
            A verified course by{" "}
            <div className="relative h-7 w-32 ms-2">
              <Image
                src="/images/logo.svg"
                fill={true}
                className="object-contain"
                alt="logo"
              />
            </div>
          </div>
          <P className="!text-gold mt-4">
            <span className="font-bold">1,277 </span> people already enrolled
          </P>
        </div>
        <div className="lg:w-1/3 relative lg:-top-10 z-30 hidden lg:block">
          <div className="bg-white shadow-md p-6 lg:fixed lg:mr-10">
            <H3 className="!font-semibold !text-xl">
              Live Mentorship Guidance
            </H3>
            <P className="!text-lg my-2 !text-white !bg-[#E59819] max-w-max px-2 py-1">
              Batch starting from July
            </P>
            <div className="border-b border-t py-2">
              ⏰ 5 Months | 1 Class Per Week
            </div>
            <div className="border-b py-2">
              🏆{" "}
              <span className="font-bold">
                The<span className="text-secondary">Design</span>Value
              </span>{" "}
              registered Certification
            </div>
            <div className="border-b py-2">
              🧑🏻‍💻 Hands-on-learning via GoogleMeet
            </div>
            <div className="border-b py-2">
              📆{" "}
              <span className="ml-1">
                Batches on Mon, Tue, Wed, Fri, Sat, Sun
              </span>
            </div>
            <div className="py-2">✅ 100% Guaranteed Internship</div>
            <P className="!text-sm text-gray-600 !italic pl-1">
              <span className="font-bold">Note:</span> We will be providing
              Internship to those students specifically, who will complete the
              whole course and will be eligible for the certificate.
            </P>
            <div className="mt-6 mb-3">
              <span className="p-2 bg-[#CE4863] mr-2 text-white">
                😲 Flat 58% Off
              </span>
              <span className="my-auto font-semibold">
                Hurry! Offer Valid till 20th May
              </span>
            </div>
            <div className="mb-3 py-2">
              <span className=" text-primary mr-2 font-bold">
                INR 2,500 per month
              </span>
              <span className="line-through text-gray-600">
                INR 6,000 per month
              </span>
            </div>
            <button
              onClick={() => {
                setCallBackForm(true);
              }}
              className="px-8 py-3 rounded-full !text-lg border w-full hover:bg-secondary"
            >
              ☎️ Get a Call Back
            </button>
            <button
              type="button"
              onClick={handleCourseClick}
              className="px-8 py-3 rounded-full bg-black hover:bg-primary !text-white !text-lg w-full my-3"
            >
              Register for Internship & Course
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white rounded-t-xl p-4 lg:hidden w-full shadow-top">
          <P className="!text-lg mb-2 !text-white !bg-[#E59819] text-center px-2 py-1 -mt-1">
            Batch starting from July
          </P>
          <div className=" flex mb-3">
            <div className="mx-auto text-center w-[40%] mt-1">
              <div className="p-2 bg-[#CE4863] mr-2 !text-sm !text-white">
                😲 Flat 58% Off
              </div>
              {/* <div className="my-auto !text-sm block mt-2 font-semibold">
              Hurry! Offer Valid till 20th May
            </div> */}
            </div>
            <div className="!text-md mx-auto text-center w-[60%]">
              <div className="line-through text-gray-600">
                INR 6,000 per month
              </div>
              <div className=" text-primary mr-2 font-bold">
                INR 2,500 per month
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setCallBackForm(true);
              }}
              className="px-4 py-2 rounded-full !text-sm border border-black w-full hover:bg-secondary font-semibold"
            >
              ☎️ Get a Call Back
            </button>
            <button
              type="button"
              onClick={handleCourseClick}
              className="px-4 py-2 rounded-full bg-black hover:bg-primary !text-white !text-sm w-full"
            >
              Register Now
            </button>
          </div>
        </div>
      </SectionDark>
      <div className="lg:hidden">
        <div className=" p-6">
          <H3 className="!font-semibold !text-xl">Live Mentorship Guidance</H3>
          <P>
            Learn, practice, and apply job/internship ready skills with expert
            guidance
          </P>
          <div className="border-b border-t py-2 mt-3">
            ⏰ 5 Months | 1 Class Per Week
          </div>
          <div className="border-b py-2">
            🏆{" "}
            <span className="font-bold">
              The<span className="text-secondary">Design</span>Value
            </span>{" "}
            registered Certification
          </div>
          <div className="border-b py-2">
            🧑🏻‍💻 Hands-on-learning via GoogleMeet
          </div>
          <div className="border-b py-2">
            📆{" "}
            <span className="ml-1">
              Batches on Mon, Tue, Wed, Thu ( 7pm - 9 pm) and Sat, Sun ( 2pm - 4
              pm)
            </span>
          </div>
          <div className="py-2">✅ 100% Guaranteed Internship</div>
          <P className="!text-sm text-gray-600 !italic pl-1">
            <span className="font-bold">Note:</span> We will be providing
            Internship to those students specifically, who will complete the
            whole course and will be eligible for the certificate.
          </P>
        </div>
      </div>
      <AboutCourse />
      <ViewCertificate />
      <Testimonials />
      <div className="mb-28 md:hidden">
        <hr />
      </div>
    </main>
  );
}
