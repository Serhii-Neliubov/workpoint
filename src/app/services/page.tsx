import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const page: FC = () => {
  return (
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
  );
};

export default page;
