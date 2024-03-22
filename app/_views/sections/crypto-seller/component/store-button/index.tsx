import Link from "next/link";
import React from "react";

interface IProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const StoreButton: React.FC<IProps> = ({ href, title, icon }) => {
  return (
    <Link href={href} className="w-[104px] h-[88px] flex flex-col justify-center items-center rounded-[8px] cursor-pointer text-sm hover:bg-card-color1 hover:text-blue-brand1">
      {icon}
      <span className="mt-4">{title}</span>
    </Link>
  );
};

export default StoreButton;
