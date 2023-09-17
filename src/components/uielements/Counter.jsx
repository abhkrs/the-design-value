import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import H2 from '../typography/H2'

export default function Counter(countEnd) {
    const [counterOn,setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <H2 className="!text-6xl">
            {counterOn && <CountUp start={0} end={countEnd.countEnd} duration={2} delay={0} />}
        </H2>
    </ScrollTrigger>
  )
}
