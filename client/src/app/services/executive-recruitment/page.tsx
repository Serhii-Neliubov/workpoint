'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/adaptive.scss";

const ExecutiveRecriutmentPage = () => {

    return (
        <div className={``}>
            <div className={`mx-auto overflow-hidden relative max-w-[1440px] object-cover`}>
                <Image
                    alt="image"
                    src="/executive-recruitment-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover`}
                    style={{objectPosition: 'right'}}
                    width={1920}
                    height={704}
                />
                <Image
                    alt="image"
                    src="/bg-blue-particle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-auto w-[100%] max-[1000px]:h-full max-[1000px]:min-h-[704px] max-[1000px]:w-auto `}
                    width={1920}
                    height={704}
                />

                <div className="pt-[146px] pb-[146px] relative mx-auto max-w-[1280px] px-[40px] max-[650px]:px-[16px]">
                    <div className="z-10 flex flex-col justify-start items-start">
                        <div className={'bg-white flex gap-[8px] rounded items-center py-[4px] px-[12px]'}>
                            <Image
                                alt="image"
                                src="/Gear.svg"
                                className=""
                                width={24}
                                height={24}
                            />
                            <span className="">
              Services
            </span>
                        </div>

                        <div className="mt-[16px] mb-[24px]">
                            <h1 className=" text-white text-[48px] max-[890px]:text-[38px] leading-[130%] font-semibold">
                                Executive recruitment
                            </h1>
                        </div>
                        <Link href="/careers/join-our-team">
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'flex gap-[16px] max-[820px]:flex-col-reverse w-full max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto my-[80px] items-center'}>
                <div className={'w-1/2 max-[820px]:w-full flex flex-col items-center'}>
                    <Image className={'mb-[40px]'} src={'/executerecuitmentimg1.jpg'} alt={'/executerecuitmentimg1.jpg'}
                           height={453} width={453}/>
                        <Link href="/careers/join-our-team" className={'mobile w-full'}>
                        <button
                            className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-full text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                            Get in touch
                        </button>
                    </Link>
                </div>
                <div className={'h-full w-1/2 max-[820px]:w-full flex flex-col justify-start items-start'}>
                    <p className={' text-[18px] mb-[40px]'}>At <strong>Workpoint</strong>, we believe that numbers gain
                        meaning through context. Our aim is to establish trust as your esteemed business advisor. Our
                        team, comprised of qualified and ambitious professionals, is devoted
                        to your success. We take the time to ensure that you comprehend the figures crucial to your
                        business.</p>
                        <Link href="/careers/join-our-team" className={'desktop'}>
                        <button
                            className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-full text-[15px] py-[14px] px-[24px] font-semibold bg-[#FFCA1D]">
                            Get in touch
                        </button>
                    </Link>
                </div>
            </div>
            <div className={'max-w-[1280px] w-full px-[40px] max-[650px]:px-[16px] mx-auto my-[80px] '}>
                <div className="relative mb-[48px] pb-[12px]">
                    <span
                        className="text-[48px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] ">
                        What We Offer
                    </span>

                </div>
                <div className={'grid grid-cols-3 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1 gap-[24px] mb-[80px]'}>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Archiving of documents related to financial transactions.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Management of expenses, including salaries, invoices, and more.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Budget creation.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Essential oversight of cash receipts and payments.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Documentation of expenditures and adherence to budgetary constraints.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start'}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Collaborative determination of pay levels.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start'}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Guarantee of timely payments and preparation of settlement paperwork
for your esteemed workforce.</span>
                    </div>
                    <div className={'flex gap-[8px] items-start '}>
                        <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                               height={28}/>
                        <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Facilitation of communication with financial institutions.</span>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default ExecutiveRecriutmentPage;
