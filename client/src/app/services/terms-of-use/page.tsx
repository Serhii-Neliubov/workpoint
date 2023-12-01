import Link from "next/link";
import React from "react";

/* <Link href="/" className="text-[#00173A] font-semibold">
Workpoint.com
</Link>{" "} */

const page = () => {
  return (
    <div>
      <div className="max-w-[1440px] bg-[#4B4AEF] mx-auto">
        <div className="py-[80px]  max-w-[1200px] mx-auto">
          <h1 className="text-white text-[48px] font-semibold">Terms of Use</h1>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-[80px]">
        <div className="flex flex-col gap-[40px]">
          {/*Our site uses cookies.*/}
          <div className="max-w-[1020px]">
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                Welcome to{" "}
                <Link href="/" className="text-[#00173A] font-semibold">
                  Workpoint.com
                </Link>{" "}
                (the “Website”). The Website is owned and operated by{" "}
                <Link href="/" className="text-[#00173A] font-semibold">
                  Workpoint
                </Link>{" "}
                <br />
                (the “Company”, “we”, “our”).
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                Please carefully read the following terms and conditions (the
                “Terms” or “Terms of Use“). The Terms constitute a binding
                agreement between you and the Company. By accessing the Website
                or by using it in any other manner, you signify your acceptance
                of these Terms. If you do not agree to these Terms of Use, you
                may not access the Website or use it in any manner.
              </p>
              <p className=" leading-[150%] text-[18px] text-[#585858]">
                These Terms do not govern the use of the Company’s products and
                services other than the Website itself.
              </p>
            </div>
          </div>
          {/*What is a cookie?*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">About the Website</span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The Website provides content and information about{" "}
                <Link href="/" className="text-[#00173A] font-semibold">
                  Workpoint
                </Link>
                . business. It also provides information about{" "}
                <Link href="/" className="text-[#00173A] font-semibold">
                  Workpoint
                </Link>
                . itself as well as open positions at{" "}
                <Link href="/" className="text-[#00173A] font-semibold">
                  Workpoint
                </Link>
                . The Website’s content is presented for informative purposes
                only.
              </p>
            </div>
          </div>
          {/*How do we use cookies?*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Acceptable use of the Website
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The following terms define the acceptable use of the Website and
                the content available therein. You agree to abide by all
                applicable laws. You further agree that you are solely
                responsible for all acts or omissions associated with your
                access and use of the Website and the access and use of the
                Website by anyone on your behalf.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                While using the Website, you will refrain from –
              </p>
              <nav className="pl-[20px]">
                <ul className=" flex flex-col list-disc gap-[16px]">
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Breaching theses Terms;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Interfering with, burdening or disrupting the functionality
                    of the Website;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Breaching the security of the Website or identifying any
                    security vulnerabilities in it;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Circumventing or manipulating the operation, or
                    functionality of the Website, or attempting to enable
                    features or functionalities that are otherwise disabled,
                    inaccessible or undocumented in the Website;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Using or launching any automated system, including without
                    limitation robots, crawlers and similar applications to
                    collect and compile content from the Website;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Displaying the Website or any part thereof in an exposed or
                    concealed frame, or linking to elements or portions of the
                    Website, independently from the web pages on which they
                    originally appear;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Displaying content from the Website, including by any
                    software, feature, gadget or communication protocol, which
                    may alter the content or its design;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Impersonating any person or entity, or making any false
                    statement pertaining to your identity, employment, agency or
                    affiliation with any person or entity;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Collecting, harvesting, obtaining or processing personal
                    information of or about other users of our Website;
                  </li>
                  <li className="leading-[150%] text-[18px] text-[#585858]">
                    Linking to the Website from web pages that contain
                    pornographic content or content that is unlawful or
                    encourages prohibited activity such as racism or wrongful
                    discrimination.
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*How can I manage cookies?*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">Contact Form</span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                You may contact the Company for any purpose (including any
                suggestion, questions or complaints you may have) by using our
                online ‘Contact Us’ form.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                While completing our online form, we will ask you to provide us
                with certain contact and personal details, such as your full
                name, email address, etc.
              </p>
              <p className=" leading-[150%] text-[18px] text-[#585858]">
                You must submit only true, accurate and complete details. Bear
                in mind that false, incorrect or outdated information may impair
                our ability to contact you.
              </p>
            </div>
          </div>
          {/*General terms and conditions regarding the processing 
of personal data*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">Links</span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The Website may contain links to content published on other
                websites or external sources, provided by third parties. We do
                not operate, or monitor these websites and content. You may find
                them or the information and content posted therein not
                compatible with your requirements, or you may object to their
                content, or find such content to be annoying, improper, unlawful
                or immoral.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                By linking to a certain website, we do not endorse, or sponsor
                its content, or confirm its accuracy, credibility, authenticity,
                reliability, validity, integrity, or legality. We assume no
                responsibility or liability for such third party websites or
                content, or their availability, or for any transactions made
                between you and such third party websites.
              </p>
            </div>
          </div>
          {/*Privacy*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">Privacy</span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The Company respects your privacy. The Website’s privacy policy
                is available here. It forms an integral part of these Terms.
              </p>
            </div>
          </div>
          {/*Intellectual Property*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Intellectual Property
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The intellectual property rights associated with the Website,
                including copyrights, trademarks, trade names, patents, trade
                secrets, work methods and processes, and any other right, are
                the sole property of the Company, or its third party licensors.
                These rights apply, among others, to information, articles,
                images, content, graphic design, data and its processing, domain
                name, the Website’s “look and feel”, computer code and any other
                detail concerning its operation.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                Do not copy, duplicate, distribute, sell, make available, market
                and translate any information, including trademarks, images,
                pictures, texts and computer code from the Website, without the
                Company’s explicit prior and written consent.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                Trademarks on the Website, if any (whether registered or not) as
                well as the Website’s domain name – are the sole property of the
                Company. It is forbidden to use them without the Company’s prior
                written consent.
              </p>
            </div>
          </div>
          {/*Changes and Availability*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Changes and Availability
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                From time to time, we may change the Website’s structure,
                layout, design or display, as well as the scope and availability
                of the information and content therein, without prior notice.
                Changes of this type by their very nature may result in glitches
                or cause inconvenience of some kind.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The operation of the Website depends on various factors such as
                software, hardware and communication networks of the Company,
                its contractors and suppliers. By their nature, these factors
                are not fault free.
              </p>
            </div>
          </div>
          {/*Changes to the Terms*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Changes to the Terms
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                From time to time, the Company may change the Terms by posting
                the amended terms on the Website. Disclaimer of Warranty
              </p>
              <p className="leading-[150%] text-[18px] text-[#00173A]">
                You acknowledge and agree that this website is being provided
                for use “as is” and “with all faults”. You will have no plea,
                claim or demand against the company or its officers, directors,
                shareholders, employees, sub-contractors and agents (“staff”),
                in respect of the website’s content features, abilities,
                limitations or compatibility with your needs. Your use of the
                website and the information contained in the website, is at your
                full and exclusive risk, without warranties of merchantability,
                fitness for a particular purpose, non-infringement,
                compatibility, security or accuracy.
              </p>
              <p className="leading-[150%] text-[18px] text-[#00173A]">
                The company does not warrant, and hereby disclaims any
                warranties, either express or implied, with respect to the
                accuracy, adequacy or completeness of the website, information
                and content obtained from the website or links to other
                websites.
              </p>
            </div>
          </div>
          {/*Limitation of Liability*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Limitation of Liability
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#00173A]">
                To the greatest extent permissible under applicable law, the
                company and its staff, shall not be liable to you, to the
                maximum extent permitted by applicable law, for any direct,
                indirect, special, punitive, exemplary, statutory, incidental or
                consequential damage, or any similar damage or loss, including
                loss of profit and loss of data, costs, expenses and payments,
                either in tort (including negligence), contract, or in any other
                form or theory of liability, arising from, or in connection with
                the website, the use of, or the inability to use the website, or
                from any failure, error, or breakdown in the function of the
                website, or from any fault, or error made by our staff, or from
                your reliance on content available on or through the website, or
                from any communication with the website or the company, or from
                retention, deletion, disclosure and any other use or loss of
                content or information.
              </p>
            </div>
          </div>
          {/*Applicable Law and Jurisdiction*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">
              Applicable Law and Jurisdiction
            </span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                These Terms shall be governed solely by the laws of the{" "}
                <span className="text-[#00173A] font-semibold">Romania</span>.
              </p>
              <p className="leading-[150%] text-[18px] text-[#585858]">
                The competent courts in{" "}
                <span className="text-[#00173A] font-semibold">Romania</span>.
                will have sole and exclusive personal jurisdiction over any
                claims or disputes related to or in connection with this Website
                or these Terms.
              </p>
            </div>
          </div>
          {/*Contact us*/}
          <div className="max-w-[1020px]">
            <span className="text-[32px] font-semibold">Contact us</span>
            <div className="mt-[32px] flex flex-col gap-[24px] ">
              <p className="leading-[150%] text-[18px] text-[#585858]">
                You may contact us with any questions or comments at:
                <span className="text-[#00173A] font-semibold">
                  office@Workpoint.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
