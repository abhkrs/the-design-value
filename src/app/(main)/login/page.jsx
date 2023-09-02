"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import H2 from "@/components/typography/H2";
import api from "../../../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { decryptData, encryptData } from "../../../../utils/encryption";
import { LoginContext } from "@/context/LoginContext";
import Modal from "@/components/ui/Modal";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoader, setshowLoader] = useState(false);
  const router = useRouter();

  const { setIsUserLoggedIn, forgotPasswordModal, openForgotPasswordModal } =
    useContext(LoginContext);

  useEffect(() => {
    let userRole = sessionStorage.getItem("userRole");
    console.log(userRole);
    if (userRole) {
      const decryptedUserRole = userRole
        ? JSON.parse(decryptData(userRole))
        : null;
      if (userRole && decryptedUserRole.role === "TDV-student") {
        router.push("/profile");
      } else if (userRole && decryptedUserRole.role === "TDV-admin") {
        router.push("/dashboard");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async () => {
    setshowLoader(true);
    const response = await api.post("/Register/login", { username, password });
    console.log(response);
    setshowLoader(false);
    if (response.status === "Failed") {
      toast.error(response.message, {
        autoClose: 3000,
        theme: "colored",
      });
    } else if (response.is_superuser) {
      setIsUserLoggedIn(true);
      sessionStorage.clear();
      const encryptedData = encryptData(response.AdminData);
      let userRole = {
        role: "TDV-admin",
        isSuperAdmin: response.AdminData.superAdm,
      };
      console.log(userRole);
      userRole = encryptData(userRole);
      sessionStorage.setItem("userDetails", encryptedData);
      sessionStorage.setItem("userRole", userRole);
      router.push("/dashboard");
    } else {
      setIsUserLoggedIn(true);
      sessionStorage.clear();
      const encryptedData = encryptData(response.StudentData);
      const RegistrationData = encryptData(response.RegistrationData);
      let userRole = {
        role: "TDV-student",
      };
      userRole = encryptData(userRole);
      sessionStorage.setItem("userDetails", encryptedData);
      sessionStorage.setItem("registrationData", RegistrationData);
      sessionStorage.setItem("userRole", userRole);
      router.push("/profile");
    }
  };

  return (
    <main>
      <Modal {...forgotPasswordModal} />
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="grid lg:grid-cols-5 md:grid-cols-2">
        <div className="lg:col-span-3">
          <div className="relative top-0 left-0 w-full md:h-screen">
            <Image
              src="/images/login.png"
              fill={true}
              alt="login page image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-between flex-col gap-8 h-screen p-8 lg:col-span-2 md:mx-auto">
          <div className="flex justify-between align-middle flex-col gap-8 md:w-[400px]">
            <H2 className="text-center !text-3xl font-semibold inter">
              Add Your Details
            </H2>
            <input
              type="text"
              name="username"
              id="username"
              className="p-3 placeholder-secondary text-xl border-gray-200 rounded border"
              placeholder="Your Student ID (as shared on Email)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="p-3 placeholder-secondary text-xl border-gray-200 rounded border"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={showLoader}
              type="button"
              className="p-3 bg-black text-white rounded-full text-xl flex items-center justify-center"
              onClick={handleLogin}
            >
              {showLoader && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 mr-2 text-gray-200 animate-spin fill-secondary"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              Login
            </button>
            <button
              className="text-secondary text-xl text-center cursor-pointer"
              onClick={() => {
                openForgotPasswordModal();
              }}
            >
              Forgot Password?
            </button>
          </div>
          <div className="relative top-0 left-0 w-2/3 mx-auto h-8 mb-20">
            <Image
              src="/images/bytdv.png"
              fill={true}
              alt="login page image"
              className="object-contain w-full mx-auto h-6"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
