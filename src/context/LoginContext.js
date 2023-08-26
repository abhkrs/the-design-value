"use client";

import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsUserLoggedIn(false);
    router.push('/login')
  };

  return (
    <LoginContext.Provider
      value={{
        setIsUserLoggedIn,
        isUserLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
