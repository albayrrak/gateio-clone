"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, ChevronDown, PanelBottomClose, Earth, Moon, Hexagon, Search, ChevronLeft, ChevronRight } from "lucide-react";
import AuthButton from "../../components/buttons/auth-button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import HeaderAccordion from "./accordion";
import { BiWorld } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

const Header = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const [scrollBegin, setScrollBegin] = useState(false);
  const [hasScrollEnd, setHasScrollEnd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const headerRef = useRef<HTMLDivElement>(null);

  const isScroll = () => {
    if (headerRef.current && headerRef.current?.scrollWidth > headerRef.current?.offsetWidth) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  };

  const isScrollBegin = () => {
    if (headerRef.current?.scrollLeft === 0) {
      setScrollBegin(true);
    } else {
      setScrollBegin(false);
    }
  };

  const isScrollEnd = () => {
    // console.log("scroll left", headerRef.current?.scrollLeft);
    // console.log("scroll ofset", headerRef.current?.offsetWidth);
    // console.log("scroll widt", headerRef.current?.scrollWidth);

    if (headerRef.current && headerRef.current?.scrollLeft + headerRef.current?.offsetWidth === headerRef.current?.scrollWidth) {
      setHasScrollEnd(true);
    } else {
      setHasScrollEnd(false);
    }
  };
  useEffect(() => {
    isScrollBegin();
    isScroll();
    isScrollEnd();

    window.addEventListener("resize", isScroll);
    headerRef.current?.addEventListener("scroll", isScrollBegin);
    headerRef.current?.addEventListener("scroll", isScrollEnd);

    // Cleanup işlevi: bileşen kaldırıldığında event listener'ı kaldırır
    return () => {
      window.removeEventListener("resize", isScroll);
      headerRef.current?.removeEventListener("scroll", isScrollBegin);
      headerRef.current?.removeEventListener("scroll", isScrollEnd);
    };
  });

  return (
    <header className="bg-black-header flex justify-between items-center py-[10px] px-[24px] h-16 sticky top-0 z-50">
      <div className="header-left">
        <Link href="/" className="flex items-center shrink-0">
          <Image src={require("@/app/_assets/logo.png")} alt="Logo" className="w-[120px]" />
        </Link>

        <div ref={headerRef} className="header-left-menu">
          <div
            className={`${hasScroll && !scrollBegin ? "flex" : "hidden"} lg:hidden absolute top-1/2 -translate-y-1/2 left-[120px] z-10 bg-black-header h-full flex items-center justify-center cursor-pointer hover:text-blue-brand1`}
            onClick={() => {
              if (headerRef.current) {
                headerRef.current.scrollLeft -= 150;
              }
            }}
          >
            <ChevronLeft className="text-white w-8 h-6 hover:text-blue-brand1" />
          </div>
          <div
            className={`${hasScroll && !hasScrollEnd ? "flex" : "hidden"} lg:hidden absolute top-1/2 -translate-y-1/2 -right-[18px] z-10 bg-black-header h-full flex items-center justify-center cursor-pointer hover:text-blue-brand1`}
            onClick={() => {
              if (headerRef.current) {
                headerRef.current.scrollLeft += 150;
              }
            }}
          >
            <ChevronRight className="text-white w-8 h-6 hover:text-blue-brand1" />
          </div>

          <div className="md:hidden flex items-center border-blue-brand1 border rounded-sm shrink-0">
            <Link href="/" className="font-sans text-[12px] h-full text-white bg-blue-brand1 py-[5px] px-[12px] font-semibold rounded-r-[4px]">
              Alım-Satım
            </Link>
            <Link href="/" className="font-sans text-[12px] text-white bg-blue-brand2 py-[5px] px-[12px] font-semibold ">
              Web3
            </Link>
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <Sheet className="text-white w-5 h-5 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kripto al</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Piyasa</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Al-Sat</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Türev ürün</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Finans</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Botlar</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kopyala</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Kurumsal</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Anlar</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Yazıt</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
          <div className="lg:hidden flex items-center group mx-2 cursor-pointer shrink-0">
            <h6 className="text-sm text-white font-medium group-hover:text-blue-brand1">Ödül Merkezi</h6>
            <ChevronDown className="text-white w-3 h-3 ml-1 transition group-hover:text-blue-brand1 group-hover:rotate-180" />
          </div>
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="flex items-center gap-2 mr-2">
          <div className="sm:block hidden">
            <AuthButton title="Giriş Yap" buttonType="register" />
          </div>
          <div className="sm:hidden">
            <AuthButton title="Giriş Yap" buttonType="header" />
          </div>
          <div className="sm:hidden">
            <AuthButton title="Hesap Oluştur" buttonType="register" />
          </div>
        </div>
        <div className="px-2">
          <PanelBottomClose className="text-white hover:text-blue-brand1 cursor-pointer" />
        </div>
        <div className="lg:hidden flex items-center">
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
        <div className="lg:m-2 lg:pl-0 flex items-center pl-2 group cursor-pointer">
          <Search className="text-white group-hover:text-blue-brand1" />
        </div>
        <div className="lg:flex hidden items-center justify-center ml-2 cursor-pointer" onClick={() => setMenu(true)}>
          <GiHamburgerMenu className="text-2xl text-white hover:text-blue-brand1" />
        </div>
      </div>
      <div className={`${menu ? "opacity-100 z-50" : "-z-10 opacity-0 pointer-events-none"} fixed top-0 left-0 h-screen w-full bg-neutral-900/90`}>
        <div className={`${isChecked ? "bg-[#1b1d22]" : "bg-white"} ${menu ? "translate-x-[0]" : "translate-x-[414px]"} flex flex-col absolute right-0  w-[414px] h-full transition-all`}>
          <div className="flex items-center justify-between px-[22px] py-4">
            <Link href={"/"} className="w-[122px] h-[28px] ">
              <Image
                src={`${
                  isChecked
                    ? "https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/open_sesame_night.47e06968.png?w=750&q=75"
                    : "https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/open_sesame_light.6adbc544.png?w=640&q=75"
                }`}
                alt=""
                width={600}
                height={600}
                className="w-full block"
              />
            </Link>
            <IoCloseOutline className={`${isChecked ? "text-white" : ""} text-3xl cursor-pointer`} onClick={() => setMenu(false)} />
          </div>
          <HeaderAccordion isChecked={isChecked} title="Dil" icon={<BiWorld className="text-blue-brand1 mr-2" />}>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              简体中文
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              English
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Tiếng Việt
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Español
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Русский язык
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Français
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Français
            </Link>
            <Link href={"/"} className={`${isChecked ? "text-white" : ""}block text-sm font-medium py-3 px-[33px]`}>
              Türkçe
            </Link>
          </HeaderAccordion>
          <HeaderAccordion isChecked={isChecked} title="Döviz Kuru" icon={<BsCurrencyExchange className="text-blue-brand1 mr-2" />}>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              简体中文
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              English
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Tiếng Việt
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Español
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Русский язык
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Français
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Français
            </Link>
            <Link href={"/"} className="block text-sm font-medium py-3 px-[33px]">
              Türkçe
            </Link>
          </HeaderAccordion>
          <div className="flex justify-between items-center py-3 px-4 cursor-pointer w-full">
            <div className="flex items-center">
              <FaMoon className="text-blue-brand1 mr-2" />
              <div className={`${isChecked ? "text-white font-bold" : ""} text-sm`}>Theme</div>
            </div>
            <label htmlFor="theme" className={`${isChecked ? "bg-blue-brand1" : "bg-[#ebedf2]"} relative flex items-center h-6 w-[48px] rounded-[12px] cursor-pointer transition-all`}>
              <div className={`${isChecked ? "bg-[#14141a] right-[2px]" : "bg-white left-[2px]"} w-5 h-5 rounded-full shadow-sm absolute flex items-center justify-center transition-all`}>
                <HiSun className={`${!isChecked ? "block" : " hidden"} text-blue-brand1`} />
                <FaMoon className={`${isChecked ? "block" : " hidden"} text-blue-brand1`} />
              </div>
              <input type="checkbox" className="relative appearance-none" checked name="theme" onChange={handleChange} id="theme" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
