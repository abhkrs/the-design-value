"use client";

import { useEffect } from "react";
import { decryptData } from "../../../../utils/encryption";
import { useRouter } from "next/navigation";

function AuthWrap({ children }) {
  const router = useRouter();
  useEffect(() => {
    let userRole = sessionStorage.getItem("userRole");
    const decryptedUserRole = JSON.parse(decryptData(userRole));
    if (!userRole || decryptedUserRole.role !== "TDV-admin") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
export default AuthWrap;
