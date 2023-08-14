import React, { useState, useEffect, useRef } from 'react';
import P from '../typography/P';
import CallBackDone from '../APIComponents/CallBackDone';
import DeleteStudent from './DeleteStudent';
import NotePopup from './NotePopup';
import Pagination from '../sections/Pagination';

export default function NewCallbacks() {
    const [activeCallbacks, setActiveCallbacks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [notes, setNotes] = useState(false);
    const [currentCallbackUid, setCurrentCallbackUid] = useState(null);
    const [currentCallbackNote, setCurrentCallbackNote] = useState('');
    const [doneStatus, setDoneStatus] = useState();
    const [deleteStatus, setDeleteStatus] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 3;
    const prevPageRef = useRef(1);

    const fetchActiveCallbacks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://aj2709.pythonanywhere.com/Callback/activeCallback`
            );
            const data = await response.json();
            if (data.status === 'Success') {
                setActiveCallbacks(Object.values(data.CallbackData).reverse());
                console.log(data.CallbackData);
            }
        } catch (error) {
            console.error('Error fetching active callbacks:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        prevPageRef.current = currentPage;
        fetchActiveCallbacks();
    }, [doneStatus, deleteStatus, currentPage]);

    useEffect(() => {
        if (doneStatus || deleteStatus) {
            setTimeout(() => {
                fetchActiveCallbacks();
            }, 300);
            setDoneStatus(null);
            setDeleteStatus(null);
        }
    }, [doneStatus, deleteStatus]);

    useEffect(() => {
        if (activeCallbacks.length === 0 && currentPage > 1) {
            setCurrentPage(prevPageRef.current - 1);
        }
    }, [activeCallbacks, currentPage]);

    const totalPagesActive = Math.max(1, Math.ceil(activeCallbacks.length / itemsPerPage));

    const handleEditNote = (cbUid) => {
        const callback = activeCallbacks.find((callback) => callback.cbUid === cbUid);
        if (callback) {
            setCurrentCallbackUid(cbUid);
            setCurrentCallbackNote(callback.Note || '');
            setNotes(true);
        }
    };

    const handleNotePopupClose = () => {
        setNotes(false);
        setCurrentCallbackUid(null);
        setCurrentCallbackNote('');
        fetchActiveCallbacks();
    };

    return (
        <div>
            {isLoading ? (
                <div className='h-80 flex items-center justify-center'>
                    <p>Loading...</p>
                </div>
            ) : (
                activeCallbacks
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
                                    <CallBackDone cbUid={callback.cbUid} status={setDoneStatus} />
                                    <DeleteStudent cbUid={callback.cbUid} statusDel={setDeleteStatus} />
                                </div>
                                {callback.Note ? (
                                    <div className='flex justify-between items-center gap-4'>
                                        <P>{callback.Note}</P>
                                        <button
                                            onClick={() => handleEditNote(callback.cbUid)}
                                        >
                                            📝
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => handleEditNote(callback.cbUid)}
                                        className='rounded-full p-2 inline-flex items-center justify-center w-full bg-white'
                                    >
                                        📝 Add note if any
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
            )}
            {notes && (
                <NotePopup
                    cbUid={currentCallbackUid}
                    currentNote={currentCallbackNote}
                    onClose={handleNotePopupClose}
                />
            )}
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
