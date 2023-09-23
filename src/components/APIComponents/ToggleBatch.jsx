import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import { decryptData } from "../../../utils/encryption";

export default function ToggleBatch({ batchId, avail }) {
  const [slotid, setSlotid] = useState(avail);
  const [userRole, setUserRole] = useState();

  const toggleSlotid = async () => {
    try {
      const newAvail = slotid ? "on" : "off";

      const response = await fetch(
        "https://aj2709.pythonanywhere.com/Courses/toggleBatch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            batchId: batchId,
            avail: newAvail === "on" ? 0 : 1,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "Success") {
        console.log(data.message);
        setSlotid(!slotid);
      }
    } catch (error) {
      console.error("Error toggling batch:", error);
    }
  };

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    if (userRole) {
      const decryptedUserRole = JSON.parse(decryptData(userRole));
      setUserRole(decryptedUserRole);
    }
  }, []);

  return (
    <div>
      <button onClick={toggleSlotid} disabled={userRole && !userRole?.isSuperAdmin}> 
        {slotid ? (
          <div className="flex">
            On{" "}
            <span className="ml-4 mt-1 bg-primary rounded-2xl w-8 h-4 ps-4">
              <FaCircle className="text-white border-primary border rounded-full" />
            </span>
          </div>
        ) : (
          <div className="flex">
            Off{" "}
            <span className="ml-4 mt-1 bg-gray-300 rounded-2xl w-8 h-4">
              <FaCircle />
            </span>
          </div>
        )}
      </button>
    </div>
  );
}
