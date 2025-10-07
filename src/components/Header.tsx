"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from './ui/NavLink'
import { useState } from 'react'
import classNames from 'classnames';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            href: "/our-work",
            label: "OUR WORK"
        },
        {
            href: "/solutions",
            label: "Solutions"
        },
        {
            href: "/company",
            label: "Company"
        }
    ]

    return (
      <>
            <header className='w-full lg:pl-[50px] sm:pl-5 flex justify-between items-center'>
                <Link href="/" prefetch={false} className="pl-5 max-sm:py-3 items-center sm:mt-3 lg:mt-6 sm:min-w-[200px] mr-8 flex flex-col sm:h-[76px] sm:border-l-[7px] sm:border-l-foreground">
                    <Image
                        className='sm:-ml-1 sm:mb-[13px] h-[18px] w-[160px] sm:w-[200px]'
                        height={18}
                        width={200}
                        alt='RAGEBITE Logo'
                        src="/assets/icons/logo_white.svg"
                    />
                    <span className='text-gray-700 max-w-[183px] -ml-2 hidden sm:block text-xs font-bold leading-[1.35] font-chakra-petch tracking-[1.68px]'> {"//   WE BUILD NEXT-GEN DIGITAL PRODUCTS EST 2017"}</span>
                </Link>
                <div className="flex items-center gap-x-5 gap-y-2 sm:gap-[37px]">
                    <nav className='flex items-center justify-end gap-[43px]'>
                        <ul className='hidden lg:flex items-center justify-end gap-x-16 gap-y-2 flex-wrap'>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <NavLink href={link.href}>{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setIsOpen(!isOpen)} className='w-[27px] h-[13px] hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="13" viewBox="0 0 27 13" fill="none">
                                <rect width="27" height="3" fill="#E4FAFB" />
                                <path d="M7 10H27V13H7V10Z" fill="#E4FAFB" />
                            </svg>
                        </button>
                    </nav>
                    <Link href="/" className='gap-[9px] pl-3 pr-5 sm:min-w-[150px] bg-bottom-left lg:min-w-[203px] text-foreground sm:relative sm:z-10 sm:bg-[url("/assets/images/header-bg-button.svg")] text-center text-sm tracking-[1.96px] font-chakra-petch h-[50px] sm:h-[90px] lg:h-[100px] sm:w-[203px] flex items-center justify-center sm:text-black'>
                        LET’S WORK
                        <svg className='sm:block hidden' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 7.98032L9 1M9 1L2 1M9 1V8" stroke="black" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </Link>
                </div>
                <div className={classNames("fixed top-0 w-full md:w-[700px] transition-all duration-300 h-full bg-black-absolute md:border-l-[7px] md:border-l-foreground", isOpen ? "right-0" : "right-[-100%]")}>
                    <div className="flex justify-start md:ml-30 ml-10 h-[50px] sm:h-[100px] items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className='w-[27px] h-[13px] hover:cursor-pointer'>
                            Close
                        </button>
                    </div>
                    <ul className="flex flex-col gap-5 pl-10 md:pl-30 pt-10 max-h-[calc(100dvh-180px)] overflow-y-auto">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href}>{link.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            <span className='text-gray-700 py-2 px-5 sm:hidden block text-xs font-bold leading-[1.35] font-chakra-petch tracking-[1.68px]'>
            {"//   WE BUILD NEXT-GEN DIGITAL PRODUCTS EST 2017"}
            </span>
         </>
    )
}

export default Header
