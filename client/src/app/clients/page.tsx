'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';

const ClientsPage: FC = () => {

    return (
        <div className="">

            <div className={`mx-auto overflow-hidden relative max-w-[1440px] object-cover`}>
                <Image
                    alt="image"
                    src="/careers-bg.jpg"
                    className={`absolute top-0 left-0 z-1 h-[100%] w-auto min-w-[100%] object-cover `}
                    style={{objectPosition: 'right'}}
                    width={ 1920}
                    height={704}
                />
                <Image
                    alt="image"
                    src="/bg-blue-particle.svg"
                    className={`absolute top-0 left-0 z-1 object-cover h-[100%] w-auto `}
                    width={1920 }
                    height={704}
                />

                <div className="pt-[146px] pb-[146px] relative mx-auto max-w-[1280px] px-[40px] max-[650px]:px-[16px]">
                    <div className="z-10 flex flex-col justify-start items-start">
                        <div className="mt-[16px] mb-[52px] relative">
                            <h1 className="after:content[''] after:absolute after:bottom-[-16px] after:rounded-full after:left-0  after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] text-white text-[48px] max-[813px]:text-[38px]  font-semibold">
                                Workpoint
                            </h1>
                        </div>
                        <p className="max-w-[582px] font-400 text-[24px] max-[813px]:text-[22px] text-white max-[890px]:text-[22px] leading-[150%]">
                            At <strong className={'text-white font-semibold'}>Workpoint</strong> , we take pride in our
                            11-year journey
                            of fostering lasting profitability for a diverse array of
                            businesses, ranging from small enterprises to large corporations.
                        </p>
                        <Link href="/careers/join-our-team">
                            <button
                                className="hover:bg-[#EEB700] transition-all duration-[.3s] pt-[14px] pr-[24px] pb-[14px] pl-[24px] rounded bg-[#FFCA1D] text-[18px] font-bold mt-[32px]">
                                Get in touch
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            {/*LABEL WHILE SIMILARITIES*/}
            <div className="py-[80px] max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto">
                <div className="max-w-[1050px] w-full">
          <span className="text-[38px] max-[700px]:text-[30px] text-[#00173A]">
            While similarities exist among firms within the same industry, our
            experience has taught us that each business possesses unique values
            and organizational demands.
          </span>
                </div>
            </div>

            <div className={``}>
                <Image className={` h-auto max-h-[568px] w-full max-w-[100vw] object-cover overflow-hidden`}
                       style={{objectPosition: 'center'}}
                       src={'/careers-bg2.jpg'} alt={'/careers-bg2.jpg'} width={1920} height={568}/>
            </div>
            {/*OUR CLIENTS*/}
            <div className="py-[80px] w-full max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto">
                <div className="flex  w-full gap-[130px] max-[950px]:flex-col max-[950px]:gap-[32px]">
                    <div className=" flex-[0_1_50%]">
                        <p className={'w-full min-[950px]:max-w-[486px]'}>
                            Our clientele spans across various sectors, including
                            manufacturers, financial institutions, biotech and pharmaceutical
                            companies, real estate developers and managers, technological
                            firms, non-profit organizations, and a myriad of others. Some of
                            our client partnerships extend beyond a decade, with returning
                            clients seeking our expertise to either elevate their existing
                            ventures or embark on new ones.s
                        </p>
                    </div>
                    <div className="flex-[0_1_50%]">
                        <p className={'w-full min-[950px]:max-w-[486px]'}>
                            <span className="font-semibold">Workpoint</span> boasts a robust
                            and adaptable framework tailored to each industry, demonstrating
                            our commitment to personalized relationships. Our representatives
                            engage with corporate leaders, delving into discussions on how our
                            services can be tailored to meet their specific objectives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
