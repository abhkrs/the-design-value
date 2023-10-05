"use client";

import { load } from "@cashfreepayments/cashfree-js";
import React from "react";

function PaymentPage() {
  async function handelPyament() {
    await initializeRazorpay();
    const cashfree = await load({
      mode: "sandbox", //or production
    });

    const apiUrl = "/api/cashfree"; // Use the relative path to your custom API route

    // Your request data
    const requestData = {
      customer_details: {
        customer_id: "T887744",
        customer_email: "tanmay1dey@gmail.com",
        customer_phone: "7980429183",
        customer_name: "Tanmay Dey",
      },
      order_id: `ORDER-${new Date().getTime()}`,
      order_amount: 100,
      order_currency: "INR",
    };
    const baseUrl = window.location.origin;
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "2022-09-01",
        "x-client-id": "TEST100253676612d2dbe513c200299676352001",
        "x-client-secret": "TESTdd5d3df8ca9e7bbf6c739312f870befbd20af39d",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
        cashfree
          .checkout({
            paymentSessionId: data.payment_session_id,
            returnUrl: `${baseUrl}/payment-success?order_id=${requestData.order_id}`,
          })
          .then(function () {
            console.log("on going redirection");
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const initializeRazorpay = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
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
    <div>
      <button
        className="bg-primary h-6 w-12"
        onClick={() => {
          handelPyament();
        }}
      >
        Pay
      </button>
    </div>
  );
}

export default PaymentPage;
