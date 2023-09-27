// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { sha256Data, base64Payload } = req.body;
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

    const response = await fetch(
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
      options
    );

    // Get the response data from the PhonePe API
    const responseData = await response.json();

    // Send the PhonePe API response back to the client
    res.status(response.status).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
