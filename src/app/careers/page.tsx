import Image from "next/image";
import React, { FC } from "react";

const page: FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/*WORKPOINT*/}
      <div className="overflow-hidden mx-auto relative max-w-[1440px] max-h-[704px]">
        <Image
          alt="image"
          src="/careers-bg.jpg"
          className="absolute  top-0 left-0 z-1 min-h-[704px] min-w-[1440px]"
          width={1440}
          height={704}
        />
        <Image
          alt="image"
          src="/bg-blue-particle.svg"
          className="absolute top-0 left-0 z-1 min-h-[704px] min-w-[1440px]"
          width={1440}
          height={704}
        />
        <div className="flex max-w-[1200px] mx-auto py-[185px] flex-col relative z-10">
          <div className="relative">
            <h2 className="text-[48px] text-[#fff] after:content[''] after:absolute after:bottom-[45px] after:rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] mb-[52px]">
              Workpoint
            </h2>
          </div>

          <p className=" text-[24px] max-w-[590px] text-[#E4E3FF]">
            At <span className="font-semibold text-[#fff]">Workpoint</span>, we
            take pride in our 11-year journey of fostering lasting profitability
            for a diverse array of businesses, ranging from small enterprises to
            large corporations.
          </p>
          <button className="hover:bg-[#EEB700] transition-all duration-[.3s] mt-[20px] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
            Get in touch
          </button>
        </div>
      </div>
      {/*LABEL WHILE SIMILARITIES*/}
      <div className="py-[80px] max-w-[1200px] mx-auto">
        <div className="max-w-[1050px]">
          <span className="text-[38px] text-[#00173A]">
            While similarities exist among firms within the same industry, our
            experience has taught us that each business possesses unique values
            and organizational demands.
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
