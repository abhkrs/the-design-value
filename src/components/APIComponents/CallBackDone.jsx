import React from 'react';

const CallBackDone = ({ cbUid }) => {
    const handleDone = async () => {
        try {
            const response = await fetch('https://aj2709.pythonanywhere.com/Callback/markDone', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cbUid: cbUid,
                    done: 1,
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
            onClick={handleDone}
            className='rounded-full p-2 h-9 inline-flex items-center justify-center bg-secondary hover:bg-primary text-white'
        >
            ✅ Done
        </button>
    );
};

export default CallBackDone;
