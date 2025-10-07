import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import Button from "@/components/ui/Button";
import ScrollDown from "@/components/ui/ScrollDown";
import { PARTNERS } from "@/data/data";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section className="pt-11 md:pt-[115px]">
                <div className="container pb-[58px]">
                    <h1 className="mb-[18px]">Digital product development <br /> company fuelled by gaming DNA</h1>
                    <div className="h-[416px] mb-[31px] w-full bg-foreground rounded-[20px] relative">
                        <span className="absolute top-0 right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <path d="M33 33V0H0C2.6416 0.0273438 5.16699 1.09766 7.02344 2.98242L30.124 26.4316C31.8613 28.1953 32.8789 30.5371 33 33Z" fill="black" />
                            </svg>
                        </span>
                    </div>
                    <p className="text-trim text-gray-500 mb-8 max-w-[1103px] font-chakra-petch text-lg md:text-[22px] font-italic font-bold uppercase leading-[1.29]">
                        We build next-generation DIGITAL PRODUCTS with bold design and modern technology shaped by deep domain expertise and crafted for the PEOPLE of tomorow
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-8 justify-between">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[26px]">
                            <Button variant="filled">
                                WORK WITH US
                            </Button>
                            <Button variant="outline">
                                WHAT WE DO
                            </Button>
                        </div>
                        <ScrollDown />
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="h-[1px] bg-gray-900/50"></div>
            </div>   
            <div className="container pt-14 pb-[113px]">
                <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-between gap-x-6 md:gap-y-[68px] gap-y-8">
                    {PARTNERS.map((partner, index) => {
                        const classname = classNames("flex items-center justify-center w-[184px] h-[60px]", index === 0 || index === 6 ? "xl:justify-start" : "justify-center", index === 5 || index === 11 ? "xl:justify-end" : "justify-center");
                        if (partner.href) {
                            return (
                                <Link key={partner.name} href={partner.href} className={classname}>
                                    <Image src={partner.picture.src} alt={partner.name} width={partner.picture.width} height={partner.picture.height} />
                                </Link>
                            )
                        }
                        return (
                            <div key={partner.name} className={classname}>
                                <Image src={partner.picture.src} alt={partner.name} width={partner.picture.width} height={partner.picture.height} />
                            </div>
                        )
                    })}
                </div>
            </div>


            <Card
                className="mb-12 md:mb-[104px] md:mt-[46px]"

                image={{
                    src: "/assets/images/card-1.png",
                    alt: "Card 1",
                    width: 870,
                    height: 490
                }}
                title="Sparkadia | Web3-powered Gaming & Community Platform"
                imageContent={<>
                    <div className="absolute items-end flex justify-between bottom-0 left-3 sm:left-[34px] right-0">
                        <div className="">
                            <Link href="/" className="flex text-foreground font-chakra-petch max-w-fit font-bold text-base sm:text-lg leading-normal tracking-[2.52px] items-center gap-2 mb-4 md:mb-11">
                                DISCOVER OUR SOFTWARE DEV PHILOSOPHY
                                <svg className="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M3 12.2354L13.5 1.73535M13.5 1.73535L3 1.73535M13.5 1.73535V12.265" stroke="#99FF00" strokeWidth="3" strokeLinecap="square" />
                                </svg>
                            </Link>
                            <p className="pb-5 text-white-absolute text-trim text-lg sm:text-[22px] font-normal leading-[1.35] tracking-[-0.22px]">Read full case study</p>
                        </div>
                        <Link href="/" className="min-w-[90px] h-[55px] flex items-center justify-center bg-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M3 29L30 2M30 2L13 2M30 2V19.0197" stroke="black" strokeWidth="4" strokeLinecap="square" />
                            </svg>
                        </Link>
                    </div>
                </>}
            >

                <CardContent

                    logoClassName="mb-[37px]"
                    backgroundImage="bg-[url('/assets/images/card-left.png')]"
                    logo={{
                        src: "/assets/images/optigames.svg",
                        alt: "Optigames",
                        width: 161,
                        height: 31
                    }}
                    description="“We were OPTImistic that Ragebite would be an actual partner, not just a vendor after our first meeting with them and we were 100% right. They feel like they are part of our team and are not only great partners, but also great friends. Highly recommend working with their team!”"
                    user={{
                        picture: {
                            src: "/assets/images/image-95.png",
                            alt: "User 1",
                            width: 73,
                            height: 73
                        },
                        name: "Chandler Thomlison",
                        role: "Co-founder & CEO - Ambitious Games Inc. "
                    }}
                />
            </Card>
            <div className="container">
                <div className="h-[1px] bg-gray-900/50"></div>
            </div>       
            <Card
                className="mb-[63px] mt-[46px]"
                bottomContent={
                    <div className="flex mt-[67px] w-full justify-end">
                        <div className="flex flex-col">
                            <div className="font-chakra-petch flex items-center gap-2.5 font-italic font-bold text-base md:text-lg leading-normal tracking-[2.52px] text-[#B4C8D2]">
                                <svg className="min-w-[65px] min-h-[43px]" xmlns="http://www.w3.org/2000/svg" width="65" height="43" viewBox="0 0 65 43" fill="none">
                                    <path d="M53.123 1.62768C53.3019 0.683482 54.1271 0 55.0881 0H62.0169C63.2707 0 64.2154 1.14041 63.982 2.37232L56.8945 41.3723C56.7156 42.3165 55.8904 43 54.9295 43H48.0006C46.7468 43 45.8022 41.8596 46.0356 40.6277L53.123 1.62768Z" fill="#B4C8D2" />
                                    <path d="M30.1231 1.62768C30.302 0.683482 31.1271 0 32.0881 0H39.017C40.2708 0 41.2154 1.14041 40.982 2.37232L33.8945 41.3723C33.7156 42.3165 32.8904 43 31.9295 43H25.0006C23.7468 43 22.8022 41.8596 23.0356 40.6277L30.1231 1.62768Z" fill="#39404A" />
                                    <path d="M7.12308 1.62768C7.30198 0.683482 8.12711 0 9.08811 0H16.0169C17.2708 0 18.2154 1.14041 17.982 2.37232L10.8945 41.3723C10.7156 42.3165 9.89045 43 8.92945 43H2.00062C0.746792 43 -0.197833 41.8596 0.035581 40.6277L7.12308 1.62768Z" fill="#1D2025" />
                                </svg>
                                <span className="max-w-[473px]">Dive into more stories to see how we turn ideas into powerful digital products.</span>
                            </div>
                            <Link href="/" className="flex ml-[75px] mt-4 items-center gap-2 text-foreground font-chakra-petch font-bold text-xs leading-normal tracking-[1.68px]">
                                SEE ALL STUDIES
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 8L9 1M9 1L2 1M9 1V8.01974" stroke="#99FF00" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                }
                reverse={true}
                image={{
                    src: "/assets/images/card-2.png",
                    alt: "Card 2",
                    width: 870,
                    height: 490
                }}
                title="SaaS Platform Built for Agencies, Brands & Influencers"
            >
                <CardContent
                    logoClassName="mb-[14px]"
                    backgroundImage="bg-[url('/assets/images/card-right.png')]"
                    logo={{
                        src: "/assets/images/creator.png",
                        alt: "Creator",
                        width: 190,
                        height: 40
                    }}
                    description="Ragebite successfully developed the app and fixed bugs quickly. Their resources were competent and responsive, managing the project well. The team was highly communicative and asked many questions to clarify requirements. Their members produced and delivered exceptionally readable and clean code."
                    user={{
                        picture: {
                            src: "/assets/images/user-2.png",
                            alt: "User 2",
                            width: 73,
                            height: 73
                        },
                        name: "Lorenzo Andre",
                        role: "Co-founder & CEO - Kaizen Inc"
                    }}
                />
            </Card>



            <div className="bg-[#101111] py-[70px]">
                <div className="w-full h-[115px]">
                    <Image className="w-full h-full object-cover" src="/assets/images/pattern.png" alt="Pattern Background" width={1920} height={115} />
                </div>
            </div>
        </main>
    );
}
