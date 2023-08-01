"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import Testimonials from "@/components/sections/Testimonials";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RegistrationContext } from "@/context/RegistrationContext";
import Modal from "@/components/ui/Modal";
import { usePathname } from "next/navigation";
import CourseDetails from "@/components/sections/CourseDetails";

export default function Page() {
  const {
    openRegistrationModal,
    courseModal,
    setSelectedCourse,
    getCourseName,
  } = useContext(RegistrationContext);
  const pageName = usePathname();
  console.log(pageName);
  const [callBackForm, setCallBackForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();

    const formData = {
      FullName: name,
      contactNo: phone,
      emailId: email,
      courseId: "UI/UX Design with Job Placement",
      startOn: "Wed 16 Aug 2023",
      totalTime: "12 Months",
      slotId: timeSlot,
    };

    console.log(formData);
    setSubmitting(true);

    fetch('https://ajinkya2709.pythonanywhere.com/Callback/requestCB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setSubmissionResult('success');
      } else {
        setSubmissionResult('error');
      }
    })
    .catch(error => {
      console.error('Error during the fetch request:', error);
      setSubmissionResult('error');
    })
    .finally(() => {
      setSubmitting(false);
      if (submissionResult === 'success') {
        setTimeout(() => {
          setSubmissionResult(null);
          setCallBackForm(false);
        }, 3000); // Show success message for 3 seconds and then set callbackForm to false
      } else {
        setTimeout(() => {
          setSubmissionResult(null);
        }, 2000); // Show failure message for 2 seconds and keep callbackForm true
      }
    });
  };
  

  return (
    <main>
      <Modal {...courseModal} />
      <SectionDark className="flex flex-col lg:flex-row pt-12 pb-8 justify-between relative max-h-min">
        <div className="lg:w-2/3">
          <H2 className="!text-white md:!text-4xl inter !font-inter">
            UI/UX Design with <span className="block md:inline">100% Paid Internship</span>
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
        <div className="lg:w-1/3 relative lg:-top-10 z-50 hidden lg:block">
          <div
            className="bg-white shadow-md p-6 lg:fixed lg:mr-10"
          >
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
              onClick={() => {
                openRegistrationModal();
                setSelectedCourse((prev) => ({
                  ...prev,
                  courseId: 1,
                  courseName: getCourseName(pageName),
                }));
              }}
              className="px-8 py-3 rounded-full bg-black hover:bg-primary !text-white !text-lg w-full my-3"
            >
              Register for Internship & Course
            </button>
          </div>
        </div>
      </SectionDark>
      <div className="lg:hidden">
        <div className=" p-6">
          <H3 className="!font-semibold !text-xl">Live Mentorship Guidance</H3>
          <P>Learn, practice, and apply job/internship ready skills with expert guidance</P>
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

      {callBackForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded lg:px-16 shadow-lg lg:w-2/3 relative">
            <H3 className="!text-2xl">
              😇 Thank You For Your Callback Request!
            </H3>
            {submissionResult === 'success' ? (
              <P className="my-3 !text-xl">Your callback request has been placed successfully. We will reach you soon.</P>
            ) : submissionResult === 'error' ? (
              <P className="my-3 !text-xl">Please check your details and try again.</P>
            ) : (
              <P className="my-3 !text-xl">Please help us with a few details</P>
            )}
            <hr />
                <button
                  onClick={() => {
                    setCallBackForm(false);
                  }}
                  className="absolute top-4 right-8 md:right-4 text-red-500"
                >
                  <Image alt="" src="/images/close.svg" height="18" width="18" />
                </button>
            {!submissionResult && (
              <form onSubmit={handleCallbackSubmit} className="relative mt-4 max-w-max">
                <div className="mb-4">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name*"
                    className="border border-gray-300 px-3 py-2 placeholder-secondary w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email ID*"
                    className="border border-gray-300 px-3 py-2 placeholder-secondary w-full"
                  />
                </div>
                <div className="mb-4 flex">
                  <div className="border border-gray-300 pl-3 pr-2  py-2 rounded-l border-r-0 !text-gray-600 font-semibold">
                    +91
                  </div>
                  <span className="text-gray-400 border-t border-b py-2 border-gray-300">
                    |
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Mobile Number*"
                    className="border border-gray-300 pl-2 pr-3 py-2 placeholder-secondary w-full  border-l-0 "
                  />
                </div>
                <div className="relative">
                  <div className="absolute right-1 z-50 !h-3 !w-4 p-2 mt-3 bg-white">
                    <Image
                      fill={true}
                      src="/images/dropdown.png"
                      className="object-contain !h-2 !w-3 mt-1"
                      alt="dropdown"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <select
                    id="timeSlot"
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="!border !border-gray-300 !px-3 !py-2 !pr-8 placeholder-secondary !bg-white"
                  >
                    <option value="" disabled selected>
                      Select a time slot
                    </option>
                    <option value="01 Aug, 01 Aug, 12 PM - 02 PM">
                      Select This
                    </option>
                    <option value="Today, 10th May, 2 PM - 3 PM">
                      Today, 10th May, 2 PM - 3 PM
                    </option>
                    <option value="Tomorrow, 10th May, 10 AM - 12 PM">
                      Tomorrow, 10th May, 10 AM - 12 PM
                    </option>
                    <option value="Tomorrow, 10th May, 12 PM - 2 PM">
                      Tomorrow, 10th May, 12 PM - 2 PM
                    </option>
                    <option value="Tomorrow, 10th May, 2 PM - 4 PM">
                      Tomorrow, 10th May, 2 PM - 4 PM
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-black w-2/3 !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Section className="my-6 relative bg-white md:bg-accent">
        <div className="lg:w-2/3 grid gap-8 lg:pr-8">
          <div className="bg-white md:px-12 py-10 rounded md:shadow ">
            <H3 className="!text-2xl">About The Course </H3>
            <P className="text-gray-600 mt-4 !text-base">
              This is a complete UI/UX design course where you will be learning
              the principals of design and the tools of UI design from beginner
              to masterclass level. After the 5 months duration of this course,{" "}
              <Link href="/" className="text-secondary underline">
                eligible students
              </Link>{" "}
              will get a verified certificate authorised by TheDesignValue and
              paid internship offer from us or other companies from the IT
              industry.
            </P>
          </div>

          <div className="bg-white md:px-12 md:py-10 rounded md:shadow">
            <H3 className="!text-2xl">What you&apos;ll learn</H3>
            <div className="grid md:grid-cols-2 md:gap-6 mt-4 text-gray-600">
              <div>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>User Persona
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Information
                  Architecture
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Wireframe
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Low-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>High-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Empathy
                  Mapping
                </P>
              </div>
              <div>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>User Journey
                  Mapping
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>User Flow
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>UI Brand Kit
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Responsive
                  Design
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Prototyping
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" /> </span>Usability
                  Testing
                </P>
              </div>
            </div>
          </div>

          <CourseDetails />
        </div>
      </Section>

      <SectionDark className="!-mt-5 md:mt-0">
        <div className="lg:w-2/3 !text-white md:py-6 pb-5">
          <H2 className="!text-[26px] md:!text-4xl !font-normal">
            Earn a certificate in UI/UX design along with Internship
          </H2>
          <P className="my-4 mb-6 !text-base md:!text-lg !text-[#d4d4d4]">
            Add this credential to your LinkedIn profile, resume, or CV Share it
            on social media and in your performance review
          </P>
          <Link
            href="#"
            className="px-8 rounded-full bg-white !text-black py-2 !text-xl"
          >
            👀 View Certificate
          </Link>
        </div>
      </SectionDark>

      <Testimonials />
      <div className="mb-28 md:hidden">
        <hr />
      </div>

      <div className="fixed bottom-0 bg-white rounded-t-xl p-4 lg:hidden w-full shadow-top">
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
          onClick={() => {
            openRegistrationModal(),
              setSelectedCourse((prev) => ({
                ...prev,
                courseId: 1,
                courseName: getCourseName(pageName),
              }));
          }}
          className="px-4 py-2 rounded-full bg-black hover:bg-primary !text-white !text-sm w-full"
        >
          Register Now
        </button>
        </div>
      </div>
    </main>
  );
}
