"use client";

import { useEffect } from "react"; // Import useEffect from "react"
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FullPage() {
  const router = useRouter();
  useEffect(() => {
    const currentUrl = window.location.href;

    // Extract the query string from the URL
    const queryString = currentUrl.split("?")[1];

    if (queryString) {
      // Parse the query string into an object
      const queryParams = {};
      queryString.split("&").forEach((param) => {
        const [key, value] = param.split("=");
        queryParams[key] = decodeURIComponent(value);
      });

      // Get the order_id parameter
      const orderId = queryParams["order_id"];

      if (orderId) {
        console.log(orderId);
        const apiUrl = `/api/confirmpayment?orderId=${orderId}`;
        fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-version": "2022-09-01",
            "x-client-id": "TEST100253676612d2dbe513c200299676352001",
            "x-client-secret": "TESTdd5d3df8ca9e7bbf6c739312f870befbd20af39d",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Response:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  }, [router]);

  return (
    <Section>
      <div className="relative mx-auto mt-20 w-24 h-24">
        <Image
          src="/images/wow.png"
          fill={true}
          alt="Payment done"
          className="object-contain w-full h-full"
        />
      </div>
      <H2 className="text-center !text-black mb-5 md:mt-2">Congratulations!</H2>
      <P className="text-center !text-secondary my-2 !text-xl">
        Your payment has been successful.
      </P>
      <P className="text-center !text-lg">
        Email has been sent to you with your student Log In details.
      </P>
      <P className="text-center mt-12">
        <Link
          className="bg-black hover:bg-secondary !text-white px-6 sm:px-20 py-2 text-xl rounded-full"
          href="/"
        >
          Go back to Homepage
        </Link>
      </P>
    </Section>
  );
}
