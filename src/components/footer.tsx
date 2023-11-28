import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-[40px] pb-[40px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <Link href="/" className="">
            <Image width={206} height={23} src="logo.svg" alt="Logo" />
          </Link>
          <nav>
            <ul className="flex gap-[48px]">
              <li>
                <Link href="/">Home</Link>
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
        <div className="flex justify-between mt-[24px]">
          <span>Copyright © 2023. All rights reserved.</span>
          <nav>
            <ul className="flex gap-[40px]">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
