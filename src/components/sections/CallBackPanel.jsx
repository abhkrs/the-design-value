import React, { useState } from 'react';
import CompletedCallback from '../APIComponents/CompleatedCallback';
import NewCallbacks from '../APIComponents/NewCallbacks';

export default function CallBackPanel() {
  const [allStudents, setAllStudents] = useState(true);
  const [compleated, setCompleated] = useState(false);
  return (
    <main>
      <div className="flex gap-6 my-6">
        <button
          onClick={() => {
            setAllStudents(true);
            setCompleated(false);
          }}
          className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${
            allStudents ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setAllStudents(false);
            setCompleated(true);
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${
            compleated ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      {allStudents && <NewCallbacks />}
      {compleated && <CompletedCallback />}
    </main>
  );
}
