'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const JoinOurTeamPage = () => {
    return (
        <div className="w-full max-w-[100vw] overflow-hidden">
            <div className="relative w-full max-w-[100vw]">
                <div className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto pt-[145px] relative z-10">
                    <div className="relative pb-[12px] mb-[52px]">
                        <h2 className="text-[48px] max-[813px]:text-[38px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px]">
                            Join Our Team
                        </h2>

                    </div>
                    <p className={'max-w-[587px] max-[900px]:max-w-[360px] text-[24px] mb-[145px] text-[#585858]'}>
                        At <span className="font-semibold">Workpoint</span>, we welcome
                        individuals at any stage of their educational or professional
                        journey to connect with us, gain valuable experience, and
                        explore a fulfilling career.
                    </p>
                </div>
                <div className={'absolute right-0 top-[80px] max-w-full bg-transparent max-[730px]:bg-[rgba(255,255,255,0.7)]'}>
                        <Image className={'relative z-[-1]'} src={'/join-team-image.svg'} alt={'/join-team-image.svg'} width={400} height={467}/>
                </div>

            </div>
            <div
                className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] pt-[60px] pb-[120px] mx-auto flex flex-col gap-[48px]">
                <div className="flex flex-col">
                    <div className="relative">
                        <h2 className="text-[32px] after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] mb-[52px]">
                            Open positions
                        </h2>
                    </div>

                    <p className="text-[19px] text-[#585858]">
                        Join a dynamic team committed to innovation and growth.
                    </p>
                </div>
                <div className="flex justify-between gap-[24px] max-[689px]:flex-col max-[689px]:gap-[16px]">
                    <div
                        className="hover:border-[#FFCA1D] hover:outline hover:outline-[#FFCA1D] hover:outline-[2px] w-[100%] rounded-[6px] px-[40px] py-[32px] max-[689px]:py-[24px] max-[689px]:px-[32px] border-[1px] border-[#DCDCE2] flex items-center justify-between max-[972px]:flex-col max-[972px]:items-start max-[972px]:justify-start max-[972px]:gap-[24px] ">
                        <div className="flex flex-col gap-[16px] max-[972px]:gap-[8px]">
                            <span className="font-semibold text-[22px]">HR Recruiter</span>
                            <p className="text-[#585858] text-[18px]">Full-time</p>
                        </div>
                        <Link href="/careers/join-our-team/hr-recruiter">
                            <button
                                className="py-[10px] px-[18px] rounded-[6px] font-semibold hover:bg-[#EEB700] transition-all duration-[.3s] bg-[#FFCA1D]">
                                Job requirements
                            </button>
                        </Link>
                    </div>
                    <div
                        className="hover:border-[#FFCA1D] hover:outline hover:outline-[#FFCA1D] hover:outline-[2px] w-[100%] rounded-[6px] px-[40px] py-[32px] max-[689px]:py-[24px] max-[689px]:px-[32px] border-[1px] border-[#DCDCE2] flex items-center justify-between max-[972px]:flex-col max-[972px]:items-start max-[972px]:justify-start max-[972px]:gap-[24px]">
                        <div className="flex flex-col gap-[16px] max-[972px]:gap-[8px]">
                            <span className="font-semibold text-[22px]">Trainer</span>
                            <p className="text-[#585858] text-[18px]">Full-time</p>
                        </div>
                        <Link href="/careers/join-our-team/trainer">
                            <button
                                className="py-[10px] px-[18px] rounded-[6px] font-semibold hover:bg-[#EEB700] transition-all duration-[.3s] bg-[#FFCA1D]">
                                Job requirements
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinOurTeamPage;
