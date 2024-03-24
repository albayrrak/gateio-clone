"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface IProps {
  title: string;
  data: {
    href: string;
    name: string;
  }[];
}

const FooterAccordion: React.FC<IProps> = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:flex flex-col hidden" onClick={() => setOpen((prev) => !prev)}>
      <button className="flex justify-between items-center py-3  text-[#fafafa] font-medium cursor-pointer">
        {title}
        <ChevronDown fontSize={24} className={` cursor-pointer transition ${open ? " rotate-180" : ""}  text-blue-brand3`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="flex flex-col gap-3 py-1 overflow-hidden">
          {data.map((x, i) => {
            return (
              <Link key={i} href={x.href} className="text-sm hover:text-blue-brand1 text-blue-brand3">
                {x.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterAccordion;
