'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/adaptive.scss";

const HumanResourcesPage = () => {
    return (
        <div className={``}>
            <div className={`mx-auto overflow-hidden relative max-w-[1440px] object-cover`}>
                <Image
                    alt="image"
                    src="/human-resourses-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover `}
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

                <div className="pt-[146px] pb-[146px] relative mx-auto max-w-[1280px] w-full px-[40px] max-[650px]:px-[16px]">
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
                                Human Resources
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
            <div className={'flex flex-row-reverse gap-[100px] w-full max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto my-[80px] items-start'}>

                    <div className={'desktop w-1/2'}>
                        <Image className={''} src={'/human-resourses1img.jpg'}
                               alt={'/human-resourses1img.jpg'} height={453} width={453}/>
                    </div>

                <div className={'h-full w-1/2 max-[820px]:w-full flex flex-col '}>
                    <div className="relative pb-[18px] mb-[32px]">
                        <h3 className="text-[32px] leading-[150%] max-w-[486px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold">
                            Consulting
                        </h3>

                    </div>
                        <div className={'mobile w-full mb-[32px] flex justify-center'}>
                            <Image className={''} src={'/human-resourses1img.jpg'}
                                   alt={'/human-resourses1img.jpg'} height={453} width={453}/>
                        </div>
                    <p className={' text-[18px] mb-[32px]'}>At <strong>Workpoint</strong>, we engage with clients across
                        all tiers of their
                        enterprises, serving as trusted advisors to upper management
                        and hands-on coaches for front-line workers alike. Our collaborative approach involves
                        implementing innovative ideas and working closely with clients over time to enhance workforce
                        skills, boost operational efficiency, and introduce cutting-edge working techniques. <br/>
                        At <strong>Workpoint</strong> , we are committed to perpetual innovation, ensuring
                        that your business evolves and thrives!</p>
                    <div className={'flex flex-col gap-[24px] mb-[80px] max-[820px]:mb-[40px]'}>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Expert consulting in labor law.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Oversight of processes related to staff attendance.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Consultancy and activities in casual leave planning
and documentation.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Guidance on individual employment contract initiation,
modification, suspension, and termination.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Streamlined operations for job descriptions, both
standardized and tailored.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Consulting and operations in specific employment contract
terms, employee secondment domestically and internationally,
and disciplinary investigations.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Streamlined operations for job descriptions, both standardized
and tailored.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Employee assessment consulting and operations.</span>
                        </div>

                    </div>
                    <Link href="/careers/join-our-team" className={'max-[820px]:w-full '}>
                        <button
                            className="max-[820px]:w-full hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                            Get in touch
                        </button>
                    </Link>
                </div>

            </div>
            <div className={'flex  gap-[100px] w-full max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto my-[80px] items-start'}>

                    <div className={'desktop w-1/2'}>
                        <Image className={''} src={'/human-resourses2img.jpg'}
                               alt={'/human-resourses2img.jpg'} height={453} width={453}/>
                    </div>

                <div className={'h-full w-1/2 max-[820px]:w-full flex flex-col '}>
                    <div className="relative pb-[18px] mb-[32px]">
                        <h3 className="text-[32px] leading-[150%] max-w-[486px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold">
                            Documents and Policies
                        </h3>

                    </div>
                        <div className={'mobile w-full mb-[32px] flex justify-center'}>
                            <Image className={''} src={'/human-resourses2img.jpg'}
                                   alt={'/human-resourses2img.jpg'} height={453} width={453}/>
                        </div>
                    <p className={' text-[18px] mb-[32px]'}>Collaborating with <strong>Workpoint</strong>  grants you access to a team of HR specialists dedicated to crafting policies and processes tailored to
                        your company.</p>
                    <div className={'flex flex-col gap-[24px] mb-[80px] max-[820px]:mb-[40px]'}>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Management of personnel files.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Formation of collective labor contracts and their registration in compliance with legal requisites.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Preparation of seniority certificates.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Customized report generation upon customer request.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Archiving of employee documents.</span>
                        </div>
                        <div className={'flex gap-[8px] items-center '}>
                            <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                   height={28}/>
                            <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Assistance in the event of state-level inspections.</span>
                        </div>


                    </div>
                    <Link href="/careers/join-our-team" className={'max-[820px]:w-full '}>
                        <button
                            className=" max-[820px]:w-full hover:bg-[#EEB700] transition-all duration-[.3s] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
                            Get in touch
                        </button>
                    </Link>
                </div>

            </div>


        </div>
    );
};

export default HumanResourcesPage;
