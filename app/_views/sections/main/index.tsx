"use client";
import { Gift } from "lucide-react";
import React, { useRef, useState } from "react";
import MainForm from "./components/form";
import MainVolume from "./components/main-volume";
import VolumeData from "./data/volume.json";

import MainSlider from "./components/main-slider";
import Container from "../../components/container";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Main = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="flex items-center justify-between">
          <div className="lg:pt-8 lg:w-full xl:w-[340px] xl:pt-[145px] pt-[120px] w-[565px] min-h-[100px]  flex flex-col items-start">
            <h1 className="2xl:text-[48px] lg:text-[28px] font-bold mb-2 w-full text-[52px]">Kriptoya Açılan Kapı</h1>
            <p className="2xl:text-base text-[20px] break-words font-medium">Güvenli, hızlı ve kolay bir şekilde 1.700&apos;den fazla kripto paraya yatırım yapın</p>
            <div className="lg:my-4 my-[26px] text-blue-brand3 flex items-center justify-start w-full">
              <Gift size={25} />
              <span className="ml-2 2xl:text-base text-[20px]">Kaydolun ve 6666$&apos;a varan hoş geldin ödülleri kazanın</span>
            </div>
            <MainForm />
            <div className="lg:flex-nowrap xl:mt-5 xl:flex-wrap w-full mt-20 flex items-center justify-between gap-[17px]">
              {VolumeData.map((x) => (
                <MainVolume key={x.id} title={x.title} subTitle={x.subTitle} titleIcon={x.titleIcon} />
              ))}
            </div>
          </div>
          <MainSlider />
        </div>
        {/* TODO AÇILACAK */}
        {/* <div className="flex items-center px-6 bg-card-color1 border border-black-divider rounded-[8px] h-14 ">
          <div className="flex items-center w-full">
            <BiMessageRoundedDots fontSize={24} />
            <Swiper
              modules={[Autoplay]}
              className="h-14 w-[530px]"
              slidesPerView={1}
              direction="vertical"
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pl-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pl-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pl-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="h-5 w-1 bg-black-divider mx-4 shrink-0"></div>
          <div className="flex items-center w-full">
            <Swiper
              modules={[Autoplay]}
              className="h-14 w-[530px]"
              slidesPerView={1}
              direction="vertical"
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pr-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pr-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
              <SwiperSlide className="h-full w-full">
                <Link href="/" className="flex items-center h-14 text-[14px] text-black-secondary  text-nowrap text-ellipsis overflow-hidden pr-4 hover:text-blue-brand1">
                  Gate.io Hosts Ramadan KOL Meet-up Dinner in Turkey, Enhancing Crypto Community Relations
                </Link>
              </SwiperSlide>
            </Swiper>
            <GiHamburgerMenu fontSize={24} className="ml-4" />
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Main;
