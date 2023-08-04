import React from 'react'
import SectionDark from '../uielements/SectionDark'
import H2 from '../typography/H2'
import P from '../typography/P'
import Link from 'next/link'

export default function ViewCertificate() {
  return (
    <SectionDark className="!-mt-5 md:mt-0">
        <div className="lg:w-2/3 !text-white md:py-6 pb-5">
          <H2 className="!text-[26px] md:!text-4xl !font-normal">
            Earn a certificate in UI/UX design along with Internship
          </H2>
          <P className="my-4 mb-6 !text-base md:!text-lg !text-[#d4d4d4]">
            Add this credential to your LinkedIn profile, resume, or CV Share it
            on social media and in your performance review
          </P>
          <Link
            href="#"
            className="px-8 rounded-full bg-white !text-black py-2 !text-xl"
          >
            👀 View Certificate
          </Link>
        </div>
      </SectionDark>
  )
}
