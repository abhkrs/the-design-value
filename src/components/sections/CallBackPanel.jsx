import React, { useState, useEffect } from 'react';
import P from '../typography/P';
import Image from 'next/image';
import H3 from '../typography/H3';

export default function CallBackPanel() {
  const [allStudents, setAllStudents] = useState(true);
  const [compleated, setCompleated] = useState(false);
  const [notes, setNotes] = useState(false);
  const [activeCallbacks, setActiveCallbacks] = useState([]);
  const [completedCallbacks, setCompletedCallbacks] = useState([]);

  // Fetch active callbacks from the API
  const fetchActiveCallbacks = async () => {
    try {
      const response = await fetch(
        'https://ajinkya2709.pythonanywhere.com/Callback/activeCallback'
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
        'https://ajinkya2709.pythonanywhere.com/Callback/doneCallback'
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
  }, []);

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
      {allStudents &&
        <div>
          {/* Render active callbacks */}
          {activeCallbacks.map((callback, index) => (
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

          {/* Render notes dialog if notes state is true */}
          {notes &&
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
                <H3 className="!text-2xl mb-4">📝 Add Note</H3>
                <button onClick={() => { setNotes(false); }} className="absolute top-4 right-4 text-red-500">
                  <Image alt="" src="/images/close.svg" height="18" width="18" />
                </button>
                <hr />
                <form className="relative mt-4 flex flex-col">
                  <textarea name="studentnotes" id="studentnote" rows="2" className='w-2/3 bg-white border-2 rounded-md p-4 my-4'></textarea>
                  <button type="submit" onClick={() => setNotes(false)} className="bg-black max-w-max !text-white py-2 mt-4 px-8 rounded !text-lg rounded-full hover:bg-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          }
        </div>
      }

      {compleated &&
        <div>
          {/* Render completed callbacks */}
          {completedCallbacks.map((callback, index) => (
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
        </div>
      }
    </main>
  )
}
