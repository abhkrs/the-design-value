import React, { useState, useEffect } from 'react';
import P from '../typography/P';
import DeleteStudent from './DeleteStudent';
import NotePopup from './NotePopup';
import Pagination from '../sections/Pagination';

export default function CompletedCallback() {
    const [completedCallbacks, setCompletedCallbacks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [notes, setNotes] = useState(false);
    const [currentCallbackUid, setCurrentCallbackUid] = useState(null);
    const [currentCallbackNote, setCurrentCallbackNote] = useState('');
    const itemsPerPage = 5;

    const fetchCompletedCallbacks = async () => {
        try {
            const response = await fetch(
                `https://aj2709.pythonanywhere.com/Callback/doneCallback?page=${currentPage}&limit=${itemsPerPage}`
            );
            const data = await response.json();
            if (data.status === 'Success') {
                setCompletedCallbacks(Object.values(data.CallbackData).reverse());
                console.log(data.CallbackData);
            }
        } catch (error) {
            console.error('Error fetching completed callbacks:', error);
        }
    };

    useEffect(() => {
        fetchCompletedCallbacks();
    }, [currentPage]);

    const totalPagesCompleted = Math.ceil(completedCallbacks.length / itemsPerPage);

    const handleEditNote = (cbUid) => {
        const callback = completedCallbacks.find((callback) => callback.cbUid === cbUid);
        if (callback) {
            setCurrentCallbackUid(cbUid);
            setCurrentCallbackNote(callback.Note || '');
            setNotes(true);
        }
    };

    return (
        <div>
            {completedCallbacks
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((callback, index) => (
                    <div key={index} className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-2">
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
                            {callback.Note ? (<div className='flex flex-col gap-4 justify-end'>
                                <P>{callback.Note}</P>
                                <div className='flex justify-between items-center gap-4'>

                                    <button
                                        onClick={() => handleEditNote(callback.cbUid)}
                                        className='rounded-full p-2 inline-flex items-center justify-center w-full bg-white hover:bg-primary hover:text-white h-9'
                                    >
                                        📝 Edit Note
                                    </button>
                                    <DeleteStudent cbUid={callback.cbUid} className="w-full" />
                                </div>
                            </div>
                            ) : (
                                <div className='flex gap-4 justify-between'>
                                    <button
                                        onClick={() => handleEditNote(callback.cbUid)}
                                        className='rounded-full p-2 inline-flex items-center justify-center w-full bg-secondary hover:bg-primary text-white h-9'
                                    >
                                        📝 Add note
                                    </button>
                                    <DeleteStudent cbUid={callback.cbUid} className="w-full" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            {notes && (
                <NotePopup
                    cbUid={currentCallbackUid}
                    currentNote={currentCallbackNote}
                    onClose={() => setNotes(false)}
                />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPagesCompleted}
                onNext={() => setCurrentPage(currentPage + 1)}
                onPrev={() => setCurrentPage(currentPage - 1)}
                className="mt-8 -mb-3"
            />
        </div>
    );
}
