"use client";

import { createContext } from "react";
import { sha256 } from "js-sha256";

export const PhonePeContext = createContext();

export function PhonePeProvider({ children }) {
  async function handelPhonePePayament(data) {
    console.log(data);
    const baseUrl = window.location.origin;
    const payload = {
      merchantId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
      merchantTransactionId: "MT7850590068188104",
      merchantUserId: "MUID123",
      amount: 10000,
      redirectUrl: `${baseUrl}/payment-success?order_id=MT7850590068188104`,
      redirectMode: "REDIRECT",
      callbackUrl: `${baseUrl}/payment-success?order_id=MT7850590068188104`,
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payloadString = JSON.stringify(payload, null, 2);
    const payloadWithLF = payloadString.replace(/\r\n/g, "\n");
    const base64Payload = Buffer.from(payloadWithLF, "utf-8").toString(
      "base64"
    );

    console.log(base64Payload);

    const shaPayload = sha256(
      `${base64Payload}/pg/v1/pay099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`,
      "base64"
    );

    console.log(shaPayload);
    const sha256Data = `${shaPayload}###${process.env.NEXT_PUBLIC_PHONEPE_SALT_INDEX}`;

    // Make a request to the API route and handle the response
    await fetch("/api/phonepe-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sha256Data, base64Payload }),
    })
      .then(async (response) => {
        if (response.ok) {
          // If the response status is OK (e.g., 200), parse the JSON response
          const responseData = await response.json();
          console.log(responseData);
          window.location.href =
            responseData?.data?.instrumentResponse?.redirectInfo?.url;
        } else {
          // If the response status is not OK, handle the error
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <PhonePeContext.Provider
      value={{
        handelPhonePePayament,
      }}
    >
      {children}
    </PhonePeContext.Provider>
  );
}
