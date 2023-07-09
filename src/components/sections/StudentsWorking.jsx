import React from 'react'
import SectionDark from '../uielements/SectionDark'
import H2 from '../typography/H2'
import P from '../typography/P'
import Image from 'next/image'

export default function StudentsWorking() {
  return (
    <SectionDark>
        <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center py-20">
                <H2 className="text-white capitalize">Current students <span className='lg:block lg:mt-4'>working in...</span></H2>
                <P className="!text-white !text-xl mt-6">Join our vibrant design community and unlock your potential in UI/UX design. Our talented students have secured exciting positions in renowned companies, making their mark in the industry and IT networks with their creativity and expertise.</P>
            </div>
            <div className="relative min-h-[300px]">
              <Image
                src="/images/brands.svg"
                fill={true}
                className="object-contain"
              />
            </div>
        </div>
    </SectionDark>
  )
}
