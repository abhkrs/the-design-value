// pages/api/phonepe-payment.js

import { sha256 } from "js-sha256";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { sha256Data, base64Payload } = req.body;

    // Use sha256Data and base64Payload as needed
    console.log(sha256Data);
    console.log(base64Payload);

    // Perform the fetch here with sha256Data and base64Payload

    // Example: perform fetch using sha256Data
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

    const response = await fetch("https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay", options);
    const responseData = await response.json();

    res.status(response.status).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
