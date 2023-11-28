import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
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
      <div className="max-w-[1200px] items-center pt-[80px] pb-[80px] mx-auto flex justify-between">
        <div className="flex flex-col">
          <h2 className=" font-semibold max-w-[384px] text-[32px] mb-[52px]">
            Services that will help you take your vision a step further
          </h2>
          <p className="text-[18px] max-w-[360px] text-[#585858]">
            Navigate the possibilities with our range of services.
          </p>
          <button className="mt-[20px] rounded w-[95px] text-[15px] pt-[10px] pb-[10px] font-semibold bg-[#FFCA1D]">
            Services
          </button>
        </div>
        <div className="flex gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="hover:border-[#FFCA1D] hover:border-[1px] p-[40px] inline-block w-[384px]  border rounded-[16px] border-[#DCDCE2]">
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
            <div className="hover:border-[#FFCA1D] hover:border-[1px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
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
            <div className="hover:border-[#FFCA1D] hover:border-[1px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
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
            <div className="hover:border-[#FFCA1D] hover:border-[1px] w-[384px] p-[40px] border rounded-[16px] border-[#DCDCE2]">
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
      <div className="pt-[40px] pb-[40px] bg-[#F8F8F8] max-w-[1440px] mx-auto">
        <div className="max-w-[1200px] mx-auto">123</div>
      </div>
      <Footer />
    </div>
  );
}
