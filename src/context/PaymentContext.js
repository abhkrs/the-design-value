"use client";

import { createContext } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const router = useRouter();
  const handleSubscribe = async (data) => {
    await initializeRazorpay();
    const subscribe = await fetch("/api/createorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: data.coursePrice }),
    });
    const res = await subscribe.json();
    console.log(res.order.id);
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_ID,
      amount: res.order.amount,
      currency: "INR",
      name: "Design Value",
      description: "UI/UX Design with 100% Paid Internship",
      order_id: res.order.id,
      // callback_url: `payment-success`,
      // redirect: true,
      theme: {
        color: "#0b0b0b",
      },
      overlay: false,
      handler: async (response) => {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        const payload = {
          uuid: data?.uuid,
          courseUid: data?.courseUid,
          batchId: data?.batchId,
          paymentId: response.razorpay_payment_id,
          AmountPaid: data?.coursePrice,
          paymentStatus: 1,
          reason: `NA`,
        };

        const paymentResponse = await api.post("/Register/regUsr", payload);

        console.log(paymentResponse);
        if (paymentResponse.status === "Success") {
          toast.success(response?.message, {
            autoClose: 3000,
            theme: "colored",
          });
        } else {
          toast.error(response?.message, {
            autoClose: 3000,
            theme: "colored",
          });
        }

        router.push("/payment-success");
      },
    };

    const rpay = new window.Razorpay(options);
    rpay.open();
  };

  const initializeRazorpay = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <PaymentContext.Provider
      value={{
        handleSubscribe,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
