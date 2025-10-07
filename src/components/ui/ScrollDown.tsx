import React from 'react'

const ScrollDown = () => {
    return (
        <button className='flex items-center gap-2 text-gray-700 text-xs font-chakra-petch font-bold uppercase leading-[1.35] tracking-[1.96px] hover:cursor-pointer'>
            SCROLL DOWN
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                <path d="M8.5 21C14.5 21 16 16.49 16 11C16 5.50998 14.5 1 8.5 1C2.49993 1 1 5.50996 1 11C1 16.49 2.49993 21 8.5 21Z" stroke="#454F5C" strokeWidth="2" />
                <rect x="6.5" y="11" width="4" height="6" rx="2" fill="#454F5C" />
            </svg>
        </button>
    )
}

export default ScrollDown
