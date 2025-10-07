import { ImageProps } from "next/image";

export type IImage = ImageProps;

export type UserProps = {
    picture: IImage;
    name: string;
    role: string;
}

export interface IPartner {
    name: string;
    picture: IImage;
    href?: string;
}