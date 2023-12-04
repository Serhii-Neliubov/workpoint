'use client';
import React from 'react';
import Image from 'next/image';

import '@/styles/checkbox_styles.scss';
import ContactUsForm from '@/components/ContactUsForm';
import LearnMoreBlock from '@/components/LearnMoreBlock';
import Link from 'next/link';
import "@/styles/adaptive.scss";

export default function HomePage() {

    return (
        <div>
            {/* HERO PAGE */}
            <div className={`mx-auto overflow-hidden relative max-w-[1440px] object-cover`}>
                <Image
                    alt="image"
                    src="/hero-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover overflow-hidden`}
                    style={{objectPosition: 'right'}}
                    width={1920}
                    height={704}
                />
                <Image
                    alt="image"
                    src="/bg-blue-particle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-[100%] w-auto `}
                    width={1920}
                    height={704}
                />

                <div className="pt-[146px] pb-[146px] relative mx-auto max-w-[1280px] px-[40px] max-[650px]:px-[16px]">
                    <div className="z-10 flex flex-col justify-start items-start">
                        <div className={'bg-white flex gap-[8px] rounded items-center py-[4px] px-[12px]'}>
                            <Image
                                alt="image"
                                src="/Handshake.png"
                                className=""
                                width={24}
                                height={24}
                            />
                            <span className="">
              Complexity resolution through partnership
            </span>
                        </div>

                        <div className="mt-[16px] mb-[24px]">
                            <h1 className=" text-white text-[48px] max-[890px]:text-[38px] leading-[130%] font-semibold">
                                You are the one who has <br/> the vision.We can take care{' '}
                                <br/>
                                of everything to get you there!
                            </h1>
                        </div>
                        <p className="max-w-[582px] text-[24px] text-white max-[890px]:text-[22px] leading-[150%]">
                            We provide services with varying lengths of time, based on the
                            needs of each firm.
                        </p>
                        <Link href={'/contact'}>
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] pt-[14px] pr-[24px] pb-[14px] pl-[24px] rounded bg-[#FFCA1D] text-[18px] font-bold mt-[32px]">
                                Get in touch
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            {/* SERVICES PAGE */}
            <div
                className={`max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-[100%] items-center pt-[80px] pb-[80px] mx-auto flex items-start gap-[40px] max-[910px]:flex-col`}>
                <div className="flex flex-col w-[50%] max-[910px]:w-full items-start">
                    <div className="relative">
                        <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] max-[890px]:max-w-[497px] text-[32px] mb-[52px]">
                            Services that will help you take your vision a step further
                        </h2>
                    </div>

                    <p className="text-[18px] max-w-[360px] max-[910px]:max-w-[497px] text-[#585858]">
                        Navigate the possibilities with our range of services.
                    </p>

                    <Link href={'/services'}>
                        <button
                            className="hover:bg-[#EEB700] transition-all duration-[.3s] mt-[20px] rounded w-[95px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
                            Services
                        </button>
                    </Link>

                </div>
                <div
                    className="grid grid-cols-2 gap-[24px] w-[50%] max-[910px]:w-full max-[560px]:grid-cols-1 max-[560px]:gap-[16px]">
                    <LearnMoreBlock
                        image="/shape-yellow.svg"
                        link="/services/human-resources"
                        title="Human Resources"
                    />
                    <LearnMoreBlock
                        image="/shape-red.svg"
                        link="/services/executive-recruitment"
                        title="Executive recruitment"
                    />
                    <LearnMoreBlock
                        image="/shape-green.svg"
                        link="/services/management-consulting"
                        title="Management Consulting"
                    />
                    <LearnMoreBlock
                        image="/shape-purple.svg"
                        link="/services/training"
                        title="Training"
                    />
                </div>
            </div>
            {/* FIND OUT PAGE */}
            <div className={'bg-[#F8F8F8]'}>
                <div className="pt-[80px] pb-[80px]  w-[100%] max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto ">
                    <div className="flex gap-[40px] max-[820px]:flex-col-reverse items-center justify-center">

                            <div className={'desktop justify-center items-center flex-[0_1_50%]'}>
                                <Image src={'/mainpagecirclephoto.svg'} alt={'mainpagecirclephoto.svg'} height={500}
                                       width={500}/>

                            </div>


                        <div
                            className="flex flex-col flex-[0_1_50%] items-start max-[820px]:justify-start max-[820px]:w-full">
                            <div className="relative">
                                <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[375px] text-[32px] mb-[52px]">
                                    Find out who we are and why you should work with us
                                </h2>
                            </div>

                                <div className={'mobile justify-center items-center mb-[32px] w-full'}>
                                    <Image src={'/mainpagecircle.png'} alt={'mainpagecircle.png'} height={500}
                                           width={500}/>

                                </div>

                            <p className="text-[18px] max-w-[360px] max-[820px]:w-full max-[820px]:max-w-full text-[#585858]">
                                We provide services with varying lengths of time, based on the
                                needs of each firm.
                            </p>
                            <Link href={'/about-us'} className={"max-[820px]:w-full"}>
                                <button
                                    className="max-[820px]:w-full hover:bg-[#EEB700] transition-all duration-[.3s] mt-[20px] rounded w-[95px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
                                    Discover
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* WE CAN BUILD STRONG RELATIONSHIP PAGE */}
            <div
                className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] items-center pt-[80px] pb-[80px] mx-auto flex gap-[20px] max-[730px]:flex-col">
                <div
                    className="flex flex-col flex-[0_1_50%] max-[820px]:flex-1 items-start max-[730px]:justify-start max-[730px]:w-full">
                    <div className="relative">
                        <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[350px] text-[32px] mb-[52px]">
                            {`We've built strong relationships in over 11 years of work`}
                        </h2>
                    </div>
                        <div
                            className={'mobile justify-center items-center flex-[0_1_50%] mb-[32px] w-full'}>
                            <Image src={'/circlesmainpage.svg'} alt={'circlesmainpage.svg'} height={357} width={357}/>
                        </div>

                    <p className="text-[18px] max-w-[420px] max-[820px]:w-full max-[820px]:max-w-full text-[#585858]">
                        Over the last 11 years, Workpoint has aided a large number of
                        businesses – from small businesses to large corporations – in
                        becoming long-term profitable.
                    </p>
                    <Link href={'/about-us'} className={'max-[820px]:w-full'}>
                        <button
                            className=" max-[820px]:w-full hover:bg-[#EEB700] transition-all duration-[.3s] mt-[20px] rounded w-[116px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
                            Learn more
                        </button>
                    </Link>

                </div>
                    <div className={'desktop justify-center items-center flex-[0_1_50%]'}>
                        <Image src={'/circlesmainpage.svg'} alt={'circlesmainpage.svg'} height={357} width={357}/>
                    </div>

            </div>
            {/* CONTACT US PAGE */}
            <div className={`mx-auto overflow-hidden object-cover relative max-w-[1440px] py-[55px]`}>
                <Image
                    alt="image"
                    src="/contact-us-bg.jpg"
                    className={`absolute top-0 left-0 z-0 min-h-[852px] max-[1134px]:min-h-[1330px] max-[570px]:min-h-full object-cover min-w-[100vw]`}
                    width={1920}
                    height={1330}
                />
                <Image
                    alt="image"
                    src="/contact-us-rectangle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-[100%] w-auto `}
                    width={1920}
                    height={1330}
                />
                <div
                    className="relative mx-auto flex gap-[20px] items-center z-10 max-w-[1280px] px-[40px] max-[650px]:px-[16px] max-[1134px]:flex-col max-[1134px]:items-start  ">
                    <div className="relative">
                        <div className="mt-[16px] mb-[52px] relative">
                            <h1 className="after:content[''] after:absolute after:bottom-[-16px] after:rounded-full after:left-0  after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] text-white text-[32px] font-semibold">
                                Contact us
                            </h1>
                        </div>
                        <div className="relative mb-[40px]">
                            <p className="after:content[''] after:absolute after:bottom-[-40px] rounded-full after:left-0 after:w-[620px] after:h-[1px] after:bg-[#fff] max-w-[630px] text-[18px] text-white">
                                Interested in leveraging our exceptional services to advance
                                your career? Reach out to us using the contact information
                                provided on this page, and well respond to you promptly!
                            </p>
                        </div>

                        <div className="flex flex-col gap-[24px] mt-[80px]">
                            <div className=" flex gap-[16px] items-center">
                                <Image width={24} height={24} alt="Phone icon" src="call.svg"/>
                                <span className="text-white text-[18px] font-semibold">
                  +40 769 682 560
                </span>
                            </div>
                            <div className=" flex gap-[16px] items-center">
                                <Image width={24} height={24} alt="Phone icon" src="mail.svg"/>
                                <span className="text-white text-[18px] font-semibold">
                  office@people-based.com
                </span>
                            </div>
                            <div className=" flex gap-[16px] items-start">
                                <Image
                                    width={24}
                                    height={24}
                                    alt="Phone icon"
                                    src="location.svg"
                                />
                                <span className="text-white text-[18px] font-semibold">
                  Bulevardul Barbu Vacarescu 241A, <br/> BVO Tower, Etaj 2,
                  Bucharest
                </span>
                            </div>
                        </div>
                    </div>
                    <ContactUsForm/>
                </div>
            </div>
            {/* JOIN US PAGE */}
            <div
                className={`pt-[80px] overflow-hidden pb-[80px] max-w-[1440px] bg-black relative mx-auto`}>
                <Image
                    alt="arrow"
                    className={`absolute top-0 left-0 z-1 object-cover h-[100%] w-auto min-w-full`}
                    src="career.svg"
                    width={1920 }
                    height={1000}
                />
                <div className=" flex flex-col items-center relative z-20">
                    <h3 className="text-center mb-[16px] text-[56px] text-white font-bold max-[527px]:text-[48px]">
                        Join our team
                    </h3>
                    <p className="text-center text-white max-w-[425px] max-[527px]:text-[18px]">
                        Explore exciting opportunities to be part of a dynamic and
                        innovative team.
                    </p>
                    <Link href={'/careers/join-our-team'}>
                        <button
                            className="hover:bg-[#EEB700] transition-all duration-[.3s] mt-[24px] pb-[12px] pt-[12px] pr-[24px] pl-[24px] rounded-[6px] font-semibold text-[18px] bg-[#FFCA1D]">
                            Open Positions
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}
