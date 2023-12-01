"use client";
import React from "react";

// STYLES
import "@/styles/checkbox_styles.scss";
import ContactUsForm from "@/components/ContactUsForm";

const HRRecruiterPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between pt-[60px] pb-[120px]">
        <div className="max-w-[588px]">
          <h1 className="mb-[32px] text-[48px] font-semibold">Trainer</h1>
          <span className="text-[32px] font-semibold">Responsibilities:</span>
          <nav className="pl-[18px] mt-[24px] mb-[32px]">
            <ul className="list-disc flex flex-col gap-[8px]">
              <li className="text-[18px]">
                Developing a schedule for assessing training needs.
              </li>
              <li className="text-[18px]">
                Conducting systematic training sessions for employees.
              </li>
              <li className="text-[18px]">
                Collaborating with fellow trainers and management to address any
                new developments impacting the company.
              </li>
              <li className="text-[18px]">
                Crafting training materials grounded in factual research.
              </li>
            </ul>
          </nav>
          <span className="text-[32px] font-semibold">
            Candidate / Profile Skills:
          </span>
          <nav className="pl-[18px] mt-[24px] mb-[32px]">
            <ul className="list-disc flex flex-col gap-[8px]">
              <li className="text-[18px]">
                12 months – 2 years of prior experience (preferably in Training,
                but not mandatory).
              </li>
              <li className="text-[18px]">Effective communication skills.</li>
              <li className="text-[18px]">Strong organizational abilities.</li>
              <li className="text-[18px]">
                Proficient in Advanced Research Skills.
              </li>
              <li className="text-[18px]">
                Enthusiasm for learning is a valued quality.
              </li>
            </ul>
          </nav>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default HRRecruiterPage;
