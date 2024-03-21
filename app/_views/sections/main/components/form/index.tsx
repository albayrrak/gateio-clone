import AuthButton from "@/app/_views/components/buttons/auth-button";
import SocialButton from "@/app/_views/components/buttons/social-button";
import React from "react";

const MainForm = () => {
  return (
    <form className="flex items-center flex-wrap w-full gap-3">
      <div className="flex rounded-[4px] border-[1px] border-white bg-[#ebedf2] hover:border-[1px] hover:border-blue-brand1 group">
        <input type="text" className="h-12 px-3 text-black-primary text-sm rounded-[4px] bg-transparent outline-none group-hover:bg-white" placeholder="E-posta veya Telefon" />
        <AuthButton title="Hesap Oluştur" buttonType="register" />
      </div>
      <div></div>
      <div className="flex gap-3">
        <SocialButton icon={require("@/app/_assets/Google__G__logo.svg.png")} action={() => console.log("google")} />
        <SocialButton icon={require("@/app/_assets/Apple_logo_black.svg.png")} action={() => console.log("google")} />
        <SocialButton icon={require("@/app/_assets/MetaMask_Fox.svg.png")} action={() => console.log("google")} />
      </div>
    </form>
  );
};

export default MainForm;
