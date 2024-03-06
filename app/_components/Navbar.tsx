"use client";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-11/12 mx-auto py-6 flex items-center justify-between">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-[10rem] z-20 order-1 lg:w-[11rem]"
        width={2000}
        height={2000}
      />
      <button className="grad-btn max-sm:hidden z-20 order-2 lg:order-3 ">
        Request An Audit
      </button>

      <div className="order-2 lg:w-7/12">
        <div
          className={`${
            open ? "left-0" : "left-[-100%]"
          } absolute lg:contents min-h-full pt-28 top-0 w-full text-white bg-black opacity-[0.98]`}
        >
          <div className="w-5/6 lg:w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-0  lg:items-center lg:justify-between">
            {[
              { name: "Services", data: [] },
              { name: "Pricing", data: null },
              { name: "Our Audits", data: null },
              { name: "Tools", data: [] },
              { name: "Resources", data: [] },
              { name: "Refer-Earn-Secure", data: null },
            ].map((item) => (
              <Link
                key={item.name}
                href="/"
                className="flex justify-between items-center text-2xl lg:text-base lg:font-medium gap-0.5"
              >
                <p>{item.name}</p>
                {item.data && <ChevronDown className="w-5 h-5" />}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button className="lg:hidden z-20 order-3" onClick={() => onToggle()}>
        {open ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MenuIcon className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
}