'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/adaptive.scss";

const ManagementConsultingPage = () => {

    return (
        <div className={``}>
            <div className={`mx-auto overflow-hidden relative max-w-[1440px] object-cover`}>
                <Image
                    alt="image"
                    src="/management-consulting-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover`}
                    style={{objectPosition: 'right'}}
                    width={1920}
                    height={704}
                />
                <Image
                    alt="image"
                    src="/bg-blue-particle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-auto w-[100%] max-[1000px]:h-full max-[1000px]:min-h-[704px] max-[1000px]:w-auto  `}
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
                                Management Consulting
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
                    <Image className={'mb-[40px]'} src={'/management-consulting-circle-image.jpg'}
                           alt={'/management-consulting-circle-image.jpg'} height={453} width={453}/>
                        <Link href="/careers/join-our-team" className={'mobile w-full'}>
                        <button
                            className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-full text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                            Get in touch
                        </button>
                    </Link>
                </div>
                <div className={'h-full w-1/2 max-[820px]:w-full'}>
                    <p className={' text-[18px] mb-[40px]'}>At <strong>Workpoint</strong>, we engage with clients across
                        all tiers of their
                        enterprises, serving as trusted advisors to upper management
                        and hands-on coaches for front-line workers alike. Our collaborative approach involves
                        implementing innovative ideas and working closely with clients over time to enhance workforce
                        skills, boost operational efficiency, and introduce cutting-edge working techniques. <br/>
                        At <strong>Workpoint</strong> , we are committed to perpetual innovation, ensuring
                        that your business evolves and thrives!</p>
                        <Link href="/careers/join-our-team" className={'desktop'}>
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                                Get in touch
                            </button>
                        </Link>

                </div>
            </div>


        </div>
    );
};

export default ManagementConsultingPage;
