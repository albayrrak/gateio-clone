import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  titleIcon?: string;
  subTitle: string;
}
const MainVolume: React.FC<IProps> = ({ title, titleIcon, subTitle }) => {
  return (
    <div className="lg:w-full xl:w-[calc(100%/2-17px)] flex flex-col items-start mb-2">
      <Link href="/" className="flex items-end group">
        <span className="lg:text-2xl font-arial text-[32px] leading-none font-semibold group-hover:text-blue-brand1">{title}</span>
        {subTitle && <span className="text-sm ml-[2px] font-semibold group-hover:text-blue-brand1">{titleIcon}</span>}
      </Link>
      <p className="text-[12px] text-blue-brand3">{subTitle}</p>
    </div>
  );
};

export default MainVolume;
