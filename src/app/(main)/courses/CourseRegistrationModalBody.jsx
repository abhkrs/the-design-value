"use client";

import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import { RegistrationContext } from "@/context/RegistrationContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { decryptData } from "../../../../utils/encryption";
import Link from "next/link";

function CourseRegistrationModalBody({ selectedCourse }) {
  const { closeRegistrationModal, setSelectedCourse, submitUserDetails } =
    useContext(RegistrationContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const toggleAcceptTerms = () => {
    setAcceptTerms(!acceptTerms);
  };

  useEffect(() => {
    const userDetails = sessionStorage.getItem("userDetails");
    if (userDetails) {
      const decryptedUserDetails = JSON.parse(decryptData(userDetails));
      console.log(decryptedUserDetails);
      if (decryptedUserDetails) {
        setIsUserLoggedIn(true);
        setName(decryptedUserDetails.FullName);
        setPhone(decryptedUserDetails.MobNo);
        setEmail(decryptedUserDetails.Email);
      }
    }
  }, []);

  const submitForm = async () => {
    setIsSubmitted(true);
    setSelectedCourse((prev) => ({
      ...prev,
      coursTimeSlot: timeSlot,
      selectedCourse: 1,
    }));

    if (name && email && phone && timeSlot && acceptTerms) {
      setShowLoader(true);
      const payload = {
        fullName: name,
        emailId: email,
        mobile: phone,
        courseId: selectedCourse.courseName,
        batchId: timeSlot,
      };
      await submitUserDetails(payload);
      setShowLoader(false);
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
      <div className="bg-white p-8 rounded w-full relative lg:px-16">
        <H3 className="!text-2xl mb-4">
          🧑🏽‍🎓 Register for {selectedCourse?.courseDetails?.CourseName}{" "}
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
          Your Batch will start from {selectedCourse?.courseDetails?.StartMonth}
        </P>

        <form className="relative mt-8">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name*"
              className={`border border-gray-300 px-3  py-2 md:md:w-1/2 w-full  rounded placeholder-secondary ${
                isUserLoggedIn && "bg-gray-200 cursor-not-allowed"
              }`}
              readOnly={isUserLoggedIn}
            />
            {isSubmitted && !name && (
              <p className="text-[red] text-xs font-bold py-1">
                * Name is required
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
              className={`border border-gray-300 px-3  py-2 md:w-1/2 w-full  rounded placeholder-secondary ${
                isUserLoggedIn && "bg-gray-200 cursor-not-allowed"
              }`}
              readOnly={isUserLoggedIn}
            />
            {isSubmitted && !name && (
              <p className="text-[red] text-xs font-bold py-1">
                * Email is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <div className="flex">
              <div
                className={`border border-gray-300 pl-3 pr-2  py-2 rounded-l border-r-0 !text-gray-600 font-semibold ${
                  isUserLoggedIn && "bg-gray-200 cursor-not-allowed"
                }`}
              >
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
                className={`border border-gray-300 pl-2 pr-3 py-2 placeholder-secondary md:w-[43.8%] rounded-r  border-l-0 ${
                  isUserLoggedIn && "bg-gray-200 cursor-not-allowed"
                }`}
                readOnly={isUserLoggedIn}
              />
            </div>
            {isSubmitted && !phone && (
              <p className="text-[red] text-xs font-bold py-1">
                * Phone is required
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
                  disabled={!batch.Availabe}
                  className={`py-1 px-3 border rounded min-w-max ${
                    timeSlot === batch.SlotName
                      ? " bg-secondary text-white shadow border-gray-300"
                      : batch.Availabe
                      ? " bg-white border-gray-300 shadow"
                      : " bg-gray-200 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (timeSlot === batch.SlotName) {
                      setTimeSlot(null);
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
                * Please select a batch.
              </p>
            )}
          </div>
          <div className="mt-2">
            <label className="">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={toggleAcceptTerms}
                className="mr-2"
              />
              I accept the
              <Link
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline mx-1"
              >
                Privacy Policies
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline ms-1"
              >
                Terms & Conditions
              </Link>
              .
            </label>
            {isSubmitted && !acceptTerms && (
              <p className="text-[red] text-xs font-bold py-1">
                * Please accept the privacy policies and terms & conditions to
                proceed.
              </p>
            )}
          </div>
          <P className="italic ms-2 mb-2 mt-4">
            Currently you are paying fee for 1st month of your course
          </P>

          <button
            type="button"
            disabled={showLoader}
            onClick={submitForm}
            className="bg-black md:w-2/3 !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary flex justify-center items-center"
          >
            {showLoader && (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 mr-2 text-gray-200 animate-spin fill-secondary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {showLoader && <>Please wait</>}
            {!showLoader && (
              <> Proceed to pay INR {selectedCourse.coursePrice}</>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default CourseRegistrationModalBody;
