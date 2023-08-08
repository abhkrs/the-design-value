import React, { useState } from "react";

const WhatsApp = ({ whatsapp, regUid }) => {
  const [isWhatsapp, setIsWhatsapp] = useState(whatsapp);

  const toggleWhatsapp = () => {
    const updatedStatus = isWhatsapp ? 0 : 1;

    const requestData = {
      regUid: regUid,
      wApp: updatedStatus,
    };

    fetch("https://aj2709.pythonanywhere.com/Register/updateWA", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "Success") {
          setIsWhatsapp(!isWhatsapp);
        }
      })
      .catch((error) => {
        console.error("Error updating WhatsApp status:", error);
      });
  };

  return (
    <label className="max-w-max flex items-center gap-2">
      <input
        type="checkbox"
        checked={isWhatsapp}
        onChange={toggleWhatsapp}
        className={`h-4 w-4 text-primary`}
      />
      {isWhatsapp ? "Student Added to WhatsApp Group" : "Student not Added to WhatsApp Group"}
    </label>
  );
};

export default WhatsApp;
