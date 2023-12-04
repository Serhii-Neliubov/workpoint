import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F8F8F8] py-[40px] pb-[40px]">
      <div className="max-w-[1280px] px-[40px] w-full max-[650px]:px-[16px] mx-auto">
        <div className="flex justify-between max-[772px]:flex-col max-[772px]:items-center max-[772px]:gap-[32px]">
          <Link href="/" className="min-w-[186px]">
            <Image width={206} height={23} src="/logo.svg" alt="Logo" />
          </Link>
          <nav>
            <ul className="flex max-[982px]:gap-[24px] gap-[48px] max-[772px]:flex-wrap max-[772px]:justify-center">
              <li>
                <Link href="/" >Home</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/clients">Clients</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between mt-[24px] max-[643px]:flex-col-reverse max-[643px]:items-center max-[643px]:gap-[16px]">
          <span className={'text-center'}>Copyright © 2023. All rights reserved.</span>
          <nav>
            <ul className="flex gap-[40px]">
              <li>
                <Link href="/services/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/services/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
