"use client";
import React, { useRef } from "react";
import Container from "../../components/container";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Mail, Send, Youtube } from "lucide-react";

const Community = () => {
  const swiperRef = useRef<any>(null); // Swiper bileşenine referans oluştur

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="w-full mt-4">
      <Container>
        <div className="flex flex-wrap justify-between items-center rounded-[8px] p-10 bg-card-color1 border border-black-divider">
          <div className="relative">
            <Swiper ref={swiperRef} className="w-[730px]" slidesPerView={2} spaceBetween={24} loop>
              <SwiperSlide>
                <div className="h-[328px] min-h-full bg-white flex flex-col items-center py-9 px-6 rounded-[8px]">
                  <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center">
                    <Image src={"https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/user-pto-01.c5d149d9.webp"} alt="" width={600} height={600} />
                  </div>
                  <div className="text-base mt-4 mb-6 text-blue-brand3">Binner, Google Kullanıcısı</div>
                  <p>🔥🔥🔥 Gate.io şimdiye kadar kullandığım en iyi borsa uygulaması. Arayüzün kullanımı basit ve müşteri hizmetleri hızlı. Sıklıkla ilginç etkinlikler ve faydalar sunulmaktadır!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[328px] min-h-full bg-white flex flex-col items-center py-9 px-6 rounded-[8px]">
                  <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center">
                    <Image src={"https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/user-pto-01.c5d149d9.webp"} alt="" width={600} height={600} />
                  </div>
                  <div className="text-base mt-4 mb-6 text-blue-brand3">Binner, Google Kullanıcısı</div>
                  <p>🔥🔥🔥 Gate.io şimdiye kadar kullandığım en iyi borsa uygulaması. Arayüzün kullanımı basit ve müşteri hizmetleri hızlı. Sıklıkla ilginç etkinlikler ve faydalar sunulmaktadır!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[328px] min-h-full bg-white flex flex-col items-center py-9 px-6 rounded-[8px]">
                  <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center">
                    <Image src={"https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/user-pto-01.c5d149d9.webp"} alt="" width={600} height={600} />
                  </div>
                  <div className="text-base mt-4 mb-6 text-blue-brand3">Binner, Google Kullanıcısı</div>
                  <p>🔥🔥🔥 Gate.io şimdiye kadar kullandığım en iyi borsa uygulaması. Arayüzün kullanımı basit ve müşteri hizmetleri hızlı. Sıklıkla ilginç etkinlikler ve faydalar sunulmaktadır!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-[328px] min-h-full bg-white flex flex-col items-center py-9 px-6 rounded-[8px]">
                  <div className="w-20 h-20 overflow-hidden rounded-full flex items-center justify-center">
                    <Image src={"https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/user-pto-01.c5d149d9.webp"} alt="" width={600} height={600} />
                  </div>
                  <div className="text-base mt-4 mb-6 text-blue-brand3">Binner, Google Kullanıcısı</div>
                  <p>🔥🔥🔥 Gate.io şimdiye kadar kullandığım en iyi borsa uygulaması. Arayüzün kullanımı basit ve müşteri hizmetleri hızlı. Sıklıkla ilginç etkinlikler ve faydalar sunulmaktadır!</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute top-[50%] -right-4 swiper-button-next z-10 ">
              <button className="bg-[#f2f3f7] w-8 h-8 flex items-center justify-center group rounded-[4px]" onClick={handleNextSlide}>
                <ChevronRight className="group-hover:text-blue-brand1" />
              </button>
            </div>
            <div className="absolute top-[50%] -left-4 swiper-button-prev z-10">
              <button className="bg-[#f2f3f7] w-8 h-8 flex items-center justify-center group rounded-[4px]" onClick={handlePrevSlide}>
                <ChevronLeft className="group-hover:text-blue-brand1" />
              </button>
            </div>
          </div>
          <div className="w-[320px]  h-full">
            <div className="w-full relative">
              <Image src={"https://static.airpackapp.com/fe-next/homepage/prod/_next/static/media/share-pic.263fe401.webp"} alt="" width={600} height={600} />
            </div>
            <div className="flex mt-10 flex-col">
              <div className="flex justify-between">
                <Mail className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
                <Send className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
                <Facebook className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
                <Youtube className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
                <Instagram className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
                <Instagram className="text-[#b8bfcc] hover:text-blue-brand1 text-[24px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
