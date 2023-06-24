import HomeBanner from '@/components/HomeBanner'
import H2 from '@/components/typography/H2'
import P from '@/components/typography/P'
import React from 'react'

export default function page() {
  return (
    <>
    <HomeBanner/>
    <div className="container p-4 text-center">
    <H2>About Us Page</H2>
    <P>About Us page comming soon</P>
    </div>
    <div className='flex flex-col gap-10'>
    <div className="h-80 bg-black"/>
    <div className="h-80 "/>
    <div className="h-80 bg-black"/>
    </div>
    </>
  )
}
