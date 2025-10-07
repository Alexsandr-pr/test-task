"use client"
import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
    href,
    children
}) => {
    return (
        <Link href={href} className='text-gray-300 hover:cursor-pointer hover:text-foreground duration-300 text-base font-medium font-chakra-petch uppercase text-right leading-0'>
            {children}
        </Link>
    )
}

export default NavLink
