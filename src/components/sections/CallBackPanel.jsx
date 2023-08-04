import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'; // Make sure the path is correct
import P from '../typography/P';
import Image from 'next/image';
import H3 from '../typography/H3';

export default function CallBackPanel() {
  const [allStudents, setAllStudents] = useState(true);
  const [compleated, setCompleated] = useState(false);
  const [notes, setNotes] = useState(false);
  const [activeCallbacks, setActiveCallbacks] = useState([]);
  const [completedCallbacks, setCompletedCallbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch active callbacks from the API
  const fetchActiveCallbacks = async () => {
    try {
      const response = await fetch(
        `https://ajinkya2709.pythonanywhere.com/Callback/activeCallback?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      if (data.status === 'Success') {
        setActiveCallbacks(Object.values(data.CallbackData));
      }
    } catch (error) {
      console.error('Error fetching active callbacks:', error);
    }
  };

  // Fetch completed callbacks from the API
  const fetchCompletedCallbacks = async () => {
    try {
      const response = await fetch(
        `https://ajinkya2709.pythonanywhere.com/Callback/doneCallback?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      if (data.status === 'Success') {
        setCompletedCallbacks(Object.values(data.CallbackData));
      }
    } catch (error) {
      console.error('Error fetching completed callbacks:', error);
    }
  };

  useEffect(() => {
    fetchActiveCallbacks();
    fetchCompletedCallbacks();
  }, [currentPage, allStudents, compleated]);

  const totalPagesActive = Math.ceil(activeCallbacks.length / itemsPerPage);
  const totalPagesCompleted = Math.ceil(completedCallbacks.length / itemsPerPage);

  return (
    <main>
       <div className="flex gap-6 my-6">
        <button
          onClick={() => {
            setAllStudents(true);
            setCompleated(false);
            setCurrentPage(1);
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
            setCurrentPage(1);
          }}
          className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${
            compleated ? ' bg-primary text-white' : ' bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      {allStudents &&
        <div>
          {activeCallbacks
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((callback, index) => (
            <div key={index} className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
              <div>
                <P><span className='!font-semibold'>NAME - </span>{callback.FullName}</P>
                <P><span className='!font-semibold'>EMAIL ID - </span>{callback.Email}</P>
                <P><span className='!font-semibold'>MOBILE NUMBER - </span>{callback.MobNo}</P>
              </div>
              <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                <P className="text-center"><span className='!font-semibold'>COURSE - </span>{callback.Course}</P>
                <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>{callback.Slot}</P>
              </div>
              <div className='px-6'>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-secondary'>
                    ✅ Done
                  </button>
                  <button className='rounded-full py-2 px-10 inline-flex items-center justify-cen ter bg-black text-white'>
                    🗑️ Delete
                  </button>
                </div>
                <button onClick={() => { setNotes(true) }} className='rounded-full py-2 px-10 inline-flex items-center justify-center w-full bg-white'>
                  📝 Add note if any
                </button>
              </div>
            </div>
            ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPagesActive}
            onNext={() => setCurrentPage(currentPage + 1)}
            onPrev={() => setCurrentPage(currentPage - 1)}
          />
        </div>
      }
      {compleated &&
        <div>
          {completedCallbacks
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((callback, index) => (
              <div key={index} className="bg-light grid grid-cols-3 rounded-xl px-8 py-6">
              <div>
                <P><span className='!font-semibold'>NAME - </span>{callback.FullName}</P>
                <P><span className='!font-semibold'>EMAIL ID - </span>{callback.Email}</P>
                <P><span className='!font-semibold'>MOBILE NUMBER - </span>{callback.MobNo}</P>
              </div>
              <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                <P className="text-center"><span className='!font-semibold'>COURSE - </span>{callback.Course}</P>
                <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>{callback.Slot}</P>
              </div>
              <div className='ps-6 flex justify-center align-center'>
                {callback.Note}
              </div>
            </div>
            ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPagesCompleted}
            onNext={() => setCurrentPage(currentPage + 1)}
            onPrev={() => setCurrentPage(currentPage - 1)}
          />
        </div>
      }
    </main>
  );
}
