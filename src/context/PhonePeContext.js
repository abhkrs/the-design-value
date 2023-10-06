"use client";

import { createContext } from "react";
import { sha256 } from "js-sha256";
import api from "../../utils/api";
import { toast } from "react-toastify";

export const PhonePeContext = createContext();

export function PhonePeProvider({ children }) {
  async function handelPhonePePayament(data) {
    console.log(data);
    const orderId = `ORDER-${data.uuid}${new Date().getTime()}`;

    const payentPayload = {
      uuid: data?.uuid,
      courseUid: data?.courseUid,
      batchId: data?.batchId,
      paymentId: orderId,
      AmountPaid: data?.coursePrice,
      paymentStatus: 0,
      reason: `NA`,
    };
    if (data.regUid) {
      payentPayload.RegId = data.regUid;
    }

    const paymentResponse = await api.post(data?.apiUrl, payentPayload);
    console.log(paymentResponse);
    if (paymentResponse.status === "Success") {
      toast.success(paymentResponse?.message, {
        autoClose: 3000,
        theme: "colored",
      });
      toast.clearWaitingQueue();

      const baseUrl = window.location.origin;
      let redirectUrl = `${baseUrl}/payment-success?order_id=${orderId}`;
      if (data?.multiReg) {
        redirectUrl = `${redirectUrl}&multiReg=${data?.multiReg}`;
      }
      if (data?.nextMonth) {
        redirectUrl = `${redirectUrl}&nextMonth=1`;
      }

      const payload = {
        merchantId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
        merchantTransactionId: orderId,
        merchantUserId: process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_USER_ID,
        amount: Number(data?.coursePrice * 100),
        redirectUrl: redirectUrl,
        redirectMode: "REDIRECT",
        callbackUrl: redirectUrl,
        mobileNumber: data?.mobile,
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };
      const payloadString = JSON.stringify(payload, null, 2);
      const payloadWithLF = payloadString.replace(/\r\n/g, "\n");
      const base64Payload = Buffer.from(payloadWithLF, "utf-8").toString(
        "base64"
      );

      const shaPayload = sha256(
        `${base64Payload}/pg/v1/pay${process.env.NEXT_PUBLIC_PHONEPE_SALT_ID}`,
        "base64"
      );
      const sha256Data = `${shaPayload}###${process.env.NEXT_PUBLIC_PHONEPE_SALT_INDEX}`;

      // Make a request to the API route and handle the response
      await fetch("/api/phonepepayment", {
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
    } else {
      toast.error(paymentResponse?.message, {
        autoClose: 3000,
        theme: "colored",
      });
      toast.clearWaitingQueue();
    }
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
