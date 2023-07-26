"use client";

import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import { PaymentContext } from "@/context/PaymentContext";
import { RegistrationContext } from "@/context/RegistrationContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import api from "../../../utils/api";
import { usePathname } from "next/navigation";

function CourseRegistrationModalBody() {
  const pageName = usePathname();
  const {
    closeRegistrationModal,
    setUserDetails,
    setSelectedCourse,
    getCourseName,
  } = useContext(RegistrationContext);

  const { handleSubscribe } = useContext(PaymentContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const submitForm = async () => {
    console.log("submitForm");
    setUserDetails((prev) => ({
      ...prev,
      studentName: name,
      email,
      selectedBatch: timeSlot,
      phone,
    }));
    setSelectedCourse((prev) => ({
      ...prev,
      coursTimeSlot: timeSlot,
    }));
    // const response = await api.post("/register/regUsr", {
    //   fName: name?.split(" ")[0],
    //   lName: name?.split(" ")[1],
    //   emailId: email,
    //   mobile: phone,
    //   courseId: getCourseName(pageName),
    //   batchId: timeSlot,
    // });
    // console.log(response);
    handleSubscribe();
  };
  return (
    <>
      <div className="bg-white p-8 rounded shadow-lg w-full relative lg:px-16">
        <H3 className="!text-2xl mb-4">🧑🏽‍🎓 Register for Course</H3>
        <button
          type="button"
          onClick={closeRegistrationModal}
          className="absolute top-4 right-4 text-red-500"
        >
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
        <hr />
        <P className="mt-4 bg-gold px-2 py-1 !text-white max-w-max">
          Your Batch will start from July
        </P>

        <form className="relative mt-8">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name*"
              className="border border-gray-300 px-3  py-2 md:md:w-1/2 w-full  rounded placeholder-secondary"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email ID*"
              className="border border-gray-300 px-3  py-2 md:w-1/2 w-full  rounded placeholder-secondary"
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
              className="border border-gray-300 pl-2 pr-3 py-2 placeholder-secondary md:w-[43.8%] rounded-r  border-l-0 "
            />
          </div>
          <div className="mb-4">
            <P className="capitalize text-black font-semibold">
              Select from Our available batches
            </P>
            <div className="gap-4 flex flex-wrap my-2 max-w-[600px]">
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
              <button
                className="py-1 px-3 bg-gray-100 border-secondary border rounded min-w-max"
                onClick={() => {
                  setTimeSlot("7PM - 8:30PM");
                }}
                type="button"
              >
                Mon (7PM - 8:30PM)
              </button>
            </div>
          </div>
          <P className="italic ms-2 mb-2 mt-10">
            Currently you are paying fee for 1st month of your course
          </P>

          <button
            type="button"
            onClick={submitForm}
            className="bg-black md:w-2/3 !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary"
          >
            Proceed to pay INR 2000
          </button>
        </form>
      </div>
    </>
  );
}

export default CourseRegistrationModalBody;
