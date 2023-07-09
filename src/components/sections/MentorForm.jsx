import { useState } from "react";
import Section from "../uielements/Section";
import Image from "next/image";
import H2 from "../typography/H2";
import P from "../typography/P";

const MentorsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [resume, setResume] = useState(null);
  const [experience, setExperience] = useState("1");

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
            <button
              onClick={toggleForm}
              className="bg-black !text-white !text-2xl font-semibold py-3 px-10 rounded-full max-w-max mx-auto md:ms-0"
            >
              Apply as Mentor
            </button>
          )}
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-75 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <form onSubmit={handleSubmit} className="relative">
                <button
                  onClick={toggleForm}
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
                <div className="mb-4">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="border border-gray-300 p-1 rounded ml-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="resume">Resume</label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="border border-gray-300 p-1 rounded ml-6"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="experience">Years of Experience</label>
                  <input
                    type="number"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
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
      </div>
    </Section>
  );
};

export default MentorsForm;
