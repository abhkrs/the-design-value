import React, { useState } from 'react'
import P from '../typography/P';
import H3 from '../typography/H3';

export default function Alumni() {

    const studentData = [
        {
            id: 'TDVM73001FE',
            name: 'Abhiroop Banerjee',
            email: 'mailid@domain.com',
            mobile: '+91 91919 91919',
            course: 'UI/UX with Internship',
            feePaid: true,
            whatsapp: true,
            certificate: null,
        },
        {
            id: 'TDVM73001FE',
            name: 'Abhiroop Banerjee',
            email: 'mailid@domain.com',
            mobile: '+91 91919 91919',
            course: 'UI/UX with Internship',
            feePaid: false,
            whatsapp: false,
            cetrificate: '/path/to-certiciate/image',
        },

        {
            id: 'TDVM73001FE',
            name: 'Abhiroop Banerjee',
            email: 'mailid@domain.com',
            mobile: '+91 91919 91919',
            course: 'UI/UX with Internship',
            feePaid: true,
            whatsapp: false,
            certificate: null,
        },
    ];


    const [allStudents, setAllStudents] = useState(true)
    const [alumni, setAlumni] = useState(false)
    return (
        <main>
            <div className="flex gap-6 my-6">
                <button
                    onClick={() => { setAllStudents(true); setAlumni(false); }}
                    className={`rounded-full py-2 px-10 inline-flex items-center justify-center ${allStudents ? ' bg-primary text-white' : ' bg-gray-200'}`}>
                    All
                </button>
                <button
                    onClick={() => { setAllStudents(false); setAlumni(true); }}
                    className={`rounded-full py-2 px-4 inline-flex items-center justify-center ${alumni ? ' bg-primary text-white' : ' bg-gray-200'}`}>
                    Completed
                </button>
            </div>
            {allStudents && (
                <div>
                    {studentData.map((student) => (
                        <div
                            className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3"
                            key={student.id}
                        >
                            <div>
                                <h3 className="!text-3xl">{student.name}</h3>
                                <h3 className="text-secondary my-2">Student ID - {student.id}</h3>
                                {student.feePaid ? (
                                    <p className="max-w-max">✅ Student Added to WhatsApp Group</p>
                                ) : (
                                    <p className="max-w-max">❌ Student not Added to WhatsApp Group</p>
                                )}
                            </div>
                            <div className="px-8 flex flex-col justify-center gap-2">
                                <p>
                                    <span className="!font-semibold">NAME - </span>
                                    {student.name}
                                </p>
                                <p>
                                    <span className="!font-semibold">EMAIL ID - </span>
                                    {student.email}
                                </p>
                                <p>
                                    <span className="!font-semibold">MOBILE NUMBER - </span>
                                    {student.mobile}
                                </p>
                                <p>
                                    <span className="!font-semibold">COURSE - </span>
                                    {student.course}
                                </p>
                            </div>
                            <div className="px-6 flex flex-col justify-center items-end">
                                {student.feePaid ? (
                                    <p className="max-w-max">✅ Fee Paid for this Month</p>
                                ) : (
                                    <p className="max-w-max">❌ Fee Not Paid for this Month</p>
                                )}
                                <button className="rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white">
                                    🏆 Add Certificate
                                </button>
                                <button className="rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white">
                                    🚫 Delete Student
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {alumni &&
                <div>
                    <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
                        <div>
                            <H3 className="!text-3xl">Abhiroop Bannerjee</H3>
                            <H3 className="text-secondary my-2">Student ID - TDVM73001FE</H3>
                            <P>✅ Student added to WhatsApp Group</P>
                        </div>
                        <div className='px-8 flex flex-col justify-center gap-2'>
                            <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                            <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                            <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                            <P><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                        </div>
                        <div className='px-6 flex flex-col justify-center items-end'>
                            <P className="max-w-max">✅ Fee Paid for this Month</P>
                            <button
                                className='rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                                🏆 Add Certificate
                            </button>
                            <button
                                className='rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white'>
                                🚫 Delete Student
                            </button>
                        </div>
                    </div>

                    <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
                        <div>
                            <H3 className="!text-3xl">Abhiroop Bannerjee</H3>
                            <H3 className="text-secondary my-2">Student ID - TDVM73001FE</H3>
                            <P>✅ Student added to WhatsApp Group</P>
                        </div>
                        <div className='px-8 flex flex-col justify-center gap-2'>
                            <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                            <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                            <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                            <P><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                        </div>
                        <div className='px-6 flex flex-col justify-center items-end'>
                            <P className="max-w-max">✅ Fee Paid for this Month</P>
                            <button
                                className='rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                                🏆 Add Certificate
                            </button>
                            <button
                                className='rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white'>
                                🚫 Delete Student
                            </button>
                        </div>
                    </div>

                    <div className="bg-light grid grid-cols-3 rounded-xl px-8 py-6 my-3">
                        <div>
                            <H3 className="!text-3xl">Abhiroop Bannerjee</H3>
                            <H3 className="text-secondary my-2">Student ID - TDVM73001FE</H3>
                            <P>✅ Student added to WhatsApp Group</P>
                        </div>
                        <div className='px-8 flex flex-col justify-center gap-2'>
                            <P><span className='!font-semibold'>NAME - </span>Abhiroop Banerjee</P>
                            <P><span className='!font-semibold'>EMAIL ID - </span>mailid@domain.com</P>
                            <P><span className='!font-semibold'>MOBILE NUMBER - </span>+91 91919 91919</P>
                            <P><span className='!font-semibold'>COURSE - </span>UI/UX with Internship</P>
                        </div>
                        <div className='px-6 flex flex-col justify-center items-end'>
                            <P className="max-w-max">✅ Fee Paid for this Month</P>
                            <button
                                className='rounded-full max-w-max my-2 py-2 px-10 inline-flex items-center justify-center bg-black text-white'>
                                🏆 Add Certificate
                            </button>
                            <button
                                className='rounded-full max-w-max border py-2 px-10 inline-flex items-center justify-center bg-white'>
                                🚫 Delete Student
                            </button>
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}
