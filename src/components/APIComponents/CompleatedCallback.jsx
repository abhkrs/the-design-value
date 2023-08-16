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
  const [deleteStatus, setDeleteStatus] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 3;
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCompletedCallbacks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://aj2709.pythonanywhere.com/Callback/doneCallback?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      if (data.status === 'Success') {
        const allCallbacks = Object.values(data.CallbackData).reverse();
        setCompletedCallbacks(allCallbacks);
        setSearchResults(allCallbacks); // Set search results initially to all data
      }
    } catch (error) {
      console.error('Error fetching completed callbacks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const debounce = (func, delay) => {
    clearTimeout(debounceTimeout);
    const timeout = setTimeout(func, delay);
    setDebounceTimeout(timeout);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    debounce(() => performSearch(query), 500);
  };

  const performSearch = (query) => {
    if (query === '') {
      setSearchResults(completedCallbacks); // Reset search results to all data
    } else {
      const filteredResults = completedCallbacks.filter((callback) =>
        callback.FullName.toLowerCase().includes(query.toLowerCase()) ||
        callback.Email.toLowerCase().includes(query.toLowerCase()) ||
        callback.MobNo.includes(query) ||
        callback.Course.toLowerCase().includes(query.toLowerCase()) ||
        callback.Note.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchCompletedCallbacks();
  }, []);

  useEffect(() => {
    if ( deleteStatus) {
      setDeleteStatus(null);
      fetchCompletedCallbacks();
    }
  }, [deleteStatus]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
    fetchCompletedCallbacks();
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
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
          onChange={e => handleSearchQueryChange(e.target.value)}
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
            <div key={index} className={`bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-2 ${callback.slideLeft && 'animate-slide-left'}`}>
              <div>
                <P><span className='!font-semibold'>NAME - </span>{highlightText(callback.FullName, searchQuery)}</P>
                <P><span className='!font-semibold'>EMAIL ID - </span>{highlightText(callback.Email, searchQuery)}</P>
                <P><span className='!font-semibold'>MOBILE NUMBER - </span>{highlightText(callback.MobNo, searchQuery)}</P>
              </div>
              <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                <P className="text-center"><span className='!font-semibold'>COURSE - </span>{highlightText(callback.Course, searchQuery)}</P>
                <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>{highlightText(callback.Slot, searchQuery)}</P>
              </div>
              <div className='px-6'>
                {callback.Note ? (
                  <div className='flex flex-col gap-4 justify-end'>
                    <P>{highlightText(callback.Note, searchQuery)}</P>
                    <div className='flex justify-between items-center gap-4'>
                      <button
                        onClick={() => handleEditNote(callback.cbUid)}
                        className='rounded-full p-2 inline-flex items-center justify-center w-full bg-white hover:bg-primary hover:text-white h-9'
                      >
                        📝 Edit
                      </button>
                      <DeleteStudent cbUid={callback.cbUid} className="w-full" statusDel={setDeleteStatus} />
                    </div>
                  </div>
                ) : (
                  <div className='flex gap-4 justify-between'>
                    <button
                      onClick={() => handleEditNote(callback.cbUid)}
                      className='rounded-full p-2 inline-flex items-center justify-center w-full bg-secondary hover:bg-primary text-white h-9'
                    >
                      📝 Add
                    </button>
                    <DeleteStudent cbUid={callback.cbUid} className="w-full" statusDel={setDeleteStatus} />
                  </div>
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
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
        className="mt-8 -mb-3"
      />
    </div>
  );
}
