"use client";

import React, { useContext, useState } from "react";
import H3 from "../typography/H3";
import Image from "next/image";
import { LoginContext } from "@/context/LoginContext";
import { toast } from "react-toastify";
import api from "../../../utils/api";

function ForgotPassword() {
  const { closeForgotPasswordModal } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [showLoader, setshowLoader] = useState(false);

  const submitForm = async () => {
    if (username) {
      setshowLoader(true);
      const response = await api.post("/Register/forgotPW", {
        username,
      });
      if (response.status === 'Success') {
        toast.success(response?.message, {
          autoClose: 3000,
          theme: "colored",
        });
      } else {
        toast.error("Something went wrong.", {
          autoClose: 3000,
          theme: "colored",
        });
      }
      closeForgotPasswordModal();
      setshowLoader(false);
    } else {
      toast.error("Type user id please.", {
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="bg-white p-2 rounded w-full relative lg:px-2 max-w-[95vw]">
      <div className="mb-5">
        <H3 className="!text-2xl mb-4">Forgot your password?</H3>
        <button
          type="button"
          onClick={closeForgotPasswordModal}
          className="absolute top-4 right-8 md:right-4 text-red-500"
        >
          <Image alt="" src="/images/close.svg" height="18" width="18" />
        </button>
        <hr />
      </div>
      <form className="w-full">
        <input
          type="text"
          name="username"
          id="username"
          className="p-3 placeholder-secondary text-xl border-gray-200 rounded border w-full"
          placeholder="Your Student ID (as shared on Email)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="button"
          disabled={showLoader}
          onClick={submitForm}
          className="bg-black w-full !text-white py-2 px-2 !text-lg rounded-full hover:bg-primary flex justify-center items-center mt-3"
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
          {showLoader && <>Please wait</>}
          {!showLoader && <> Submit User ID</>}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
