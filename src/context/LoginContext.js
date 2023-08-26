"use client";

import { createContext, useState } from "react";

export const LoginContext = createContext();


export function LoginProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsUserLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{
        setIsUserLoggedIn,
        isUserLoggedIn,
        handleLogout
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
