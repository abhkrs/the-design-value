/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneAlt,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import P from "../typography/P";
import SectionDark from "../uielements/SectionDark";
import H2 from "../typography/H2";
import H3 from "../typography/H3";

export default function Footer() {
  return (
    <footer>
      <SectionDark className={'bg-opacity-50 bg-black'}>
        <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-4 pt-6">
          <div className="lg:col-span-3">
            <Link href="/">
              <H2 className="!text-white !text-3xl -mt-2">The<span className="text-primary">Design</span>Value</H2>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <P>
              <Link
                href="/courses"
                className="p-1 flex gap-2 text-white hover:text-secondary"
              >
                Courses
              </Link>
            </P>

            <P>
              <Link
                href="/faqs"
                className="p-1 flex gap-2 text-white hover:text-secondary"
              >
                FAQs
              </Link>
            </P>

            <P>
              <Link
                href="/privacy-policy"
                className="p-1 flex gap-2 text-white hover:text-secondary"
              >
                Privacy Policy
              </Link>
            </P>

            <P>
              <Link
                href="/terms-conditions"
                className="p-1 flex gap-2 text-white hover:text-secondary"
              >
                Terms & Conditions
              </Link>
            </P>

          </div>

          <div className="lg:col-span-4">
            <H3 className="!text-white !text-xl mb-4">Contact Us</H3>
            <P>
              <Link
                href="mailto:connect.thedesignvalue@gmail.com"
                className="rounded-full p-1 flex gap-2 text-white hover:text-secondary mb-2"
              >
                <FaMailBulk /> <span className="!text-md -mt-1">connect.thedesignvalue@gmail.com</span>
              </Link>
            </P>

            <P>
              <Link
                href="tel:+916290191296"
                className="rounded-full p-1 flex gap-2 text-white hover:text-secondary"
              >
                <FaPhoneAlt /> <span className="!text-md -mt-1">+91 62901 91296</span>
              </Link>
            </P>
          </div>

          <div className="lg:col-span-3">
            <H3 className="!text-white !text-xl mb-4">Connect With Us</H3>
            <div className="flex text-secondary gap-4 text-xl">
              <Link
                href="https://www.facebook.com/profile.php?id=100079632523791"
                target="_blank"
                className="hover:bg-primary bg-transparent text-white rounded-full p-1"
              >
                <FaFacebookF />
              </Link>

              {/* <Link
                href="https://twitter.com/"
                target="_blank"
                className="hover:bg-primary bg-primary rounded-full p-1"
              >
                <FaTwitter />
              </Link> */}

              <Link
                href="https://www.instagram.com/thedesignvalue.in/"
                target="_blank"
                className="hover:bg-primary bg-transparent text-white rounded-full p-1"
              >
                <FaInstagram />
              </Link>

              {/* <Link
                href="https://www.pinterest.com/"
                target="_blank"
                className="hover:bg-primary bg-primary rounded-full p-1"
              >
                <FaPinterestP />
              </Link> */}

              <Link
                href="https://www.linkedin.com/company/the-design-value/"
                target="_blank"
                className="hover:bg-primary bg-transparent text-white rounded-full p-1"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </SectionDark>
    </footer>
  );
}
