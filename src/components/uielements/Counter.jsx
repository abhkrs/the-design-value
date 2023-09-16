import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import H3 from '../typography/H3'
import CountUp from 'react-countup'

export default function Counter(countEnd) {
    const [counterOn,setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <H3 className="!text-6xl">
            {counterOn && <CountUp start={0} end={countEnd.countEnd} duration={2} delay={0} />}
        </H3>
    </ScrollTrigger>
  )
}
