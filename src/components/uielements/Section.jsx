'use client';
import React from "react";
import { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger'

export default function Section({ bg, className, children }) {
  const [active, setActive] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setActive(true)} >{/* onExit={()=>setActive(false)} */}
      <section className={`${bg} ${active ? 'animate' : 'opacity-0'}`}>
        <div className={`${className} 2xl:container p-6 md:px-12 lg:px-28 mx-auto`}>{children}</div>
      </section>
    </ScrollTrigger>
  );
}