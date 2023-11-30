"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinOurTeamPage = () => {
  return (
    <div className=" overflow-hidden">
      <div className="flex justify-between">
        <div className="mx-auto flex pt-[30px] pb-[60px]">
          <div className="max-w-[1200px] items-center pt-[80px] pb-[80px] mx-auto flex justify-between">
            <div className="flex flex-col">
              <div className="relative">
                <h2 className="text-[48px] after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] mb-[52px]">
                  Join Our Team
                </h2>
              </div>

              <p className="text-[24px] max-w-[587px] text-[#585858]">
                At <span className="font-semibold">Workpoint</span>, we welcome
                individuals at any stage of their educational or professional
                journey to connect with us, gain valuable experience, and
                explore a fulfilling career.
              </p>
            </div>
          </div>
          <div className="relative translate-x-[60%] w-[599px] h-[599px]">
            <Image
              alt="image"
              src="/circle-dashed.svg"
              width={680}
              height={680}
              className="absolute top-0 left-0"
            />
            <div className="relative translate-x-[-50%] translate-y-[60%] overflow-hidden rounded-full w-[172px] h-[172px] z-40">
              <Image
                alt="image"
                src="/join-our-team-person1.jpg"
                width={680}
                height={680}
                className="absolute top-0 left-0 scale-[1.8]"
              />
            </div>
            <div className="relative translate-x-[40%] translate-y-[250%] overflow-hidden rounded-full w-[115px] h-[115px] z-40">
              <Image
                alt="image"
                src="/join-our-team-person2.jpg"
                width={680}
                height={680}
                className="absolute top-[-15px] left-[-20px] scale-[1.5]"
              />
            </div>
            <Image
              alt="image"
              src="/no-closed-ellipse.png"
              width={500}
              height={500}
              className="absolute rotate-[140deg] w-[430px] h-[430px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20"
            />
            <Image
              alt="image"
              src="/circle_purple.svg"
              width={24}
              height={24}
              className="absolute top-[13%] left-[100px] translate-x-[-50%] translate-y-[-50%] z-10"
            />
            <Image
              alt="image"
              src="/circle_orange.svg"
              width={32}
              height={32}
              className="absolute bottom-[35%] left-[5px] translate-x-[-50%] translate-y-[-50%] z-10"
            />
            <Image
              alt="image"
              src="/circle_yellow_big.svg"
              width={49}
              height={49}
              className="absolute top-[20%] left-[-110px] translate-x-[-50%] translate-y-[-50%] z-10"
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-full  w-[512px] h-[512px]">
              <Image
                alt="image"
                src="/join-our-team.jpg"
                width={3072}
                height={4096}
                className="absolute top-[20%] left-[80%] translate-x-[-70%] scale-[1.4]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] pt-[60px] pb-[120px] mx-auto flex flex-col gap-[48px]">
        <div className="flex flex-col">
          <div className="relative">
            <h2 className="text-[32px] after:content[''] after:absolute after:bottom-[32px] rounded-full after:left-0 after:w-[100px] after:h-[4px] after:bg-[#FFCA1D] font-semibold max-w-[384px] mb-[52px]">
              Open positions
            </h2>
          </div>

          <p className="text-[19px] text-[#585858]">
            Join a dynamic team committed to innovation and growth.
          </p>
        </div>
        <div className="flex justify-between gap-[24px]">
          <div className="hover:border-[#FFCA1D] hover:outline hover:outline-[#FFCA1D] hover:outline-[2px] w-[100%] rounded-[6px] px-[40px] py-[32px] border-[1px] border-[#DCDCE2] flex items-center justify-between">
            <div className="flex flex-col gap-[16px]">
              <span className="font-semibold text-[22px]">HR Recruiter</span>
              <p className="text-[#585858] text-[18px]">Full-time</p>
            </div>
            <Link href="">
              <button className="py-[10px] px-[18px] rounded-[6px] font-semibold hover:bg-[#EEB700] transition-all duration-[.3s] bg-[#FFCA1D]">
                Job requirements
              </button>
            </Link>
          </div>
          <div className="hover:border-[#FFCA1D] hover:outline hover:outline-[#FFCA1D] hover:outline-[2px] w-[100%] rounded-[6px] px-[40px] py-[32px] border-[1px] border-[#DCDCE2] flex items-center justify-between">
            <div className="flex flex-col gap-[16px]">
              <span className="font-semibold text-[22px]">Trainer</span>
              <p className="text-[#585858] text-[18px]">Full-time</p>
            </div>
            <Link href="">
              <button className="py-[10px] px-[18px] rounded-[6px] font-semibold hover:bg-[#EEB700] transition-all duration-[.3s] bg-[#FFCA1D]">
                Job requirements
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeamPage;
