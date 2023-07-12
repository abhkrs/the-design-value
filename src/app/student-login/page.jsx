"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import H2 from "@/components/typography/H2";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const dummyUsername = "admin";
    const dummyPassword = "password";

    if (username === dummyUsername && password === dummyPassword) {
      router.push("/profile");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main>
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
        <div className="flex justify-between flex-col gap-8 h-screen p-8 lg:col-span-2">
          <div className="flex justify-between flex-col gap-8">
            <H2 className="text-center text-4xl font-bold">Add Your Details</H2>
            <input
              type="text"
              name="username"
              id="username"
              className="p-3 placeholder-secondary text-xl"
              placeholder="Your Student ID (as shared on Email)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="p-3 placeholder-secondary text-xl"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="button"
              className="p-3 bg-black text-white rounded-full text-xl"
              onClick={handleLogin}
            >
              Login
            </button>
            <a className="text-secondary text-xl font-semibold text-center cursor-pointer">
              Forgot Password?
            </a>
          </div>
          <div className="relative top-0 left-0 w-2/3 mx-auto h-20 mb-20">
            <Image
              src="/images/bytdv.png"
              fill={true}
              alt="login page image"
              className="object-contain w-full mx-auto h-20"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
