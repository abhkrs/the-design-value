import React, { useState } from 'react';
import P from '../typography/P';

export default function DeleteRegStudent({ stdData, onSuccess }) {
  const [del, setDel] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const openPopup = () =>{
    setDel(!del);
    setConfirmEmail('')
    setErrorMessage('')
  }

  const closePopup = () => {
    setDel(!del)
  }

  const handleDelete = async () => {

    if (confirmEmail === stdData.email) {
      try {
        const response = await fetch('https://aj2709.pythonanywhere.com/Register/delRegUsr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ regUid: stdData.regUid }),
        });

        const result = await response.json();
        if (response.ok) {
          onSuccess();
          closePopup();
        } else {
          setErrorMessage(result.message);
        }
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    } else {
      setErrorMessage(`Email doesn't match`);
    }
  };

  return (
    <>
      <button
        onClick={openPopup}
        className="rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
      >
        🚫 Delete Student
      </button>

      {del && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
            <P className="my-4 !text-xl">{`Are you sure you want to delete ${stdData.name}'s profile?`}</P>
            <div className="my-4">
              <input
                type="email"
                id="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder={`Enter ${stdData.name}'s Email to confirm`}
                className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
              />
              {errorMessage && <P className="text-red-500 mt-2">{errorMessage}</P>}
            </div>
            <button
              onClick={handleDelete}
              className="rounded-full max-w-max my-2 py-2 px-4 inline-flex items-center justify-center bg-black text-white"
            >
              🚫 Delete Student
            </button>
            <button
              onClick={closePopup}
              className="rounded-full ms-4 max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
