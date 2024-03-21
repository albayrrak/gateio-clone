import React from "react";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}
const IconButton: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-10 h-10 flex items-center justify-center bg-neutral-color1 rounded-[4px] group">
      {children}
    </button>
  );
};

export default IconButton;
