import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  subTitle: string;
  image: string;
  percentage: string;
}
const CryptoDropDown: React.FC<IProps> = ({ title, subTitle, image, percentage }) => {
  return (
    <div className="flex justify-between items-center hover:bg-neutral-color1 px-2 py-2">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center">
          <Image src={image} alt="" width={"50"} height={"450"} className="w-full" />
        </div>
        <div>
          <h6>{title}</h6>
          <span className="text-neutral-color4 text-xs">{subTitle}</span>
        </div>
      </div>
      <div className={percentage.startsWith("+") ? "text-green-color2 text-xs" : percentage.startsWith("-") ? "text-red-color1 text-xs" : "text-neutral-color4 text-xs"}>{percentage}</div>
    </div>
  );
};

export default CryptoDropDown;
