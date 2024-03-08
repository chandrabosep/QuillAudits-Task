import Image from "next/image";
import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-full bg-[#EDF2FE]">
      <div className="w-11/12 md:w-8/12 mx-auto py-14 space-y-16 flex flex-col md:flex-row">
        <div className="w-11/12 mx-auto md:w-fit flex flex-col gap-4 md:gap-0 justify-evenly">
          <p className="uppercase font-semibold text-[#407AFF]">Newsletter</p>
          <h4 className="text-[#14316C] text-2xl font-bold md:text-2.5xl max-w-sm">
            Security First News Letter by QuillAudits
          </h4>
          <p className="max-w-sm">
            Subscribe for the most Exclusive Weekly security based newsletter
            and covering all the recent hacks up to date.
          </p>
        </div>
        <div className="md:w-1/2 mx-auto flex flex-col items-center gap-2">
          <Image
            src="/news.svg"
            alt="newsletter"
            className="md:w-11/12"
            width={5000}
            height={5000}
          />
          <div className="md:w-10/12  px-2 bg-white rounded-lg flex justify-between items-center">
            <input
              type="text"
              placeholder="vitalik@ethereum.org"
              className="h-12 "
            />
            <button className="grad-btn text-sm !py-2 h-fit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
