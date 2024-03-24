"use client";
import React, { useEffect, useState } from "react";
import Container from "../../components/container";
import SectionTitle from "../../components/section-title";
import AuthButton from "../../components/buttons/auth-button";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import CryptoDropDown from "./crypto-dropdown";
import Link from "next/link";
import CoinData from "./data/crypto-data/data.json";
import Table from "./table";
import IconButton from "../../components/buttons/icon-button";
import { ChevronLeft, ChevronRight, Navigation } from "lucide-react";
import TableButton from "../../components/buttons/table-button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import List from "./components/list";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import Search from "./components/search";

const CryptoToday = () => {
  const [mounted, setMounted] = useState(false);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState<string>("spot");
  const [highlightsActive, setHighlightsActive] = useState("Öne Çıkanlar");
  const [searchActive, setSearchActive] = useState(false);

  const buttonData = [
    {
      id: 1,
      title: "Spot",
    },
    {
      id: 2,
      title: "Vadeli",
    },
    {
      id: 3,
      title: "Kazan",
    },
    {
      id: 4,
      title: "Borç",
    },
    {
      id: 5,
      title: "Yeni",
    },
    {
      id: 6,
      title: "Web3",
    },
    {
      id: 7,
      title: "Puan Tablosu",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full">
      <Container>
        <div className="md:flex-col md:items-start flex justify-between items-center mt-20 mb-8 w-full gap-10">
          <div className="flex-2">
            <SectionTitle title="Kripto Piyasalarında Bugün" />
          </div>
          <div className="flex text-sm gap-3 font-semibold relative flex-1 ">
            <div className="relative w-full group">
              <div className="md:hidden absolute top-0 right-0 h-full px-4 bg-neutral-color1 rounded-[4px] text-[20px] flex items-center group-hover:hidden ">
                <FaSearch fontSize={12} />
              </div>
              <div className="md:hidden group-hover:w-full group-hover:border group-hover:rounded-[4px] group-hover:border-blue-brand1 absolute w-0 h-full right-0 transition-all flex items-center px-4">
                <FaSearch fontSize={12} className={focus ? "text-blue-brand1" : ""} />
                <input type="text" className="h-8 w-full bg-transparent transition-all  px-4 text-xs font-normal text-blue-brand3 focus:outline-none" placeholder="Arama" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
              </div>
            </div>
            {focus && (
              <div className="absolute z-10 bg-white top-8 h-[250px] w-full py-1 px-2 shadow-sm overflow-y-auto scroll-bar">
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="-5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="-5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="-5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
                <CryptoDropDown title="GT" image="https://www.gate.io/images/coin_icon/64/gt.png?w=32&q=75" subTitle="GateToken" percentage="+5.58%" />
              </div>
            )}
            <div className="md:flex px-4 bg-neutral-color1 rounded-[4px] text-[20px] hidden items-center cursor-pointer" onClick={() => setSearchActive(true)}>
              <FaSearch fontSize={12} />
            </div>

            <div className="ml-auto shrink-0">
              <AuthButton title="Tüm Kripto Fiyatları" buttonBg="secondary" buttonType="small" />
            </div>
          </div>
        </div>
        <div className=" relative flex gap-6 justify-between items-stretch min-h-[582px]">
          <div className="lg:hidden flex flex-col flex-[2] py-6 border-black-divider border rounded-[8px]">
            <div className=" relative w-full">
              <div className="flex px-6 relative w-full rounded-[4px] mb-3">
                {buttonData.map((x, i) => (
                  <TableButton key={x.id} title={x.title} active={active} setActive={setActive} />
                ))}
              </div>
            </div>
            <Table />
            <div className="mt-2 flex gap-4 justify-center">
              <IconButton onClick={() => {}}>
                <ChevronLeft className="text-black-primary group-hover:text-blue-brand1" />
              </IconButton>
              <IconButton onClick={() => {}}>
                <ChevronRight className="text-black-primary group-hover:text-blue-brand1" />
              </IconButton>
            </div>
          </div>
          <div className="lg:hidden flex flex-col flex-[1] py-6 border-black-divider border rounded-[8px]">
            <div className="relative w-full overflow-x-auto">
              <div className="px-6 mb-6 rounded-[4px] flex">
                <TableButton title="Öne Çıkanlar" active={highlightsActive} setActive={setHighlightsActive} />
                <TableButton title="En Fazla Kazananlar" active={highlightsActive} setActive={setHighlightsActive} />
              </div>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>
            <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
              <div className="flex items-center flex-[2]">
                <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                  <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-base">Token</div>
                  <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                </div>
              </div>
              <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
              <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Spot"}
              </Link>
              <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                {"Perpetual Vadeli İşlem"}
              </Link>
            </div>

            <div className="mt-2 flex gap-4 justify-center">
              <IconButton onClick={() => {}}>
                <ChevronLeft className="text-black-primary group-hover:text-blue-brand1" />
              </IconButton>
              <IconButton onClick={() => {}}>
                <ChevronRight className="text-black-primary group-hover:text-blue-brand1" />
              </IconButton>
            </div>
          </div>
          <div className="lg:block hidden w-full">
            <Swiper modules={[Pagination]} pagination={{ clickable: true, el: ".swiper-pagination", type: "bullets" }}>
              <SwiperSlide>
                <div className="lg:w-full flex flex-col flex-[2] py-6 border-black-divider border rounded-[8px]">
                  <div className=" relative w-full overflow-x-auto">
                    <div className="flex px-6 relative w-full rounded-[4px] mb-3">
                      {buttonData.map((x, i) => (
                        <TableButton key={x.id} title={x.title} active={active} setActive={setActive} />
                      ))}
                    </div>
                  </div>
                  <Table />
                  <div className="mt-2 flex gap-4 justify-center">
                    <IconButton onClick={() => {}}>
                      <ChevronLeft className="text-black-primary group-hover:text-blue-brand1" />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <ChevronRight className="text-black-primary group-hover:text-blue-brand1" />
                    </IconButton>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:w-full flex flex-col flex-[1] py-6 border-black-divider border rounded-[8px]">
                  <div className="relative w-full overflow-x-auto">
                    <div className="px-6 mb-6 rounded-[4px] flex">
                      <TableButton title="Öne Çıkanlar" active={highlightsActive} setActive={setHighlightsActive} />
                      <TableButton title="En Fazla Kazananlar" active={highlightsActive} setActive={setHighlightsActive} />
                    </div>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>
                  <div className="px-6 flex items-center gap-1 group hover:shadow-md h-20 cursor-pointer">
                    <div className="flex items-center flex-[2]">
                      <div className="flex items-center justify-center w-[28px] h-[28px] mr-3">
                        <Image src={"https://www.gate.io/images/coin_icon/64/token.png?w=64&q=75"} width={100} height={100} className="w-full" alt="" />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base">Token</div>
                        <div className=" text-blue-brand3 text-[14px]">TokenFi</div>
                      </div>
                    </div>
                    <div className="flex tex-[14px] group-hover:hidden flex-1">$0.1451</div>
                    <div className="flex tex-[14px] text-green-color2 group-hover:hidden flex-1">+29.78%</div>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Spot"}
                    </Link>
                    <Link href={"/"} className="hidden group-hover:flex items-center justify-center h-8 px-4 text-sm text-[#2354e6] hover:text-white font-semibold rounded-[4px] bg-neutral-color1 hover:bg-blue-brand1">
                      {"Perpetual Vadeli İşlem"}
                    </Link>
                  </div>

                  <div className="mt-2 flex gap-4 justify-center">
                    <IconButton onClick={() => {}}>
                      <ChevronLeft className="lg:text-sm text-black-primary group-hover:text-blue-brand1" />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <ChevronRight className="lg:text-sm text-black-primary group-hover:text-blue-brand1" />
                    </IconButton>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination">
              <div className="swiper-pagination-bullet "></div>
            </div>
          </div>
        </div>
      </Container>
      <Search searchActive={searchActive} setSearchActive={setSearchActive} />
    </section>
  );
};

export default CryptoToday;
