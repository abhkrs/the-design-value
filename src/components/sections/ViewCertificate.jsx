import React, { useState } from 'react'
import SectionDark from '../uielements/SectionDark'
import H2 from '../typography/H2'
import P from '../typography/P'
import Image from 'next/image'

export default function ViewCertificate() {
  const [openPopup, setOpenPopup] = useState(false)
  const togglePopup = () => {
    setOpenPopup(!openPopup)
  }
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
        <button
          onClick={togglePopup}
          className="px-8 rounded-full bg-white !text-black py-2 !text-xl"
        >
          👀 View Certificate
        </button>
      </div>

      {openPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 p-4 lg:p-10 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-content h-full w-full shadow-lg">
            <button onClick={togglePopup} className="absolute z-[999] cursor-pointer top-0 right-0">
              <Image src="/images/close.svg" height="25" width="25" alt="close button" />
            </button>
            <Image
              src="/images/certificate.jpg"
              alt="The Design Value Certificate"
              fill={true}
              className="object-contain h-auto w-auto"
            />
          </div>
        </div>
      )}

    </SectionDark>
  )
}