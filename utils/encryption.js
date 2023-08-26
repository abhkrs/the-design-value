import CryptoJS from "crypto-js";

// Replace 'your-secret-key' with your actual secret key
const SECRET_KEY = "your-secret-key";

export function encryptData(data) {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_SECRET_KEY
  ).toString();
  return encryptedData;
}

export function decryptData(encryptedData) {
  // const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
  const decryptedBytes = CryptoJS.AES.decrypt(
    encryptedData,
    process.env.NEXT_PUBLIC_SECRET_KEY
  );
  const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);

  return decryptedData;
}
