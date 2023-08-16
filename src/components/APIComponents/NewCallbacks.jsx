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
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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
                const allCallbacks = Object.values(data.CallbackData).reverse();
                if (searchQuery) {
                    const filteredCallbacks = allCallbacks.filter(callback =>
                        callback.FullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        callback.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        callback.MobNo.includes(searchQuery) ||
                        callback.Course.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        callback.Note.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    setSearchResults(filteredCallbacks);
                } else {
                    setSearchResults(allCallbacks);
                }
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
    }, [doneStatus, deleteStatus, searchQuery]);

    useEffect(() => {
        if (doneStatus || deleteStatus) {
            setDoneStatus(null);
            setDeleteStatus(null);
        }
    }, [doneStatus, deleteStatus]);

    useEffect(() => {
        if (searchQuery === '') {
            setCurrentPage(1);
            setSearchResults([]);
            fetchActiveCallbacks();
        }
    }, [searchQuery]);

    useEffect(() => {
        fetchActiveCallbacks();
    }, [currentPage, deleteStatus, searchQuery]);

    const totalPagesCompleted = Math.max(1, Math.ceil(searchResults.length / itemsPerPage));

    const handleEditNote = (cbUid) => {
        const callback = searchResults.find((callback) => callback.cbUid === cbUid);
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

    const highlightText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.split(regex).map((part, index) =>
            regex.test(part) ? <mark key={index}>{part}</mark> : part
        );
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='relative'>
            <div className="block w-1/3 absolute -top-[134px] z-40">
                <input
                    type="search"
                    name="searchbox"
                    placeholder='Search here'
                    id=""
                    className="border rounded-md shadow px-3 py-2 w-full h-10"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            {(isLoading || (searchQuery && searchResults.length === 0)) ? (
                <div className='h-80 flex items-center justify-center'>
                    <p>{isLoading ? 'Loading...' : 'No match found...!'}</p>
                </div>
            ) : (
                searchResults
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((callback, index) => (
                        <div key={index} className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
                            <div>
                                <P>
                                    <span className='!font-semibold'>NAME - </span>
                                    {highlightText(callback.FullName, searchQuery)}
                                </P>
                                <P>
                                    <span className='!font-semibold'>EMAIL ID - </span>
                                    {highlightText(callback.Email, searchQuery)}
                                </P>
                                <P>
                                    <span className='!font-semibold'>MOBILE NUMBER - </span>
                                    {highlightText(callback.MobNo, searchQuery)}
                                </P>
                            </div>
                            <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                                <P className="text-center">
                                    <span className='!font-semibold'>COURSE - </span>
                                    {highlightText(callback.Course, searchQuery)}
                                </P>
                                <P className="text-center">
                                    <span className='!font-semibold'>REQ. TIME - </span>
                                    {highlightText(callback.Slot, searchQuery)}
                                </P>
                            </div>
                            <div className='px-6'>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <CallBackDone cbUid={callback.cbUid} status={setDoneStatus} />
                                    <DeleteStudent cbUid={callback.cbUid} statusDel={setDeleteStatus} />
                                </div>
                                {callback.Note ? (
                                    <div className='flex justify-between items-center gap-4'>
                                        <P>
                                            {highlightText(callback.Note, searchQuery)}
                                        </P>
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
                totalPages={totalPagesCompleted}
                onNext={() => handlePageChange(currentPage + 1)}
                onPrev={() => handlePageChange(currentPage - 1)}
                className="mt-8 -mb-3"
            />
        </div>
    );
}
