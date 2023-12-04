'use client'
import React, {FC} from 'react';
import Image from 'next/image';
import "@/styles/adaptive.scss";

const AboutPage: FC = () => {

    return (
        <>
            <section>
                <div className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto w-full pt-[145px]">
                    <div className="relative pb-[12px] mb-[52px]">
                        <h2 className="text-[48px] max-[813px]:text-[38px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px]">
                            About us
                        </h2>

                    </div>
                    <p className={'max-w-[792px] text-[24px] mb-[145px]'}><strong>Workpoint</strong> has two basic
                        objectives for you in any profession.
                        <strong> Workpoint</strong> is dedicated to achieving two fundamental goals across diverse
                        professions. Our primary aim is to curate a dynamic team of experts across various fields.
                        Simultaneously, we strive to instill a
                        strong motivation for continuous growth among our personnel.</p>

                    <div className="flex flex-col gap-[24px] mb-[80px]">
                        <div className={'flex gap-[32px] max-[580px]:flex-col max-[580px]:gap-[24px]'}>
                            <div className=" flex gap-[16px] items-center">
                                <Image width={24} height={24} alt="Phone icon" src="call.svg"/>
                                <span className="text-black text-[18px] font-semibold">
                +40 769 682 560
              </span>
                            </div>
                            <div className=" flex gap-[16px] items-center">
                                <Image width={24} height={24} alt="Phone icon" src="mail.svg"/>
                                <span className="text-black text-[18px] font-semibold">
                office@people-based.com
              </span>
                            </div>
                        </div>

                        <div className="mt-[16px] flex gap-[16px] items-start">
                            <Image
                                width={24}
                                height={24}
                                alt="Phone icon"
                                src="location.svg"
                            />
                            <span className="text-black text-[18px] font-semibold w-full max-w-[550px]">
                Georgia, Tbilisi, Krtsanisi District, Nino and IliaNakashidze Street,
N 1, (Avlevi Building), Apartment N3,Building N3
              </span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] mx-auto w-full pt-[145px]">
                    <div className={'flex items-center  gap-[16px] mb-[56px] max-[805px]:flex-col'}>
                        <div className={'flex flex-[0_1_50%] flex-col max-[820px]:flex-1'}>
                            <div className="relative pb-[14px] mb-[32px]">
                                <h2 className="text-[32px] leading-[150%] max-w-[486px] text-[#000] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  ">
                                    Our services are flexible, adapting to the specific needs of each enterprise.
                                </h2>

                            </div>
                                <div className={'mobile mb-[32px] w-full flex justify-center'}>
                                    <Image src={'/circlesmainpage.svg'} alt={'/circlesmainpage.svg'} width={442}
                                           height={442}/>
                                </div>
                            <p className={'text-[18px] max-w-[486px] max-[820px]:max-w-full max-[820px]:w-full'}>These objectives represent our commitment
                                to excellence, mirroring the highest standards we aspire to meet. Over the
                                years, <strong>Workpoint</strong> has collaborated with <strong>over 80
                                    companies</strong> spanning a range of industries, including:</p>

                        </div>
                            <div className={'desktop flex-[0_1_50%]'}>
                                <Image src={'/circlesmainpage.svg'} alt={'/circlesmainpage.svg'} width={442}
                                       height={442}/>
                            </div>

                    </div>
                    <div>
                        <div className={'grid grid-cols-3 max-[805px]:grid-cols-2 max-[590px]:grid-cols-1 gap-[24px] mb-[80px]'}>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                                Corporations</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Hospitality</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Educational Institutions</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Healthcare Facilities</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Retail Chains</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Financial Services</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Technology Enterprises</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Event Management</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Construction Companies</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Transportation and Logistics</span>
                            </div>
                            <div className={'flex gap-[8px] items-center '}>
                                <Image src={'/checkmark-circle.svg'} alt={'checkmark-circle.svg'} width={28}
                                       height={28}/>
                                <span className={'text-[18px] leading-[150%] text-gray-600'}>
                            Travel and Tourism</span>
                            </div>

                        </div>


                    </div>
                </div>

                <div className={``}>
                    <Image  className={` h-auto max-h-[568px] w-full max-w-[100vw] object-cover overflow-hidden`}
                           style={{objectPosition: 'center'}}
                           src={'/about-bottom-img.jpg'} alt={'/about-bottom-img.jpg'} width={ 1920 } height={586}/>
                </div>

            </section>
            <section className={'py-[80px] max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto'}>
                <div className="w-full min-[1000px]:pb-[145px]">
                    <h3 className={'text-[#00173A] text-[32px] font-semibold mb-[32px]'}>Mission, Vision and Values</h3>
                    <div className={'flex gap-[24px] max-[800px]:flex-col'}>
                        <div className={'flex flex-col gap-[24px] p-[48px] rounded-lg border border-solid border-[#DCDCE2]'}>
                            <div className="relative pb-[12px]">
                            <span className="text-[22px] leading-[130%]  text-[#00173A] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  mb-[32px]">
                                Orientation to Customer
                            </span>

                            </div>
                            <p className={'text-[18px] leading-[150%] font-400 text-[#00173A]'}>At <strong>Workpoint</strong> , our customer-centric approach is at the core
                                of our philosophy. We deeply understand our clients—their needs, aspirations, and the reasons behind seeking our assistance. Our role in our clients' success is pivotal, and
                                we prioritize listening, understanding, and acting in their
                                best interests.</p>
                        </div>
                        <div className={'flex flex-col gap-[24px] p-[48px] rounded-lg border border-solid border-[#DCDCE2]'}>
                            <div className="relative pb-[12px]">
                            <span className="text-[22px] leading-[130%]  text-[#00173A] after:content[''] after:absolute after:bottom-[0px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold  mb-[32px]">
                                Orientation to Results
                            </span>

                            </div>
                            <p className={'text-[18px] leading-[150%] font-400 text-[#00173A]'}>Driven by a relentless commitment to results, <strong>Workpoint</strong>  operates with efficiency. We believe in accomplishing
                                more with less, approaching tasks with a sense of urgency.
                                Every challenge is viewed as an opportunity for growth
                                and innovative solutions. The outcomes we deliver are paramount, reflecting our dedication to tangible,
                                impactful results."</p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
};

export default AboutPage;
