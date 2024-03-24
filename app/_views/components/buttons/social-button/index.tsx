import Image from "next/image";
import React from "react";

interface IProps {
  action: () => void;
  icon: string;
}
const SocialButton: React.FC<IProps> = ({ action, icon }) => {
  return (
    <button className="xl:w-full w-[52px] h-[52px] rounded-[4px] bg-neutral-color1 flex items-center justify-center">
      <Image src={icon} alt="icon" className="w-5 h-auto" />
    </button>
  );
};

export default SocialButton;
