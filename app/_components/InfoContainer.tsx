import React from "react";

export default function InfoContainer() {
  return (
    <div className="w-full md:w-7/12 m-auto py-10">
      <div className=" max-w-screen-md m-auto md:h-96 lg:h-64 flex flex-col md:flex-row  gap-10 my-10 text-[#00000A]">
        <div className="w-10/12 md:w-2/3 m-auto py-2 flex flex-col gap-6">
          <h4 className="bg-[#FFABC9] font-bold px-1">Before QuillAudits</h4>
          <p className="md:min-h-[5rem]">
            Exploits like reentrancy and front-running can let attackers
            withdraw extra funds and manipulate transaction timing for unfair
            gains
          </p>
          <p>
            Vulnerabilities could allow users to mint CDP tokens or pension
            shares indefinitely, disrupting the system's economic balance.
          </p>
        </div>
        <div className="hidden md:flex w-0.5 h-full bg-[#E0E0E4]" />
        <div className="w-10/12 md:w-2/3 m-auto py-2 flex flex-col gap-6">
          <h4 className="bg-[#ABCDFF] font-bold px-1">After QuillAudits</h4>
          <p className="md:min-h-[5rem]">
            Implementation of reentrancy protection mechanisms.
          </p>
          <p>
            Ensure precision in decimal handling with standard libraries,
            recalculate accurately, fix logic errors, and secure referral
            systems against exploitation.
          </p>
        </div>
      </div>
      <div className="w-11/12 max-w-screen-sm m-auto flex flex-col items-center gap-6">
        <h2 className="text-xl md:text-3xl font-bold text-center text-[#0E3088]">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </h2>
        <button className="grad-btn">Request An Audit</button>
      </div>
    </div>
  );
}
