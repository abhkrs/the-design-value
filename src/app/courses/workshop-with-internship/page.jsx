"use client";

import React, { useState, useEffect, useRef } from "react";
import Testimonials from "@/components/sections/Testimonials";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import AccordionTab from "@/components/uielements/AccordionTab";

export default function Page() {
  const [callBackForm, setCallBackForm] = useState(false);
  const [registerCourseForm, setRegisterCourseForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [uxCertificate, setUXCertificate] = useState(false);
  const [internship, setInternship] = useState(false);
  const [payableAmount, setPayableAmount] = useState(2000);
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit function
  };

  const sideTileRef = useRef(null);
  const testimonialSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sideTile = sideTileRef.current;
      const testimonialSection = testimonialSectionRef.current;

      if (sideTile && testimonialSection) {
        const sideTileRect = sideTile.getBoundingClientRect();
        const testimonialSectionRect =
          testimonialSection.getBoundingClientRect();

        if (sideTileRect.top <= 0 && testimonialSectionRect.top > 0) {
          sideTile.style.position = "fixed";
          sideTile.style.top = "8px";
        } else {
          sideTile.style.position = "absolute";
          sideTile.style.top = "auto";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <SectionDark className="flex pt-12 pb-8 justify-between relative max-h-min">
        <div className="w-2/3">
          <H2 className="!text-white !text-4xl">
            UI/UX Design with 100% Paid Internship
          </H2>
          <P className="my-6 !text-white !text-lg">
            Master the essentials of UI/UX design with our comprehensive course
            covering topics such as user research, wireframing, prototyping, and
            interaction design.{" "}
          </P>
          <div className="text-gold text-lg font-semibold flex my-4">
            4.8
            <FaStar className="mx-1 ml-4 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStar className="mx-1 mt-1" />
            <FaStarHalfAlt className="mx-1 mt-1" />
          </div>
          <H3 className="bg-secondary px-2 py-1 !text-white max-w-max font-normal">
            86% Placement Rate after internship
          </H3>
          <div className="text-gray-400 mt-6 flex justify-start">
            A verified course by{" "}
            <div className="relative h-7 w-32 ms-2">
              <Image
                src="/images/logo.svg"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
          <P className="!text-gold mt-4">
            <span className="font-bold">1,277 </span> people already enrolled
          </P>
        </div>
        <div className="w-1/3 absolute right-8 top-8 z-40">
          <div className="bg-white shadow-md p-6">
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
            <div className="border-b py-2">🧑🏻‍💻 Hands-on Learning</div>
            <div className="border-b py-2">
              📆{" "}
              <span className="ml-1">
                Batches on Mon, Tue, Wed, Thu ( 7pm - 9 pm) and Sat, Sun ( 2pm -
                4 pm)
              </span>
            </div>
            <div className="py-2">✅ 100% Guaranteed Internship</div>
            <P className="!text-sm text-gray-600 !italic pl-1">
              <span className="font-bold">Note:</span> We will be providing
              Internship to those students specifically, who will complete the
              whole course and will be eligible for the certificate.
            </P>
            <div className="mt-6 mb-3">
              <span className="p-2 bg-[#CE4863] mr-2">😲 Flat 58% Off</span>
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
              className="font-bold px-8 py-3 rounded-full shadow-md border w-full hover:bg-secondary"
            >
              ☎️ Get a Call Back
            </button>
            <button
              onClick={() => {
                setRegisterCourseForm(true);
              }}
              className="font-bold px-8 py-3 rounded-full bg-black hover:bg-primary !text-white shadow-md w-full my-3"
            >
              Register for Internship & Course
            </button>
          </div>
        </div>
      </SectionDark>
      {callBackForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded lg:px-16 shadow-lg w-2/3 relative">
            <H3 className="!text-2xl">
              😇 Thank You For Your Callback Request!{" "}
            </H3>
            <P className="my-3 !text-xl">Please help us with a few details</P>
            <hr />
            <button
              onClick={() => {
                setCallBackForm(false);
              }}
              className="absolute top-4 right-4 text-red-500"
            >
              <Image alt="" src="/images/close.svg" height="18" width="18" />
            </button>
            <form onSubmit={handleSubmit} className="relative mt-4 max-w-max">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name*"
                  className="border border-gray-300 px-3  py-1 w-full rounded "
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email ID*"
                  className="border border-gray-300 px-3  py-1 w-full rounded "
                />
              </div>
              <div className="mb-4 flex">
                <div className="border border-gray-300 pl-3 pr-2  py-1 rounded-l border-r-0 !text-gray-600 font-semibold">
                  +91
                </div>
                <span className="text-gray-400 border-t border-b py-1 border-gray-300">
                  |
                </span>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Mobile Number*"
                  className="border border-gray-300 pl-2 pr-3  py-1 w-full rounded-r border-l-0 "
                />
              </div>
              <div className="mb-4">
                <select
                  id="timeSlot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="border border-gray-300 px-3  py-1 w-full rounded "
                >
                  <option value="" disabled selected>
                    Select a time slot
                  </option>
                  <option value="Today, 10th May, 2 PM - 3 PM">
                    Today, 10th May, 2 PM - 3 PM
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
                className="bg-black !text-white py-2 px-8 rounded !text-xl rounded-full hover:bg-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {registerCourseForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
            <H3 className="!text-2xl mb-4">🧑🏽‍🎓 Register for Course</H3>
            <button
              onClick={() => {
                setRegisterCourseForm(false);
              }}
              className="absolute top-4 right-4 text-red-500"
            >
              <Image alt="" src="/images/close.svg" height="18" width="18" />
            </button>
            <hr />
            <P className="mt-4 bg-gold px-2 py-1 !text-white max-w-max">
              Your Batch will start from July
            </P>

            <form onSubmit={handleSubmit} className="relative mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name*"
                  className="border border-gray-300 px-3  py-1 w-1/2 rounded "
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email ID*"
                  className="border border-gray-300 px-3  py-1 w-1/2 rounded "
                />
              </div>
              <div className="mb-4">
                <P className="capitalize text-black font-semibold">
                  Select from Our available batches
                </P>
                <div className="gap-4 flex flex-wrap my-2">
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                  <button className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max">
                    Mon (7PM - 8:30PM)
                  </button>
                </div>
              </div>
              <div className="mb-3 mt-6">
                <input
                  type="radio"
                  id="ux-certificate"
                  checked={uxCertificate}
                  onChange={() => {
                    setInternship(false);
                    setUXCertificate(!uxCertificate);
                    setPayableAmount(
                      3000
                    );
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor="ux-certificate"
                  className={uxCertificate ? "font-semibold" : ""}
                >
                  UI/UX Certification @ INR 1,000 per month only
                </label>
              </div>
              <div className="mb-6">
                <input
                  type="radio"
                  id="internship"
                  checked={internship}
                  onChange={() => {
                    setUXCertificate(false);
                    setInternship(!internship);
                    setPayableAmount(
                      4200
                    );
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor="internship"
                  className={internship ? "font-semibold" : ""}
                >
                  UI/UX Certification with Paid Internship @ INR 2,200 per month
                  only
                </label>
              </div>

              <P className="italic ms-2 mb-2">Currently you are paying fee for 1st month of your course</P>

              <button
                type="submit"
                className="bg-black w-2/3 !text-white pb-2 pt-1 px-8 rounded !text-xl rounded-full hover:bg-primary"
              >
                Proceed to pay {payableAmount}
              </button>
            </form>
          </div>
        </div>
      )}
      <Section className="my-6 relative">
        <div className="w-2/3 grid gap-8 pr-8">
          <div className="bg-white px-12 py-10 rounded shadow ">
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

          <div className="bg-white px-12 py-10 rounded shadow">
            <H3 className="!text-2xl">What you&apos;ll learn</H3>
            <div className="grid grid-cols-2 gap-6 mt-4 text-gray-600">
              <div>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>User Persona
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Information
                  Architecture
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Wireframe
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Low-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>High-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Empathy
                  Mapping
                </P>
              </div>
              <div>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>User Journey
                  Mapping
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>User Flow
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>UI Brand Kit
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Responsive
                  Design
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Prototyping
                </P>
                <P>
                  <span className="mr-2 font-bold">&#x2713; </span>Usability
                  Testing
                </P>
              </div>
            </div>
          </div>

          <div className="bg-white px-12 py-10 rounded shadow">
            <H3 className="!text-2xl mb-4">Course Details</H3>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Foundations of UI/UX Design">
              <ul>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  iste ipsum eaque?
                </li>
                <li>
                  Consequuntur nihil voluptatem fugit accusantium possimus
                  placeat voluptatibus cumque rem commodi inventore!
                </li>
                <li>
                  Ipsam mollitia debitis ipsum, exercitationem nostrum soluta
                  quo ea corporis rem architecto?
                </li>
              </ul>
            </AccordionTab>
          </div>
        </div>
      </Section>
      <SectionDark>
        <div className="w-2/3 !text-white py-6">
          <H2 className="!text-4xl !font-normal">
            Earn a certificate in UI/UX design along with Internship
          </H2>
          <P className="my-4 !text-lg !text-white">
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
    </main>
  );
}
