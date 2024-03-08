import Image from "next/image";
import React from "react";
import { desc2 } from "../_utils/descContent";
import DescCard from "./DescCard";

export default function Description() {
  return (
    <div className="md:w-7/12 py-4 space-y-14 md:space-y-28">
      <div className="flex m-auto ">
        <div className="w-10/12 space-y-6  md:w-3/4 m-auto">
          <p className="max-w-xl">
            Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
            self-managed, inclusive, globally portable fund. Unique for its
            token burn mechanism, it ensures a sustainable 4.32% inflation
            payout. With $143.11k and 41.06% of CDP already burned, it serves 35
            users globally.
          </p>
          {[
            {
              head: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
              desc: "CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.",
              img: "/cdp1.png",
            },
            {
              head: "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
              desc: "CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.",
              img: "/cdp2.png",
            },
          ].map((e) => (
            <div className="space-y-8 py-4">
              <h2 className="max-w-xl text-3xl font-bold">{e.head}</h2>
              <p className="max-w-xl">{e.desc}</p>
              <Image
                src={e.img}
                alt="cdp"
                className="w-full md:w-10/12"
                height={2000}
                width={2000}
              />
            </div>
          ))}
          <div>
            <h2 className="max-w-xl text-3xl font-bold">
              CarpeDiem Pension's Journey Through our Audit Process
            </h2>
            {desc2.map((e) => (
              <div className="space-y-6 py-4">
                <h5 className="text-xl font-bold">{e.title}</h5>
                {e.sub && <p>{e.sub}</p>}
                <ul className="max-w-xl w-fit space-y-4 list-disc pl-4">
                  {e.list.map((e) => (
                    <>{e}</>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="max-w-xl text-3xl font-bold">
              QuillAudits' Strategic Approach to CDP Security Audits
            </h2>
            <p className="max-w-xl">
              We prioritize threat modeling based on platform-specific risks.
              Security-first, we identify and mitigate vulnerabilities beyond
              functionality testing. Using white-box and black-box tests, we
              conduct thorough vulnerability assessments. Maintaining
              transparency, we communicate openly with the CDP team. Emphasizing
              clarity, we present actionable insights for efficient issue
              resolution.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="max-w-xl text-3xl font-bold">
              Comprehensive Audit Discoveries and Remediation Strategies
            </h2>
            <p className="max-w-xl">
              Throughout the audit process, we unearthed a total of 33 issues,
              spanning from minor concerns to critical vulnerabilities. Among
              these, some of the critical issues identified were: Here's how we
              remediated them :
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Unauthorized Claim/Compound:",
                  desc: "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.",
                },
                {
                  title: "Precision Loss in mintCDP():",
                  desc: "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.",
                },
                {
                  title: "Multiplication Accuracy:",
                  desc: "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.",
                },
                {
                  title: "Incorrect Share Allocation:",
                  desc: "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.",
                },
                {
                  title: "Logic Error in Referral Handling:",
                  desc: "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system",
                },
                {
                  title: "Referral Exploitation:",
                  desc: "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.",
                },
              ].map((e) => (
                <>
                  <li className="list-decimal font-semibold">{e.title}</li>
                  <span className="flex ml-4">
                    <span>a.</span>
                    <p className="pl-2">{e.desc}</p>
                  </span>
                </>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="max-w-xl text-3xl font-bold">
              Remediation & Impact:
            </h2>
            <p className="max-w-xl">
              All identified vulnerabilities were addressed by the CDP team,
              significantly enhancing the smart contract's security posture. Key
              improvements include
            </p>
            <ul className="pl-4 space-y-2.5">
              {[
                "Implementation of reentrancy protection mechanisms.",
                "Accurate handling of decimal values using established libraries or best practices.",
                "Revised calculations with proper scaling factors",
                "Fixing logic errors to ensure deposits and waiting periods are enforced.",
                "Addressing referral system vulnerabilities to prevent abuse.",
              ].map((e) => (
                <li className="list-disc">{e}</li>
              ))}
            </ul>
          </div>
          <div className="max-w-xl text-wrap">
            <span className="font-bold">Embed this tweet:-</span>
            <a
              target="_blank"
              href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
              className="text-[#204ECF] font-semibold"
            >
              https://x.com/CarpeDiemCDP/status/ 1742906560794296402?s=20
            </a>
          </div>
          <p>
            CDP smart contract audit revealed and fixed critical
            vulnerabilities, safeguarding funds and ensuring platform stability.
            This underscores the need for proactive security in blockchain
            projects, crucial for financial asset management. Through audits and
            issue resolution, CDP reinforces platform security, bolstering user
            trust.
          </p>
        </div>
        <div className="hidden md:block w-1/4 py-8">
          <div className="space-y-3 p-2 rounded-lg border border-[#2d83ee]">
            <div>
              <p className="text-black/50">Headquarters</p>
              <h6 className="font-medium">Switzerland</h6>
            </div>
            <div>
              <p className="text-black/50">Chain</p>
              <h6 className="font-medium">Pulse Blockchain</h6>
            </div>
          </div>
        </div>
      </div>
      <DescCard />
    </div>
  );
}
