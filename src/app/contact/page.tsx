"use client";
import Image from "next/image";
import React, { ChangeEvent, FC } from "react";

const ContactPage: FC = () => {
  const [fileName, setFileName] = React.useState<string>("No file chosen");

  // Upload file input functional
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };
  return (
    <div className="mx-auto flex overflow-hidden justify-between items-center relative max-w-[1440px] max-h-[852px] py-[55px]">
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
      <div className="relative z-10 max-w-[1200px] mx-auto">
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
      </div>
      <div className=" flex flex-col relative z-10 bg-white mx-auto pt-[56px] pb-[56px] pl-[40px] pr-[40px] rounded-[16px]">
        <div className="max-w-[406px] overflow-hidden">
          <div className="mb-[24px] flex-col flex gap-[16px]">
            <div className=" flex gap-[16px]">
              <input
                className="rounded-[5px] border-[1px] border-[#DCDCE2] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
                type="text"
                placeholder="Name"
              />
              <input
                className="rounded-[5px] border-[1px] border-[#DCDCE2] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
                type="text"
                placeholder="Surname"
              />
            </div>
            <div className="flex gap-[16px]">
              <input
                className="rounded-[5px] border-[1px] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
                type="text"
                placeholder="Email"
              />
              <input
                className="rounded-[5px] border-[1px] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <textarea
              className="rounded-[5px] border-[1px] resize-none h-[180px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
              placeholder="Let us know how we can help"
            />
          </div>
          <span className="font-semibold text-[#00173A]">
            Attach relevant files:
          </span>
          <div className="mt-[16px] mb-[32px] relative flex items-center gap-[16px]">
            <div className="relative">
              <Image
                className="absolute top-[50%] left-[7%]  translate-y-[-50%]"
                alt="upload file image"
                src="/cloud-upload.svg"
                width={16}
                height={16}
              />
              <label
                htmlFor="fileInput"
                className="whitespace-nowrap cursor-pointer hover:bg-[#ededed] hover:bg-opacity-[60%] transition-all duration-[.3s] border-[1px] bg-[#F8F8F8] text-[#585858]  py-[6px] pr-[12px] pl-[32px] inline-block"
              >
                Upload file
              </label>
            </div>

            <input
              onChange={handleFileChange}
              id="fileInput"
              type="file"
              className="hidden"
            />
            <span
              id="fileName"
              className="ml-2 text-[#585858] whitespace-nowrap"
            >
              {fileName}
            </span>
          </div>
          <div className="flex mb-[32px] gap-[10px] items-center">
            <input type="checkbox" className="w-[28px] h-[28px]" />
            <span className="max-w-[370px]">
              I have read and agree with {`Workpoint's`} Privacy Policy and
              Terms of Use!
            </span>
          </div>
          <button className="hover:bg-[#EEB700] transition-all duration-[.3s] w-[100%] py-[14px] font-semibold rounded-[8px] bg-[#FFCA1D]">
            Send your request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
