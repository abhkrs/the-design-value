import { useState } from "react";
import Section from "../uielements/Section";
import Image from "next/image";
import H2 from "../typography/H2";
import P from "../typography/P";
import Link from "next/link";
import H3 from "../typography/H3";

const MentorsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [teachDays, setTeachDays] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const formData = {
      FullName: name,
      ContactNo: phone,
      EmailId: email,
      CurrentCompany: company,
      City: city,
      TotalYearsExp: experience,
      LinkedIn: linkedin,
      DaysInterested: teachDays,
      ExpectedCTC: salary,
    };
  
    try {
      const response = await fetch(
        "https://aj2709.pythonanywhere.com/Callback/mentor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus(null);
          setErrorResponse(null);
        }, 3000); // Close the form after 3 seconds
      } else {
        const data = await response.json();
        setErrorResponse(data.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      setErrorResponse("Server error");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section bg="bg-white">
      <div
        className="bg-white flex flex-col md:flex-row px-6 py-6 md:py-10 gap-6 md:gap-0 text-center md:text-start"
      >
        <div className="relative min-w-[300px] lg:min-w-[400px] min-h-[300px] md:min-h-[300px]">
          <Image
            src="/images/mentor.png"
            alt="Mentor"
            fill={true}
            className="object-contain"
          />
        </div>
        <div className="md:px-6 lg:px-8 flex flex-col justify-center">
          <H2 className="capitalize">
            Become a design <span className="text-secondary">instructor</span>
          </H2>
          <P className=" my-6 !text-xl lg:w-4/5">
            Unleash your teaching prowess and become a UI/UX instructor with us.
            Inspire the next generation of designers and shape the future of
            user experience.
          </P>

          {!isOpen && (
            <Link
              href=""
              onClick={toggleForm}
              className="bg-black !text-white py-3 px-10 rounded-full max-w-max mx-auto md:ms-0"
            >
              Apply as Mentor
            </Link>
          )}
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
              <H3 className="!text-2xl mb-4">😇 We are eager to know you!</H3>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSubmitStatus(null);
                  setErrorResponse(null);
                }}
                className="absolute top-4 right-4 text-red-500"
              >
                <Image alt="" src="/images/close.svg" height="18" width="18" />
              </button>
              <P className="my-4">
                Please help us with a few details before we can shortlist your application for Round 2!
              </P>
              <hr />

              <form onSubmit={handleSubmit} className="relative mt-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* First Column */}
                  <div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your Mobile Number*"
                        className="border border-gray-300 pl-2 pr-3 py-2 placeholder-secondary w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Current Company*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Total Years of Experience*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="teachDays"
                        value={teachDays}
                        onChange={(e) => setTeachDays(e.target.value)}
                        placeholder="Days You Would Like to Teach*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                  </div>
                  {/* Second Column */}
                  <div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email ID*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="LinkedIn Profile*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Expected Salary per Month*"
                        className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-black col-span-2 max-w-max !text-white py-2 px-8 !text-lg rounded-full hover:bg-primary ${
                    isSubmitting ? "cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-500 mt-4">Submitted successfully!</p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-500 mt-4">
                    {errorResponse || "An error occurred. Please try again later."}
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default MentorsForm;
