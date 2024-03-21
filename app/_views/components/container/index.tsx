import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className="max-w-[1248px] mx-auto px-[24px]">{children}</div>;
};

export default Container;
