import React from "react";

interface IProps {
  title: string;
  active: string;
  icon?: React.ReactNode;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const TableButton: React.FC<IProps> = ({ title, active, setActive, icon }) => {
  return (
    <button
      className={`m-1 px-[14px] h-10 text-base ${active === title.toLowerCase() ? "text-blue-brand1" : "text-blue-brand3"} font-semibold border rounded-[4px] ${active === title.toLowerCase() ? "bg-[#dce8fd] " : "bg-transparent"} ${
        active === title.toLowerCase() ? "border-[#dce8fd]" : "border-none"
      } outline-none`}
      onClick={() => setActive(title.toLowerCase())}
    >
      {title}
      {icon && <div className="ml-[7px] flex items-center justify-center">{icon}</div>}
    </button>
  );
};

export default TableButton;
