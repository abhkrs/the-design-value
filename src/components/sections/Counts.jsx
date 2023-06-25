import React from 'react'
import Section from '../typography/Section'
import H2 from '../typography/H2'
import H3 from '../typography/H3'
import P from '../typography/P'

export default function Counts() {
  return (
    <Section bg='bg-black py-16 text-white text-center'>
        <H2 className="font-bold capitalize">Some count that matters</H2>
        <P className="my-5">Our achievement in the journey depicted in numbers</P>
        <div className="grid grid-cols-4 mt-12 capitalize">
            <div className="border-r px-6">
                <H3 className='!text-6xl mb-4'>5</H3>
                <P>Students Enrolled so far</P>
            </div>
            <div className="border-r px-6">
                <H3 className='!text-6xl mb-4'>5</H3>
                <P>Students Enrolled so far</P>
            </div>
            <div className="border-r px-6">
                <H3 className='!text-6xl mb-4'>5</H3>
                <P>Students Enrolled so far</P>
            </div>
            <div className=" px-6">
                <H3 className='!text-6xl mb-4'>5</H3>
                <P>Students Enrolled so far</P>
            </div>
        </div>
    </Section>
  )
}
