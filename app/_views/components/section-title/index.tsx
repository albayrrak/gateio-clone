import React, { HTMLAttributes } from "react";

interface IProps {
  title: string;
}
const SectionTitle: React.FC<IProps> = ({ title }) => {
  return <span className="lg:text-2xl xl:text-[40px] text-[48px] font-semibold">{title}</span>;
};

export default SectionTitle;
