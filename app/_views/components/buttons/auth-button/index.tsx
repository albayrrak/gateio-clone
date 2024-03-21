import React from "react";

interface AuthButtonProps {
  title: string;
  action?: () => void;
  buttonType?: "register" | "small";
  buttonBg?: "primary" | "secondary";
}

const AuthButton: React.FC<AuthButtonProps> = ({ title, action, buttonType, buttonBg }) => {
  return (
    <button
      className={
        "flex items-center text-sm px-3 rounded-[4px] font-semibold " +
        (buttonBg === "primary" ? " bg-blue-brand1 text-white " : "") +
        (buttonBg === "secondary" ? "bg-neutral-color1 text-black-primary hover:text-blue-brand1 " : "") +
        (buttonType === "register" ? " bg-blue-brand1 py-[6px] rounded-[5px] text-white " : "") +
        (buttonType === "small" ? "px-4 h-8" : "")
      }
      onClick={action}
    >
      {title}
    </button>
  );
};

export default AuthButton;
