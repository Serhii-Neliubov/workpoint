"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import "@/styles/checkbox_styles.scss";
import axios from "axios";

interface SendingData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  description: string;
  file: string;
  privacyPolicy: boolean;
}

const clearData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  description: "",
  file: "",
  privacyPolicy: false,
};

const ContactUsForm = () => {
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [policyChecked, setPolicyChecked] = useState<boolean>(
    clearData.privacyPolicy
  );
  const [sendingData, setSendingData] = useState<SendingData>(clearData);
  // Upload file input functional
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    setSendingData({ ...sendingData, file: e.target.value });

    if (fileInput.files && fileInput.files.length > 0) {
      setFileName(fileInput.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  function sendingRequestHandler() {
    if (
      sendingData.name &&
      sendingData.description &&
      sendingData.email &&
      sendingData.phone &&
      sendingData.surname &&
      policyChecked == true
    ) {
      console.log(sendingData);
      axios
        .post("http://localhost:3001/users", sendingData)
        .then((response) => {
          console.log(response.data);
          // Добавьте дополнительную логику, если необходимо
        })
        .catch((error) => {
          console.error("Error:", error);
          // Добавьте обработку ошибок
        });
      setSendingData(clearData);
      setPolicyChecked(false);
    }
  }
  return (
    <div className="box-shadow-custom shadow flex flex-col relative z-10 bg-white pt-[56px] pb-[56px] pl-[40px] pr-[40px] rounded-[16px]">
      <div className="max-w-[406px] overflow-hidden">
        <div className="mb-[24px] flex-col flex gap-[16px]">
          <div className=" flex gap-[16px]">
            <input
              onChange={(e) =>
                setSendingData({ ...sendingData, name: e.target.value })
              }
              value={sendingData.name}
              className="rounded-[5px] border-[1px] border-[#DCDCE2] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) =>
                setSendingData({ ...sendingData, surname: e.target.value })
              }
              value={sendingData.surname}
              className="rounded-[5px] border-[1px] border-[#DCDCE2] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
              type="text"
              placeholder="Surname"
            />
          </div>
          <div className="flex gap-[16px]">
            <input
              onChange={(e) =>
                setSendingData({ ...sendingData, email: e.target.value })
              }
              value={sendingData.email}
              className="rounded-[5px] border-[1px] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setSendingData({ ...sendingData, phone: e.target.value })
              }
              value={sendingData.phone}
              className="rounded-[5px] border-[1px] w-[195px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <textarea
            onChange={(e) =>
              setSendingData({ ...sendingData, description: e.target.value })
            }
            value={sendingData.description}
            className="rounded-[5px] border-[1px] resize-none h-[180px] pt-[12px] pb-[12px] pr-[16px] pl-[16px]"
            placeholder="Let us know how we can help"
          />
        </div>
        <span className="font-semibold text-[#00173A]">
          Attach relevant files:
        </span>
        <div className="mt-[16px] mb-[32px] relative flex items-center gap-[16px]">
          <div className="relative">
            <Image
              className="absolute top-[50%] left-[7%]  translate-y-[-50%]"
              alt="upload file image"
              src="/cloud-upload.svg"
              width={16}
              height={16}
            />
            <label
              htmlFor="fileInput"
              className="whitespace-nowrap cursor-pointer hover:bg-[#ededed] hover:bg-opacity-[60%] transition-all duration-[.3s] border-[1px] bg-[#F8F8F8] text-[#585858]  py-[6px] pr-[12px] pl-[32px] inline-block"
            >
              Upload file
            </label>
          </div>

          <input
            onChange={handleFileChange}
            id="fileInput"
            type="file"
            className="hidden"
          />
          <span id="fileName" className="ml-2 text-[#585858] whitespace-nowrap">
            {fileName}
          </span>
        </div>
        <div className="flex mb-[32px] gap-[10px]">
          <label className="container mt-5 w-21 h-21 relative cursor-pointer">
            <input
              type="checkbox"
              checked={policyChecked}
              onChange={(e) => setPolicyChecked(e.target.checked)}
              className="absolute opacity-0 cursor-pointer h-0 w-0"
            />
            <span className="checkmark absolute top-0 left-0 h-21 w-21 border-2 border-yellow-500 rounded-md"></span>
            <span className="checkmark-icon absolute hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              &#10003;
            </span>
          </label>

          <span className="max-w-[370px] text-[#585858]">
            I have read and agree with{" "}
            <span className="font-semibold text-[#00173A]">{`Workpoint's`}</span>{" "}
            <Link
              href="/services/privacy-policy"
              className="underline text-[#00173A]"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/services/terms-of-use"
              className="underline text-[#00173A]"
            >
              Terms of Use!
            </Link>
          </span>
        </div>
        <button
          onClick={sendingRequestHandler}
          className="hover:bg-[#EEB700] transition-all duration-[.3s] w-[100%] py-[14px] font-semibold rounded-[8px] bg-[#FFCA1D]"
        >
          Send your request
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
