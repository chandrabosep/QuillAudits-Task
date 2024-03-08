import React from "react";
import Image from "next/image";
import { Jost, Poppins } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <div className=" max-w-screen-2xl m-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10">
        <div className="w-11/12 md:w-fit space-y-4 relative !z-0 flex flex-col items-center">
          <div className="md:h-[25rem] w-full max-w-sm py-4  flex flex-col items-center justify-between bg-hero-img-grad rounded-md">
            <div className="w-3/6 md:w-5/6 pt-10 md:pt-8 h-full flex">
              <Image
                src="/CD-Pension.png"
                alt="CD-Pension"
                className="w-fit py-8 m-auto"
                width={2000}
                height={2000}
              />
            </div>

            <p
              className={`${poppins.className} w-9/12 md:w-8/12 ml-10 self-start text-xs md:text-sm line-clamp-4 md:line-clamp-none `}
            >
              Carpe Diem Pension, a blockchain-based retirement fund, offers
              permanent payouts through CDP deposits, with a 4.32% annual
              inflation claimable by depositors.
            </p>
          </div>
          <div className="text-xs self-start md:text-base w-full max-w-lg md:m-auto">
            <span className="text-white/40">{`QuillAudits -> Resources -> `}</span>
            <span className="">Case Studies</span>
          </div>
          <div className="absolute w-32 -right-4 md:-right-10 bg-white rounded-lg px-1 md:px-2 py-1.5 md:py-2">
            <Image
              src="/CD-Pension-black.png"
              alt="CD-Pension"
              className="w-11/12 md:w-10/12"
              width={2000}
              height={2000}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 py-6 md:py-0 w-11/12 md:w-1/3">
          <h3
            className={`${jost.className} text-xl md:text-2.5xl w-full max-w-lg`}
          >
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h3>
          <p
            className={`${poppins.className}text-sm font-normal w-full max-w-sm `}
          >
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
    </div>
  );
}
