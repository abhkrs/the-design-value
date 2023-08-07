import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import P from '../typography/P';

export default function NewCallbacks() {
    const [activeCallbacks, setActiveCallbacks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Fetch active callbacks from the API
    const fetchActiveCallbacks = async () => {
        try {
            const response = await fetch(
                `https://aj2709.pythonanywhere.com/Callback/activeCallback?page=${currentPage}&limit=${itemsPerPage}`
            );
            const data = await response.json();
            if (data.status === 'Success') {
                setActiveCallbacks(Object.values(data.CallbackData).reverse());
                console.log(data.CallbackData);
            }
        } catch (error) {
            console.error('Error fetching active callbacks:', error);
        }
    };

    useEffect(() => {
        fetchActiveCallbacks();
    }, [currentPage]);

    const totalPagesActive = Math.ceil(activeCallbacks.length / itemsPerPage);

    return (
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
                                <button className='rounded-full p-2 h-9 inline-flex items-center justify-center bg-secondary'>
                                    ✅ Done
                                </button>
                                <button className='rounded-full p-2 h-9 inline-flex items-center justify-center bg-black text-white'>
                                    🗑️ Delete
                                </button>
                            </div>
                            <button onClick={() => { setNotes(true) }} className='rounded-full p-2 inline-flex items-center justify-center w-full bg-white'>
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
                className="mt-8 -mb-3"
            />
        </div>
    );
}
