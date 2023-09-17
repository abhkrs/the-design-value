'use client';
import React from "react";
import { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger'

export default function SectionDark({ className, children }) {
  const [active, setActive] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setActive(true)}>{/* onExit={()=>setActive(false)} */}
      <section className={`bg-center bg-cover bg-no-repeat ${active ? 'animate' : 'opacity-0'}`} style={{ backgroundImage: `url('/images/bglgr.png')` }}>
        <div className={`${className} 2xl:container p-6 md:px-12 lg:px-24 mx-auto`}>{children}</div>
      </section>
    </ScrollTrigger>
  );
}
