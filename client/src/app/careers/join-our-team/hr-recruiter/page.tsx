"use client";
import React from "react";

// STYLES
import "@/styles/checkbox_styles.scss";
import ContactUsForm from "@/components/ContactUsForm";

const HRRecruiterPage = () => {
  return (
    <div className="max-w-[1280px] px-[40px] max-[650px]:px-[16px] w-full mx-auto">
      <div className="flex justify-between pt-[60px] pb-[120px] gap-[30px] max-[988px]:flex-col">
        <div className="flex-[0_1_50%]">
          <h1 className="mb-[32px] text-[48px] font-semibold">HR Recruiter</h1>
          <span className="text-[32px] font-semibold">Responsibilities:</span>
          <nav className="pl-[18px] mt-[24px] mb-[32px]">
            <ul className="list-disc flex flex-col gap-[8px]">
              <li className="text-[18px]">
                Utilizing external and internal platforms to promote open
                positions.
              </li>
              <li className="text-[18px]">
                Conducting thorough candidate screening through both telephone
                and face-to-face interviews.
              </li>
              <li className="text-[18px]">
                Providing strategic consulting to management regarding
                recruitment approaches.
              </li>
              <li className="text-[18px]">
                Managing candidate scheduling and facilitating the final
                selection process.
              </li>
            </ul>
          </nav>
          <span className="text-[32px] font-semibold">
            Candidate / Profile Skills:
          </span>
          <nav className="pl-[18px] mt-[24px] mb-[32px]">
            <ul className="list-disc flex flex-col gap-[8px]">
              <li className="text-[18px]">
                Previous experience of 12 months – 2 years (preferably in
                Recruitment, but not mandatory).
              </li>
              <li className="text-[18px]">Exceptional communication skills.</li>
              <li className="text-[18px]">Proficiency in Advanced English.</li>
            </ul>
          </nav>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default HRRecruiterPage;
