// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { sha256Data, orderId } = req.query;
    console.log(sha256Data, orderId);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": `${sha256Data}###${process.env.NEXT_PUBLIC_PHONEPE_SALT_INDEX}`,
        "X-MERCHANT-ID": process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID,
      },
    };

    const response = await fetch(
      `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${process.env.NEXT_PUBLIC_PHONEPE_MERCHANT_ID}/${orderId}`,
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
