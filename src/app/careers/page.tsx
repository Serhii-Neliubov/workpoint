import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const CareersPage: FC = () => {
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
          <Link href="/careers/join-our-team">
            <button className="hover:bg-[#EEB700] transition-all duration-[.3s] mt-[20px] rounded w-[150px] text-[15px] py-[14px] font-semibold bg-[#FFCA1D]">
              Get in touch
            </button>
          </Link>
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
      {/*IMAGE*/}
      <div className="relative w-[1440] h-[568px] overflow-hidden">
        <Image
          className="min-w-[1440]  absolute top-[65%] r-[50%] translate-y-[-50%]"
          alt="Image"
          src="/careers-bg2.jpg"
          width={1440}
          height={568}
        />
      </div>
      {/*OUR CLIENTS*/}
      <div className="py-[80px] max-w-[1200px] mx-auto">
        <div className="flex justify-between max-w-[1200px]">
          <div className="max-w-[486px]">
            <p>
              Our clientele spans across various sectors, including
              manufacturers, financial institutions, biotech and pharmaceutical
              companies, real estate developers and managers, technological
              firms, non-profit organizations, and a myriad of others. Some of
              our client partnerships extend beyond a decade, with returning
              clients seeking our expertise to either elevate their existing
              ventures or embark on new ones.
            </p>
          </div>
          <div className="max-w-[486px]">
            <p>
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

export default CareersPage;
