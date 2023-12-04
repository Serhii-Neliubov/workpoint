"use client";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import React, {FC} from 'react';

const ContactPage: FC = () => {
  return (
      <div className={`mx-auto overflow-hidden object-cover relative max-w-[1440px] py-[55px]`}>
        <Image
            alt="image"
            src="/contact-us-bg.jpg"
            className={`absolute top-0 left-0 z-0 min-h-[852px] max-[1134px]:min-h-[1330px] max-[1107px]:min-h-full object-cover min-w-[100vw]`}
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
            className="relative mx-auto flex gap-[126px] max-[1134px]:gap-[40px] items-center z-10 max-w-[1280px] px-[40px] max-[650px]:px-[16px] max-[1134px]:flex-col max-[1134px]:items-start  ">
          <div className="relative flex-[0_1_50%]">
            <div className="mt-[16px] mb-[52px] relative">
              <h1 className="after:content[''] after:absolute after:bottom-[-16px] after:rounded-full after:left-0  after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] text-white text-[32px] font-semibold">
                Contact us
              </h1>
            </div>
              <p className="relative mb-[40px] after:content[''] after:absolute after:bottom-[-40px] rounded-full after:left-0 after:w-full after:h-[1px] after:bg-[#fff] max-w-[630px] max-[1134px]:max-w-[497px] text-[18px] text-white">
                Interested in leveraging our exceptional services to advance your career? Reach out to us using the contact information provided on this page, and we'll respond to you promptly!
              </p>

            <div className="flex flex-col gap-[24px] mt-[80px] max-w-[630px] max-[1134px]:max-w-[497px]">
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
                  Georgia, Tbilisi, Krtsanisi District, Nino and IliaNakashidze Street, N 1, (Avlevi Building), Apartment N3,Building N3
                </span>
              </div>
            </div>
          </div>
          <ContactUsForm/>
        </div>
      </div>

  );
};

export default ContactPage;
