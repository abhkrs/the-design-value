import React, { useState } from 'react';
import CompletedCallback from '../APIComponents/CompleatedCallback';
import NewCallbacks from '../APIComponents/NewCallbacks';
import TimeSlotForm from '../APIComponents/TimeSlotForm';

export default function CallBackPanel() {
  const [allStudents, setAllStudents] = useState(true);
  const [compleated, setCompleated] = useState(false);
  const [timeslots, setTimeslots] = useState(false)
  return (
    <main>
      <div className="flex gap-6 my-6">
        <button
          onClick={() => {
            setAllStudents(true);
            setCompleated(false);
            setTimeslots(false);
          }}
          className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${
            allStudents ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          New CallBacks
        </button>
        <button
          onClick={() => {
            setAllStudents(false);
            setCompleated(true);
            setTimeslots(false)
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${
            compleated ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          Completed CallBacks
        </button>
        <button
          onClick={() => {
            setAllStudents(false);
            setCompleated(false);
            setTimeslots(true)
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${
            timeslots ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          Generate Timeslots
        </button>
      </div>
      {allStudents && <NewCallbacks />}
      {compleated && <CompletedCallback />}
      {timeslots && <TimeSlotForm/>}
    </main>
  );
}
