"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "../../utils/api";
import { PaymentContext } from "@/context/PaymentContext";
import { toast } from "react-toastify";
import CourseRegistrationModalBody from "@/app/(main)/courses/CourseRegistrationModalBody";

export const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [courseModal, setCourseModal] = useState();
  
  const [selectedCourse, setSelectedCourse] = useState({
    courseName: "",
    courseId: "",
    coursTimeSlot: "",
    coursePrice: 0,
  });
  const [userDetails, setUserDetails] = useState(null);

  const { handleSubscribe } = useContext(PaymentContext);

  const onRegistrationConfirm = (_selectedCourse, _userDetails) => {
    console.log(_selectedCourse);
    console.log(selectedCourse);
    console.log(_userDetails);
    console.log(userDetails);
  };

  const courseModalBody = ({
    selectedCourse: _selectedCourse,
    userDetails: _userDetails,
  }) => (
    <CourseRegistrationModalBody
      setSelectedCourse={setSelectedCourse}
      selectedCourse={selectedCourse}
      onConfirm={onRegistrationConfirm}
      setUserDetails={setUserDetails}
    />
  );

  

  const openRegistrationModal = () => {
    setCourseModal(() => ({
      enabled: true,
      body: courseModalBody,
    }));
  };

  const closeRegistrationModal = () => {
    setCourseModal(() => ({
      enabled: false,
      body: courseModalBody,
    }));
  };

  const getCourseName = (str = "") => {
    const pageString = str.split("/");
    const pageName = pageString.pop();
    return pageName;
  };

  useEffect(() => {
    if (userDetails && userDetails?.uuid) {
      handleSubscribe(userDetails);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  const submitUserDetails = async (payload) => {
    const response = await api.post("/Register/createUsr", payload);

    if (response && response.status === "Success") {
      setUserDetails((prev) => ({
        ...prev,
        uuid: response?.uuid,
        courseUid: response?.courseUid,
        batchId: response?.batchId,
        coursePrice: selectedCourse.coursePrice,
      }));
    } else {
      toast.error(response?.message, {
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <RegistrationContext.Provider
      value={{
        openRegistrationModal,
        courseModal,
        setSelectedCourse,
        setUserDetails,
        selectedCourse,
        userDetails,
        closeRegistrationModal,
        getCourseName,
        submitUserDetails,
        
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
