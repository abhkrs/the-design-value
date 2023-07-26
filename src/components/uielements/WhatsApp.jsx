import React, { useState } from "react";

const WhatsApp = ({ whatsapp }) => {
  const [isWhatsapp, setIsWhatsapp] = useState(whatsapp);

  const toggleWhatsapp = () => {
    setIsWhatsapp((prevValue) => !prevValue);
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
