import { LucideStar } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DescCard() {
  return (
    <div className="w-10/12 md:float-left mx-auto md:w-4/6 border flex flex-col">
      <div className="relative bg-card-grad w-full px-4 py-4  text-white rounded-t-md">
        <Image
          src="/quote.svg"
          alt="quote"
          width={2000}
          height={2000}
          className="w-9 fill-white"
        />
        <div className="w-10/12 pt-10 mx-auto">
          <h6 className="font-semibold text-xl">Sally Radley</h6>
          <p className="font-light">WebGFi - CEO</p>
        </div>
        <div className="absolute h-24 w-24 md:w-40 md:h-40 bg-blue-900 right-8 md:right-10 rounded-md top-[4.5rem] md:top-8 mx-auto"></div>
      </div>
      <div className="bg-white w-full px-4 py-4">
        <div className="w-10/12 mx-auto space-y-2 md:space-y-6">
          <Image
            src="/stars.svg"
            alt="review"
            className="w-1/3"
            width={2000}
            height={2000}
          />
          <p>
            {`“It felt like the auditing team was available within a short
            timeframe, which was excellent. The auditing process looked
            thorough, and I really appreciate the fact that you took time to
            investigate GAS optimizations.”`}
          </p>
        </div>
        <div className="text-blue-500">
          <Image
            src="/quote-r.svg"
            alt="quote"
            width={2000}
            height={2000}
            className="w-9 float-right"
          />
        </div>
      </div>
    </div>
  );
}
