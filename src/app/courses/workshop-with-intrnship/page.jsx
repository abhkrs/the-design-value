import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckSquare, FaCircle } from "react-icons/fa";

export default function page() {
  const studentDetails = {
    name: "Abhiroop Banerjee",
    studentID: "TDV12587984",
    email: "abc@domian.com",
    phoneNumber: "9876543210",
    coursePurchased: [
      {
        name: "UI/UX Design Certification with 100% Paid Internship",
        img: "/images/course1.png",
        enrolledFor: "June",
        endingOn: "November",
        duration: "5 Months",
        for: "Beginner to Masterclass",
        type: "Paid Internship",
        status: "Course In Progress",
        payment: "/",
      },
    ],
  };
  return (
    <main>
      <Section>
        <div className="grid gap-10 mt-6">
          <div className="bg-white p-6 md:p-10">
              <H2>Welcome, {studentDetails.name}!</H2>
              <H3 className="text-secondary mt-6">StudentID - {studentDetails.studentID}</H3>
              <P className="mt-6">Full Name - {studentDetails.name}</P>
              <P className="mt-2">Email ID - {studentDetails.email}</P>
              <P className="mt-2">Mobile Number - {studentDetails.phoneNumber}</P>
          </div>
          {studentDetails.coursePurchased.map((program) => (
            <div
              key={program.name}
              className="bg-white flex flex-col md:flex-row px-6 py-6 md:py-10 gap-6 md:gap-0 text-center md:text-start justify-between"
            >
              <div className="relative min-w-[300px] min-h-[300px] md:min-h-0">
                <Image
                  src={program.img}
                  alt={program.name}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="md:px-6 lg:px-10 py-6 mr-auto">
                <H3>{program.name}</H3>
                <P className="text-gray-600 mt-6">Currently enrolled for <span className="font-semibold">{program.enrolledFor} Batch</span></P>
                <P className="text-secondary font-semibold min-h-[18px] mt-4 mb-3">
                  Course will end in&nbsp;{program.endingOn}
                </P>
                <P className="text-gray-600">
                  {program.duration}<FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.for}
                  <FaCircle className="inline mx-2 w-2 h-2 mb-1" />{program.type}
                </P>
              </div>
              <div className="flex flex-col justify-end">
                <P className="font-bold text-black mb-3 ms-1">
                  <FaCheckSquare
                  className="text-[#00D100] inline mr-2 w-6 h-6"
                  />
                  {program.status}
                </P>
                <Link
                  href={program.payment}
                  className="rounded-2xl bg-black text-white hover:bg-primary px-6 py-1 max-w-max min-w-max mx-auto md:mr-auto"
                >
                  Pay Fee for the next month
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-36 mb-28 text-center">
          <H3 className="!text-2xl text-secondary my-6">For any queries or doubts</H3>
          <Link
                  href="/contact"
                  className="rounded-md bg-black text-white text-xl hover:bg-primary px-6 py-3 max-w-max min-w-max mx-auto"
                >
                  CONTACT US
                </Link>
        </div>
      </Section>
    </main>
  );
}
