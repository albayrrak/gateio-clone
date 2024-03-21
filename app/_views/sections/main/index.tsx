"use client";
import { Gift } from "lucide-react";
import React, { useRef, useState } from "react";
import MainForm from "./components/form";
import MainVolume from "./components/main-volume";
import VolumeData from "./data/volume.json";

import MainSlider from "./components/main-slider";

const Main = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="pt-[120px] w-[565px] min-h-[100px]  flex flex-col items-center">
        <h1 className="text-title font-bold leading-title mb-2 w-full font-arial">Kriptoya Açılan Kapı</h1>
        <p className="text-description break-words font-arial font-medium">Güvenli, hızlı ve kolay bir şekilde 1.700’den fazla kripto paraya yatırım yapın</p>
        <div className="my-[26px] text-blue-brand3 flex items-center justify-start w-full">
          <Gift size={16} />
          <span className="ml-2 text-sm">Kaydolun ve 6666$'a varan hoş geldin ödülleri kazanın</span>
        </div>
        <MainForm />
        <div className="w-full mt-20 flex items-center justify-between gap-[17px]">
          {VolumeData.map((x) => (
            <MainVolume key={x.id} title={x.title} subTitle={x.subTitle} titleIcon={x.titleIcon} />
          ))}
        </div>
      </div>
      <MainSlider />
    </div>
  );
};

export default Main;
