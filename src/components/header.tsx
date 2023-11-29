"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="max-w-[1200px] mx-auto pt-[24px] pb-[24px]">
      <div className="flex justify-between items-center">
        <nav>
          <ul className="flex gap-[80px]">
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/about-us"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/about-us"
              >
                About us
              </Link>
            </li>
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/services"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/services"
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/">
          <Image width={206} height={23} src="logo.svg" alt="Logo" />
        </Link>
        <nav className="">
          <ul className="flex gap-[80px]">
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/clients"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/clients"
              >
                Clients
              </Link>
            </li>
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/careers"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/careers"
              >
                Careers
              </Link>
            </li>
            <li className="font-semibold relative">
              <Link
                className={
                  pathname == "/contact"
                    ? "after:content-[''] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]"
                    : "hover:after:content-[''] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]"
                }
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
