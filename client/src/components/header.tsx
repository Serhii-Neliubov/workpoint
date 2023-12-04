'use client';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import '@/styles/headerstyles.scss';

const Header = () => {
    const pathname = usePathname();
    const [isActiveServiceTab, setIsActiveServiceTab] = useState<boolean>(false);
    const [isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(true);

    const handleBurger = () => {
        setIsBurgerMenuActive(prevState => !prevState);
        if (typeof window !== 'undefined') {
            document.body.style.overflow = isBurgerMenuActive ? 'hidden' : 'visible';
        }
    };

    return (
        <header className="h-[75px]">
            <div className={'desktop-header '}>
                <ul className="flex gap-[80px] max-[1050px]:gap-[40px] items-center">
                    <li className="font-semibold relative">
                        <Link
                            className={
                                pathname == '/'
                                    ? 'after:content-[\'\']  after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="font-semibold relative">
                        <Link
                            className={
                                pathname == '/about-us'
                                    ? 'after:content-[\'\'] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/about-us"
                        >
                            About us
                        </Link>
                    </li>
                    <li className="itemWithOptions font-semibold relative flex gap-[8px] py-[8px]"
                        onClick={() => setIsActiveServiceTab(!isActiveServiceTab)}
                        onMouseMove={() => setIsActiveServiceTab(true)}
                        onMouseLeave={() => setIsActiveServiceTab(false)}
                    >
                        <Link
                            className={
                                pathname == '/services' ||
                                pathname == '/services/privacy-policy' ||
                                pathname == '/services/human-resources' ||
                                pathname == '/services/executive-recruitment' ||
                                pathname == '/services/management-consulting' ||
                                pathname == '/services/training'
                                    ? 'relative after:content-[\'\'] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'relative hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/services"

                        >
                            Services
                        </Link>
                        <Image
                            src={`${isActiveServiceTab || pathname.startsWith('/services') ? '/caret-down.svg' : '/career-black.svg'}`}
                            alt={'career'} width={16} height={16}/>
                        <div
                            className={`iOptionsContainer absolute top-[40px] left-0 w-[100%] min-w-[246px] bg-white z-[100]  rounded-b-lg `}
                            style={{display: isActiveServiceTab ? 'block' : 'none'}}

                        >
                            <ul className="flex flex-col gap-[16px] p-[16px]">
                                <li className="font-semibold relative">
                                    <Link
                                        className={
                                            ' py-[16px] text-[#00173A]'
                                        }
                                        onClick={() => setIsActiveServiceTab(false)}
                                        href="/services/human-resources"
                                    >
                                        Human Resources
                                    </Link>
                                </li>
                                <li className="font-semibold relative">
                                    <Link
                                        className={' py-[16px] text-[#00173A]'}
                                        href="/services/executive-recruitment"
                                        onClick={() => setIsActiveServiceTab(false)}
                                    >
                                        Executive recruitment
                                    </Link>
                                </li>
                                <li className="font-semibold relative">
                                    <Link
                                        className={' py-[16px] text-[#00173A]'}
                                        href="/services/management-consulting"
                                        onClick={() => setIsActiveServiceTab(false)}
                                    >
                                        Management consulting
                                    </Link>
                                </li>
                                <li className="font-semibold relative">
                                    <Link
                                        className={' py-[16px] text-[#00173A]'}
                                        href="/services/training"
                                        onClick={() => setIsActiveServiceTab(false)}
                                    >
                                        Training
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                </ul>

                <Link href="/">
                    <Image width={206} height={23} src="/logo.svg" alt="Logo"/>
                </Link>

                <ul className="flex gap-[80px] max-[1050px]:gap-[40px]">
                    <li className="font-semibold relative">
                        <Link
                            className={
                                pathname == '/clients'
                                    ? 'after:content-[\'\'] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/clients"
                        >
                            Clients
                        </Link>
                    </li>
                    <li className="font-semibold relative">
                        <Link
                            className={
                                pathname == '/careers' ||
                                pathname == '/careers/join-our-team' ||
                                pathname == '/careers/join-our-team/hr-recruiter' ||
                                pathname == '/careers/join-our-team/hr-recruiter'
                                    ? 'after:content-[\'\'] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/careers/join-our-team"
                        >
                            Careers
                        </Link>
                    </li>
                    <li className="font-semibold relative">
                        <Link
                            className={
                                pathname == '/contact'
                                    ? 'after:content-[\'\'] after:text-red-500 after:absolute after:bottom-[-8px] after:left-0 after:bg-[#FFCA1D] after:w-[100%] after:h-[3px]'
                                    : 'hover:after:content-[\'\'] hover:after:text-red-500 hover:after:absolute hover:after:bottom-[-8px] hover:after:left-0 hover:after:bg-[#FFCA1D] hover:after:w-[100%] hover:after:h-[3px]'
                            }
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={'mobile-header'}>
                <Link href="/">
                    <Image width={150} className={'relative z-50'} height={23} src="/logo.svg"
                           alt="Logo"/>
                </Link>
                <Image src={isBurgerMenuActive ? '/burger-menu.svg' : '/close.svg'} alt={'/burger-menu.svg'}
                       width={40}
                       height={40} className={'relative z-50'}
                       onClick={handleBurger}/>
                <ul className={`flex z-40  flex-col items-center transition-transform fixed top-[0px] pt-[80px] pb-[10px]  left-0 w-[100vw] bg-white translate-y-0 ${isBurgerMenuActive && 'translate-y-[-150%]'}`}>
                    <li className="font-semibold relative p-[12px]"
                    >
                        <Link
                            onClick={handleBurger}
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="font-semibold relative p-[12px]">
                        <Link
                            onClick={handleBurger}
                            href="/about-us"
                        >
                            About us
                        </Link>
                    </li>
                    <li className="font-semibold relative p-[12px]"


                    >
                        <Link
                            href="/services"
                            onClick={handleBurger}
                        >
                            Services
                        </Link>
                    </li>
                    <li className="font-semibold relative p-[12px]">
                        <Link
                            onClick={handleBurger}
                            href="/clients"
                        >
                            Clients
                        </Link>
                    </li>
                    <li className="font-semibold relative p-[12px]">
                        <Link
                            onClick={handleBurger}
                            href="/careers/join-our-team"
                        >
                            Careers
                        </Link>
                    </li>
                    <li className="font-semibold relative p-[12px]">
                        <Link
                            onClick={handleBurger}
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
