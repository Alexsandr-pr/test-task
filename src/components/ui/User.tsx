import React from 'react'
import { UserProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link';

const User: React.FC<UserProps> = ({
    picture,
    name,
    role
}) => {

    const { src, alt, width, height } = picture;

    return (
        <div className='flex items-center gap-4'>
            <div className="w-[73px] h-[73px] rounded-full">
                <Image className='w-full h-full rounded-full' src={src} alt={alt} width={width} height={height} />
            </div>
            <div className="text-trim font-medium font-normalidad">
                <Link href="/" className='text-white text-[19.801px] tracking-[-1.386px] leading-[1.45]'>{name}</Link>
                <p className='tracking-[-1.12px] text-base text-gray-300 leading-normal'>{role}</p>
            </div>
        </div>
    )
}

export default User
