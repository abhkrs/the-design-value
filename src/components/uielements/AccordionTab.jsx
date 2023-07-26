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
        <div className="flex gap-4 justify-between items-center" onClick={toggleOpen}>
            <div className="md:ps-4 ps-2 !text-black font-semibold !text-lg">
                {heading}
            </div>
            <div className='ms-auto min-w-max text-md text-secondary flex cursor-pointer underline'> 
                <span className="hidden md:inline-block">Course Details</span> <Image alt="" src="/images/downarrow.svg" height="10" width="16" className={`!w-4 ms-2 ${isOpen && 'rotate-180'}`}/>
            </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} p-4 !text-[#828282] !text-base !leading-7`}>
        {children}
        </div>
    </div>
  )
}
