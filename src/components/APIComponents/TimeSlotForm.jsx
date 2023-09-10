import React, { useEffect, useState } from 'react';
import H2 from '../typography/H2';
import P from '../typography/P';
import H3 from '../typography/H3';

const TimeSlotForm = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const [fromDate, setFromDate] = useState(today.toISOString().split('T')[0]);
  const [toDate, setToDate] = useState(tomorrow.toISOString().split('T')[0]);
  const [interval, setInterval] = useState(2);
  const [startHour, setStartHour] = useState('10:00');
  const [endHour, setEndHour] = useState('20:00');
  const [status, setStatus] = useState();
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [deletedStatus, setDeletedStatus] = useState();

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };
  const formatHour = (hour) => {
    const formattedHour = hour.split(':')[0];
    return formattedHour;
  };
  useEffect(() => {
    fetchAvailableTimeSlots();
  }, []);

  async function fetchAvailableTimeSlots() {
    try {
      const response = await fetch('https://aj2709.pythonanywhere.com/Callback/requestCB');
      const data = await response.json();
      if (response.ok) {
        setAvailableTimeSlots(data.slotId);
      } else {
        console.error("Error fetching time slots:", data);
      }
    } catch (error) {
      console.error("Error during API fetch:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      FromDate: formatDate(fromDate),
      ToDate: formatDate(toDate),
      Interval: interval,
      StartHr: formatHour(startHour),
      EndHr: formatHour(endHour),
    };

    try {
      const response = await fetch('https://aj2709.pythonanywhere.com/Callback/genTimeSlots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus(result.message);
        fetchAvailableTimeSlots();
      } else {
        setStatus(result.message);
      }
      console.log(result);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  const deleteSlot = async (timeUid) => {
    try {
      const response = await fetch('https://aj2709.pythonanywhere.com/Callback/delTimeSlot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timeUid
        })
      });

      const result = await response.json();

      if (response.ok) {
        setDeletedStatus(result.message);
        fetchAvailableTimeSlots();
      } else {
        setDeletedStatus(result.message);
      }

    } catch (error) {
      setDeletedStatus('Failed to delete time slot');
    }
  }

  return (
    <div className="container">
      <H2 className="py-5 mt-6 !text-4xl px-2">Generate Time Slots</H2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div>
              {/* <label className='block p-2 '>
                From Date:
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                />
              </label> */}
              <label className='block p-2'>
                From Date:
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="border border-gray-300 px-4 py-3 w-full rounded placeholder-secondary text-lg"
                />
              </label>

              <label className='block p-2 '>
                Start Hour:
                <input
                  type="time"
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                  max="23:59"
                  min="00:00"
                />
              </label>

              <label className='block p-2 '>
                Interval Hours:
                <input
                  type="number"
                  value={interval}
                  onChange={(e) => setInterval(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                />
              </label>
            </div>
            <div>
              <label className='block p-2 '>
                To Date:
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                />
              </label>

              <label className='block p-2 '>
                End Hour:
                <input
                  type="time"
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                  className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                  max="23:59"
                  min="00:00"
                />
              </label>

              <div className='mx-2 flex gap-4 mt-8'>
                <button type="submit" className="bg-black hover:bg-primary text-white text-lg py-2 px-6 rounded-md block min-w-max max-w-max">
                  Generate Slots
                </button>
                <P className="!text-primary !leading-tight">{status}</P>
              </div>
            </div>
          </div>
        </form>
        <div>
          <H3 className="!text-3xl xl:-mt-14">Available Timeslots</H3>

          {availableTimeSlots.length === 0 ? (
            <P className='mt-6'>No Slot Available! Please Generate new timeslots</P>
          ) : (
            <ul>
              {availableTimeSlots.map((slot) => (
                <li key={slot.timeUid} className='py-1'>
                  {slot}
                  <button
                    onClick={() => deleteSlot(slot)}
                    className="px-2 mx-4 rounded-full bg-black hover:bg-secondary text-white"
                  >
                    X
                  </button>
                </li>
              ))}
              {deletedStatus && <P className="!text-[#f00]">{deletedStatus}</P>}
            </ul>
          )}
        </div>
      </div>

    </div>
  );
};
export default TimeSlotForm;