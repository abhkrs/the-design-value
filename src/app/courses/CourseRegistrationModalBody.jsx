"use client";

import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import { RegistrationContext } from "@/context/RegistrationContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CourseRegistrationModalBody({ selectedCourse }) {
  const { closeRegistrationModal, setSelectedCourse, submitUserDetails } =
    useContext(RegistrationContext);
  console.log(selectedCourse);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = async () => {
    setIsSubmitted(true);
    setSelectedCourse((prev) => ({
      ...prev,
      coursTimeSlot: timeSlot,
      selectedCourse: 1,
    }));

    if (name && email && phone && timeSlot) {
      const payload = {
        fullName: name,
        emailId: email,
        mobile: phone,
        courseId: selectedCourse.courseName,
        batchId: timeSlot,
      };
      await submitUserDetails(payload);
    } else {
      toast.error("All fill up all required fields", {
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-white p-8 rounded shadow-lg w-full relative lg:px-16">
        <H3 className="!text-2xl mb-4">
          🧑🏽‍🎓 Register for {selectedCourse.courseName}{" "}
        </H3>
        <button
          type="button"
          onClick={closeRegistrationModal}
          className="absolute top-4 right-8 md:right-4 text-red-500"
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
            {isSubmitted && !name && (
              <p className="text-[red] text-xs font-bold py-1">
                * Name is reauired
              </p>
            )}
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
            {isSubmitted && !name && (
              <p className="text-[red] text-xs font-bold py-1">
                * Email is reauired
              </p>
            )}
          </div>
          <div className="mb-4">
            <div className="flex">
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
            {isSubmitted && !phone && (
              <p className="text-[red] text-xs font-bold py-1">
                * Phone is reauired
              </p>
            )}
          </div>
          <div className="mb-4">
            <P className="capitalize text-black font-semibold">
              Select from Our available batches
            </P>
            <div className="gap-4 flex flex-wrap my-2 max-w-[600px]">
              {selectedCourse.courseDetails.BatchDetails.map((batch) => (
                <button
                  key={batch.BatchUid}
                  className={`py-1 px-3 border rounded min-w-max ${
                    timeSlot === batch.SlotName
                      ? " bg-secondary text-white shadow border-gray-300"
                      : batch.Availabe
                      ? " bg-white border-gray-300 shadow"
                      : " bg-gray-200 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (timeSlot === batch.SlotName) {
                      setTimeSlot(null); // Reset the timeSlot if it's already selected
                    } else {
                      setTimeSlot(batch.SlotName);
                    }
                  }}
                  type="button"
                >
                  {batch.SlotName}
                </button>
              ))}
            </div>

            {isSubmitted && !timeSlot && (
              <p className="text-[red] text-xs font-bold py-1">
                * Batch is reauired
              </p>
            )}
          </div>
          <P className="italic ms-2 mb-2 mt-10">
            Currently you are paying fee for 1st month of your course
          </P>

          <button
            type="button"
            onClick={submitForm}
            className="bg-black md:w-2/3 !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary"
          >
            Proceed to pay INR {selectedCourse.coursePrice}
          </button>
        </form>
      </div>
    </>
  );
}

export default CourseRegistrationModalBody;
