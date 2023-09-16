"use client";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useRef } from "react";

export default function Modal({
  enabled = false,
  header = "",
  body = () => {},
  footer = "",
  setModal = () => {},
  noOutSideClose = false,
  ...rest
}) {
  const outSideClickRef = useRef();
  useOnClickOutside(outSideClickRef, () => {    
    if (!noOutSideClose && enabled) {
      setModal((prev) => ({ ...prev, enabled: false }));
    }
  });

  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className={`fixed modal top-0 left-0 right-0 bottom-0 h-screen z-[999] w-full p-4 overflow-x-hidden md:inset-0  max-h-full bg-black bg-opacity-80 ${
        !enabled && "hidden"
      } flex justify-center items-center `}
    >
       <div className="modal sm:min-w-[520px] sm:min-h-[300px] min-w-full min-h-full bg-white shadow-lg">
        <div className="p-0 modal-box" ref={outSideClickRef}>
        <div
            className={`${
              header && 'bg-[#fef8f4]'
            } px-6 py-3 sticky top-0 w-full z-10 flex gap-4 justify-between items-center`}
          >
            <h3 className="text-xl font-bold text-gray-700">{header}</h3>
            {noOutSideClose && (
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="p-2 rounded-full cursor-pointer w-9 h-9 hover:bg-red-100"
                onClick={() => setModal((prev) => ({ ...prev, enabled: false }))}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="sm:px-6 px-2 py-4 overflow-y-auto">{body(rest)}</div>
          {footer && (
            <div className="justify-center modal-action bg-[#fef8f4] px-6 py-4 sticky bottom-0 z-10">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
