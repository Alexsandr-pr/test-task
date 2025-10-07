import { IImage } from '@/types/types';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'

type CardProps = {
    title: string;
    image: IImage;
    reverse?: boolean;
    children: React.ReactNode;
    imageContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    className?: string;
}


const Card: React.FC<CardProps> = ({
    title,
    image,
    reverse = false,
    children,
    imageContent,
    bottomContent,
    className
}) => {

    const { src, alt, width, height } = image;

    return (
        <section className={classNames("", className)}>
            <div className="container">
                <h2 className="mb-[37px]">{title}</h2>
                <div className={classNames("flex gap-5 xl:max-h-[490px]", reverse ? "flex-col xl:flex-row-reverse" : "flex-col xl:flex-row")}>
                    <div className="basis-[63%] relative">
                        <Image className='w-full h-full object-cover' src={src} alt={alt} width={width} height={height} />
                        {imageContent}
                    </div>
                    <div className="basis-[37%]">
                        {children}
                    </div>
                </div>
                {bottomContent}
            </div>
        </section>
    )
}

export default Card
