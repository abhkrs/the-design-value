"use client";

import React, { useEffect } from "react";
import { sha256 } from "js-sha256";

function FullPage() {
  useEffect(() => {
    const eventPayload = {
      merchantId: "M2306160483220675579140",
      transactionId: "TX123456789",
      merchantOrderId: "M123456789",
      amount: 100,
      instrumentType: "MOBILE",
      instrumentReference: "9xxxxxxxxxx",
      message: "collect for XXX order",
      email: "amitxxx75@gmail.com",
      expiresIn: 180,
      shortName: "DemoCustomer",
      subMerchant: "DemoMerchant",
      storeId: "store1",
      terminalId: "terminal1",
    };

    // Convert the object to a JSON string
    const jsonPayload = JSON.stringify(eventPayload);

    // Base64 encode the JSON string
    const encodedPayload = btoa(jsonPayload);

    const saltKey = "8289e078-be0b-484d-ae60-052f117f8deb";
    const saltIndex = 1;
    const string = `${encodedPayload}/v3/debit${saltKey}###${saltIndex}`;
    const shaString = sha256(string);
    console.log(encodedPayload);
    console.log(shaString);

    const options = {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        "X-VERIFY": shaString,
        "X-CALLBACK-URL": "https://www.demoMerchant.com/callback",
      },
      body: JSON.stringify({
        request: encodedPayload,
      }),
    };

    fetch("https://mercury-uat.phonepe.com/v3/debit", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return <div>FullPage</div>;
}

export default FullPage;
