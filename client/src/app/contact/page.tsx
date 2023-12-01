"use client";
import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import React, { FC } from "react";

const ContactPage: FC = () => {
  return (
    <div className="mx-auto relative max-w-[1440px] max-h-[852px] py-[55px]">
      <Image
        alt="image"
        src="/contact-us-bg.jpg"
        className="absolute top-0 left-0 z-0 min-h-[852px] min-w-[1440px]"
        width={1440}
        height={852}
      />
      <Image
        alt="image"
        src="/contact-us-rectangle.svg"
        className="absolute top-0 left-0 z-0 min-h-[704px] min-w-[1037px]"
        width={984}
        height={852}
      />
      <div className="relative mx-auto flex justify-between z-10 max-w-[1200px] ">
        <div className="relative">
          <div className="mt-[16px] mb-[52px] relative">
            <h1 className="after:content[''] after:absolute after:bottom-[-16px] after:rounded-full after:left-0  after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] text-white text-[32px] font-semibold">
              Contact us
            </h1>
          </div>
          <div className="relative mb-[40px]">
            <p className="after:content[''] after:absolute after:bottom-[-40px] rounded-full after:left-0 after:w-[620px] after:h-[1px] after:bg-[#fff] max-w-[630px] text-[18px] text-white">
              Interested in leveraging our exceptional services to advance your
              career? Reach out to us using the contact information provided on
              this page, and well respond to you promptly!
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="mt-[40px] flex gap-[16px] items-center">
              <Image width={24} height={24} alt="Phone icon" src="call.svg" />
              <span className="text-white text-[18px] font-semibold">
                +40 769 682 560
              </span>
            </div>
            <div className="mt-[40px] flex gap-[16px] items-center">
              <Image width={24} height={24} alt="Phone icon" src="mail.svg" />
              <span className="text-white text-[18px] font-semibold">
                office@people-based.com
              </span>
            </div>
            <div className="mt-[40px] flex gap-[16px] items-start">
              <Image
                width={24}
                height={24}
                alt="Phone icon"
                src="location.svg"
              />
              <span className="text-white text-[18px] font-semibold">
                Bulevardul Barbu Vacarescu 241A, <br /> BVO Tower, Etaj 2,
                Bucharest
              </span>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactPage;
