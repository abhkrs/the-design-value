"use client";

import { useEffect, useState } from "react"; // Import useEffect from "react"
import H2 from "@/components/typography/H2";
import P from "@/components/typography/P";
import Section from "@/components/uielements/Section";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sha256 } from "js-sha256";
import api from "../../../../utils/api";

export default function FullPage() {
  const [showLoader, setShowLoader] = useState(true);
  const [paymentSucces, setPaymentSucces] = useState(false);
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
        // Phone pe
        const shaPayload = sha256(
          `/pg/v1/status/${process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID}/${orderId}${process.env.NEXT_PUBLIC_PHONEPE_SALT_ID}`,
          "base64"
        );

        const apiUrl = `/api/phonepegetstatus?orderId=${orderId}&sha256Data=${shaPayload}`;

        fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (response) => {
            if (response.ok) {
              // If the response status is OK (e.g., 200), parse the JSON response
              const responseData = await response.json();
              console.log(responseData);

              if (responseData.code === "PAYMENT_SUCCESS") {
                const payentPayload ={
                  paymentId: orderId,
                  paymentStatus: 1
                }
                const paymentResponse = await api.post("/Register/payupdate", payentPayload);
                console.log(paymentResponse);
                if (paymentResponse.status === "Success") {
                  toast.success(paymentResponse?.message, {
                    autoClose: 3000,
                    theme: "colored",
                  });
                }
                setPaymentSucces(true);
              }
              setShowLoader(false);
            } else {
              // If the response status is not OK, handle the error
              console.error(
                `Error: ${response.status} - ${response.statusText}`
              );
            }
          })
          .catch((error) => {
            console.error(error);
            setShowLoader(false);
          });

        // Cashfree payment
        //const apiUrl = `/api/confirmpayment?orderId=${orderId}`;
        // fetch(apiUrl, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "x-api-version": "2022-09-01",
        //     "x-client-id": "TEST100253676612d2dbe513c200299676352001",
        //     "x-client-secret": "TESTdd5d3df8ca9e7bbf6c739312f870befbd20af39d",
        //   },
        // })
        //   .then((response) => {
        //     if (!response.ok) {
        //       throw new Error("Network response was not ok");
        //     }
        //     return response.json();
        //   })
        //   .then((data) => {
        //     if (data.order_status === "PAID") {
        //       setPaymentSucces(true);
        //     }
        //     setShowLoader(false);
        //   })
        //   .catch((error) => {
        //     console.error("Error:", error);
        //     setShowLoader(false);
        //   });
      }
    }
  }, [router]);

  return (
    <section>
      {!showLoader && paymentSucces && (
        <>
          <div className="relative mx-auto mt-20 w-24 h-24">
            <Image
              src="/images/wow.png"
              fill={true}
              alt="Payment done"
              className="object-contain w-full h-full"
            />
          </div>
          <H2 className="text-center !text-black mb-5 md:mt-2">
            Congratulations!
          </H2>
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
        </>
      )}
      {!showLoader && !paymentSucces && (
        <>
          <div className="relative mx-auto mt-20 w-24 h-24">
            <Image
              src="/images/wow.png"
              fill={true}
              alt="Payment done"
              className="object-contain w-full h-full"
            />
          </div>
          <H2 className="text-center !text-black mb-5 md:mt-2">
            Payment Failed
          </H2>
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
        </>
      )}
      {showLoader && (
        <div className="flex flex-col w-full h-[40vh] items-center justify-center">
          <div className="relative mx-auto mt-20 w-24 h-24">
            <div className="text-center">
              <div className="inline-block relative w-16 h-16">
                <div className="animate-spin absolute inset-0 h-full w-full border-t-4 border-b-4 border-l-4 border-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div>
            <H2 className="text-center !text-black mb-5 md:mt-2">
              Please wait
            </H2>
            <P className="text-center !text-secondary my-2 !text-xl">
              Your payment is processing.
            </P>
          </div>
        </div>
      )}
    </section>
  );
}
