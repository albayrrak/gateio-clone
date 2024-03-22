import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";
import StoreButton from "../store-button";
import { GrAndroid } from "react-icons/gr";
import { AiFillApi, AiFillCloseCircle } from "react-icons/ai";

const Store = () => {
  return (
    <div className="grid-qr">
      <StoreButton title="App Store" icon={<FaApple fontSize={32} />} href="/" />
      <StoreButton title="Android" icon={<GrAndroid fontSize={32} />} href="/" />
      <StoreButton title="Google Play" icon={<FaGooglePlay fontSize={32} />} href="/" />
      <StoreButton title="Mac OS" icon={<AiFillCloseCircle fontSize={32} />} href="/" />
      <StoreButton title="Windows" icon={<FaWindows fontSize={32} />} href="/" />
      <StoreButton title="API" icon={<AiFillApi fontSize={32} />} href="/" />
    </div>
  );
};

export default Store;
