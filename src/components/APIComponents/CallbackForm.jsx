import React, { useState, useEffect } from "react";
import Image from "next/image";
import H3 from "../typography/H3";
import P from "../typography/P";

const CallbackForm = ({ onClose, courseNumber, courseDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [courseData, setCourseData] = useState({
    courseName: "",
    courseStart: "",
    courseDuration: "",
    slotId: [],
  });
  console.log(courseDetails);

  useEffect(() => {
    fetch("https://aj2709.pythonanywhere.com/Callback/requestCB")
      .then((response) => response.json())
      .then((data) => {
        setCourseData({
          courseName: data.courseName[courseNumber],
          courseStart: data.courseStart[courseNumber],
          courseDuration: data.courseDuration[courseNumber],
          slotId: data.slotId,
        });
      })
      .catch((error) => {
        console.error("Error during API fetch:", error);
        setCourseData({
          courseName: "Error",
          courseStart: "",
          courseDuration: "",
          slotId: [],
        });
      });
  }, [courseNumber]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      FullName: name,
      contactNo: phone,
      emailId: email,
      courseId: courseDetails.CourseName,
      StartMonth: courseDetails.StartMonth,
      totalTime: courseDetails.CourseDuration,
      slotId: timeSlot,
    };
    // console.log(formData);
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://aj2709.pythonanywhere.com/Callback/requestCB",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.status === "Success") {
          setSubmissionResult(true);
          setTimeout(() => {
            setSubmissionResult(null);
            onClose();
          }, 3000);
        } else {
          setSubmissionResult(false);
        }
      } else {
        setSubmissionResult(false);
      }
    } catch (error) {
      console.error("Error during the fetch request:", error);
      setSubmissionResult(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 !z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded lg:px-16 shadow-lg lg:w-2/3 relative">
        <H3 className="!text-2xl inter">
          {submissionResult
            ? "😇 Thank You For Your Call Back Request!"
            : "😇 Place Your Call Back Request!"}
        </H3>
        <P className="my-3 !text-xl">
          {submissionResult &&
            "Your callback request has been submitted successfully."}
          {submissionResult === null && "Please help us with a few details"}
          {submissionResult === false &&
            "Please check your email-id and try again."}
        </P>
        <hr />
        <button
          onClick={onClose}
          className="absolute top-4 right-8 md:right-4 text-red-500"
        >
          <Image
            src="/images/close.svg"
            height="18"
            width="18"
            alt="close button"
          />
        </button>
        {!submissionResult && (
          <form onSubmit={handleFormSubmit} className="relative mt-4 max-w-max">
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
            {/* <div className="relative hidden lg:block">
              <div className="absolute right-1 z-50 !h-3 !w-4 p-2 mt-3 bg-white">
                <Image
                  fill={true}
                  src="/images/dropdown.png"
                  className="object-contain !h-2 !w-3 mt-1"
                  alt="dropdown"
                />
              </div>
            </div> */}
            <div className="mb-4">
              <select
                id="timeSlot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="!border w-full !border-gray-300 !px-3 !py-2 !pr-8 placeholder-secondary !bg-white"
              >
                <option value="" disabled>
                  Select a time slot
                </option>
                {courseDetails?.AvailableSlots.map((slot, index) => (
                  <option key={index} value={slot.slotUid}>
                    {slot.slotUid}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-black w-2/3 !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary"
              disabled={submitting}
            >
              {submitting ? "Submitting.." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallbackForm;
