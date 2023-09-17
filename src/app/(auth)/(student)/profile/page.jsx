"use client";

import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";
import { FaCheckSquare, FaCircle } from "react-icons/fa";
import AuthWrap from "../AuthWrap";
import { useContext, useEffect, useState } from "react";
import { decryptData } from "../../../../../utils/encryption";
import Modal from "@/components/ui/Modal";
import ResetPassword from "./ResetPassword";
import { PaymentContext } from "@/context/PaymentContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Page() {
  const [userDetails, setUserDetails] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [resetPasswordModal, setResetPasswordModal] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const { handleSubscribe } = useContext(PaymentContext);
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

  console.log(courseList);
  console.log(userDetails);

  const resetPasswordModalBody = () => <ResetPassword />;

  const openResetPasswordModal = () => {
    setResetPasswordModal(() => ({
      enabled: true,
      body: resetPasswordModalBody,
      header: "Reset your password",
      noOutSideClose: true,
    }));
  };
  const payForNextMonth = async () => {
    setShowLoader(true);
    const payload = {
      uuid: userDetails?.userId,
      courseUid: false,
      batchId: false,
      coursePrice: courseList[0]?.price,
      apiUrl:'/Register/payFees',
      callBackUrl:'/profile',
      regId:courseList[0]?.regUid,
    };
    await handleSubscribe(payload);
  };
  return (
    <AuthWrap>
      <main>
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
        <Modal {...resetPasswordModal} setModal={setResetPasswordModal} />
        <Section>
          <div className="grid gap-10 mt-6">
            <div className="bg-white p-6 md:p-10 grid lg:grid-cols-3 gap-6">
              <div className="col-span-2">
                <H2 className="!text-4xl ">Welcome, {userDetails.FullName}!</H2>
                <H3 className="text-secondary !text-2xl">
                  Student ID - {userDetails.StudentId}
                </H3>
                <P className="mt-2 !text-base">
                  EMAIL ID - {userDetails.Email}
                </P>
                <P className="mt-2 !text-base">
                  Mobile No - {userDetails.MobNo}
                </P>
              </div>
              <div className="flex flex-col align-end justify-center gap-6">
                <button
                  type="button"
                  onClick={openResetPasswordModal}
                  className="text-secondary text-xl text-end cursor-pointer"
                >
                  Reset Your Password?
                </button>
                <Link
                  href="tel:+916290191296"
                  className="rounded-md bg-black !text-white text-xl hover:bg-primary px-6 py-3 max-w-max min-w-max mx-auto lg:ms-auto lg:me-0"
                >
                  +91 6290191296
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
                    {program.CourseStatus
                      ? "Course Completed"
                      : "Course In Progress"}
                  </P>
                  {!program.CourseStatus && (
                    <>
                      {!program.paymentStatus ? (
                        // <button
                        //   className="rounded-full bg-black !text-white !text-lg hover:bg-primary px-6 py-2 max-w-max min-w-max mx-auto md:mr-auto"
                        //   onClick={payForNextMonth}
                        // >
                        //   Pay Fee for the next month
                        // </button>
                        <button
                          disabled={showLoader}
                          type="button"
                          className="rounded-full bg-black !text-white !text-lg hover:bg-primary px-6 py-2 max-w-max min-w-max mx-auto md:mr-auto flex items-center justify-center"
                          onClick={payForNextMonth}
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
                          Pay Fee for the next month
                        </button>
                      ) : (
                        <p className="text-primary">Fee paid for this month</p>
                      )}
                    </>
                  )}
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
