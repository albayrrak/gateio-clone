"use client";
import AuthButton from "@/app/_views/components/buttons/auth-button";
import { StickyNote } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CryptoCard = () => {
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const videoRef = useRef<any>();
  useEffect(() => {
    if (autoPlay) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [autoPlay]);

  return (
    <div
      className="md:flex-col lg:flex-row lg:w-full flex flex-col bg-card-color1 border rounded-[8px] border-black-divider cursor-pointer transition hover:bg-white shadow-md group"
      onMouseEnter={() => setAutoPlay(true)}
      onMouseLeave={() => setAutoPlay(false)}
    >
      <video ref={videoRef} muted loop className="lg:w-[304px] rounded-[8px] w-full">
        <source src="https://gimg2.gateimg.com/crypto-life/169138779046827155post_light.mp4" />
      </video>
      <div className="lg:justify-center lg:flex-1 flex flex-col p-6">
        <div className=" flex justify-between items-center">
          <div className="flex items-center">
            <StickyNote className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-semibold">Gate Post</h3>
          </div>
          <div className="xl:group-hover:hidden hidden group-hover:flex">
            <AuthButton title="Go" buttonBg="primary" buttonType="small" />
          </div>
        </div>
        <p className="text-sm text-blue-brand3 mt-2">Kripto Hayatınızı Yatırımcılarla Paylaşın.</p>

        <div className="lg:opacity-100 mt-6 xl:flex opacity-0 group-hover:opacity-100 hidden">
          <AuthButton title="İlerle" buttonBg="primary" buttonType="small" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
