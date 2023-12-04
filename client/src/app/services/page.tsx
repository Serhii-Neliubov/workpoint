import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import LearnMoreBlock from '@/components/LearnMoreBlock';

const ServicesPage: FC = () => {
  return (
      <div
          className={`max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-[100%] items-center pt-[80px] pb-[80px] mx-auto flex items-start gap-[40px] max-[910px]:flex-col`}>
        <div className="flex flex-col w-[50%] max-[910px]:w-full">
          <div className="relative">
            <h2 className=" after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] max-[910px]:max-w-[497px] text-[32px] mb-[52px]">
              Services that will help you take your vision a step further
            </h2>
          </div>

          <p className="text-[18px] max-w-[360px] max-[910px]:max-w-[497px] text-[#585858]">
            Navigate the possibilities with our range of services.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[24px] w-[50%] max-[910px]:w-full max-[560px]:grid-cols-1 max-[560px]:gap-[16px]">
          <LearnMoreBlock
              image="/shape-yellow.svg"
              link="/services/human-resources"
              title="Human Resources"
          />
          <LearnMoreBlock
              image="/shape-red.svg"
              link="/services/executive-recruitment"
              title="Executive recruitment"
          />
          <LearnMoreBlock
              image="/shape-green.svg"
              link="/services/management-consulting"
              title="Management Consulting"
          />
          <LearnMoreBlock
              image="/shape-purple.svg"
              link="/services/training"
              title="Training"
          />
        </div>
      </div>
  );
};

export default ServicesPage;
