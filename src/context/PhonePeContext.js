"use client";

import { createContext } from "react";
import { sha256 } from "js-sha256";

export const PhonePeContext = createContext();

export function PhonePeProvider({ children }) {
  async function handelPhonePePayament(data) {
    console.log(data);
    const payload = {
      merchantId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
      merchantTransactionId: "MT7850590068188104",
      merchantUserId: "MUID123",
      amount: 10000,
      redirectUrl: "https://webhook.site/redirect-url",
      redirectMode: "REDIRECT",
      callbackUrl: "https://webhook.site/callback-url",
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

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": sha256Data,
      },
      body: JSON.stringify({
        request: base64Payload,
      }),
    };

    fetch("https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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
