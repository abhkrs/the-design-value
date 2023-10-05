// pages/api/cashfree.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Define the Cashfree API URL
      const apiUrl = "https://sandbox.cashfree.com/pg/orders";

      // Define the request headers including x-client-secret and x-client-id
      const requestHeaders = {
        "Content-Type": "application/json",
        "x-api-version": "2022-09-01", // Replace with the correct version
        "x-client-id": "TEST100253676612d2dbe513c200299676352001", // Replace with your Client ID
        "x-client-secret": "TESTdd5d3df8ca9e7bbf6c739312f870befbd20af39d", // Replace with your Client Secret
      };

      // Forward the request to Cashfree
      const response = await axios.post(apiUrl, req.body, {
        headers: requestHeaders,
      });

      // Return the response from Cashfree to the frontend
      res.json(response.data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
