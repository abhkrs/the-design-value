import Link from 'next/link'
import React from 'react'

export default function ReadMore( { text, url, className}) {
  return (
    <Link className={`py-3 px-6 max-w-max border-2 border-[#ff8020] text-white bg-primary rounded-lg md:text-lg lg:text-xl shadow-lg ${className}`} href={url || '/#'}>
        {text || 'Read More'}
    </Link>
  )
}
