"use client";

import { useContext, useEffect } from "react";
import { decryptData } from "../../../../utils/encryption";
import { usePathname, useRouter } from "next/navigation";
import { LoginContext } from "@/context/LoginContext";

function AuthWrap({ children }) {
  const router = useRouter();
  const pathName = usePathname();
  const { setIsUserLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    let userRole = sessionStorage.getItem("userRole");
    if (userRole) {
      const decryptedUserRole = JSON.parse(decryptData(userRole));
      if (!userRole || decryptedUserRole.role !== "TDV-admin") {
        router.push("/login");
      } else if (
        pathName === "/admin-list" &&
        !decryptedUserRole.isSuperAdmin
      ) {
        router.push("/dashboard");
      } else {
        setIsUserLoggedIn(true);
      }
    } else {
      router.push("/login");
    }
  }, [pathName, router, setIsUserLoggedIn]);

  return <>{children}</>;
}
export default AuthWrap;
