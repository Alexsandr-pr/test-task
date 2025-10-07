import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'filled' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    href,
    variant = 'filled'
}) => {

    const variants = {
        filled: 'text-black bg-[url("/assets/images/filled-button-bg.png")]',
        outline: 'text-white bg-[url("/assets/images/outline-button-bg.png")]'
    }   

    const classes = classNames("h-[46px] hover:cursor-pointer duration-300 transition-all bg-cover bg-center bg-no-repeat w-[202px] text-trim text-xs font-chakra-petch font-bold uppercase leading-normal tracking-[1.68px]", variants[variant]);
    
    if(href) {
        return (
            <Link href={href} className={classes}>  
                {children}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    )
}

export default Button
