import React, { useState } from 'react';
import Image from 'next/image';
import H3 from '../typography/H3';

export default function NotePopup({ cbUid, onClose, currentNote }) {
    const [noteText, setNoteText] = useState(currentNote);
    const [isLoading, setIsLoading] = useState(false);
    const [apiStatus, setApiStatus] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://aj2709.pythonanywhere.com/Callback/updateNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cbUid: cbUid,
                    note: noteText,
                }),
            });

            const data = await response.json();
            console.log(data);
            if (data.status === 'Success') {
                setApiStatus('success');
                
            } else {
                setApiStatus('error');
            }
        } catch (error) {
            console.error('Error adding callback note:', error);
            setApiStatus('error');
        }

        setIsLoading(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000050] z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
                <H3 className="!text-2xl mb-4">📝 Add Note</H3>
                <button onClick={onClose} className="absolute top-4 right-4 text-red-500">
                    <Image alt="" src="/images/close.svg" height="18" width="18" />
                </button>
                <hr />
                <form className="relative mt-4 flex flex-col" onSubmit={handleFormSubmit}>
                    <textarea
                        name="studentnotes"
                        id="studentnote"
                        rows="2"
                        className="w-2/3 bg-white border-2 rounded-md p-4 my-4"
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                    ></textarea>
                    <div className="flex gap-6 items-center">
                    <button
                        type="submit"
                        className="bg-black max-w-max !text-white py-2 mt-4 px-8 rounded !text-lg rounded-full hover:bg-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    {apiStatus === 'success' && (
                        <p className="text-green-500 mt-2">Note saved successfully.</p>
                    )}
                    {apiStatus === 'error' && (
                        <p className="text-red-500 mt-2">Failed to save the note.</p>
                    )}
                    </div>
                </form>
            </div>
        </div>
    );
}
