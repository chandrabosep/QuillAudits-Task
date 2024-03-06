import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:px-24 max-w-screen-2xl m-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10">
        <div className="w-11/12 md:w-fit relative space-y-4 flex flex-col items-center">
          <div className="md:h-96 w-full md:w-11/12 max-w-md py-4  flex flex-col items-center justify-between bg-hero-img-grad rounded-md">
            <div className="w-3/6 md:w-4/6 pt-10 md:pt-8 h-full flex">
              <Image
                src="/CD-Pension.png"
                alt="CD-Pension"
                className="w-fit py-8 m-auto"
                width={2000}
                height={2000}
              />
            </div>

            <p className="w-9/12 md:w-8/12 ml-10 self-start text-xs md:text-sm line-clamp-4 md:line-clamp-none ">
              Carpe Diem Pension, a blockchain-based retirement fund, offers
              permanent payouts through CDP deposits, with a 4.32% annual
              inflation claimable by depositors.
            </p>
          </div>
          <div className="text-xs self-start md:text-base md:w-11/12 max-w-lg md:m-auto">
            <span className="text-white/40">{`QuillAudits -> Resources -> `}</span>
            <span className="">Case Studies</span>
          </div>
          <div className="absolute w-32 md:w-40 -right-6 md:-right-10 bg-white rounded-lg px-1 md:px-2 py-1.5 md:py-3">
            <Image
              src="/CD-Pension-black.png"
              alt="CD-Pension"
              className="w-11/12 md:w-10/12"
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 py-6 md:py-0 w-11/12 md:w-1/2">
          <h3 className="text-xl md:text-3xl w-full md:w-10/12 max-w-lg font-semibold">
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h3>
          <p className="text-sm font-normal w-full md:w-9/12 max-w-sm ">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
    </div>
  );
}