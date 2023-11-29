"use client";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    <div>
      {/* HERO PAGE */}
      <div className="relative max-w-[1440px] pt-[146px] pb-[146px]">
        <Image
          alt="image"
          src="/hero-bg.jpg"
          className="absolute top-0 left-0 z-0"
          width={1440}
          height={100}
        />
        <Image
          alt="image"
          src="/bg-blue-particle.svg"
          className="absolute top-0 left-0 z-0"
          width={1440}
          height={100}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="relative">
            <Image
              alt="image"
              src="/Handshake.png"
              className="absolute left-[10px]"
              width={24}
              height={24}
            />
            <span className="bg-white pt-[4px] pb-[4px] pr-[12px] pl-[44px] rounded">
              Complexity resolution through partnership
            </span>
            <div className="mt-[16px] mb-[24px]">
              <h1 className=" text-white text-[48px] font-semibold">
                You are the one who has <br /> the vision.We can take care{" "}
                <br />
                of everything to get you there!
              </h1>
            </div>
            <p className="max-w-[582px] text-[24px] text-white">
              We provide services with varying lengths of time, based on the
              needs of each firm.
            </p>
            <button className="pt-[14px] pr-[24px] pb-[14px] pl-[24px] rounded bg-[#FFCA1D] text-[18px] font-bold mt-[32px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {/* SERVICES PAGE */}
      <div className="max-w-[1200px] items-center pt-[80px] pb-[80px] mx-auto flex justify-between">
        <div className="flex flex-col">
          <div className="relative">
            <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] text-[32px] mb-[52px]">
              Services that will help you take your vision a step further
            </h2>
          </div>

          <p className="text-[18px] max-w-[360px] text-[#585858]">
            Navigate the possibilities with our range of services.
          </p>
          <button className="mt-[20px] rounded w-[95px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
            Services
          </button>
        </div>
        <div className="flex gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="hover:border-[#FFCA1D] hover:border-[3px] hover:p-[38px] p-[40px] inline-block w-[384px]  border rounded-[16px] border-[#DCDCE2]">
              <Image
                alt="logo"
                src="shape-yellow.svg"
                width={64}
                height={64}
                className="mb-[24px]"
              />
              <span className="text-[22px] font-semibold">Human Resources</span>
              <Link className="flex gap-[4px] items-center mt-[48px]" href="/">
                <span className="text-[#FFCA1D]">Learn more</span>
                <Image
                  alt="arrow"
                  src="arrow-right-orange.svg"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
            <div className="hover:border-[#FFCA1D] hover:border-[3px] hover:p-[38px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
              <Image
                alt="logo"
                src="shape-red.svg"
                width={64}
                height={64}
                className="mb-[24px]"
              />
              <span className=" text-[22px] font-semibold">
                Executive recruitment
              </span>
              <Link className="flex gap-[4px] items-center mt-[48px]" href="/">
                <span className="text-[#FFCA1D]">Learn more</span>
                <Image
                  alt="arrow"
                  src="arrow-right-orange.svg"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="hover:border-[#FFCA1D] hover:border-[3px] hover:p-[38px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
              <Image
                alt="logo"
                src="shape-green.svg"
                width={64}
                height={64}
                className="mb-[24px]"
              />
              <span className=" text-[22px] font-semibold">
                Management Consulting
              </span>
              <Link className="flex gap-[4px] items-center mt-[48px]" href="/">
                <span className="text-[#FFCA1D]">Learn more</span>
                <Image
                  alt="arrow"
                  src="arrow-right-orange.svg"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
            <div className="hover:border-[#FFCA1D] hover:border-[3px] hover:p-[38px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
              <Image
                alt="logo"
                src="shape-purple.svg"
                width={64}
                height={64}
                className="mb-[24px]"
              />
              <span className=" text-[22px] font-semibold">Training</span>
              <Link className="flex gap-[4px] items-center mt-[48px]" href="/">
                <span className="text-[#FFCA1D]">Learn more</span>
                <Image
                  alt="arrow"
                  src="arrow-right-orange.svg"
                  width={14}
                  height={14}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FIND OUT PAGE */}
      <div className="pt-[80px] pb-[80px] bg-[#F8F8F8] max-w-[1440px] mx-auto ">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="relative w-[680px] h-[680px]">
            <Image
              alt="image"
              src="/circle-dashed.svg"
              width={680}
              height={680}
              className="absolute top-0 left-0"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-full border-[2px] border-black w-[582px] h-[582px]">
              <Image
                alt="image"
                src="/find-out-image.jpg"
                width={1204}
                height={803}
                className="absolute top-[50%] left-[50%] translate-x-[-70%] translate-y-[-50%] scale-[1.5]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[375px] text-[32px] mb-[52px]">
                Find out who we are and why you should work with us
              </h2>
            </div>

            <p className="text-[18px] max-w-[360px] text-[#585858]">
              We provide services with varying lengths of time, based on the
              needs of each firm.
            </p>
            <button className="mt-[20px] rounded w-[95px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
              Discover
            </button>
          </div>
        </div>
      </div>
      {/* WE CAN BUILD STRONG RELATIONSHIP PAGE */}
      <div className="max-w-[1200px] items-center pt-[80px] pb-[80px] mx-auto  flex justify-between">
        <div className="flex flex-col">
          <div className="relative">
            <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[350px] text-[32px] mb-[52px]">
              {`We've built strong relationships in over 11 years of work`}
            </h2>
          </div>

          <p className="text-[18px] max-w-[420px] text-[#585858]">
            Over the last 11 years, Workpoint has aided a large number of
            businesses – from small businesses to large corporations – in
            becoming long-term profitable.
          </p>
          <button className="mt-[20px] rounded w-[116px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
            Learn more
          </button>
        </div>
        <div className="relative w-[420px] h-[420px]">
          <Image
            alt="image"
            src="/circle-big.png"
            className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
            width={355}
            height={355}
          />
          <Image
            alt="image"
            src="/circle-small.png"
            className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
            width={270}
            height={270}
          />
          <Image
            alt="image"
            src="/circle_green.svg"
            className="absolute top-[30%] left-[74%] z-0 translate-x-[-50%] translate-y-[-50%]"
            width={18}
            height={18}
          />
          <Image
            alt="image"
            src="/circle_orange.svg"
            className="absolute top-[20%] left-[15%] z-0 translate-x-[-50%] translate-y-[-50%]"
            width={15}
            height={15}
          />
          <Image
            alt="image"
            src="/circle_purple.svg"
            className="absolute bottom-[7%] left-[30%] z-0 translate-x-[-50%] translate-y-[-50%]"
            width={31}
            height={31}
          />
          <div className="w-[150px] h-[150px] absolute left-[160px] top-[-30px]">
            <Image
              alt="image"
              src="/ellipse_blue_big.svg"
              className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={270}
              height={270}
            />
            <Image
              alt="image"
              src="/ellipse_blue_particle1.svg"
              className="absolute top-[20%] left-[70%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={12}
              height={12}
            />
            <div className=" z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  font-semibold">
              <Image alt="image" src="/heart-icon.svg" width={50} height={50} />
              <div>
                <span className="text-white relative z-10">Healthcare</span>
                <Image
                  alt="image"
                  src="/ellipse_blue_particle2.svg"
                  className="absolute top-[49px] left-[-8px] z-0 "
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
          <div className="w-[112px] h-[112px] absolute left-0 top-[50%] translate-y-[-50%]">
            <Image
              alt="image"
              src="/circle_yellow_big.svg"
              className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={270}
              height={270}
            />
            <Image
              alt="image"
              src="/circle_particle_yellow1.svg"
              className="absolute top-[20%] left-[70%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={9}
              height={9}
            />
            <div className=" z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  font-semibold">
              <Image
                alt="image"
                src="/finances-icon.svg"
                width={32}
                height={32}
              />
              <div>
                <span className="text-white relative z-10">Finances</span>
                <Image
                  alt="image"
                  src="/circle_particle_yellow2.svg"
                  className="absolute top-[31px] left-[-8px] z-0 "
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
          <div className="w-[123px] h-[123px] absolute right-0 top-[50%]">
            <Image
              alt="image"
              src="/circle_orange_big.svg"
              className="absolute top-[50%] left-[50%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={270}
              height={270}
            />
            <Image
              alt="image"
              src="/circle_particle_orange1.svg"
              className="absolute top-[20%] left-[70%] z-0 translate-x-[-50%] translate-y-[-50%]"
              width={11}
              height={11}
            />
            <div className=" z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center  font-semibold">
              <Image
                alt="image"
                src="/covid-van-icon.svg"
                width={28}
                height={28}
              />
              <div>
                <span className="text-white relative z-10">Logistic</span>
                <Image
                  alt="image"
                  src="/circle_particle_orange2.svg"
                  className="absolute top-[28px] left-[-8px] z-0 "
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT US PAGE */}
      <div className="flex justify-between items-center relative max-w-[1440px] py-[55px]">
        <Image
          alt="image"
          src="/contact-us-bg.jpg"
          className="absolute top-0 left-0 z-0 "
          width={1440}
          height={852}
        />
        <Image
          alt="image"
          src="/contact-us-rectangle.svg"
          className="absolute top-0 left-0 z-0"
          width={1037}
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
                Interested in leveraging our exceptional services to advance
                your career? Reach out to us using the contact information
                provided on this page, and well respond to you promptly!
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
            <button className="w-[100%] py-[14px] font-semibold rounded-[8px] bg-[#FFCA1D]">
              Send your request
            </button>
          </div>
        </div>
      </div>
      {/* JOIN US PAGE */}
      <div className="pt-[80px] overflow-hidden pb-[80px] bg-black relative max-w-[1440px] max-h-[379px] mx-auto">
        <Image
          alt="arrow"
          className="absolute top-0 left-0"
          src="career.svg"
          width={1440}
          height={379}
        />
        <div className=" flex flex-col items-center relative z-20">
          <h3 className="text-center mb-[16px] text-[56px] text-white font-bold">
            Join our team
          </h3>
          <p className="text-center text-white max-w-[425px]">
            Explore exciting opportunities to be part of a dynamic and
            innovative team.
          </p>
          <button className="mt-[24px] pb-[12px] pt-[12px] pr-[24px] pl-[24px] rounded-[6px] font-semibold text-[18px] bg-[#FFCA1D]">
            Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
