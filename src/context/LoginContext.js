"use client";

import ChangeAdminPassword from "@/components/sections/ChangeAdminPassword";
import ForgotPassword from "@/components/sections/ForgotPassword";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState();
  const [changePasswordModal, setChangePasswordModal] = useState({
    enabled: false,
    adminId: null, // Add adminId to the state
  });
  const handleLogout = () => {
    sessionStorage.clear();
    setIsUserLoggedIn(false);
    location.reload();
    router.push("/login");
  };

  const forgotPasswordModalBody = () => <ForgotPassword />;

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
  const changeAdminPasswordModalBody = (adminId) => (
    <ChangeAdminPassword adminId={adminId} />
  );

  const openChangePasswordModal = (adminId) => {
    setChangePasswordModal(() => ({
      enabled: true,
      body: () => changeAdminPasswordModalBody(adminId), // Pass adminId here
    }));
  };
  const closeChangePasswordModal = () => {
    setChangePasswordModal(() => ({
      enabled: false,
    }));
  };

  return (
    <LoginContext.Provider
      value={{
        setIsUserLoggedIn,
        isUserLoggedIn,
        handleLogout,
        // Forgot password
        setForgotPasswordModal,
        forgotPasswordModal,
        openForgotPasswordModal,
        closeForgotPasswordModal,

        // Change Password
        changePasswordModal,
        setChangePasswordModal,
        changeAdminPasswordModalBody,
        openChangePasswordModal,
        closeChangePasswordModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
