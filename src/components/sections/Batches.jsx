import React, { useState } from 'react'
import H2 from '../typography/H2'
import H3 from '../typography/H3'
import P from '../typography/P'

export default function Batches() {
    const [showSlot, setShowSlot] = useState(1)
    return (
        <main>
            <button
                className="rounded-full my-6 py-2 px-10 inline-flex items-center justify-center  bg-primary text-white">
                + Add New Course
            </button>
            <div className="bg-light rounded-xl px-8 py-6 my-2">
                <div className="flex justify-between px-4">
                    <H2 className="!text-4xl">UX UI Certification</H2>
                    <button className='max-w-max text-primary underline' onClick={() => { (showSlot !== 1) ? setShowSlot(1) : setShowSlot(0) }}>{showSlot === 1 ? 'Hide Slots' : "View Slots"}</button>
                </div>
                {showSlot === 1 &&
                    <div>
                        <div className="flex justify-between my-3 px-4">
                            <H3 className="text-primary !text-3xl">Current Batch Slot</H3>
                            <button className='max-w-max text-primary underline'>+ Add New Slots</button>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="bg-light rounded-xl px-8 py-6 my-2">
                <div className="flex justify-between px-4">
                    <H2 className="!text-4xl">UX UI Certification</H2>
                    <button className='max-w-max text-primary underline' onClick={() => { (showSlot !== 2) ? setShowSlot(2) : setShowSlot(0) }}>{showSlot === 2 ? 'Hide Slots' : "View Slots"}</button>
                </div>
                {showSlot === 2 &&
                    <div>
                        <div className="flex justify-between my-3  px-4">
                            <H3 className="text-primary !text-3xl">Current Batch Slot</H3>
                            <button className='max-w-max text-primary underline'>+ Add New Slots</button>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                        <div className="flex justify-between my-2 border-b-2 py-2 px-4">
                            <P>Monday (1:00 PM - 2:30 PM)</P>
                            <div>
                                <P>on</P>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}
