import React from 'react';

const CallBackDone = ({ cbUid, status }) => {
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

            if (response.ok) {
                status(cbUid);
            } else {
                status(null);
            }
        } catch (error) {
            console.error('Error marking callback as done:', error);
            status(null);
        }
    };

    return (
        <div>
            <button
                onClick={handleDone}
                className='rounded-full p-2 h-9 inline-flex items-center justify-center w-full bg-secondary hover:bg-primary text-white'
            >
                ✅ Done
            </button>
        </div>
    );
};

export default CallBackDone;
