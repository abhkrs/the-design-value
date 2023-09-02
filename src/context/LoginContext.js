"use client";

import ForgotPassword from "@/components/sections/ForgotPassword";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState();

  const handleLogout = () => {
    sessionStorage.clear();
    setIsUserLoggedIn(false);
    router.push("/login");
  };

  const forgotPasswordModalBody = ({
    selectedCourse: _selectedCourse,
    userDetails: _userDetails,
  }) => <ForgotPassword />;

  const openForgotPasswordModal = () => {
    setForgotPasswordModal(() => ({
      enabled: true,
      body: forgotPasswordModalBody,
    }));
  };
  const closeForgotPasswordModal = () => {
    setForgotPasswordModal(() => ({
      enabled: false,
      body: forgotPasswordModalBody,
    }));
  };

  return (
    <LoginContext.Provider
      value={{
        setIsUserLoggedIn,
        isUserLoggedIn,
        handleLogout,
        // Forgot password
        forgotPasswordModal,
        setForgotPasswordModal,
        forgotPasswordModal,
        openForgotPasswordModal,
        closeForgotPasswordModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
