'use client';
import Alumni from '@/components/sections/Alumni';
import Batches from '@/components/sections/Batches';
import CallBackPanel from '@/components/sections/CallBackPanel';
import Section from '@/components/uielements/Section'
import React, { useState } from 'react'

export default function Page() {
  const [callBack, setCallBack] = useState(false);
  const [allStudents,setAllStudents ] = useState(true);
  const [batches,setBatches ] = useState(false);
  return (
    <main>
        <Section>
          <div className="bg-white rounded-lg px-8 py-12">
            <div className="flex justify-between">
              <div>
                <input type="search" name="searchbox" id="" className='border rounded-md shadow px-3 py-2' />
              </div>
              <div className="flex justify-around gap-4">
              <button
                onClick={()=> {setAllStudents(true); setCallBack(false); setBatches(false);}}
                className={`rounded-md bg-gray-200 py-2 px-4 inline-flex items-center justify-center border-b-4 ${allStudents && ' border-primary'}`}>
                  <img src="/images/servicereq.png" alt="" className='w-6 h-6 -ms-1 mr-2' /><span>All Students</span>
                </button>
                <button
                onClick={()=> {setCallBack(true); setAllStudents(false); setBatches(false);}}
                className={`rounded-md bg-gray-200 py-2 px-4 inline-flex items-center justify-center border-b-4 ${callBack && ' border-primary'}`}>
                  <img src="/images/callreq.png" alt="" className='w-6 h-6 -ms-1 mr-2' /><span className='leading-none'>CallBack <br />Requests</span>
                </button>
                <button
                onClick={()=> {setBatches(true); setAllStudents(false); setCallBack(false);}}
                className={`rounded-md bg-gray-200 py-2 px-4 inline-flex items-center justify-center border-b-4 ${batches && ' border-primary'}`}>
                  <img src="/images/callreq.png" alt="" className='w-6 h-6 -ms-1 mr-2' /><span className='leading-none'>Batches</span>
                </button>
              </div>
            </div>
            {callBack && <CallBackPanel />}
            {allStudents && <Alumni />}
            {batches && <Batches />}
          </div>
           
        </Section>
    </main>
  )
}
