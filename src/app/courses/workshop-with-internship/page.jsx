'use client'
import Testimonials from "@/components/sections/Testimonials";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import SectionDark from "@/components/uielements/SectionDark";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Page() {
  const [callBackForm, setCallBackForm] = useState(false);
  const [registerCourseForm, setRegisterCourseForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
// submit fucntion
  };
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
          <P className="text-gold mt-4">
            <span className="font-bold">1,277 </span> people already enrolled
          </P>
        </div>
        <div className="w-1/3 !relative">
          <div className="absolute bg-white shadow-md top-0 right-0 left-0 p-6 rounded-md">
            <H3 className="!font-semibold !text-xl">Live Mentorship Guidance</H3>
            <P className="text-gray-600 !text-md my-2">
              Learn, practice, and apply job/internship ready skills with expert
              guidance
            </P>
            <div className="border-b py-2">
              ⏰  5 Months | 1 Class Per Week
            </div>
            <div className="border-b py-2">
            🏆  The<span className="text-secondary">Design</span>Value registered Certification
            </div>
            <div className="border-b py-2">
            🧑🏻‍💻  Hands-on Learning
            </div>
            <div className="border-b py-2">
            📆  <span className="ml-1">Batches on Mon, Tue, Wed, Thu ( 7pm - 9 pm) and Sat, Sun ( 2pm - 4 pm)</span>
            </div>
            <div className="py-2">
            ✅  100% Guaranteed Internship
            </div>
            <P className="!text-sm text-gray-600 !italic pl-1"><span className="font-bold">Note:</span> We will be providing Internship to those students specifically, who will complete the whole course and will be eligible for the certificate.</P>
            <div className="mt-6 mb-3">
              <span className="p-2 bg-[#CE4863] mr-2">😲 Flat 58% Off</span>
              <span className="my-auto">Offer Valid till 20th May</span>
            </div>
            <div className="mb-3 py-2">
              <span className=" text-primary mr-2 font-bold">INR 2,500 per month</span>
              <span className="line-through text-gray-600">INR 6,000 per month</span>
            </div>
            <button onClick={() => {setCallBackForm(true)}} className="font-bold px-8 py-2 rounded-full shadow-md border w-full hover:bg-secondary">☎️  Get a Call Back</button>
            <button onClick={() => {setRegisterCourseForm(true)}} className="font-bold px-8 py-2 rounded-full bg-black hover:bg-primary !text-white shadow-md w-full my-3">Register for Internship & Course</button>
          </div>
        </div>
      </SectionDark>
      {callBackForm && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-1/2">
              <form onSubmit={handleSubmit} className="relative">
                <button
                  onClick={()=>{setCallBackForm(false)}}
                  className="absolute -top-2 right-0 text-red-500"
                >
                  Close
                </button>
                <div className="mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-1 rounded ml-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-1 rounded ml-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 p-1 rounded ml-6"
                  />
                </div>
                
                
                <button
                  type="submit"
                  className="bg-blue-500 !text-white py-1 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      <Section className="my-6">
        <div className="w-2/3 grid gap-8 pr-8">
          <div className="bg-white px-12 py-10 rounded shadow ">
            <H3 className="!text-2xl">About The Course </H3>
            <P className="text-gray-600 mt-4 !text-base">This is a complete UI/UX design course where you will be learning the principals of design and the tools of UI design from beginner to masterclass level. After the 5 months duration of this course, <Link href="/" className="text-secondary underline">eligible students</Link> will get a verified certificate authorised by TheDesignValue and paid internship offer from us or other companies from the IT industry.</P>
          </div>

          <div className="bg-white px-12 py-10 rounded shadow">
            <H3 className="!text-2xl">What you&apos;ll learn</H3>
            <div className="grid grid-cols-2 gap-6 mt-4 text-gray-600">
              <div>
                  <P><span className="mr-2 font-bold">&#x2713; </span>User Persona</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Information Architecture</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Wireframe</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Low-Fidelity Screens</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>High-Fidelity Screens</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Empathy Mapping</P>
              </div>
              <div>
                  <P><span className="mr-2 font-bold">&#x2713; </span>User Journey Mapping</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>User Flow</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>UI Brand Kit</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Responsive Design</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Prototyping</P>
                  <P><span className="mr-2 font-bold">&#x2713; </span>Usability Testing</P>
              </div>
            </div>
          </div>
          
        </div>
      </Section>
      <SectionDark>
        <div className="w-2/3 px-8 !text-white py-6">
        <H2 className="!text-4xl !font-normal">Earn a certificate in UI/UX design along with Internship</H2>
        <P className="my-4 !text-lg">Add this credential to your LinkedIn profile, resume, or CV Share it on social media and in your performance review</P>
        <Link href="#" className="px-8 rounded-full bg-white !text-black py-1">👀 View Certificate</Link>
        </div>
      </SectionDark>
      <Testimonials />
    </main>
  );
}
