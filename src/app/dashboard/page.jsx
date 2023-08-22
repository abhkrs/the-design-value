'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Component imports
import Alumni from '@/components/APIComponents/Alumni';
import Batches from '@/components/APIComponents/Batches'; 
import MentorAdmin from '@/components/APIComponents/MentorAdmin';
import CallBackPanel from '@/components/sections/CallBackPanel';
import Section from '@/components/uielements/Section';

const sections = [
  { id: 'allStudents', label: 'All Students', icon: '/images/servicereq.png', component: Alumni },
  { id: 'callBack', label: 'CallBack Requests', icon: '/images/callreq.png', component: CallBackPanel },
  { id: 'batches', label: 'Batches', icon: '/images/batches.png', component: Batches },
  { id: 'mentor', label: 'Mentor Form', icon: '/images/batches.png', component: MentorAdmin },
];

export default function Page() {

  // const router = useRouter();
  const [activeSection, setActiveSection] = useState('allStudents');

  // useEffect(() => {
  //   const authData = JSON.parse(localStorage.getItem('authData'));

  //   if (!authData || !authData.isLoggedIn || !authData.isSuperuser) {
  //     router.push('/login');
  //   }

  // }, [router]);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderComponent = (Component) => {
    return <Component />;
  };

  return (
    <main>
      <Section>
      <div className="lg:hidden h-96 flex justify-center items-center">
            This page is not availabe for Mobile or tablets. Please login on Laptop/Desktop. Don&apos;t forget to logout here.
          </div>
        <div className="bg-white rounded-lg px-8 py-12 hidden lg:block">
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