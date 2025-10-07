import { IImage, UserProps } from '@/types/types';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'
import User from './ui/User';

type CardContentProps = {
    backgroundImage?: string;
    logo: IImage;
    description: string;
    user: UserProps;
    logoClassName?: string;
}

const CardContent: React.FC<CardContentProps> = ({
    backgroundImage,
    logo,
    description,
    user,
    logoClassName
}) => {
    return (
        <div className={classNames("px-[35px] flex flex-col justify-between w-full h-full py-12 bg-cover bg-center bg-no-repeat", backgroundImage)}>
            <Image className={classNames('', logoClassName)} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
            <p className="text-xl h-full font-chakra-petch font-bold font-italic mb-4 leading-[1.6] text-white tracking-[-0.4px]">{description}</p>
            <User
                picture={user.picture}
                name={user.name}
                role={user.role}
            />
        </div>
    )
}

export default CardContent
