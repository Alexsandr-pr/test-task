import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header";

const chakraPetch = Chakra_Petch({
    variable: "--font-chakra-petch",
    subsets: ["latin"],
    weight: ["600", "700"],
    style: ["normal", "italic"],
});

const normalidad = localFont({
    variable: "--font-normalidad",
    src: [
        {
            path: "../../public/fonts/NormalidadCompact-Black.woff2",
            weight: '900',
            style: 'normal',
        },
        {
            path: "../../public/fonts/NormalidadCompact-Medium.woff2",
            weight: '500',
            style: 'normal',
        },
        {
            path: "../../public/fonts/NormalidadCompact-Regular.woff2",
            weight: '400',
            style: 'normal',
        }
    ],
})

export const metadata: Metadata = {
    title: "RAGEBITE",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${chakraPetch.variable} ${normalidad.variable} antialiased w-screen overflow-x-hidden`}
            >
                <Header/>
                {children}
            </body>
        </html>
    );
}
