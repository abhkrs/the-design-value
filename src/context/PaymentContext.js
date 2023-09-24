"use client";

import { createContext } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const router = useRouter();
  const handleSubscribe = async (data) => {
    try {
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
        theme: {
          color: "#5da399",
        },
        overlay: false,
        handler: async (response) => {
          const payload = {
            uuid: data?.uuid,
            courseUid: data?.courseUid,
            batchId: data?.batchId,
            paymentId: response.razorpay_payment_id,
            AmountPaid: data?.coursePrice,
            paymentStatus: 1,
            reason: `NA`,
          };
          if (data.regId) {
            payload.RegId = data.regId;
          }

          const paymentResponse = await api.post(data?.apiUrl, payload);

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

          router.push(data?.callBackUrl);
          // location.reload();
        },
      };
      const rpay = new window.Razorpay(options);
      rpay.open();
    } catch (error) {
      console.error("Error in handleSubscribe:", error);
      // Handle the error appropriately, e.g., show an error message to the user.
    }
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
