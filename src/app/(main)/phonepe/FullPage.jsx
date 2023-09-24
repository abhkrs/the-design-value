"use client";

import { load } from "@cashfreepayments/cashfree-js";
import React from "react";

function FullPage() {
  async function handelPyament() {
    await initializeRazorpay();
    const cashfree = await load({
      mode: "sandbox", //or production
    });

    const apiUrl = "https://sandbox.cashfree.com/pg/orders";
    const clientId = "TEST100253676612d2dbe513c200299676352001";
    const clientSecret = "TESTdd5d3df8ca9e7bbf6c739312f870befbd20af39d";

    const requestData = {
      customer_details: {
        customer_id: "T887744",
        customer_email: "tanmay1dey@gmail.com",
        customer_phone: "7980429183",
        customer_name: "Tanmay Dey",
      },
      order_id: `T877444${Math.random()}`,
      order_amount: 100,
      order_currency: "INR",
    };

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-version": "2022-09-01",
      "x-client-id": clientId,
      "x-client-secret": clientSecret,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: headers,
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const initializeRazorpay = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
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

export default FullPage;
