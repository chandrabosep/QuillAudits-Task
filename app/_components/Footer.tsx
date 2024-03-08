import { LucideMail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full hero-bg p-6">
      <div className="flex flex-col gap-8 max-w-screen-xl m-auto text-white">
        <div className="w-fit">
          <Image
            src="/logo.svg"
            alt="logo"
            width={2000}
            height={2000}
            className="w-56"
          />
          <p className="text-[#EAEAEA] text-sm font-light w-fit ml-auto">
            Making web3 a safer place
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col col-span-2 md:col-span-1 gap-6 order-5 md:order-1">
            <div className="space-y-4 ">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                More About Quill
              </h6>
              <div className="space-y-2">
                {["About Us", "FAQs", "Blockchains We Audit"].map((item) => (
                  <p className="text-[#F1F1F1] text-sm">{item}</p>
                ))}
              </div>
              <div className="space-y-4 ">
                <div className="font-medium">Contact Us:</div>
                <div className="space-y-2">
                  {[
                    { icon: "./Email.svg", text: "audits@quillhash.com" },
                    {
                      icon: "./Telegram.svg",
                      text: "t.me/quillaudits",
                    },
                  ].map(({ icon, text }) => (
                    <div className="flex items-center gap-2">
                      <Image
                        src={icon}
                        alt="icon"
                        className="w-4"
                        width={2000}
                        height={2000}
                      />
                      <a className="text-[#F1F1F1] text-lg underline underline-offset-2 font-light">
                        {text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <Image
                  src={"./Location.svg"}
                  alt="icon"
                  className="w-3"
                  width={2000}
                  height={2000}
                />
                <div className="font-medium">Our Location:</div>
              </div>
              <p className="max-w-52 text-balance font-light">
                {`Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
              Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box:
              416654`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <div className="space-y-4">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                Audit Services
              </h6>
              <div className="space-y-2">
                {[
                  "Ethereum Audit",
                  "Polygon Audit",
                  "BSC Audit",
                  "Solana Audit",
                  "NEAR Audit",
                  "Algorand Audit",
                  "Tezos Audit",
                  "Hyperledger Fabric Audit",
                  "L1 Audit",
                  "Polkadot Audit",
                  "Wallet Audit",
                  "ZkSync Audit",
                  "Starknet Audit",
                ].map((item) => (
                  <p className="text-[#F1F1F1] text-base">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 order-2 md:order-3">
            <div className="space-y-4">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                Quill Ecosystem
              </h6>
              <div className="space-y-2">
                {[
                  "QuillAI",
                  "QuillCheck",
                  "QuillShield",
                  "QuillAcademy",
                  "QuillMonitor",
                  "Web3Suggest",
                  "Explore All Tools",
                ].map((item) => (
                  <p className="text-[#F1F1F1] text-base">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 order-3 md:order-4">
            <div className="space-y-4">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                Other Services
              </h6>
              <div className="space-y-2">
                {[
                  "Red Teaming",
                  "dApp Pentesting",
                  "DeFi Diligence",
                  "NFT Due Diligence",
                  "Rug Pull Due Diligence",
                  "Security Consultation",
                  "Blockchain Forensics",
                  "KYC (Know Your Customer)",
                ].map((item) => (
                  <p className="text-[#F1F1F1] text-base">{item}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-4 md:order-5">
            <div className="space-y-4">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                Quick Links
              </h6>
              <div className="space-y-2">
                {[
                  "Pricing",
                  "Audit Process",
                  "Our Audits",
                  "Testimonials",
                  "Security Synopsis",
                  "Blog",
                  "Clients",
                ].map((item) => (
                  <p className="text-[#F1F1F1] text-base">{item}</p>
                ))}
                <div className="space-x-2">
                  <span>Careers</span>
                  <span className="py-0.5 px-2 bg-blue-500 rounded-md">
                    Hiring
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3 order-6 md:order-6">
            <div className="space-y-4">
              <h6 className="font-medium text-lg border-b-2 w-fit border-[#2D83EE]">
                Our Programmes
              </h6>
              <div className="flex gap-2 flex-wrap">
                {[
                  { name: "Refer-Earn-Secure", link: "" },
                  { name: "WAGSI Grants", link: "" },
                  { name: "Ambassador Program", link: "" },
                  { name: "Partnership Program", link: "" },
                ].map((item) => (
                  <a
                    href={item.link}
                    className="text-xs !font-normal grad-btn w-fit"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 items-center">
            <Image
              src="/defifinance.png"
              alt="defifinance"
              className="w-24 md:w-40"
              width={2000}
              height={2000}
            />
            <Image
              src="/ts.png"
              alt="defifinance"
              className="w-24 md:w-40"
              width={2000}
              height={2000}
            />
          </div>
          <div className="flex items-center pt-10 md:pt-0 gap-6">
            {[
              { icon: "./x.svg", link: "" },
              { icon: "./linkedin.svg", link: "" },
              { icon: "./Telegram.svg", link: "" },
              { icon: "./reddit.svg", link: "" },
              { icon: "./medium.svg", link: "" },
              { icon: "./discord.svg", link: "" },
              { icon: "./yt.svg", link: "" },
            ].map((item) => (
              <Image
                src={item.icon}
                alt="icon"
                className="w-4 md:w-6"
                width={2000}
                height={2000}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between border-t-[0.5px] border-white/30 pt-4">
          <p className="font-light text-center text-sm">
            All Rights Reserved. © Copyright 2024. QuillAudits - LLC
          </p>
          <p className="font-light text-sm">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
