import React from 'react'
import H3 from '../typography/H3'
import P from '../typography/P'

export default function Dummy() {
  return (
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
  </div>
  )
}
