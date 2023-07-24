"use client";

import CourseRegistrationModalBody from "@/app/courses/CourseRegistrationModalBody";
import { createContext, useEffect, useState } from "react";

export const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [courseModal, setCourseModal] = useState();
  const [selectedCourse, setSelectedCourse] = useState({
    courseName: "",
    courseId: "",
    coursTimeSlot: "",
  });
  const [userDetails, setUserDetails] = useState(null);

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
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
