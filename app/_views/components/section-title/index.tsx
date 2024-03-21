import { HeadingStyle } from "@mantine/core";
import React, { HTMLAttributes } from "react";

interface IProps {
  title: string;
}
const SectionTitle: React.FC<IProps> = ({ title }) => {
  return <span className=" text-[40px] font-semibold">{title}</span>;
};

export default SectionTitle;
