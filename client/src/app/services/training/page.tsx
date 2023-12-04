'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrainingPage = () => {
    return (
        <div className={``}>

            <div className={`mx-auto overflow-hidden relative max-w-[1440px] mx-auto object-cover`}>
                <Image
                    alt="image"
                    src="/training-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover`}
                    style={{objectPosition: 'right'}}
                    width={1920}
                    height={704}
                />
                <Image
                    alt="image"
                    src="/bg-blue-particle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-auto w-[100%] max-[1000px]:h-full max-[1000px]:min-h-[704px] max-[1000px]:w-auto  `}
                    width={1920 }
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
                                Training
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
            <div className={'flex max-[820px]:flex-col-reverse max-w-[1280px] px-[40px] max-[650px]:px-[16px] gap-[16px] max-[820px]:gap-[32px] w-full mx-auto my-[80px] items-center'}>
                <div className={'flex-[0_1_50%] max-[820px]: w-full flex max-[820px]: justify-center'}>
                    <Image className={''} src={'/traningimg1.jpg'} alt={'/traningimg1.jpg'}
                           height={453} width={453}/>
                </div>
                <div className={'h-full flex-[0_1_50%] max-[820px]:w-full'}>
                    <p className={' text-[18px] mb-[40px] max-[820px]: mb-0'}>Transform the way your company nurtures its workforce for new responsibilities and skills. To ensure that your training programs align with your business objectives, our training consultants employ diverse assessment methods. We craft tailored training modules based on the specific needs of your staff and the revenue goals of your organization.</p>

                </div>
            </div>
            <div className={'max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto my-[80px]'}>
                <div className={'grid grid-cols-3 max-[940px]:grid-cols-1 gap-[24px] mb-[80px]'}>
                    <div className={'flex flex-col transition-all p-[48px] rounded-lg border border-solid border-[#DCDCE2] hover:outline hover:outline-[#FFCA1D] hover:outline-[4px] hover:cursor-pointer '}>
                        <div className="relative mb-[24px] pb-[12px]">
                            <span
                                className="text-[22px] leading-[130%] text-[#00173A] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  ">
                                Development
                            </span>
                        </div>
                        <p className={'grow text-[18px] font-400 leading-[150%] text-[#585858] mb-[32px]'}>Our team of specialists guides
                            your company in asking the right questions and implementing effective approaches to design learning solutions tailored to
                            your company’s needs.</p>
                        <Link href="/careers/join-our-team">
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[10px] px-[18px] font-semibold bg-[#FFCA1D]">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                    <div className={'flex flex-col transition-all p-[48px] rounded-lg border border-solid border-[#DCDCE2] hover:outline hover:outline-[#FFCA1D] hover:outline-[4px] hover:cursor-pointer '}>
                        <div className="relative mb-[24px] pb-[12px]">
                            <span
                                className="text-[22px] leading-[130%] text-[#00173A] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  ">
                                Delivery
                            </span>
                        </div>
                        <p className={'grow text-[18px] font-400 leading-[150%] text-[#585858] mb-[32px]'}>Engaging discussions, demonstrations, and hands-on activities are presented to help trainees acquire the necessary knowledge and skills for tasks
                            or subjects.
                            </p>
                        <Link href="/careers/join-our-team">
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[10px] px-[18px] font-semibold bg-[#FFCA1D]">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                    <div className={'flex flex-col transition-all p-[48px] rounded-lg border border-solid border-[#DCDCE2] hover:outline hover:outline-[#FFCA1D] hover:outline-[4px] hover:cursor-pointer '}>
                        <div className="relative mb-[24px] pb-[12px]">
                            <span
                                className="text-[22px] leading-[130%] text-[#00173A] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  ">
                                Room Rental
                            </span>
                        </div>
                        <p className={'grow text-[18px] font-400 leading-[150%] text-[#585858] mb-[32px]'}>Leave a lasting impression at
                            your next presentation, interview, or workshop by reserving one of our professional meeting spaces.</p>
                        <Link href="/careers/join-our-team">
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[10px] px-[18px] font-semibold bg-[#FFCA1D]">
                                Get in touch
                            </button>
                        </Link>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default TrainingPage;
