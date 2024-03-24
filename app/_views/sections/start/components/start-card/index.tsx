"use client";
import AuthButton from "@/app/_views/components/buttons/auth-button";
import React from "react";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
  alternativeButtonText?: string;
  alternativeOnclik?: () => void;
}
const StartCard: React.FC<IProps> = ({ title, description, icon, buttonText, onClick, alternativeButtonText, alternativeOnclik }) => {
  return (
    <div className="border rounded-lg border-black-divider transition hover:shadow-2xl cursor-pointer">
      <div className="md:flex-col md:items-start lg:flex-row lg:items-center flex flex-col px-6 py-8 items-start justify-between">
        <div className="lg:flex-row lg:items-center flex flex-col items-start flex-grow">
          {icon}
          <div className="lg:flex-row lg:mt-0 flex flex-col mt-4 justify-start w-full">
            <div>
              <h3 className="lg:text-xl text-2xl font-semibold">{title}</h3>
              <p className="text-xs text-blue-brand3 mt-2">{description}</p>
            </div>
          </div>
        </div>
        <div className="md:w-full md:mt-3 lg:ml-auto lg:mt-0 mt-4 flex items-center gap-[10px] ">
          <AuthButton title={buttonText} buttonType="small" buttonBg="primary" action={onClick} />
          {alternativeButtonText && <AuthButton title={alternativeButtonText} buttonType="small" buttonBg="primary" action={alternativeOnclik} />}
        </div>
      </div>
    </div>
  );
};

export default StartCard;
