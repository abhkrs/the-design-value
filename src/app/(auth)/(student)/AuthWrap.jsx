"use client";

import { useContext, useEffect } from "react";
import { decryptData } from "../../../../utils/encryption";
import { useRouter } from "next/navigation";
import { LoginContext } from "@/context/LoginContext";

function AuthWrap({ children }) {
  const router = useRouter();
  const { setIsUserLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    let userRole = localStorage.getItem("userRole");
    if (userRole) {
      const decryptedUserRole = JSON.parse(decryptData(userRole));
      if (!userRole || decryptedUserRole.role !== "TDV-student") {
        router.push("/login");
      } else {
        setIsUserLoggedIn(true);
      }
    } else {
      router.push("/login");
    }
  }, [router, setIsUserLoggedIn]);

  return <>{children}</>;
}
export default AuthWrap;
