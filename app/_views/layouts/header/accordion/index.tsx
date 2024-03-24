"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface IProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isChecked: boolean;
}

const HeaderAccordion: React.FC<IProps> = ({ title, icon, children, isChecked }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${isChecked ? "hover:bg-[#20232b]" : "hover:bg-[#f5f5f7]"} flex-col flex cursor-pointer`} onClick={() => setOpen((prev) => !prev)}>
      <button className="flex justify-between items-center py-3 px-4 cursor-pointer">
        <div className="flex items-center">
          {icon}
          <div className={` ${isChecked ? "text-white font-bold" : ""} text-sm`}>{title}</div>
        </div>
        <ChevronDown fontSize={24} className={`${isChecked ? "text-white" : ""} cursor-pointer transition ${open ? " rotate-180" : ""}`} />
      </button>
      <div className={`${isChecked ? "text-white text-bold" : "text-slate-600 "} grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="flex flex-col py-[10px] px-[25px] overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default HeaderAccordion;
