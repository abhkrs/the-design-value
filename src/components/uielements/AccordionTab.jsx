import Image from 'next/image'
import { useState } from 'react'
import P from '../typography/P'

export default function AccordionTab({heading, children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }
  return (
    <div className='bg-gray-100 p-3 my-3'>
        <div className="grid grid-cols-3 gap-4" onClick={toggleOpen}>
            <div className="col-span-2 ps-4 !text-black font-semibold !text-lg">
                {heading}
            </div>
            <div className='ms-auto max-w-max text-md text-secondary flex cursor-pointer underline'> 
                Course Details <Image alt="" src="/images/downarrow.svg" height="10" width="16" className='ms-2'/>
            </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} p-4`}>
        {children}
        </div>
    </div>
  )
}
