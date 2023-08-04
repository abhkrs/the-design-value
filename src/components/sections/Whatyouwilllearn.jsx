import Image from 'next/image'
import React from 'react'
import P from '../typography/P'
import H3 from '../typography/H3'

export default function Whatyouwilllearn() {
  return (
    <div className="bg-white md:px-12 md:py-10 rounded md:shadow">
            <H3 className="!text-2xl">What you&apos;ll learn</H3>
            <div className="grid md:grid-cols-2 md:gap-6 mt-4 text-gray-600">
              <div>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>User Persona
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Information
                  Architecture
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Wireframe
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Low-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>High-Fidelity
                  Screens
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Empathy
                  Mapping
                </P>
              </div>
              <div>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>User Journey
                  Mapping
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>User Flow
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>UI Brand Kit
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Responsive
                  Design
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Prototyping
                </P>
                <P>
                  <span className="mr-2 font-bold"><Image src="/images/tick.png" height="15" width="15" className="inline" alt="tick mark" /> </span>Usability
                  Testing
                </P>
              </div>
            </div>
          </div>
  )
}
