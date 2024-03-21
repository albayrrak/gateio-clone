"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, ChevronDown, PanelBottomClose, Earth, Moon, Hexagon, Search } from "lucide-react";
import AuthButton from "../../components/buttons/auth-button";

const Header = () => {
  return (
    <header className="bg-black-header flex justify-between items-center py-[10px] px-[24px] h-16 sticky top-0 z-50">
      <div className="flex justify-start mr-[52px]  h-full">
        <Link href="/" className="flex items-center shrink-0">
          <Image src={require("@/app/_assets/logo.png")} alt="Logo" className="w-[120px]" />
        </Link>
        <div className="flex items-center ml-4 overflow-auto no-scrollbar">
          <div className="flex items-center border-blue-brand1 border rounded-sm shrink-0">
            <Link href="/" className="font-sans text-[12px] h-full text-white bg-blue-brand1 py-[5px] px-[12px] font-semibold rounded-r-[4px]">
              Alım-Satım
            </Link>
            <Link href="/" className="font-sans text-[12px] text-white bg-blue-brand2 py-[5px] px-[12px] font-semibold ">
              Web3
            </Link>
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <Sheet className="text-white w-5 h-5 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kripto al</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Piyasa</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Al-Sat</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Türev ürün</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Finans</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Botlar</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kopyala</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kurumsal</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Anlar</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Yazıt</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Ödül Merkezi</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 mr-2">
          <AuthButton title="Giriş Yap" />
          <AuthButton title="Hesap Oluştur" buttonType="register" />
        </div>
        <div className="px-2">
          <PanelBottomClose className="text-white hover:text-blue-brand1 cursor-pointer" />
        </div>
        <div className="flex items-center">
          <div className="block h-3 w-[1px] bg-black-line mx-2"></div>
          <div className="h-full flex items-center px-2 cursor-pointer group">
            <Earth className="text-white group-hover:text-blue-brand1" />
          </div>
          <div className="h-full flex items-center px-2 cursor-pointer group">
            <Moon fill="white group:text-blue-brand1" className="text-white group-hover:text-blue-brand1" />
          </div>
          <div className="h-full flex items-center px-2 cursor-pointer group">
            <Hexagon className="text-white group-hover:text-blue-brand1" />
          </div>
        </div>
        <div className="flex items-center pl-2 group cursor-pointer">
          <Search className="text-white group-hover:text-blue-brand1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
