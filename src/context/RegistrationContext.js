"use client";

import CourseRegistrationModalBody from "@/app/courses/CourseRegistrationModalBody";
import { createContext, useEffect, useState } from "react";

export const RegistrationContext = createContext();

export function RegistrationProvider({ children }) {
  const [courseModal, setCourseModal] = useState();
  const [selectedCourse, setSelectedCourse] = useState(null);
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
    console.log(courseModalBody);
    setCourseModal(() => ({
      enabled: true,
      body: courseModalBody,
    }));
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
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}
