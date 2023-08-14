import React, { useState } from 'react'
import P from '../typography/P';

export default function AddCertificate(stdData, onSuccess) {
    const [addCert, setAddCert] = useState(false);
    console.log(stdData)
    return (
        <><button
            onClick={() => {
                setAddCert(true);
            }}
            className="rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white"
        >
            🏆 Add Certificate
        </button>
            {addCert && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-lg w-2/3 relative lg:px-16">
                        <P className="my-4 !text-xl">{`Upload certificate for ${stdData.name}`}</P>
                        <div className="my-4">
                            <input
                                type="file"
                                id="name"
                                placeholder="Upload Certificate"
                                className="border border-gray-300 px-3 py-2 w-full rounded placeholder-secondary"
                            />
                        </div>
                        <button className="rounded-full max-w-max my-2 py-2 px-4 inline-flex items-center justify-center bg-black text-white">
                            Update Certificate
                        </button>
                        <button
                            onClick={() => {
                                setAddCert(false);
                            }}
                            className="rounded-full ms-4 max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
