import React from 'react'
import Section from '../uielements/Section'
import H3 from '../typography/H3'
import P from '../typography/P'
import Link from 'next/link'
import Whatyouwilllearn from './Whatyouwilllearn'
import CourseDetails from './CourseDetails'

export default function AboutCourse() {
  return (
    <Section className="my-6 relative bg-white md:bg-accent">
        <div className="lg:w-2/3 grid gap-8 lg:pr-8">
          <div className="bg-white md:px-12 py-10 rounded md:shadow ">
            <H3 className="!text-2xl">About The Course </H3>
            <P className="text-gray-600 mt-4 !text-base">
              This is a complete UI/UX design course where you will be learning the principals of design and the tools of UI design from beginner to masterclass level. After the 5 months duration of this course,eligible students will get a verified certificate authorised by TheDesignValue and paid internship offer from us or other companies from the IT industry.
            </P>
          </div>
          <Whatyouwilllearn />
          <CourseDetails />
        </div>
      </Section>
  )
}
