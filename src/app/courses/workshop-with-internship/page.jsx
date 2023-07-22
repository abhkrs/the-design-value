'use client';

import React, { useState, useEffect, useRef } from "react";
import Testimonials from "@/components/sections/Testimonials";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AccordionTab from "@/components/uielements/AccordionTab";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [callBackForm, setCallBackForm] = useState(false);
  const [registerCourseForm, setRegisterCourseForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fullName: name,
      contactNo: phone,
      emailId: email,
      courseName: "UI/UX with Internship",
      courseStart: "Mon 31 Aug",
      courseDuration: "3 Months",
      slotId: timeSlot,
    };
    console.log(formData);
    setCallBackForm(false);
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
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function handleSubscribe() {
    await initializeRazorpay();
    const subscribe = await fetch("/api/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 2000 }),
    });
    const res = await subscribe.json();
    console.log(res.order.id);
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      amount: res.order.amount,
      currency: "INR",
      name: "Design Value",
      description: "UI/UX Design with 100% Paid Internship",
      order_id: res.order.id,
      // callback_url: `payment-success`,
      // redirect: true,
      theme: {
        color: "#0b0b0b",
      },
      overlay: false,
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        router.push("/payment-success");
      },
    };

    const rpay = new window.Razorpay(options);
    rpay.open();
  }

  const initializeRazorpay = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };


  return (
    <main>
      <SectionDark className="flex flex-col lg:flex-row pt-12 pb-8 justify-between relative max-h-min">
        <div className="lg:w-2/3">
          <H2 className="!text-white !text-4xl inter !font-inter">
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
        <div className="lg:w-1/3 z-40 relative lg:-top-10 z-50 hidden lg:block">
          <div className="bg-white shadow-md p-6 lg:fixed lg:mr-10" ref={sideTileRef}>
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
            <div className="border-b py-2">🧑🏻‍💻 Hands-on-learning via GoogleMeet</div>
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
              <span className="p-2 bg-[#CE4863] mr-2 text-white">😲 Flat 58% Off</span>
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
              onClick={() => {
                setRegisterCourseForm(true);
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
          <div className="border-b py-2">🧑🏻‍💻 Hands-on-learning via GoogleMeet</div>
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
        </div>
      </div>

      {callBackForm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded lg:px-16 shadow-lg lg:w-2/3 relative">
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
                <div className="absolute right-1 z-50 !h-3 !w-4 p-2 mt-3 bg-white"><Image fill={true} src="/images/dropdown.png" className="object-contain !h-2 !w-3 mt-1" /></div>
                </div>
              <div className="mb-4">
                <select
                  id="timeSlot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="border border-gray-300 px-3 py-2 pr-8 placeholder-secondary"
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
                


                {/* <div className="flex px-3 justify-between rounded-md border py-2">
                  <span>Select a time slot</span><span className="relative h-3 w-4 mt-2"><Image fill={true} src="/images/dropdown.png" className="object-contain" /></span>
                </div>
                <div className="absolute bg-white z-40 p-4 gap-4 flex flex-col">
                <div className="flex justify-between rounded-md border py-2">
                  <span>Today, 10th May, 2 PM - 3 PM</span><span className="relative h-3 w-4 mt-2"><Image fill={true} src="/images/dropdown.png" className="object-contain" /></span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Today, 10th May, 2 PM - 3 PM</span><span className="relative h-3 w-4 mt-2"><Image fill={true} src="/images/dropdown.png" className="object-contain" /></span>
                </div>
                <div className="flex justify-between rounded-md border py-2">
                  <span>Today, 10th May, 2 PM - 3 PM</span><span className="relative h-3 w-4 mt-2"><Image fill={true} src="/images/dropdown.png" className="object-contain" /></span>
                </div>
                </div>   */}
              </div>
              <button
                type="submit"
                //  onClick={handleCallSubmit}
                className="bg-black w-2/3 !text-white py-2 px-8 rounded !text-lg rounded-full hover:bg-primary"
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

            <form onSubmit={handleSubscribe} className="relative mt-8">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name*"
                  className="border border-gray-300 px-3  py-2 w-1/2 rounded placeholder-secondary"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email ID*"
                  className="border border-gray-300 px-3  py-2 w-1/2 rounded placeholder-secondary"
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
                  className="border border-gray-300 pl-2 pr-3 py-2 placeholder-secondary w-[43.8%] rounded-r  border-l-0 "
                />
              </div>
              <div className="mb-4">
                <P className="capitalize text-black font-semibold">
                  Select from Our available batches
                </P>
                <div className="gap-4 flex flex-wrap my-2 max-w-[600px]">
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
              <P className="italic ms-2 mb-2 mt-10">
                Currently you are paying fee for 1st month of your course
              </P>

              <button
                type="submit"
                className="bg-black w-2/3 !text-white py-2 px-8 rounded !text-lg rounded-full hover:bg-primary"
              >
                Proceed to pay INR 2000
              </button>
            </form>
          </div>
        </div>
      )}

      <Section className="my-6 relative">
        <div className="lg:w-2/3 grid gap-8 lg:pr-8">
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
              <ul className="!list-disc ml-4">
                <li>
                  Understanding the fundamentals of UI and UX design and their
                  roles in creating successful digital products.
                </li>
                <li>
                  Exploring the relationship between design and user experience,
                  and how they impact user satisfaction and engagement.
                </li>
                <li>
                  Familiarizing yourself with the design process and the various
                  stages involved in creating user-centered designs.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="User Research and Analysis">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to conduct user research using techniques such as
                  interviews, surveys, and observation.
                </li>
                <li>
                  Understanding how to gather and analyze data to identify user
                  needs, preferences, and pain points.
                </li>
                <li>
                  Creating user personas to represent target users and using
                  them to inform design decisions.
                </li>
                <li>
                  Developing scenarios and user flows to map out the user
                  journey and identify areas for improvement.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Interaction Design">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to design interactions that are intuitive and
                  user-friendly.
                </li>
                <li>
                  Exploring various navigation patterns, such as menus, tabs,
                  and gestures, and understanding when to use each.
                </li>
                <li>
                  Incorporating micro-interactions, such as button animations
                  and loading indicators, to enhance the user experience.
                </li>
                <li>
                  Adapting designs for different devices and platforms,
                  considering factors like screen size and touch interactions.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Usability Testing and Evaluation">
              <ul className="ml-4 list-disc">
                <li>
                  Learning how to plan and conduct usability tests to evaluate
                  the effectiveness of your designs.
                </li>
                <li>
                  Analyzing and interpreting user feedback and test results to
                  identify areas of improvement.
                </li>
                <li>
                  Iteratively refining and iterating designs based on user
                  feedback and testing insights.
                </li>
                <li>
                  Understanding usability heuristics and best practices to
                  create designs that are intuitive and user-friendly.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="User Interface Design">
              <ul className="ml-4 list-disc">
                <li>
                  Exploring the principles of effective UI design, including
                  visual hierarchy, layout, and typography.
                </li>
                <li>
                  Understanding color theory and how to choose appropriate color
                  schemes for different purposes.
                </li>
                <li>
                  Creating wireframes, which are basic skeletal representations
                  of a user interface, to plan and structure your designs.
                </li>
                <li>
                  Translating wireframes into high-fidelity mockups using design
                  software like Adobe XD, Sketch, or Figma.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Visual Design and Branding">
              <ul className="ml-4 list-disc">
                <li>
                  Understanding the role of visual design in creating appealing
                  and cohesive user interfaces.
                </li>
                <li>
                  Learning how to create a visual identity and style guide for a
                  digital product.
                </li>
                <li>
                  Exploring techniques for choosing and using typography
                  effectively in UI design.
                </li>
                <li>
                  Incorporating graphics, icons, and imagery to enhance the
                  aesthetic appeal and communication of designs.
                </li>
              </ul>
            </AccordionTab>
            <AccordionTab heading="Tools and Software">
              <ol className="ml-4 list-decimal">
                <li>Introduction to Figma</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Overview of Figma as a powerful design and prototyping tool.
                  </li>
                  <li>
                    Understanding the Figma interface, tools, and features.
                  </li>
                  <li>Setting up your workspace and project organization.</li>
                </ul>
                <li>Designing with Figma</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Design principles and best practices for creating visually
                    appealing interfaces.
                  </li>
                  <li>
                    Using shapes, vectors, and text tools to create design
                    elements.
                  </li>
                  <li>
                    Applying colors, gradients, and typography to enhance your
                    designs.
                  </li>
                  <li>
                    Using Figma&apos;s libraries and components for consistent
                    design elements.
                  </li>
                </ul>
                <li>Creating Interactive Prototypes</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Understanding the importance of prototyping in the design
                    process.
                  </li>
                  <li>
                    Creating interactive hotspots and links to simulate user
                    interactions.
                  </li>
                  <li>
                    Defining transitions and animations to bring your designs to
                    life.
                  </li>
                  <li>
                    Previewing and sharing prototypes with stakeholders for
                    feedback.
                  </li>
                </ul>
                <li>Collaborating and Version Control</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Collaborating with team members in real-time using
                    Figma&apos;s collaboration features.
                  </li>
                  <li>
                    Utilizing comments and annotations to provide feedback and
                    make design iterations.
                  </li>
                  <li>
                    Managing version control to track design changes and revert
                    if necessary.
                  </li>
                </ul>
                <li>Design Systems and Components</li>
                <ul className="ml-4 list-disc">
                  <li>Building and managing design systems within Figma.</li>
                  <li>
                    Creating reusable components for consistent and efficient
                    design workflow.
                  </li>
                  <li>
                    Using constraints and auto-layout to create responsive and
                    scalable designs.
                  </li>
                  <li>
                    Applying design tokens to ensure consistency across
                    projects.
                  </li>
                </ul>
                <li>Advanced Figma Features</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Utilizing plugins and integrations to extend the
                    functionality of Figma.
                  </li>
                  <li>
                    Exploring advanced techniques like vector editing, masking,
                    and advanced prototyping.
                  </li>
                  <li>
                    Optimizing workflow with keyboard shortcuts and productivity
                    hacks.
                  </li>
                  <li>
                    Exploring design handoff and export options for developers.
                  </li>
                </ul>
                <li>Designing for Collaboration and Handoff</li>
                <ul className="ml-4 list-disc">
                  <li>
                    Preparing your designs for development handoff using
                    Figma&apos;s features.
                  </li>
                  <li>Generating design specs and assets for developers.</li>
                  <li>Streamlining the design-to-development workflow.</li>
                </ul>
              </ol>
            </AccordionTab>
          </div>
        </div>
      </Section>

      <SectionDark>
        <div className="lg:w-2/3 !text-white py-6">
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

      <Testimonials ref={testimonialSectionRef} />

      <div className="fixed bottom-0 bg-white rounded-t-xl p-4 lg:hidden w-full">
            <div className="mx-auto text-center">
              <span className="p-2 bg-[#CE4863] mr-2 !text-sm !text-white">😲 Flat 58% Off</span>
              <span className="my-auto !text-sm">
                 Hurry! Offer Valid till 20th May
              </span>
            </div>
            <div className="mb-1 py-2 !text-md mx-auto text-center">
              <span className=" text-primary mr-2 font-bold">
                INR 2,500 per monthś
              </span>
              <span className="line-through text-gray-600">
                INR 6,000 per month
              </span>
            </div>
            <button
              onClick={() => {
                setCallBackForm(true);
              }}
              className="px-4 py-2 mb-1 rounded-full !text-sm border w-full hover:bg-secondary"
            >
              ☎️ Get a Call Back
            </button>
            <button
              onClick={() => {
                setRegisterCourseForm(true);
              }}
              className="px-4 py-2 my-2 rounded-full bg-black hover:bg-primary !text-white !text-sm w-full"
            >
              Register for Internship & Course
            </button>
          </div>
    </main>
  );
}
