'use client';
import Alumni from '@/components/APIComponents/Alumni';
import Batches from '@/components/APIComponents/Batches';
import MentorAdmin from '@/components/APIComponents/MentorAdmin';
import CallBackPanel from '@/components/sections/CallBackPanel';
import Section from '@/components/uielements/Section';
import React, { useState } from 'react';

const sections = [
  { id: 'allStudents', label: 'All Students', icon: '/images/servicereq.png', component: Alumni },
  { id: 'callBack', label: 'CallBack Requests', icon: '/images/callreq.png', component: CallBackPanel },
  { id: 'batches', label: 'Batches', icon: '/images/batches.png', component: Batches },
  {id: 'mentor', label: 'Mentor Form', icon: '/images/batches.png', component: MentorAdmin },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('allStudents');

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderComponent = (Component) => {
    return <Component />;
  };

  return (
    <main>
      <Section>
        <div className="bg-white rounded-lg px-8 py-12">
          <div className="flex justify-between">
            <div></div>
            <div className="flex justify-around gap-4">
              {sections.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`rounded-md bg-gray-200 py-2 px-4 inline-flex items-center justify-center max-w-[160px] border-b-4 ${
                    activeSection === id ? 'border-primary' : ''
                  }`}
                >
                  <img src={icon} alt="" className="w-6 h-6 -ms-1 mr-2" />
                  <span className='leading-none'>{label}</span>
                </button>
              ))}
            </div>
          </div>
          {sections.map(({ id, component }) => (
            <React.Fragment key={id}>
              {activeSection === id && renderComponent(component)}
            </React.Fragment>
          ))}
        </div>
      </Section>
    </main>
  );
}
