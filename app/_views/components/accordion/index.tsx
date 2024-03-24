import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface IProps {
  title: string;
  answer: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Accordion: React.FC<IProps> = ({ title, answer, open, setOpen }) => {
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col p-8 border-black-divider border rounded-[8px] bg-card-color1 group">
      <button onClick={handleClick} className="flex justify-between w-full">
        <h3 className="font-semibold text-left">{title}</h3>
        <AiOutlinePlusCircle fontSize={24} className={`group-hover:text-blue-brand1 cursor-pointer transition ${open ? " rotate-45" : ""}  ${open ? " text-blue-brand1" : ""}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-base mt-4 text-blue-brand3 whitespace-pre-wrap">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
