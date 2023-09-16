"use client";

import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";
import { FaCheckSquare, FaCircle } from "react-icons/fa";
import AuthWrap from "../AuthWrap";
import { useEffect, useState } from "react";
import { decryptData } from "../../../../../utils/encryption";
import Modal from "@/components/ui/Modal";
import ResetPassword from "./ResetPassword";

export default function Page() {
  const [userDetails, setUserDetails] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [resetPasswordModal, setResetPasswordModal] = useState();
  useEffect(() => {
    const userDetails = sessionStorage.getItem("userDetails");
    const registrationData = sessionStorage.getItem("registrationData");
    if (userDetails && registrationData) {
      const decryptedUserDetails = JSON.parse(decryptData(userDetails));
      const decryptedRegistrationData = JSON.parse(
        decryptData(registrationData)
      );
      setUserDetails(decryptedUserDetails);
      setCourseList(decryptedRegistrationData);
    }
  }, []);
  const openResetPasswordModal = () => {
    setResetPasswordModal(() => ({
      enabled: true,
      body: ResetPassword,
      header: 'Reset your password',
      noOutSideClose: true
    }));
  };
  return (
    <AuthWrap>
      <main>
      <Modal {...resetPasswordModal} />
        <Section>
          <div className="grid gap-10 mt-6">
            <div className="bg-white p-6 md:p-10 grid lg:grid-cols-3 gap-6">
              <div className="col-span-2">
                <H2 className="!text-4xl ">Welcome, {userDetails.FullName}!</H2>
                <H3 className="text-secondary !text-2xl">
                  Student ID - {userDetails.userId}
                </H3>
                <P className="mt-2 !text-base">
                  EMAIL ID - {userDetails.Email}
                </P>
                <P className="mt-2 !text-base">
                  Mobile No - {userDetails.MobNo}
                </P>
              </div>
              <div className="flex flex-col align-end justify-center gap-6">
                <button type="button" onClick={openResetPasswordModal} className="text-secondary text-xl text-end cursor-pointer">
                  Reset Your Password?
                </button>
                <Link
                  href="/contact"
                  className="rounded-md bg-black !text-white text-xl hover:bg-primary px-6 py-3 max-w-max min-w-max mx-auto lg:ms-auto lg:me-0"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            {courseList.map((program) => (
              <div
                key={program.regUid}
                className="bg-white flex flex-col md:flex-row px-6 py-6 md:py-10 gap-6 md:gap-0 text-center md:text-start justify-between"
              >
                <div className="relative min-w-[300px] min-h-[300px] md:min-h-0">
                  <Image
                    src={program.img || "/images/course1.png"}
                    alt={program.Course}
                    fill={true}
                    className="object-cover"
                  />
                </div>
                <div className="md:px-6 lg:px-10 py-6 mr-auto">
                  <H3 className="!text-2xl">{program.Course}</H3>
                  <P className="text-gray-600 mt-6 !text-lg">
                    Currently enrolled for{" "}
                    <span className="font-semibold">{program.Batch} Batch</span>
                  </P>
                  <P className="text-secondary font-semibold min-h-[18px] mt-4 mb-3">
                    Course will end in&nbsp;{program.endingOn || "Jan"}
                  </P>
                  <P className="text-gray-600">
                    {program.Duration}
                    <FaCircle className="inline mx-2 w-2 h-2 mb-1" />
                    {program.For}
                    <FaCircle className="inline mx-2 w-2 h-2 mb-1" />
                    {program.Type}
                  </P>
                </div>
                <div className="flex flex-col justify-end">
                  <P className="font-bold !text-black mb-3 ms-1">
                    <FaCheckSquare className="text-[#00D100] inline mr-2 w-6 h-6" />
                    {program.CourseStatus}
                  </P>
                  <Link
                    href="/"
                    className="rounded-full bg-black !text-white !text-lg hover:bg-primary px-6 py-2 max-w-max min-w-max mx-auto md:mr-auto"
                  >
                    Pay Fee for the next month
                  </Link>
                </div>
              </div>
            ))}

            <div className="bg-[#EA9B7A21] p-10">
              <P className="font-semibold mb-2">Note:</P>
              <P>
                Our admin will add you to your respective class WhatsApp group
                in next 24 hours. For further classes, mentor will be sharing
                zoom links for class in that same group. We wish you good luck
                for your classes ☺️
              </P>
            </div>
          </div>
        </Section>
      </main>
    </AuthWrap>
  );
}
