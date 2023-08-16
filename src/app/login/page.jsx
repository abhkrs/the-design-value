'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import H2 from "@/components/typography/H2";

export default function Page() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://aj2709.pythonanywhere.com/Register/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        if (data.is_superuser) {
          localStorage.setItem('authData', JSON.stringify({ isLoggedIn: true, isSuperuser: true }));
          router.push('/dashboard');
        } else {
          localStorage.setItem('authData', JSON.stringify({ isLoggedIn: true, isSuperuser: false, studentDetails: data.StudentData }));
          router.push('/profile');
        }
      } else {
        setError("Invalid credentials");
      }

    } catch (err) {
      setError("Error logging in");
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
        <div className="flex justify-between flex-col gap-8 h-screen p-8 lg:col-span-2 md:mx-auto">
          <div className="flex justify-between align-middle flex-col gap-8 md:w-[400px]">
            <H2 className="text-center !text-3xl font-semibold inter">Add Your Details</H2>
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
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="button"
              className="p-3 bg-black text-white rounded-full text-xl"
              onClick={handleLogin}
            >
              Login
            </button>
            <a className="text-secondary text-xl text-center cursor-pointer">
              Forgot Password?
            </a>
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
