import React, { useState } from 'react'
import P from '../typography/P';

export default function CallBackPanel() {
    const [allStudents, setAllStudents] = useState(true)
    const [compleated, setCompleated] = useState(false)
    return (
        <main>
            <div className="flex gap-6 my-6">
                <button
                    onClick={() => { setAllStudents(true); setCompleated(false); }}
                    className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${allStudents ? ' bg-primary text-white' : ' bg-gray-200'}`}>
                    All
                </button>
                <button
                    onClick={() => { setAllStudents(false); setCompleated(true); }}
                    className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${compleated ? ' bg-primary text-white' : ' bg-gray-200'}`}>
                    Completed
                </button>
            </div>
            <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6">
                <div>
                    <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                    <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                    <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                </div>
                <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                    <P className="text-center"><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                    <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>Today, 6-9 pm</P>
                </div>
                <div className='px-6'>
                    <div className="grid grid-cols-2 gap-4  mb-4">
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-secondary'>
                            Done
                        </button>
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                            Delete
                        </button>
                    </div>
                    <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center w-full bg-white'>
                            Add Note if any
                        </button>
                </div>
            </div>

            <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-4">
                <div>
                    <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                    <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                    <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                </div>
                <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                    <P className="text-center"><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                    <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>Today, 6-9 pm</P>
                </div>
                <div className='ps-6'>
                    <div className="grid grid-cols-2 gap-4  mb-4">
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-secondary'>
                            Done
                        </button>
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                            Delete
                        </button>
                    </div>
                    <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center w-full bg-white'>
                            Add Note if any
                        </button>
                </div>
            </div>

            <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6">
                <div>
                    <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                    <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                    <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                </div>
                <div className='border-l-2 border-r-2 px-8 flex-col justify-center items-center'>
                    <P className="text-center"><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                    <P className="text-center"><span className='!font-semibold'>REQ. TIME - </span>Today, 6-9 pm</P>
                </div>
                <div className='ps-6'>
                    <div className="grid grid-cols-2 gap-4  mb-4">
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-secondary'>
                            Done
                        </button>
                        <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                            Delete
                        </button>
                    </div>
                    <button
                            className='rounded-full py-2 px-10 inline-flex items-center justify-center w-full bg-white'>
                            Add Note if any
                        </button>
                </div>
            </div>
        </main>
    )
}
