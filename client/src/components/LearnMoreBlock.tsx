import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LearnMoreBlockProps {
  image: string;
  title: string;
  link: string;
}

const LearnMoreBlock = ({ image, title, link }: LearnMoreBlockProps) => {
  return (
    <div className="hover:outline hover:outline-[#FFCA1D] hover:outline-[3px] p-[40px] inline-block w-[384px]  border rounded-[16px] border-[#DCDCE2]">
      <Image
        alt="logo"
        src={image}
        width={64}
        height={64}
        className="mb-[24px]"
      />
      <span className="text-[22px] font-semibold">{title}</span>
      <Link className="flex gap-[4px] items-center mt-[48px]" href={link}>
        <span className="text-[#FFCA1D]">Learn more</span>
        <Image
          alt="arrow"
          src="arrow-right-orange.svg"
          width={14}
          height={14}
        />
      </Link>
    </div>
  );
};

export default LearnMoreBlock;
