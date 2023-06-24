/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0D17] text-white bottom-0 p-4 pt-8 md:pt-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex basis-1/3 my-auto text-sm">
          <Link href="/">
            The<span className="text-primary">Design</span>Value
          </Link>
          <div className="flex text-black gap-4 text-xl mt-6 mb-3">
          <Link
            href="https://www.facebook.com/"
            className="hover:bg-primary bg-white rounded-full p-1"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://twitter.com/"
            className="hover:bg-primary bg-white rounded-full p-1"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.instagram.com/"
            className="hover:bg-primary bg-white rounded-full p-1"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.pinterest.com/"
            className="hover:bg-primary bg-white rounded-full p-1"
          >
            <FaPinterestP />
          </Link>

          <Link
            href="https://www.linkedin.com/"
            className="hover:bg-primary bg-white rounded-full p-1"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        </div>
        <div className="flex justify-center"></div>
        
      </div>
    </footer>
  );
}
