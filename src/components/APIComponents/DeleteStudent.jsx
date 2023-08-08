import React from 'react';

const DeleteStudent = ({ cbUid, className }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch('https://aj2709.pythonanywhere.com/Callback/delCB', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cbUid: cbUid,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error deleting callback:', error);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className={`rounded-full p-2 h-9 inline-flex items-center justify-center bg-black hover:bg-primary text-white ${className}`}
        >
            🗑️ Delete
        </button>
    );
};

export default DeleteStudent;
